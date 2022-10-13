import React from "react";
import { Helmet } from "react-helmet";

export default function SiteThemeHelmet() {




  return(
    <Helmet>
      <style type="text/css">{`
      :root {

      }
      @media (prefers-color-scheme: dark) {
        :root {
          --primary-color: #fafafa;
          --secondary-color: #341677;
          --tertiary-color: #252525;
          --text-color: rgba(255, 255, 255, 0.87);
          --subtext-color: #aaaaaa;
          --background-color: #121212;
          --card-background-color: #1c1c1c;
          --scroll-bar-color: rgba(255, 255, 255, 0.5);
          --box-shadow-color: rgba(0, 0, 0, 0.16);
          --box-shadow-hover-color: rgba(0, 0, 0, 0.32);
          --base-font: 'Roboto', Arial, sans-serif;
          --code-block-bg: #151f28;
          --code-block-var: #ff39a7;
          --code-block-num: #fed703;
          --code-block-fun: #c653ff;
          --code-block-keyword: #2bdcff;
          --code-block-comment: #8292a2;
          --code-block-tkimp: #fd971f;
        }
      }
      `}</style>
    </Helmet>

  )
}
