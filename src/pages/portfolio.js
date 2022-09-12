import React from "react";
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


function Project() {
  return(
  <>
    <div className="project-slide">
      <div className="slide-image-container">
        <img src={"/profile.jpg"} />
      </div>

    </div>
  </>
  )
}

export default function PortfolioPage() {
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

            <Project />
            <Project />
            <Project />

        <ProjectsSection sectionId="features" heading="Built-in Features" />

            <h2>Hello World</h2>
          </div>
        </div>
      </Page>
    </>  )
}
