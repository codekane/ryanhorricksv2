import React from "react"
import { graphql } from "gatsby"
import { Page, Seo } from "gatsby-theme-portfolio-minimal";
import "../styles/homepage.css";
import "../styles/portfolio.css";
import ImageGallery from 'react-image-gallery';
import NiceWideLayout from './nice-wide-layout';
import { Link } from "gatsby";


function StoryPointer() {
  return (

    <a href="#portfolio-story">
      <div className="story-pointer">
        <div>Story</div>
        <svg xmlns='http://www.w3.org/2000/svg' className="nocturnal-icon" height='20' width='20'><path d='m10 13.062-5-5L6.062 7 10 10.938 13.938 7 15 8.062Z'/></svg>
      </div>
    </a>

  )

}

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  let images = markdownRemark.frontmatter.images
  let story = false;
  let live_url = false;
  let github_url = false;

  console.log(frontmatter);

  if (images && images.length > 0 ) {
    images = images.map(image => {
        return {
          original: image.original.childImageSharp.fluid.src,
          thumbnail: image.thumbnail.childImageSharp.fluid.src
        }
    });
  } else { images = null; }

  if (html.length > 0) { story = true; }
  if (frontmatter.live_url && frontmatter.live_url.length > 0) { live_url = frontmatter.live_url; }
  if (frontmatter.github_url && frontmatter.github_url.length > 0) { github_url = frontmatter.github_url; }


  return(
    <>
      <Seo title="Ryan Horricks -- Portfolio" />
      <Page>
        <NiceWideLayout>
          <div className="portfolio-head">
            <div className="top">

              <div className="portfolio-head-left">
                <Link to="/portfolio">
                  <div className="portfolio-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="nocturnal-icon" height="20" width="20"><path d="m8 18-8-8 8-8 1.417 1.417L2.833 10l6.584 6.583Z"/></svg>
                    Portfolio
                  </div>
                </Link>
              </div>

              <div className="portfolio-head-center">
                <h1>{data.markdownRemark.frontmatter.title}</h1>
              </div>

              <div className="portfolio-head-right">
                { story && images && <StoryPointer /> }
              </div>

            </div>
            <div className="bottom">
              { live_url && <a target="_blank" href={live_url}><button style={{backgroundColor: "#1e9144"}}>Live Link</button></a> }
              { github_url && <a target="_blank" href={github_url}><button style={{backgroundColor: "#cd4b09"}}>GitHub</button></a> }
            </div>
          </div>

          { images  && <ImageGallery items={images} slideDuration={0} /> }

          <div id="portfolio-story" className="portfolio-item-content" dangerouslySetInnerHTML={{ __html: html }} />
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
                        fluid(maxWidth: 1080) {
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
                  github_url
                  live_url
                }
              }
            }
            `
