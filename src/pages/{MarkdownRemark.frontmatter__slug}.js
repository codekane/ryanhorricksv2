import React from "react"
import { graphql } from "gatsby"
import { Page, Seo } from "gatsby-theme-portfolio-minimal";
import "../styles/homepage.css";
import "../styles/portfolio.css";
import ImageGallery from 'react-image-gallery';
import NiceWideLayout from './nice-wide-layout';
import { Link } from "gatsby";

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
//  let images = markdownRemark.frontmatter.images
  console.log(data.markdownRemark);
  return(
    <>
      <Seo title="Ryan Horricks -- Portfolio" />
      <Page>
        <NiceWideLayout>
          <div className="portfolio-head">
            <div className="top">
              <Link to="/portfolio">
                <div className="portfolio-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="nocturnal-icon" height="20" width="20"><path d="m8 18-8-8 8-8 1.417 1.417L2.833 10l6.584 6.583Z"/></svg>
                  Portfolio
                </div>
              </Link>
              <h1>{data.markdownRemark.frontmatter.title}</h1>
              <div className="story-pointer">
                <div>Story</div>
                <svg xmlns='http://www.w3.org/2000/svg' className="nocturnal-icon" height='20' width='20'><path d='m10 13.062-5-5L6.062 7 10 10.938 13.938 7 15 8.062Z'/></svg>
              </div>
            </div>
            <div className="bottom">
              <button style={{backgroundColor: "#1e9144"}}>Live Link</button>
              <button style={{backgroundColor: "#cd4b09"}}>GitHub</button>
            </div>
          </div>

          {/* data.markdownRemark.frontmatter.images && data.markdownRemark.frontmatter.images.length > 0 &&
            <ImageGallery items={data.markdownRemark.frontmatter.images} slideDuration={0} />
            */}


          <div className="portfolio-item-content" dangerouslySetInnerHTML={{ __html: html }} />
        </NiceWideLayout>
      </Page>
    </>
  )
}

export const pageQuery = graphql`
            query($id: String!) {
              markdownRemark(id: { eq: $id }) {
                html
                id
                frontmatter {
                  date(formatString: "MMMM DD, YYYY")
                  slug
                  title
                  images {
                    original {
                      childImageSharp {
                        fluid(maxWidth: 2400) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                    thumbnail {
                      childImageSharp {
                        fluid(maxWidth: 250) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                  published
                }
              }
            }
            `
