import React from 'react';
import { ProductsConsumer } from '../../context/Context';
import styled from 'styled-components';
import Product from '../Product';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Title from '../Title';

export default function BestSellingProducts() {
  return (
    <ProductsConsumer>
      {(value) => {
        const { bestsellingProducts, sliderSettings } = value;
        return (
          <ProductsWrapper>
            <div className="container">
              <Title title="Best Products" />
              <Slider {...sliderSettings}>
                {bestsellingProducts.map((product) => {
                  return <Product product={product} key={product.id} />;
                })}
              </Slider>
            </div>
          </ProductsWrapper>
        );
      }}
    </ProductsConsumer>
  );
}

const ProductsWrapper = styled.section`
  .slick-slide {
    padding: 0 0.5rem;
  }
`;
