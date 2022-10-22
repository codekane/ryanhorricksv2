import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { Page, Seo } from 'gatsby-theme-portfolio-minimal';
import '../styles/portfolio.css';
import BigHeadLayout from '../templates/big-head-layout';

function Project(props) {
  const { project } = props;
  const {
    stack, slug, thumbnail, title, excerpt,
  } = project;

  return (
    <a href={slug}>
      <div className="project-slide">
        <div className="image-container">
          <img src={thumbnail && thumbnail.childImageSharp.fluid.src} alt={title} />
        </div>
        <div className="content">
          <div className="header">
            <span className="title">{title}</span>
          </div>
          <span className="slide-excerpt">{excerpt}</span>
        </div>
      </div>
    </a>
  );
}

function getYearsFromProjects(projects) {
  const years = () => {
    projects.map((elem) => {
      let date = new Date(elem.frontmatter.date);
      let year = date.getFullYear();
      if (!years.includes(year)) 
        return year;
  });
  return (years.sort((a, b) => a - b));
}

function YearFilter(props) {
  const { projects, changeYear, currentYear } = props;
  const years = getYearsFromProjects(projects);
  const outputYears = () => years.map((year) => {
    if (currentYear === year) {
      return (
        <span
          key={year.toString()}
          className="current-year"
          onClick={() => changeYear(year)}
        >
          {year}
        </span>
      );
    }
    return (
      <span
        key={year.toString()}
        onClick={() => changeYear(year)}
      >
        {year}
      </span>
    );
  });

  return (
    <div className="portfolio-year-filter">
      {outputYears()}
    </div>
  );
}

function PortfolioPage({ data }) {
  const projects = data.allMarkdownRemark.nodes;
  const defaultYear = Math.max(...getYearsFromProjects(projects));
  const [selectedYear, setSelectedYear] = useState(defaultYear);
  const changeYear = (year) => {
    setSelectedYear(parseInt(year.target.innerText, 10));
  };

  return (
    <>
      <Seo title="Ryan Horricks -- Portfolio" />
      <Page>
        <BigHeadLayout>
          <div className="portfolio-list-content">
            <div className="portfolio-top">
              <div className="intro-container">
                <div className="welcome-message">
                  <h1>Portfolio</h1>
                </div>
              </div>
              <YearFilter projects={projects} changeYear={changeYear} currentYear={selectedYear} />
            </div>

            <div className="projects-container">
              {projects.map((item, index) => {
                const date = new Date(projects[index].frontmatter.date);
                const year = date.getFullYear();

                if (year === selectedYear) {
                  return <Project key={item.toString()} project={projects[index].frontmatter} />;
                } return false;
              })}
            </div>

          </div>
        </BigHeadLayout>
      </Page>
    </>
  );
}

const pageQuery = graphql`
      query {
        allMarkdownRemark(filter: {frontmatter: {type: {eq: "project"}, published: {ne: false}}}
        sort: {fields: frontmatter___date, order: DESC}) {
          nodes {
            frontmatter {
              title
              stack
              thumbnail {
                childImageSharp {
                  fluid(maxWidth: 250) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              slug
              excerpt
              date
            }
          }
        }
      }
      `;
