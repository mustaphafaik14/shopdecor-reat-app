import React from 'react';
import Banner from '../components/Banner';
import Contact from '../components/ContactPage/Contact';
export default function AboutPage() {
  return (
    <>
      <Banner title="Contact us" path="/contact" />
      <Contact />
    </>
  );
}
