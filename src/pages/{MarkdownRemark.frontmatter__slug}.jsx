import React from 'react';
import { graphql, Link } from 'gatsby';
import { Page, Seo } from 'gatsby-theme-portfolio-minimal';
import '../styles/homepage.css';
import '../styles/portfolio-single.css';
import ImageGallery from 'react-image-gallery';
import NiceWideLayout from '../templates/nice-wide-layout';

function PPSVG() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 lg:w-7 lg:h-7" height="24px" width="24px" viewBox="0 0 20 20">
      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
    </svg>
  );
}

function PortfolioProjectLiveURL(props) {
  const { url } = props;
  return (
    <a aria-label="Project Live URL" className="portfolio-icon" href={url} target="_blank" rel="noreferrer"><PPSVG /></a>
  );
}

function PortfolioProjectStack(props) {
  const { stack } = props;
  const stacked = () => (stack.map((tech) => <span>{tech}</span>));
  return (
    <>
      {stacked()}
    </>
  );
}

function GithubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" style={{ fill: currentColor, transform: msFilter }} width="24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z" />
    </svg>
  );
}

function PortfolioProjectGithubLinks(props) {
  const { github } = props;
  const allGitHub = () => {
    github.map((git) => (
      <a className="portfolio-icon" key={git.toString()} href={git.url}>
        <GithubIcon />
      </a>
    ));
  };

  return (
    <>
      {allGitHub()}
    </>
  );
}

function PortfolioProjectDate(props) {
  const date = new Date(props.date);
  const year = date.getFullYear();
  const month_int = date.getMonth();
  const month = (int) => {
    const dict = {
      0: 'January',
      1: 'February',
      2: 'March',
      3: 'April',
      4: 'May',
      5: 'June',
      6: 'July',
      7: 'August',
      8: 'September',
      9: 'October',
      10: 'November',
      11: 'December',
    };
    return dict[int];
  };
  return (
    <span>
      {month(month_int)}
      {' '}
      {year}
    </span>
  );
}

function PortfolioProjectImageGallery(props) {
  const { images } = props;
  const processedImages = () => images.map((image) => {
    const newImage = {};
    newImage.original = image.original.childImageSharp.fluid.src;
    newImage.originalWidth = '1920px';
    newImage.originalHeight = '975px';
    newImage.thumbnail = image.thumbnail.childImageSharp.fluid.src;
    newImage.thumbnailWidth = '92.8px';
    newImage.thumbnailHeight = '47.15px';
    newImage.originalAlt = image.alt;
    newImage.thumbnailAlt = image.alt;
    return newImage;
  });
  return (
    <ImageGallery items={processedImages()} slideDuration={0} />
  );
}

function PBB() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
      <path d="m12 20-8-8 8-8 1.425 1.4-5.6 5.6H20v2H7.825l5.6 5.6Z" />
    </svg>
  );
}

function PortfolioBackButton() {
  return (
    <Link className="portfolio-icon" to="/portfolio">
      <PBB />
    </Link>
  );
}

function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const {
    stack, live_url, images, github, date, title, excerpt,
  } = data.markdownRemark.frontmatter;

  return (
    <>
      <Seo title="Ryan Horricks -- Portfolio" />
      <Page>
        <NiceWideLayout>
          <PortfolioProjectImageGallery images={images} />

          <div className="portfolio-info">
            <PortfolioProjectDate date={date} />
            <h1>{title}</h1>
            <p>{excerpt}</p>
            <div className="portfolio-info-bottom bottom">
              <PortfolioProjectStack stack={stack} />
              <div>
                <PortfolioBackButton />
                <PortfolioProjectLiveURL url={live_url} />
                <PortfolioProjectGithubLinks github={github} />
              </div>
            </div>
          </div>
          <div id="portfolio-story" className="portfolio-item-content" dangerouslySetInnerHTML={{ __html: html }} />
        </NiceWideLayout>
      </Page>
    </>
  );
}

const pageQuery = graphql`
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
                }`;
