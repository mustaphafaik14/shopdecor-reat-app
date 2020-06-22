import React from 'react';
import { ProductsConsumer } from '../../context/Context';
import styled from 'styled-components';
import Product from '../Product';

export default function ListProducts() {
  return (
    <ProductsConsumer>
      {(value) => {
        const { filtredProducts } = value;
        return (
          <ProductsListWrapper>
            <div className="container">
              <div className="products_list">
                {filtredProducts.map((product) => {
                  return <Product product={product} key={product.id}></Product>;
                })}
              </div>
            </div>
          </ProductsListWrapper>
        );
      }}
    </ProductsConsumer>
  );
}

const ProductsListWrapper = styled.section`
  .products_list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    grid-gap: 2rem;
  }
`;
