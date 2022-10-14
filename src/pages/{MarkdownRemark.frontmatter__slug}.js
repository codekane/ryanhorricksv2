import React from "react"
import { graphql } from "gatsby"
import { Page, Seo } from "gatsby-theme-portfolio-minimal";
import "../styles/homepage.css";
import "../styles/portfolio-single.css";
import ImageGallery from 'react-image-gallery';
import NiceWideLayout from '../templates/nice-wide-layout';
import { Link } from "gatsby";


function PortfolioProjectLiveURL(props) {
  const live_url = props.url;
  const view_icon = `
  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 lg:w-7 lg:h-7" height="24px" width="24px" viewBox="0 0 20 20">
    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
    <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path>
  </svg>`
  return(
    <>
      {live_url && <a className="portfolio-icon" href={live_url} target="_blank" dangerouslySetInnerHTML={{__html: view_icon}}/>}
    </>
  )
}

function PortfolioProjectStack(props) {
  const stack = props.stack;
  return(
    <>
      {stack &&
      <div className="stack-list">
        {stack && stack.map( (element, index, array) => {
          return <span>{element}</span>
        })
        }</div>
      }
    </>
  )
}

function PortfolioProjectGithubLinks(props) {
  const github = props.github;
  const github_icon = `<svg xmlns="http://www.w3.org/2000/svg" height="24" style="fill: currentColor;transform: ;msFilter:;" width="24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path></svg>`;

  return(
    <>
      {Boolean(github) && github.map( (element, index, array) => {
        console.log(element);
        return <a className="portfolio-icon" key={index} href={element.url} dangerouslySetInnerHTML={{__html: github_icon}}></a>
      })
      }
    </>
  )
}

function PortfolioProjectDate(props) {
  const date = new Date(props.date);
  const year = date.getFullYear();
  const month_int = date.getMonth();
  const month = (int) => {
    let dict = {
      0: "January", 1: "February",  2: "March",
      3: "April",   4: "May",       5: "June",
      6: "July",    7: "August",    8: "September",
      9: "October", 10: "November", 11: "December"
    }
    return dict[int];
  }
  return(
    <>
      <span>{month(month_int)} {year}</span>
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

function PortfolioBackButton() {
  const icon_svg = `<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="m12 20-8-8 8-8 1.425 1.4-5.6 5.6H20v2H7.825l5.6 5.6Z"/></svg>`

  return(
    <Link className="portfolio-icon" to="/portfolio" dangerouslySetInnerHTML={{__html: icon_svg}}></Link>

  )
}

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const stack = data.markdownRemark.frontmatter.stack;
  const live_url = data.markdownRemark.frontmatter.live_url;
  const images = data.markdownRemark.frontmatter.images;
  const github = data.markdownRemark.frontmatter.github;
  const date = data.markdownRemark.frontmatter.date;

  let story = false;

  if (html.length > 0) { story = true; }

  return(
    <>
      <Seo title="Ryan Horricks -- Portfolio" />
      <Page>
        <NiceWideLayout>
          <PortfolioProjectImageGallery images={images} />

          <div className="portfolio-info">
            <PortfolioProjectDate date={date}/>
            <h1>{data.markdownRemark.frontmatter.title}</h1>
            <p>{data.markdownRemark.frontmatter.excerpt}</p>
            <div className="portfolio-info-bottom bottom">
              <PortfolioProjectStack stack={stack}/>
              <div>
                <PortfolioBackButton/>
                {live_url && <PortfolioProjectLiveURL url={live_url}/>}
                <PortfolioProjectGithubLinks github={github} />
              </div>
            </div>
          </div>


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
                      github 
                      live_url
                      stack
                      excerpt
                    }
                  }
                }
                `
