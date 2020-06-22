import React from 'react';
import Banner from '../components/Banner';
import About from '../components/AboutPage/About';
import Services from '../components/HomePage/Services';
import Title from '../components/Title';

export default function AboutPage() {
  return (
    <>
      <Banner title="About Page" path="/about" />
      <About />
      <Title title="Why Choose Us" />
      <Services />
    </>
  );
}
