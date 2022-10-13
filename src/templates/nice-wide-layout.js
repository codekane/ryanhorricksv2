import React from "react";
import { Page, Seo } from "gatsby-theme-portfolio-minimal";
import SiteThemeHelmet from './site-theme-helmet';
import "../styles/homepage.css";
import "../styles/wide-layout.css";

export default function NiceWideLayout({ children }) {
  return(
    <>
      <SiteThemeHelmet />
      <div className="wide-welcome">
        {children}
      </div>
    </>
  )

}
