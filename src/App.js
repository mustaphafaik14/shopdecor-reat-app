import React from 'react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProductsPage from './pages/ProductsPage';
import SingleProduct from './pages/SingleProduct';
import CartPage from './pages/CartPage';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import CartSide from './components/CartSide';

function App() {
  return (
    <>
      <Navbar />
      <CartSide />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/cart" component={CartPage} />
        <Route exact path="/products" component={ProductsPage} />
        <Route exact path="/products/:id" component={SingleProduct} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
