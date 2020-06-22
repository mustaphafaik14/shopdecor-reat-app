import React, { Component } from 'react';
import { ProductsContext } from '../context/Context';
import styled from 'styled-components';
import Banner from '../components/Banner';

export default class SingleProduct extends Component {
  static contextType = ProductsContext;
  constructor(props) {
    super(props);
    this.state = {
      productId: props.match.params.id,
    };
  }

  render() {
    let { getSingleProduct, addToCart } = this.context;
    const prod = getSingleProduct(this.state.productId);
    if (!prod) return <div>Error</div>;
    const { id, title, category, price, description, preview } = prod;
    return (
      <>
        <Banner title={title} path="/products" />
        <ProductInfo>
          <div className="container">
            <div className="single_wrapper d-flex">
              <div className="single_img">
                <img src={preview} alt="single_img" />
              </div>
              <div className="infos">
                <h1>{title}</h1>
                <span> {price}$</span>
                <h2>Category : {category}</h2>
                <p>{description}</p>
                <button
                  className="btn-primary btn"
                  onClick={() => addToCart(id)}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </ProductInfo>
      </>
    );
  }
}

const ProductInfo = styled.section`
  .single_wrapper {
    justify-content: space-between;
  }
  .single_wrapper .single_img,
  .single_wrapper .infos {
    flex: 1 0 49%;
    max-width: 49%;
  }
  .single_wrapper .single_img {
    border: 0.5rem solid var(--greyColor);
    height: 600px;
  }
  .single_wrapper .single_img img {
    height: 100%;
  }
  .infos h1 {
    text-transform: uppercase;
    font-size: 1.25rem;
    font-weight: 500;
    letter-spacing: 1px;
    margin-bottom: 1rem;
  }
  .infos h2 {
    font-weight: 400;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
  .infos span {
    color: var(--primaryColor);
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  .infos p {
    line-height: 1.8;
    color: #444;
    font-size: 0.9rem;
  }
  .cart_items {
    margin: 1rem 0;
    display: flex;
    align-items: center;
  }
  .cart_items p {
    margin: 0 0.5rem;
  }
  .cart_items_icon {
    color: var(--darkColor);
    cursor: pointer;
    font-size: 1.25rem;
  }
  .btn {
    margin: 1rem 0;
  }
`;
