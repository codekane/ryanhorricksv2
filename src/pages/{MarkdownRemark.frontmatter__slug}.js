import React from "react"
import { graphql } from "gatsby"
import { Page, Seo } from "gatsby-theme-portfolio-minimal";
import "../styles/homepage.css";
import "../styles/portfolio.css";
import ImageGallery from 'react-image-gallery';
import NiceWideLayout from '../templates/nice-wide-layout';
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

function PortfolioProjectLiveURL(props) {
  const live_url = props.url;
  return(
    <>
      {live_url &&
      <div><span style={{fontWeight: 700}}>Live URL: </span><a href={live_url} target="_blank">{live_url}</a></div>}
    </>
  )
}

function PortfolioProjectStack(props) {
  const stack = props.stack;
  return(
    <>
      {stack &&
      <div>
        <span style={{fontWeight: 700}}>Stack: </span>
        {stack && stack.map( (element, index, array) => {
          console.log(`${element}, ${index}, ${array}`);
          if (index == 0 && array.length == 1) {
            return element;
          } else if (index == 0 && array.length > 1) {
            return `${element}, `;
          } else if (index > 0 && index != array.length -1) {
            return  element + ", ";
          } else if (index > 0 && index == array.length -1) {
            return element;
          }
        })
        }</div>
      }
    </>
  )
}

function PortfolioProjectImageGallery(props) {
  const images = props.images;
  const processedImages = images.map(image => {
    return {
      original: image.original.childImageSharp.fluid.src,
      originalWidth: "1920px",
      originalHeight: "975px",
      thumbnail: image.thumbnail.childImageSharp.fluid.src,
      thumbnailWidth: "92.8px",
      thumbnailHeight: "47.15px",
      originalAlt: image.alt,
      thumbnailAlt: image.alt
    }
  });

  return(
    <>
      {processedImages && <ImageGallery items={processedImages} slideDuration={0} />}
    </>
  )
}

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const stack = data.markdownRemark.frontmatter.stack;
  const live_url = data.markdownRemark.frontmatter.live_url;
  const images = data.markdownRemark.frontmatter.images;

  let story = false;
  //let live_url = false;
  let github_url = false;

  if (html.length > 0) { story = true; }

  //if (frontmatter.live_url && frontmatter.live_url.length > 0) { live_url = frontmatter.live_url; }
  if (frontmatter.github_url && frontmatter.github_url.length > 0) { github_url = frontmatter.github_url; }

  return(
    <>
      <Seo title="Ryan Horricks -- Portfolio" />
      <Page>
        <NiceWideLayout>
          <div className="portfolio-info">
            <div className="portfolio-info-top">
              <div className="portfolio-context-row">
                <Link to="/portfolio">Back to Portfolio</Link>
                <span>September 2022</span>
              </div>
              <h1>{data.markdownRemark.frontmatter.title}</h1>
              <p>{data.markdownRemark.frontmatter.excerpt}</p>
            </div>
            <div className="portfolio-info-bottom">
              <PortfolioProjectStack stack={stack}/>
              <PortfolioProjectLiveURL url={live_url}/>
            </div>

          </div>

          <PortfolioProjectImageGallery images={images} />

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
                            fluid(maxWidth: 2160) {
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
                        alt
                      }
                      published
                      github_url
                      live_url
                      stack
                      excerpt
                    }
                  }
                }
                `
