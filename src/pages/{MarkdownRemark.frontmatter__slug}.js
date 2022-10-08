import React from "react"
import { graphql } from "gatsby"
import { Page, Seo } from "gatsby-theme-portfolio-minimal";
import "../styles/homepage.css";
import "../styles/portfolio.css";
import { LeftSideHero } from "./index";
import ImageGallery from 'react-image-gallery';
import NiceWideLayout from './nice-wide-layout';

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  let images = markdownRemark.frontmatter.images
  console.log(data.markdownRemark);
  return(
    <>
      <Seo title="Ryan Horricks -- Portfolio" />
      <Page>
        <NiceWideLayout>
          <h1>{data.markdownRemark.frontmatter.title}</h1>
          {data.markdownRemark.frontmatter.images.length > 0 &&
            <ImageGallery items={data.markdownRemark.frontmatter.images} />
          }


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
                    original
                    thumbnail
                  }
                  published
                }
              }
            }


            `
