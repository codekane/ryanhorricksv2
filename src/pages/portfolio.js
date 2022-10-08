import React, { useState } from "react";
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
import "../styles/portfolio.css";
import { LeftSideHero } from "./index";


function Project(props) {
  return(
    <>
      <a href={props.project.slug}>
        <div className="project-slide">
          <div className="slide-image-container">
            <img src={props.project.thumbnail} />
          </div>
          <div className="slide-text">
            <span className="slide-title">{props.project.title}</span>
            <span className="slide-date">{props.project.date}</span>
            <span className="slide-excerpt">{props.project.excerpt}</span>
          </div>

        </div>
      </a>
    </>
  )
}

function getYearsFromProjects(projects) {
  let years = [];
  for (let i = 0; i < projects.length; i++) {
    let date = new Date(projects[i].frontmatter.date);
    let year = date.getFullYear();
    if (!years.includes(year)) {
      years.push(year);
    }
  }
  years = years.sort(function(a, b) { return a - b; });
  return years;
}

function YearFilter(props) {
  let years = getYearsFromProjects(props.projects);
  console.log(props);
  return(
    <div className="portfolio-year-filter">
      {years.map((item, index) => {
        if (props.currentYear == years[index]) {
          return <span key={index} className="current-year" onClick={event => props.changeYear(event, years[index])}>{years[index]}</span>
        } else {
          return <span key={index} onClick={event => props.changeYear(event, years[index])}>{years[index]}</span>
        }
      }
      )}

    </div>
  )
}
export default function PortfolioPage( { data } ) {
  const projects = data.allMarkdownRemark.nodes;
  let default_year = Math.max(...getYearsFromProjects(projects));
  const [selectedYear, setSelectedYear] = useState(default_year);
  const changeYear = (year) => { year = parseInt(year.target.innerText); setSelectedYear(year); }

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
            <YearFilter projects={projects} changeYear={changeYear} currentYear={selectedYear}/>

            {projects.map((item, index) => {
              let date = new Date(projects[index].frontmatter.date);
              let year = date.getFullYear();

              if (year == selectedYear) {
                return <Project key = {index} project={projects[index].frontmatter} />
              }
            }
            )}


          </div>
        </div>
      </Page>
    </>  )
}

export const pageQuery = graphql`
      query {
        allMarkdownRemark(filter: {frontmatter: {type: {eq: "project"}, published: {ne: false}}}
        sort: {fields: frontmatter___date, order: DESC}) {
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
