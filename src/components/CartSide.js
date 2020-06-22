import React from 'react';
import styled from 'styled-components';
import { FaRegTrashAlt } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { ProductsConsumer } from '../context/Context';

export default function CartSide() {
  return (
    <ProductsConsumer>
      {(value) => {
        const { cart, sideCartOpen, removeItemCart, closeSideCart } = value;

        return (
          <CartSideWrapper isOpen={sideCartOpen}>
            <AiOutlineClose
              onClick={() => closeSideCart()}
              className="close-sidecart"
              style={{ fontSize: '1.25rem', cursor: 'pointer' }}
            />

            <div className="cart_list">
              {!cart.length ? (
                <div className="cart-empty">Your cart is currently empty.</div>
              ) : (
                cart.map((el, index) => {
                  return (
                    <div className="cart_item d-flex " key={index}>
                      <img src={el.preview} alt="cart_item" />
                      <div className="cart_content">
                        <Link to="/cart" style={{ color: 'var(--darkColor)' }}>
                          <h3>{el.title}</h3>
                        </Link>
                        <span>
                          {el.amount} - {el.total}$
                        </span>
                      </div>
                      <span
                        className="remove-el-cart"
                        onClick={() => removeItemCart(el.id)}
                      >
                        <FaRegTrashAlt />
                      </span>
                    </div>
                  );
                })
              )}
            </div>
          </CartSideWrapper>
        );
      }}
    </ProductsConsumer>
  );
}

const CartSideWrapper = styled.div`
  position: fixed;
  padding: 1rem;
  width: 350px;
  height: 100%;
  background: #fff;
  z-index: 100;
  top: 0;
  right: 0;
  overflow-y: scroll;
  box-shadow: -2px 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.25s linear;
  transform: ${(props) =>
    props.isOpen ? 'translateX(0%)' : 'translateX(110%)'};
  .cart_item:not(:last-child) {
    margin-bottom: 1rem;
  }
  .cart_list {
    margin-top: 2rem;
  }
  .cart_item img {
    width: 80px;
    margin-right: 1rem;
    border: 2px solid var(--greyColor);
  }
  .cart_content {
    width: 55%;
  }
  .cart_content h3 {
    font-weight: 400;
    font-size: 0.9rem;
  }
  .cart_content span {
    color: #444;
  }
  .remove-el-cart {
    font-size: 1.25rem;
    cursor: pointer;
    color: var(--darkColor);
  }
  .cart-empty {
    text-transform: uppercase;
    font-weight: 500;
    margin-top: 2rem;
    display: block;
    text-align: center;
  }
`;
