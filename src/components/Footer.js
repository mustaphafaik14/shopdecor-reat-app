import React from 'react';
import styled from 'styled-components';
import { GrFacebook, GrInstagram, GrYoutube, GrTwitter } from 'react-icons/gr';

export default function Footer() {
  return (
    <FooterWrapper>
      <div className="container">
        <div className="footer_wrapper d-flex align-items-center">
          <p>
            @Copyright {new Date().getFullYear()} SHOPDECOR, All Rights
            Reserved.
          </p>
          <ul className="d-flex">
            <li>
              <a href="www.facebook.com">
                <GrFacebook />
              </a>
            </li>
            <li>
              <a href="www.instagram.com">
                <GrInstagram />
              </a>
            </li>
            <li>
              <a href="www.twitter.com">
                <GrTwitter />
              </a>
            </li>
            <li>
              <a href="www.youtube.com">
                <GrYoutube />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  padding: 1.5rem 0;
  background: var(--darkColor);
  color: var(--whiteColor);

  .footer_wrapper {
    justify-content: space-between;
  }
  p {
    text-transform: capitalize;
    font-size: 1rem;
    letter-spacing: 1px;
  }
  a {
    color: var(--whiteColor);
  }
  li:not(:last-child) {
    margin-right: 1.5rem;
  }

  @media (max-width: 767px) {
    p {
      font-size: 0.85rem;
    }
    ul {
      justify-content: center;
      align-items: center;
      margin-top: 1rem;
      text-align: center;
    }
  }
`;
