import React from 'react';
import { ProductsConsumer } from '../../context/Context';
import styled from 'styled-components';

export default function Services() {
  return (
    <ProductsConsumer>
      {(value) => {
        const { services } = value;
        return (
          <ServicesWrapper>
            <div className="container">
              <div className="services_wrapper">
                {services.map((item, index) => {
                  return (
                    <div
                      className="service-item d-flex justify-content-center align-items-center"
                      key={index}
                    >
                      <div className="service-icon">{item.icon}</div>
                      <div className="service-content">
                        <h2>{item.name}</h2>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </ServicesWrapper>
        );
      }}
    </ProductsConsumer>
  );
}

const ServicesWrapper = styled.section`
  .services_wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 2rem;
  }
  .service-item {
    padding: 2rem 1.5rem;
    background: var(--greyColor);
  }
  .service-icon {
    font-size: 4rem;
    margin-right: 1.5rem;
    color: var(--primaryColor);
    margin-top: 1rem;
  }
  .service-item h2 {
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 1px;
  }
  .service-item p {
    text-transform: capitalize;
    font-weight: 300;
    font-size: 1.1rem;
  }
`;
