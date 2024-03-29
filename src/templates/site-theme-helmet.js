import React from "react";
import { Helmet } from "react-helmet";

export default function SiteThemeHelmet() {




  return(
    <Helmet>
      <style type="text/css">{`
      :root {
        --primary-color: #000;
        --secondary-color: #fff4d9;
        --tertiary-color: #f2f2f2;
        --text-color: #000;
        --subtext-color: #555;
        --background-color: #fff;
        --card-background-color: #fff;
        --scroll-bar-color: rgba(0, 0, 0, 0.5);
        --box-shadow-color: rgba(0, 0, 0, 0.16);
        --box-shadow-hover-color: rgba(0, 0, 0, 0.32);
        --base-font: "Roboto", Arial, sans-serif
        --code-block-bg: #f5f6f9;
        --code-block-var: #da0078;
        --code-block-num: #bf04b7;
        --code-block-fun: #3d5afe;
        --code-block-keyword: #fe4001;
        --code-block-comment: #7f7f7f;
        --code-block-tkimp: #fd971f;
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
      body {
        background-color: var(--background-color);
        color: var(--text-color);
      }
      `}</style>
    </Helmet>

  )
}
