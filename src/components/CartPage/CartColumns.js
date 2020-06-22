import React from 'react';
import styled from 'styled-components';
export default function CartColumns() {
  return (
    <ColumnsWrapper className="columns">
      <div className="item">
        <h3>Product</h3>
      </div>
      <div className="item">
        <h3>Title</h3>
      </div>
      <div className="item">
        <h3>Price</h3>
      </div>
      <div className="item">
        <h3>Quantity</h3>
      </div>
      <div className="item">
        <h3>Subtotal</h3>
      </div>
      <div className="item">
        <h3>Remove</h3>
      </div>
    </ColumnsWrapper>
  );
}

const ColumnsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  @media (max-width: 900px) {
    display: none;
  }
  .item {
    flex: 1 0 16%;
    max-width: 16%;
    padding: 0.5rem;
  }
  h3 {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 0.9rem;
    letter-spacing: 1px;
  }
`;
