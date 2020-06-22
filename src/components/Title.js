import React from 'react';
import styled from 'styled-components';
export default function Title({ title }) {
  return (
    <TitleWrapper>
      <h1>{title}</h1>
    </TitleWrapper>
  );
}

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    text-transform: uppercase;
    font-size: 2.25rem;
    font-weight: 600;
    letter-spacing: 1px;
    color: var(--darkColor);
    position: relative;
  }
  h1::before,
  h1::after {
    position: absolute;
    content: '';
    top: 26px;
    height: 4px;
    width: 3rem;
    background: #000;
  }
  h1::before {
    left: -56px;
  }
  h1::after {
    right: -56px;
  }
  @media (max-width: 767px) {
    h1 {
      font-size: 1.5rem;
    }
    h1::before,
    h1::after {
      top: 16px;
    }
  }
`;
