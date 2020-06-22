import React from 'react';
import Banner from '../components/Banner';
import Cart from '../components/CartPage/Cart';

export default function CartPage() {
  return (
    <>
      <Banner title="Cart" path="/cart" />
      <Cart />
    </>
  );
}
