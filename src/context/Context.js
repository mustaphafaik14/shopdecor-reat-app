import React, { Component } from 'react';
import { Links } from './linksData';
import { Services } from './services';
import { settings } from './sliderProductsSettings';
import { categories } from './categories';
import { client } from './contentful';

const ProductsContext = React.createContext();
export default class ProductsProvider extends Component {
  state = {
    //Navbar
    navbarIsOpen: false,
    //Side Cart
    sideCartOpen: false,
    //links
    links: Links,
    services: Services,
    sliderSettings: settings,
    categories: categories,
    //products
    storedProducts: [],
    filtredProducts: [],
    bestsellingProducts: [],
    featuredProducts: [],
    //cart
    cartItems: 0,
    cart: [],
    cartTotals: 0,
    cartTotalsTax: 0,
    cartTax: 0,
    //search
    price: 0,
    maxPrice: 0,
    minPrice: 0,
    search: '',
    category: 'all',
  };

  componentDidMount() {
    client
      .getEntries({
        content_type: process.env.REACT_APP_CONTENT,
      })
      .then((data) => this.setProducts(data.items));
  }

  setProducts(data) {
    let tempProducts = data.map((item) => {
      let { id } = item.sys;
      let preview = item.fields.preview.fields.file.url;
      let product = { id, ...item.fields, preview };
      return product;
    });

    let minPrice = Math.min(...tempProducts.map((el) => el.price));
    let maxPrice = Math.max(...tempProducts.map((el) => el.price));
    this.setState(
      {
        storedProducts: tempProducts,
        filtredProducts: tempProducts,
        bestsellingProducts: tempProducts.filter((el) => el.bestselling),
        featuredProducts: tempProducts.filter((el) => el.featured),
        cart: this.getCart(),
        price: maxPrice,
        maxPrice,
        minPrice,
      },
      () => {
        this.addTotals();
      }
    );
  }

  handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      {
        [name]: value,
      },
      () => this.sortData()
    );
  };

  sortData = () => {
    let { category, storedProducts, search, price } = this.state;
    let tempProducts = [...storedProducts];

    if (category !== 'all')
      tempProducts = tempProducts.filter((el) => el.category === category);
    if (search.length > 0) {
      tempProducts = tempProducts.filter((item) => {
        let tempSearch = search.toLowerCase();
        let tempTitle = item.title.toLowerCase();
        if (tempTitle.includes(tempSearch)) return item;
      });
    }
    tempProducts = tempProducts.filter((el) => el.price <= price);

    this.setState({
      filtredProducts: tempProducts,
    });
  };

  handleNavbar = () =>
    this.setState({ navbarIsOpen: !this.state.navbarIsOpen });
  closeSideCart = () => this.setState({ sideCartOpen: false });
  openSideCart = () => this.setState({ sideCartOpen: true });

  getSingleProduct = (id) =>
    this.state.storedProducts.find((el) => el.id === id);

  //carts methodes
  getCart = () => {
    let cart = localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart'))
      : [];
    return cart;
  };

  addTotals = () => {
    let tempCart = [...this.state.cart];
    let cartItems = 0;
    let totals = 0;
    tempCart.forEach((el) => {
      cartItems += el.amount;
      totals += el.total;
    });

    let tax = totals * 0.05;
    let subTotals = totals + tax;

    this.setState({
      cartItems: cartItems,
      cartTotals: totals,
      cartTotalsTax: subTotals,
      cartTax: tax,
    });
  };

  addCartToLocalStorage = () => {
    localStorage.setItem('cart', JSON.stringify(this.state.cart));
  };

  addToCart = (id) => {
    let tempCart = [...this.state.cart];
    let tempProducts = [...this.state.storedProducts];
    let tempItem = tempCart.find((el) => el.id === id);
    if (!tempItem) {
      tempItem = tempProducts.find((el) => el.id === id);
      let total = tempItem.price;
      let cartItem = { ...tempItem, amount: 1, total };
      tempCart = [...tempCart, cartItem];
    } else {
      tempItem.amount++;
      tempItem.total = tempItem.amount * tempItem.price;
    }

    this.setState(
      {
        cart: tempCart,
      },
      () => {
        //calculate Totals
        this.addTotals();
        //save into Local Storage
        this.addCartToLocalStorage();
        this.openSideCart();
      }
    );
  };

  removeItemCart = (id) => {
    let tempCart = [...this.state.cart];
    let cartItem = tempCart.filter((el) => el.id !== id);
    this.setState(
      {
        cart: cartItem,
      },
      () => {
        //calculate Totals
        this.addTotals();
        //save into Local Storage
        this.addCartToLocalStorage();
      }
    );
  };
  increment = (id) => {
    let tempCart = [...this.state.cart];
    let prodItem = tempCart.find((el) => el.id === id);
    prodItem.amount++;
    prodItem.total = prodItem.amount * prodItem.price;
    this.setState(
      {
        cart: tempCart,
      },
      () => {
        //calculate Totals
        this.addTotals();
        //save into Local Storage
        this.addCartToLocalStorage();
      }
    );
  };

  decrement = (id) => {
    let tempCart = [...this.state.cart];
    let prodItem = tempCart.find((el) => el.id === id);
    prodItem.amount--;
    if (prodItem.amount === 0) {
      return this.removeItemCart(id);
    }
    prodItem.total = prodItem.amount * prodItem.price;
    this.setState(
      {
        cart: tempCart,
      },
      () => {
        //calculate Totals
        this.addTotals();
        //save into Local Storage
        this.addCartToLocalStorage();
      }
    );
  };

  clearCart = () => {
    this.setState(
      {
        cart: [],
      },
      () => {
        //calculate Totals
        this.addTotals();
        //save into Local Storage
        this.addCartToLocalStorage();
      }
    );
  };

  render() {
    return (
      <ProductsContext.Provider
        value={{
          ...this.state,
          handleNavbar: this.handleNavbar,
          getSingleProduct: this.getSingleProduct,
          addToCart: this.addToCart,
          increment: this.increment,
          decrement: this.decrement,
          removeItemCart: this.removeItemCart,
          clearCart: this.clearCart,
          closeSideCart: this.closeSideCart,
          openSideCart: this.openSideCart,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </ProductsContext.Provider>
    );
  }
}

const ProductsConsumer = ProductsContext.Consumer;

export { ProductsContext, ProductsProvider, ProductsConsumer };
