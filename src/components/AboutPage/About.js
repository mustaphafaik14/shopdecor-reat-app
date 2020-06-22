import React from 'react';
import styled from 'styled-components';
import aboutImg from '../../images/about2.jpg';

export default function About() {
  return (
    <AboutWrapper>
      <div className="container">
        <div className="about-wrapper  d-flex">
          <img src={aboutImg} alt="about_img" />
          <div className="about-content ">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit
              amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </AboutWrapper>
  );
}

const AboutWrapper = styled.section`
  .about-wrapper {
    justify-content: space-between;
    align-items: center;
  }
  .about-wrapper img {
    flex: 1 0 38%;
    max-width: 38%;
    border: 0.25rem solid var(--greyColor);
    height: 400px;
  }

  .about-wrapper div {
    flex: 1 0 58%;
    max-width: 58%;
  }
  p {
    line-height: 1.7;
    color: var(--darkColor);
    font-weight: 400;
    font-size: 0.95rem;
  }
  p:first-child {
    margin-bottom: 2rem;
  }
  @media (max-width: 800px) {
    .about-wrapper img {
      margin-bottom: 1.5rem;
    }
    .about-wrapper img,
    .about-wrapper div {
      flex: 1 0 100%;
      max-width: 100%;
    }
  }
`;
