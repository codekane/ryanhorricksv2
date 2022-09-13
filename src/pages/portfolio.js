import React from "react";
import { graphql } from "gatsby"
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";
import "../styles/homepage.css";
import { LeftSideHero } from "./index";


function Project(props) {
  console.log(props);
  return(
    <>
      <a href={props.project.slug}>
        <div className="project-slide">
          <div className="slide-image-container">
            <img src={props.project.thumbnail} />
          </div>
          <div className="slide-text">
            <span className="slide-title">{props.project.title}</span>
            <span className="slide-excerpt">{props.project.excerpt}</span>
          </div>

        </div>
      </a>
    </>
      )
      }

      export default function PortfolioPage( { data } ) {
        const projects = data.allMarkdownRemark.nodes;
        return(
          <>
            <Seo title="Ryan Horricks -- Portfolio" />
            <Page>
              <div className="welcome-header">
                <LeftSideHero />
                <div className="right">
                  <div className="intro-container">
                    <div className="welcome-message">
                      <h1>Portfolio</h1>
                    </div>
                  </div>

                  {projects.map((item, index) => {

                    console.log(projects[index].frontmatter);
                    return <Project project={projects[index].frontmatter} />
                  }
                  )}


                  <ProjectsSection sectionId="features" heading="Built-in Features" />

                  <h2>Hello World</h2>
                </div>
              </div>
            </Page>
          </>  )
      }

      export const pageQuery = graphql`
      query {
        allMarkdownRemark(filter: {frontmatter: {type: {eq: "project"}}}
                          sort: {fields: frontmatter___date, order: DESC}
        ) {
          nodes {
            frontmatter {
              title
              thumbnail
              slug
              excerpt
              date
            }
      }
      }
      }

      `
