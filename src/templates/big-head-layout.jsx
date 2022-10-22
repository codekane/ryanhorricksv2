import React from 'react';
import PropTypes from 'prop-types';
import SiteThemeHelmet from './site-theme-helmet';
import '../styles/base.css';
import '../styles/homepage.css';
import '../styles/big-head-layout.css';

export function LeftSideHero() {
  return (
    <div className="left">
      <a className="homepage-link" href="/" aria-label="home" aria-current="page">
        <div className="style-module--ContentWrapper --XYxH4">
          Ryan Horricks
        </div>
      </a>
      <img src="/profile.jpg" alt="Ryan Horricks being glorious or something" />
    </div>
  );
}

export default function BigHeadLayout({ children }) {
  return (
    <>
      <SiteThemeHelmet />
      <div className="big-head-layout">
        <div className="left">
          <a className="homepage-link" href="/" aria-label="home" aria-current="page">
            <div className="style-module--ContentWrapper --XYxH4">
              Ryan Horricks
            </div>
          </a>
          <img src="/profile.jpg" alt="Ryan Horricks being glorious or something" />
        </div>
        <div className="right">
          {children}
        </div>
      </div>
    </>
  );
}

BigHeadLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
