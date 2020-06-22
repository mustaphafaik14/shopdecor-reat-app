import React from 'react';
import styled from 'styled-components';
import { AiOutlineShoppingCart, AiOutlineMenu } from 'react-icons/ai';
import { FaShoppingBag } from 'react-icons/fa';
import { NavLink, Link } from 'react-router-dom';
import { ProductsConsumer } from '../context/Context';

export default function Navbar() {
  return (
    <ProductsConsumer>
      {(value) => {
        let {
          navbarIsOpen,
          handleNavbar,
          links,
          cartItems,
          openSideCart,
        } = value;
        return (
          <HeaderWrapper>
            <div className="container">
              <div className="header_wrapper d-flex align-items-center">
                <Link className="logo" to="/">
                  <h1 className="d-flex align-items-center">
                    <AiOutlineShoppingCart className="logo-icon" />
                    shopa<span>decor</span>
                  </h1>
                </Link>

                <nav className={navbarIsOpen ? 'navbar show' : 'navbar'}>
                  <ul className="d-flex">
                    {links.map((link, index) => {
                      return (
                        <li className="nav-item" key={index}>
                          <NavLink
                            className="nav-link"
                            to={link.path}
                            activeClassName="active-link"
                            exact
                            onClick={() => handleNavbar(false)}
                          >
                            {link.name}
                          </NavLink>
                        </li>
                      );
                    })}
                  </ul>
                </nav>

                <div className="menu-icons d-flex align-items-center">
                  <div className="menu-icon">
                    <AiOutlineMenu onClick={() => handleNavbar()} />
                  </div>
                  <div className="cart">
                    <FaShoppingBag
                      className="cart-icon"
                      onClick={() => openSideCart()}
                    />
                    <span className="cart-items">{cartItems}</span>
                  </div>
                </div>
              </div>
            </div>
          </HeaderWrapper>
        );
      }}
    </ProductsConsumer>
  );
}

const HeaderWrapper = styled.header`
  padding: 1rem 0;
  .logo {
    margin-right: auto;
  }
  .logo h1 {
    text-transform: uppercase;
    font-size: 1.5rem;
    color: var(--darkColor);
    letter-spacing: 1px;
  }
  .logo span {
    color: var(--primaryColor);
  }
  .logo-icon {
    color: var(--primaryColor);
    margin-right: 0.5rem;
    font-size: 1.6rem;
  }
  .nav-item {
    margin-right: 1.5rem;
  }
  .nav-link {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 0.9rem;
    color: var(--darkColor);
    font-weight: 500;
    letter-spacing: 0.5px;
  }
  .cart {
    position: relative;
    cursor: pointer;
  }
  .cart-items {
    position: absolute;
    top: -9px;
    right: -13px;
    width: 1.25rem;
    height: 1.25rem;
    line-height: 1.25rem;
    text-align: center;
    color: var(--whiteColor);
    border-radius: 50%;
    background: var(--primaryColor);
    font-size: 0.8rem;
    font-weight: 600;
  }
  .menu-icons > div {
    margin-left: 2rem;
    cursor: pointer;
    font-size: 1.4rem;
  }
  .menu-icon {
    display: none;
  }
  .active-link {
    position: relative;
  }
  .active-link::before {
    position: absolute;
    content: '';
    bottom: 1px;
    left: 0;
    width: 100%;
    height: 6px;
    background: var(--primaryColor);
    z-index: -1;
  }
  @media screen and (max-width: 767px) {
    .menu-icon {
      display: block;
    }
    .navbar {
      background: var(--whiteColor);
      z-index: 10;
      box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.1);
      position: absolute;
      top: 74.5px;
      width: 80%;
      margin: 0 auto;
      transform: translateX(-50%);
      left: 50%;
      overflow: hidden;
      height: 0;
      transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
    }
    .navbar.show {
      height: 280px;
    }
    .navbar.hide {
      height: 0;
    }
    .navbar ul {
      flex-direction: column;
      text-align: center;
      padding: 1rem 0;
    }
    .navbar ul li:not(:last-child) {
      margin-bottom: 2rem;
    }
  }
`;
