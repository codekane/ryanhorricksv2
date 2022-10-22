import React from 'react';
import { PropTypes } from 'prop-types';
import SiteThemeHelmet from './site-theme-helmet';
import '../styles/base.css';
import '../styles/homepage.css';
import '../styles/wide-layout.css';

export default function NiceWideLayout({ children }) {
  return (
    <>
      <SiteThemeHelmet />
      <div className="wide-welcome">
        {children}
      </div>
    </>
  );
}

NiceWideLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
