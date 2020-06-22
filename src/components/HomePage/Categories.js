import React from 'react';
import { ProductsConsumer } from '../../context/Context';
import styled from 'styled-components';
import Title from '../Title';

export default function Categories() {
  return (
    <ProductsConsumer>
      {(value) => {
        let { categories } = value;
        return (
          <CategoriesWrapper>
            <div className="container">
              <Title title="Our Collections" />
              <div className="categories_wrapper">
                {categories.map((el, index) => {
                  return (
                    <div className="cat-item" key={index}>
                      <img src={el.image} alt="category_img" />
                      <h2>{el.name}</h2>
                    </div>
                  );
                })}
              </div>
            </div>
          </CategoriesWrapper>
        );
      }}
    </ProductsConsumer>
  );
}

const CategoriesWrapper = styled.section`
  .categories_wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 1rem;
    align-items: center;
  }
  .cat-item {
    position: relative;
    overflow: hidden !important;
    cursor: pointer;
  }
  .cat-item img {
    transition: all 0.5s ease-in-out;
  }
  .cat-item:hover img {
    transform: scale(1.05);
  }
  .cat-item h2 {
    position: absolute;
    text-transform: uppercase;
    color: var(--primaryColor);
    font-weight: 400;
    bottom: 3rem;
    letter-spacing: 1px;
    left: 0;
    padding: 0.5rem 1rem;
    background: var(--whiteColor);
  }
`;
