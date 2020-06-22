import React from 'react';
import CartColumns from './CartColumns';
import CartTotal from './CartTotal';
import CartList from './CartList';
import styled from 'styled-components';
import { ProductsConsumer } from '../../context/Context';

export default function Cart() {
  return (
    <CartWrapper>
      <div className="container">
        <ProductsConsumer>
          {(value) => {
            const { cart } = value;
            if (!cart.length) {
              return (
                <div className="cart-empty">Your cart is currently empty.</div>
              );
            } else {
              return (
                <>
                  {' '}
                  <CartColumns />
                  <CartList />
                  <CartTotal />
                </>
              );
            }
          }}
        </ProductsConsumer>
      </div>
    </CartWrapper>
  );
}

const CartWrapper = styled.section`
  .cart-empty {
    display: block;
    text-align: center;
    text-transform: capitalize;
    font-weight: 600;
    font-size: 1.5rem;
  }
`;
