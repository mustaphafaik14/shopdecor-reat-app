import React from 'react';
import styled from 'styled-components';
import { ProductsConsumer } from '../../context/Context';

export default function CartTotal() {
  return (
    <TotalWrapper>
      <h2>Cart Totals</h2>
      <ProductsConsumer>
        {(value) => {
          const { cartTotals, cartTotalsTax, clearCart } = value;
          return (
            <>
              <p>
                <span>Subtotal : </span> {cartTotals}$
              </p>
              <p>
                <span>totals : </span> {cartTotalsTax}$
              </p>
              <button className="btn-primary" onClick={() => clearCart()}>
                Clear Cart
              </button>
            </>
          );
        }}
      </ProductsConsumer>
    </TotalWrapper>
  );
}

const TotalWrapper = styled.div`
  display: block;
  text-align: center;
  h2 {
    text-transform: uppercase;
    font-weight: 400;
    margin-bottom: 1rem;
  }
  p {
    padding: 0.5rem 0;
    text-transform: uppercase;
  }
  span {
    font-weight: 600;
  }
`;
