import React from 'react';
import CartItem from './CartItem';
import { ProductsConsumer } from '../../context/Context';
import styled from 'styled-components';

export default function CartList() {
  return (
    <ProductsConsumer>
      {(value) => {
        const { cart, increment, removeItemCart, decrement } = value;
        return (
          <ListWrapper>
            {cart.map((cart, index) => (
              <CartItem
                cart={cart}
                increment={increment}
                decrement={decrement}
                removeItemCart={removeItemCart}
                key={index}
              />
            ))}
          </ListWrapper>
        );
      }}
    </ProductsConsumer>
  );
}

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
