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

function HomepageText(props) {
  return(
    <div className="homepage-text">
      <p>My name is Ryan Horricks, and I’m a Full-Stack Developer based out of Edmonton, Alberta with 5 years of experience.</p>
      <p>Currently I’m working Part-Time as a Front End Developer with Advision eCommerce, in addition to working with clients as a Freelancer. I enjoy solving complex problems, making beautiful websites, building cool applications, and dreaming of better ways to live.</p>
      <p>Besides code, I like to climb rocks, go to shows, play guitar, and I’m learning how to write for an audience.</p>

    </div>

  )
}

function Socials(props) {
  return(
    <div className="homepage-socials">
      <a href="https://www.facebook.com/ryan.horricks/">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_103_836)">
            <path class="social-icon" d="M35.3103 17.8446C35.3103 8.09394 27.4059 0.189453 17.6552 0.189453C7.90448 0.189453 0 8.09394 0 17.8446C0 26.6567 6.45621 33.9608 14.8966 35.2853V22.9481H10.4138V17.8446H14.8966V13.955C14.8966 9.53014 17.5324 7.086 21.5652 7.086C23.4962 7.086 25.5172 7.43083 25.5172 7.43083V11.7757H23.291C21.0979 11.7757 20.4138 13.1367 20.4138 14.5343V17.8446H25.3103L24.5276 22.9481H20.4138V35.2853C28.8541 33.9608 35.3103 26.6567 35.3103 17.8446Z" fill="#0E0E12"/>
          </g>
          <defs>
            <clipPath id="clip0_103_836">
              <rect width="35.3103" height="35.3103" fill="white" transform="translate(0 0.189453)"/>
            </clipPath>
          </defs>
        </svg>
      </a>

      <a href="https://www.instagram.com/jesus_basically/">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_103_814)">
            <path class="social-icon" d="M17.9657 3.36876C22.683 3.36876 23.2416 3.38945 25.0968 3.47221C26.8209 3.54807 27.7519 3.83773 28.3726 4.07911C29.1933 4.39635 29.7864 4.78256 30.4002 5.39635C31.0209 6.01704 31.4002 6.60325 31.7174 7.42394C31.9588 8.04463 32.2485 8.98256 32.3243 10.6998C32.4071 12.5619 32.4278 13.1205 32.4278 17.8308C32.4278 22.5481 32.4071 23.1067 32.3243 24.9619C32.2485 26.686 31.9588 27.617 31.7174 28.2377C31.4002 29.0584 31.014 29.6515 30.4002 30.2653C29.7795 30.886 29.1933 31.2653 28.3726 31.5826C27.7519 31.8239 26.814 32.1136 25.0968 32.1895C23.2347 32.2722 22.6761 32.2929 17.9657 32.2929C13.2485 32.2929 12.6899 32.2722 10.8347 32.1895C9.11055 32.1136 8.17951 31.8239 7.55882 31.5826C6.73813 31.2653 6.14503 30.8791 5.53124 30.2653C4.91055 29.6446 4.53124 29.0584 4.214 28.2377C3.97262 27.617 3.68296 26.6791 3.6071 24.9619C3.52434 23.0998 3.50365 22.5412 3.50365 17.8308C3.50365 13.1136 3.52434 12.555 3.6071 10.6998C3.68296 8.97566 3.97262 8.04463 4.214 7.42394C4.53124 6.60325 4.91744 6.01014 5.53124 5.39635C6.15193 4.77566 6.73813 4.39635 7.55882 4.07911C8.17951 3.83773 9.11744 3.54807 10.8347 3.47221C12.6899 3.38945 13.2485 3.36876 17.9657 3.36876ZM17.9657 0.189453C13.1726 0.189453 12.5726 0.210143 10.6899 0.292901C8.814 0.37566 7.52434 0.679108 6.4071 1.11359C5.24158 1.56876 4.25537 2.16876 3.27606 3.15497C2.28986 4.13428 1.68986 5.12049 1.23468 6.27911C0.800202 7.40325 0.496754 8.686 0.413995 10.5619C0.331237 12.4515 0.310547 13.0515 0.310547 17.8446C0.310547 22.6377 0.331237 23.2377 0.413995 25.1205C0.496754 26.9963 0.800202 28.286 1.23468 29.4032C1.68986 30.5688 2.28986 31.555 3.27606 32.5343C4.25537 33.5136 5.24158 34.1205 6.4002 34.5688C7.52434 35.0032 8.8071 35.3067 10.683 35.3895C12.5657 35.4722 13.1657 35.4929 17.9588 35.4929C22.7519 35.4929 23.3519 35.4722 25.2347 35.3895C27.1105 35.3067 28.4002 35.0032 29.5174 34.5688C30.6761 34.1205 31.6623 33.5136 32.6416 32.5343C33.6209 31.555 34.2278 30.5688 34.6761 29.4101C35.1105 28.286 35.414 27.0032 35.4968 25.1274C35.5795 23.2446 35.6002 22.6446 35.6002 17.8515C35.6002 13.0584 35.5795 12.4584 35.4968 10.5757C35.414 8.6998 35.1105 7.41014 34.6761 6.2929C34.2416 5.12049 33.6416 4.13428 32.6554 3.15497C31.6761 2.17566 30.6899 1.56876 29.5312 1.12049C28.4071 0.686005 27.1243 0.382557 25.2485 0.299798C23.3588 0.210143 22.7588 0.189453 17.9657 0.189453Z" fill="#0E0E12"/>
            <path class="social-icon" d="M17.9655 8.77588C12.9586 8.77588 8.89648 12.8379 8.89648 17.8448C8.89648 22.8517 12.9586 26.9138 17.9655 26.9138C22.9723 26.9138 27.0344 22.8517 27.0344 17.8448C27.0344 12.8379 22.9723 8.77588 17.9655 8.77588ZM17.9655 23.7276C14.7172 23.7276 12.0827 21.0931 12.0827 17.8448C12.0827 14.5966 14.7172 11.9621 17.9655 11.9621C21.2137 11.9621 23.8482 14.5966 23.8482 17.8448C23.8482 21.0931 21.2137 23.7276 17.9655 23.7276Z" fill="#0E0E12"/>
            <path class="social-icon" d="M29.5108 8.41705C29.5108 9.58946 28.5591 10.5343 27.3936 10.5343C26.2212 10.5343 25.2764 9.58257 25.2764 8.41705C25.2764 7.24463 26.2281 6.2998 27.3936 6.2998C28.5591 6.2998 29.5108 7.25153 29.5108 8.41705Z" fill="#0E0E12"/>
          </g>
          <defs>
            <clipPath id="clip0_103_814">
              <rect width="35.3103" height="35.3103" fill="white" transform="translate(0.310547 0.189453)"/>
            </clipPath>
          </defs>
        </svg>
      </a>

      <a href="https://www.linkedin.com/in/rhorricks">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_103_815)">
            <path class="social-icon" d="M33.0303 0.189453H3.20508C1.77637 0.189453 0.621094 1.31738 0.621094 2.71191V32.6602C0.621094 34.0547 1.77637 35.1895 3.20508 35.1895H33.0303C34.459 35.1895 35.6211 34.0547 35.6211 32.667V2.71191C35.6211 1.31738 34.459 0.189453 33.0303 0.189453ZM11.0049 30.0146H5.80957V13.3076H11.0049V30.0146ZM8.40723 11.0313C6.73926 11.0313 5.39258 9.68457 5.39258 8.02344C5.39258 6.3623 6.73926 5.01562 8.40723 5.01562C10.0684 5.01562 11.415 6.3623 11.415 8.02344C11.415 9.67773 10.0684 11.0313 8.40723 11.0313ZM30.4463 30.0146H25.2578V21.8936C25.2578 19.959 25.2236 17.4639 22.5576 17.4639C19.8574 17.4639 19.4473 19.5762 19.4473 21.7568V30.0146H14.2656V13.3076H19.2422V15.5908H19.3105C20.001 14.2783 21.6963 12.8906 24.2188 12.8906C29.4756 12.8906 30.4463 16.3496 30.4463 20.8477V30.0146V30.0146Z" fill="#0E0E12"/>
          </g>
          <defs>
            <clipPath id="clip0_103_815">
              <rect width="35" height="35" fill="white" transform="translate(0.621094 0.189453)"/>
            </clipPath>
          </defs>
        </svg>
      </a>

      <a href="https://github.com/codekane">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_103_816)">
            <path class="social-icon" fill-rule="evenodd" clip-rule="evenodd" d="M18.1217 0.918457C13.9673 0.920613 9.94903 2.39204 6.78553 5.06964C3.62202 7.74723 1.51954 11.4564 0.854012 15.5339C0.188489 19.6114 1.00332 23.7913 3.15282 27.3262C5.30232 30.8612 8.64632 33.5206 12.5869 34.829C13.4562 34.9904 13.7837 34.4516 13.7837 33.9934C13.7837 33.5353 13.7663 32.207 13.7605 30.7548C8.89213 31.8065 7.86341 28.7004 7.86341 28.7004C7.0694 26.6835 5.92186 26.1533 5.92186 26.1533C4.33384 25.0757 6.04068 25.0958 6.04068 25.0958C7.79966 25.2197 8.72407 26.8909 8.72407 26.8909C10.2831 29.5504 12.8187 28.7811 13.8155 28.3316C13.972 27.205 14.427 26.4386 14.9283 26.0035C11.0394 25.5655 6.95348 24.073 6.95348 17.4055C6.92938 15.6764 7.57471 14.0042 8.75594 12.7349C8.57628 12.2969 7.97642 10.5278 8.9269 8.12471C8.9269 8.12471 10.3961 7.65793 13.7402 9.90826C16.6086 9.12832 19.6349 9.12832 22.5032 9.90826C25.8444 7.65793 27.3107 8.12471 27.3107 8.12471C28.2641 10.522 27.6643 12.2911 27.4846 12.7349C28.6696 14.0044 29.3163 15.6795 29.29 17.4113C29.29 24.0931 25.1953 25.5655 21.3006 25.9948C21.9266 26.5365 22.4859 27.594 22.4859 29.2191C22.4859 31.5472 22.4656 33.4201 22.4656 33.9934C22.4656 34.4573 22.7814 34.999 23.6682 34.829C27.6092 33.5205 30.9535 30.8605 33.103 27.325C35.2524 23.7894 36.0668 19.6089 35.4006 15.531C34.7343 11.4532 32.6308 7.74397 29.4662 5.06684C26.3016 2.38971 22.2825 0.919246 18.1275 0.918457H18.1217Z" fill="#0E0E12"/>
            <path class="social-icon" d="M7.24862 25.9029C7.21094 25.9893 7.07185 26.0152 6.95883 25.9547C6.84582 25.8942 6.76179 25.7819 6.80236 25.6925C6.84293 25.6032 6.97912 25.5802 7.09214 25.6407C7.20515 25.7012 7.29208 25.8164 7.24862 25.9029Z" fill="#0E0E12"/>
            <path class="social-icon" d="M7.95847 26.6892C7.89845 26.7193 7.82979 26.7277 7.76424 26.7129C7.6987 26.6982 7.64033 26.6613 7.59914 26.6085C7.48612 26.4875 7.46293 26.3204 7.54986 26.2455C7.6368 26.1706 7.79329 26.2051 7.90631 26.3262C8.01932 26.4472 8.0454 26.6143 7.95847 26.6892Z" fill="#0E0E12"/>
            <path class="social-icon" d="M8.64787 27.6891C8.54065 27.764 8.35807 27.6891 8.25665 27.5393C8.22861 27.5124 8.2063 27.4802 8.19107 27.4446C8.17583 27.4089 8.16797 27.3706 8.16797 27.3319C8.16797 27.2931 8.17583 27.2548 8.19107 27.2191C8.2063 27.1835 8.22861 27.1513 8.25665 27.1244C8.36387 27.0524 8.54644 27.1244 8.64787 27.2713C8.74929 27.4183 8.75219 27.6142 8.64787 27.6891V27.6891Z" fill="#0E0E12"/>
            <path class="social-icon" d="M9.58404 28.6571C9.48841 28.7637 9.29426 28.7349 9.13488 28.5908C8.9755 28.4468 8.93781 28.2508 9.03344 28.1471C9.12907 28.0434 9.32323 28.0722 9.4884 28.2134C9.65358 28.3546 9.68546 28.5534 9.58404 28.6571V28.6571Z" fill="#0E0E12"/>
            <path class="social-icon" d="M10.8969 29.2223C10.8535 29.3577 10.6564 29.4182 10.4594 29.3606C10.2623 29.303 10.1319 29.1416 10.1696 29.0033C10.2072 28.865 10.4072 28.8016 10.6071 28.865C10.8071 28.9284 10.9346 29.0811 10.8969 29.2223Z" fill="#0E0E12"/>
            <path class="social-icon" d="M12.3287 29.32C12.3287 29.4612 12.1664 29.5822 11.9577 29.5851C11.7491 29.588 11.5781 29.4727 11.5781 29.3315C11.5781 29.1904 11.7404 29.0693 11.949 29.0665C12.1577 29.0636 12.3287 29.176 12.3287 29.32Z" fill="#0E0E12"/>
            <path class="social-icon" d="M13.6617 29.0983C13.6878 29.2395 13.5429 29.3865 13.3343 29.421C13.1256 29.4556 12.9431 29.3721 12.917 29.2338C12.8909 29.0954 13.0416 28.9456 13.2445 28.9082C13.4473 28.8707 13.6357 28.9571 13.6617 29.0983Z" fill="#0E0E12"/>
          </g>
          <defs>
            <clipPath id="clip0_103_816">
              <rect class="social-icon" width="35" height="35" fill="white" transform="translate(0.621094 0.189453)"/>
            </clipPath>
          </defs>
        </svg>
      </a>

      <a href="https://t.me/+16014995090">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_103_817)">
            <path class="social-icon" fill-rule="evenodd" clip-rule="evenodd" d="M35.6211 17.6895C35.6211 27.3544 27.7861 35.1895 18.1211 35.1895C8.45611 35.1895 0.621094 27.3544 0.621094 17.6895C0.621094 8.02447 8.45611 0.189453 18.1211 0.189453C27.7861 0.189453 35.6211 8.02447 35.6211 17.6895ZM18.7482 13.1087C17.0461 13.8167 13.6442 15.282 8.5426 17.5047C7.71418 17.8342 7.28022 18.1564 7.24071 18.4716C7.17395 19.0041 7.84088 19.2138 8.74907 19.4994C8.87261 19.5383 9.00061 19.5785 9.13184 19.6212C10.0254 19.9116 11.2273 20.2514 11.8521 20.2649C12.4189 20.2772 13.0515 20.0435 13.7499 19.5639C18.5165 16.3463 20.9771 14.72 21.1315 14.6849C21.2405 14.6602 21.3916 14.6291 21.4939 14.7201C21.5962 14.811 21.5861 14.9833 21.5753 15.0295C21.5092 15.3111 18.8913 17.745 17.5365 19.0045C17.1141 19.3972 16.8145 19.6757 16.7533 19.7393C16.6161 19.8818 16.4763 20.0166 16.3419 20.1462C15.5118 20.9464 14.8893 21.5465 16.3764 22.5264C17.091 22.9974 17.6628 23.3868 18.2333 23.7753C18.8563 24.1996 19.4778 24.6228 20.2818 25.1498C20.4866 25.2841 20.6823 25.4235 20.8728 25.5594C21.5979 26.0763 22.2493 26.5407 23.054 26.4666C23.5217 26.4236 24.0047 25.9839 24.25 24.6725C24.8297 21.5732 25.9693 14.858 26.2327 12.0909C26.2557 11.8484 26.2267 11.5382 26.2034 11.402C26.1801 11.2658 26.1314 11.0717 25.9543 10.928C25.7447 10.7579 25.421 10.722 25.2762 10.7246C24.618 10.7362 23.6082 11.0873 18.7482 13.1087Z" fill="#0E0E12"/>
          </g>
          <defs>
            <clipPath id="clip0_103_817">
              <rect width="35" height="35" fill="white" transform="translate(0.621094 0.189453)"/>
            </clipPath>
          </defs>
        </svg>


      </a>


    </div>

  )
}

function Hello(props) {
  return (
    <>
      <div className="welcome-header">
        <div className="left">
          <img src={"/profile.jpg"} />
        </div>
        <div className="right">
          <div className="welcome-message">
            <h1>Welcome!</h1>
          </div>
          <Socials />
        </div>
      </div>
      <div className="goings-on">
        <div className="left">
      <HomepageText />
        </div>

        <div className="right">

        </div>

      </div>
    </>

  )
}

export default function IndexPage() {
  return (
    <>
      <Seo title="Ryan Horricks" />
      <Page>
        <Hello />
        {/*
        <HeroSection sectionId="hero" />
        <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium']} />
        <AboutSection sectionId="about" heading="About Portfolio Minimal" />
        <InterestsSection sectionId="details" heading="Details" />
        <ProjectsSection sectionId="features" heading="Built-in Features" />
        <ContactSection sectionId="github" heading="Issues?" />
        */}
      </Page>
    </>
  );
}
