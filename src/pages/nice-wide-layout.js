import React from "react";
import { Page, Seo } from "gatsby-theme-portfolio-minimal";
import "../styles/homepage.css";
import "../styles/wide-layout.css";

export default function NiceWideLayout({ children }) {
  return(
    <div className="wide-welcome">
      {children}
    </div>
  )

}
