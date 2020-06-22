import React from 'react';
import styled from 'styled-components';
import Title from '../Title';
import { ProductsConsumer } from '../../context/Context';

const getUnique = (items, type) => {
  return [...new Set(items.map((el) => el[type]))];
};

export default function FilterProducts() {
  return (
    <ProductsConsumer>
      {(value) => {
        let { storedProducts, maxPrice, minPrice, price, handleChange } = value;
        let categories = getUnique(storedProducts, 'category');
        categories = ['all', ...categories];
        categories = categories.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          );
        });
        return (
          <FilterWrapper>
            <div className="container">
              <Title title="Our Products" />
              <div className="filter_wrapper">
                <div className="form_group d-flex">
                  <label htmlFor="search">search</label>
                  <input
                    type="text"
                    placeholder="Search By Product Name"
                    className="form_control"
                    name="search"
                    onChange={handleChange}
                  />
                </div>
                <div className="form_group d-flex ">
                  <label htmlFor="category">Prodcuts category</label>
                  <select
                    name="category"
                    className="select"
                    onChange={handleChange}
                  >
                    {categories}
                  </select>
                </div>
                <div className="form_group d-flex price">
                  <label htmlFor="price">Price</label>
                  <input
                    type="range"
                    className=" range_input"
                    name="price"
                    onChange={handleChange}
                    value={price}
                    max={maxPrice}
                    min={minPrice}
                  />
                  <span className="min">{minPrice}$</span>
                  <span className="max">{maxPrice}$</span>
                </div>
              </div>
            </div>
          </FilterWrapper>
        );
      }}
    </ProductsConsumer>
  );
}

const FilterWrapper = styled.section`
  .form_group {
    flex-direction: column;
  }
  .filter_wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 2rem;
  }
  .select {
    padding: 1rem;
    border: 0.15rem solid var(--greyColor);
    cursor: pointer;
  }
  .select:focus {
    border: 0.15rem solid var(--primaryColor);
  }
  label {
    text-transform: uppercase;
    margin-bottom: 0.5rem;
    letter-spacing: 1px;
    font-weight: 600;
  }
  .range_input {
    width: 100%;
    -webkit-appearance: none;
    appearance: none;
    outline: 0;
    height: 0.1rem;
    margin-top: 1.5rem;
    background-color: var(--greyColor);
  }
  .range_input::-webkit-slider-thumb {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    height: 1rem;
    width: 1rem;
    cursor: pointer;
    background-color: var(--primaryColor);
  }
  .price {
    position: relative;
  }
  .min {
    position: absolute;
    bottom: 0;
    font-weight: 700;
    left: 0;
  }
  .max {
    position: absolute;
    bottom: 0;
    font-weight: 700;
    right: 0;
  }
`;
