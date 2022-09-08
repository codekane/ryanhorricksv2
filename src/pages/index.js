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

function Hello(props) {
  return (
    <div className="welcome-header">
      <div className="left">
        <img src={"/profile.jpg"} />
      </div>
      <div className="right">
        <h1>Welcome!</h1>
        <p>My name is Ryan Horricks, and I’m a Full-Stack Developer based out of Edmonton, Alberta with 5 years of experience.</p>
        <p>Currently I’m working Part-Time as a Front End Developer with Advision eCommerce, in addition to working with clients as a Freelancer. I enjoy solving complex problems, making beautiful websites, building cool applications, and dreaming of better ways to live.</p>
        <p>Besides code, I like to climb rocks, go to shows, play guitar, and I’m learning how to write for an audience.</p>

      </div>
    </div>

  )
}

export default function IndexPage() {
  return (
    <>
      <Seo title="Ryan Horricks" />
      <Page>
        <Hello />
        <HeroSection sectionId="hero" />
        <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium']} />
        <AboutSection sectionId="about" heading="About Portfolio Minimal" />
        <InterestsSection sectionId="details" heading="Details" />
        <ProjectsSection sectionId="features" heading="Built-in Features" />
        <ContactSection sectionId="github" heading="Issues?" />
      </Page>
    </>
  );
}
