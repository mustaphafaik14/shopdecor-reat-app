import React from 'react';
import Banner from '../components/Banner';
import ListProducts from '../components/ProductsPage/ListProducts';
import FilterProducts from '../components/ProductsPage/FilterProducts';

export default function ProductsPage() {
  return (
    <>
      <Banner title="Our Products" path="/products"></Banner>
      <FilterProducts />
      <ListProducts />
    </>
  );
}
