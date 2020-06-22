import React from 'react';
import styled from 'styled-components';
import { GoHome } from 'react-icons/go';
import { Link } from 'react-router-dom';

export default function Banner({ title, path }) {
  return (
    <BannerWrapper>
      <div className="container">
        <h2>{title}</h2>
        <div className="d-flex justify-content-center">
          <Link to="/" className="icon-link">
            <GoHome className="icon" />
            Home
          </Link>
          <p>{'>'}</p>
          <Link className="icon-link" to={`${path}`}>
            {title}
          </Link>
        </div>
      </div>
    </BannerWrapper>
  );
}

const BannerWrapper = styled.div`
  height: 300px;
  background: #252525;
  display: flex;
  align-items: center;
  width: 100%;
  text-align: center;
  color: var(--whiteColor);
  p {
    margin: 0 1rem;
  }
  h2 {
    display: block;
    font-size: 1.5rem;
    text-transform: capitalize;
    color: var(--whiteColor);
    font-weight: 600;
    letter-spacing: 1px;
    margin-bottom: 1rem;
  }
  .icon-link {
    color: var(--whiteColor);
    text-transform: uppercase;
  }
  .icon {
    margin-right: 0.25rem;
  }
`;
