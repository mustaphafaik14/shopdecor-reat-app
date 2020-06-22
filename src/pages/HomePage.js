import React from 'react';
import Sliders from '../components/HomePage/Sliders';
import Services from '../components/HomePage/Services';
import BestSellingProducts from '../components/HomePage/BestSellingProducts';
import FeaturedProducts from '../components/HomePage/FeaturedProducts';
import Categories from '../components/HomePage/Categories';

export default function HomePage() {
  return (
    <>
      <Sliders />
      <Services />
      <BestSellingProducts />
      <Categories />
      <FeaturedProducts />
    </>
  );
}
