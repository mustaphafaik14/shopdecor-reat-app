import React, { useContext } from 'react';
import styled from 'styled-components';
import { FaCartArrowDown, FaRegEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ProductsContext } from '../context/Context';

export default function Product({ product }) {
  let { title, price, preview: image, category, id } = product;
  let { addToCart } = useContext(ProductsContext);

  return (
    <ProductWrapper>
      <div className="product_img">
        <img src={image} alt="product_image" />
        <div className="icons">
          <span className="icons-item" onClick={() => addToCart(id)}>
            {' '}
            <FaCartArrowDown />
          </span>
          <Link to={`/products/${id}`}>
            <span className="icons-item">
              {' '}
              <FaRegEye />
            </span>
          </Link>
        </div>
      </div>
      <div className="priduct_info">
        <h2>{title}</h2>
        <h3>{category}</h3>
        <span>{price}$</span>
      </div>
    </ProductWrapper>
  );
}

const ProductWrapper = styled.div`
  width: 100%;
  position: relative;
  :hover {
    border: 2px solid var(--primaryColor);
  }
  .icons {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -40%);
    opacity: 0;
    display: flex;
    transition: all 0.25s cubic-bezier(0.19, 1, 0.22, 1);
  }
  .icons .icons-item {
    margin: 0 1rem;
    background: var(--darkColor);
    color: var(--whiteColor);
    width: 2.5rem;
    height: 2.5rem;
    display: inline-block;
    text-align: center;
    line-height: 2.5rem;
    border-radius: 2px;
    cursor: pointer;
  }
  .icons .icons-item:hover {
    transform: scale(1.1);
  }
  .product_img {
    height: 350px;
    overflow: hidden;
    position: relative;
    border: 0.5rem solid var(--greyColor);
  }

  .product_img img {
    height: 100%;
    cursor: pointer;
    transition: all 0.25s linear;
  }
  .product_img:hover img {
    transform: scale(1.1);
  }
  .priduct_info {
    text-align: center;
    padding: 1rem 0;
    background: var(--greyColor);
  }
  .product_img:hover .icons {
    opacity: 1;
  }
  .priduct_info h2 {
    text-transform: capitalize;
    font-weight: 400;
    font-size: 1.1rem;
  }
  .priduct_info h3 {
    text-transform: capitalize;
    color: #555;
    font-weight: 300;
  }
  .priduct_info span {
    color: var(--primaryColor);
    font-weight: bold;
  }
  .tag {
    position: absolute;
    top: 0.75rem;
    left: 0.75rem;
    z-index: 2;
    padding: 0.25rem 0.5rem;
    border-radius: 1px;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 0.9rem;
  }
`;
