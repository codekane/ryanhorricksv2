import React from "react";
import { Page, Seo } from "gatsby-theme-portfolio-minimal";
import SiteThemeHelmet from './site-theme-helmet';
import "../styles/homepage.css";

export function LeftSideHero() {
  return (
    <div className="left">
      <a className="homepage-link" href="/" aria-label="home" aria-current="page">
        <div class="style-module--ContentWrapper --XYxH4">
          Ryan Horricks
        </div>
      </a>
      <img src={"/profile.jpg"} />
    </div>
  )
}

export default function BigHeadLayout({ children }) {
  return(
    <>
      <SiteThemeHelmet />
      <div className="welcome-header">
        <div className="left">
          <a className="homepage-link" href="/" aria-label="home" aria-current="page">
            <div class="style-module--ContentWrapper --XYxH4">
              Ryan Horricks
            </div>
          </a>
          <img src={"/profile.jpg"} />
        </div>
        <div className="right">
          {children}
        </div>
      </div>
    </>
  )
}
