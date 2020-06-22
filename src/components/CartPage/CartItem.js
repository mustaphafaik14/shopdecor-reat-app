import React from 'react';
import styled from 'styled-components';
import {
  FaArrowAltCircleUp,
  FaArrowAltCircleDown,
  FaTrashAlt,
} from 'react-icons/fa';

export default function CartItem({
  cart,
  increment,
  removeItemCart,
  decrement,
}) {
  return (
    <ItemWrapper>
      <div className="item">
        <img src={cart.preview} alt="predouct" />
      </div>
      <div className="item">
        <h3>{cart.title}</h3>
      </div>
      <div className="item">
        <h3>{cart.price}$</h3>
      </div>
      <div className="item d-flex quantity">
        <FaArrowAltCircleDown
          style={{ color: 'var(--primaryColor)', cursor: 'pointer' }}
          onClick={() => decrement(cart.id)}
        />
        <h3>{cart.amount}</h3>
        <FaArrowAltCircleUp
          style={{ color: 'var(--primaryColor)', cursor: 'pointer' }}
          onClick={() => increment(cart.id)}
        />
      </div>
      <div className="item">
        <h3>{cart.total}$</h3>
      </div>
      <div className="item">
        <h3 style={{ color: 'var(--primaryColor)', cursor: 'pointer' }}>
          <FaTrashAlt onClick={() => removeItemCart(cart.id)} />
        </h3>
      </div>
    </ItemWrapper>
  );
}

const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  border-bottom: 0.2rem solid var(--greyColor);
  @media (max-width: 750px) {
    display: grid;
    grid-template-columns: 1fr;
    text-align: center;
    .item {
      width: 100%;
      max-width: 100%;
    }
    .quantity {
      text-align: center;
      justify-content: center;
    }
  }
  margin-bottom: 1rem;
  .item {
    flex: 1;
    padding: 0.5rem;
  }
  .quantity h3 {
    padding: 0;
    margin: -7px 1rem;
  }
  img {
    width: 100px;
    border: 2px solid var(--greyColor);
  }
  h3 {
    font-weight: 300;
  }
`;
