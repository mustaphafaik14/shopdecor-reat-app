import React, { Component } from 'react';
import styled from 'styled-components';
import { FaMapMarkedAlt, FaPhoneVolume, FaEnvelope } from 'react-icons/fa';

export default class Contact extends Component {
  state = {
    items: [
      {
        name: 'Address',
        icon: <FaMapMarkedAlt />,
        desc: '123 Street, Old Trafford, London, UK',
      },
      {
        name: 'Email Address',
        icon: <FaEnvelope />,
        desc: ' info@yourmail.com ',
      },
      { name: 'Phone', icon: <FaPhoneVolume />, desc: '+ 457 789 789 65' },
    ],
  };
  render() {
    return (
      <ContactWrapper>
        <div className="container">
          <div className="contact_wrapper ">
            <div className="contact_info">
              {this.state.items.map((el, index) => {
                return (
                  <div className="contact_info_item" key={index}>
                    <span>{el.icon}</span>
                    <h1>{el.name}</h1>
                    <p>{el.desc}</p>
                  </div>
                );
              })}
            </div>
            <div className="contact_form">
              <h3>get Into</h3>
              <form className="form">
                <div className="form_group">
                  <input className="form_control" placeholder="Your Name" />
                </div>
                <div className="form_group">
                  <input className="form_control" placeholder="Email" />
                </div>
                <div className="form_group">
                  <input className="form_control" placeholder="Subject" />
                </div>
                <div className="form_group">
                  <textarea
                    rows="10"
                    className="form_control"
                    placeholder="Message"
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </ContactWrapper>
    );
  }
}

const ContactWrapper = styled.section`
  .contact_wrapper {
    flex-direction: column;
  }
  .contact_info {
    display: grid;
    text-align: center;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-template-rows: 200px;
    grid-gap: 2rem;
  }
  .contact_info_item {
    padding: 1.5rem;
    height: 100%;
    box-shadow: -1px 2px 5px 0px rgba(232, 69, 69, 0.25);
  }
  .contact_info_item span {
    color: var(--primaryColor);
    font-size: 2.5rem;
  }
  .contact_info_item h1 {
    text-transform: uppercase;
    font-size: 0.9rem;
    color: var(--darkColor);
    letter-spacing: 1px;
  }
  .contact_form {
    padding: 2rem 0;
    width: 70%;
    margin: 0 auto;
  }
  .contact_form h3 {
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 2rem;
  }
  .form_group {
    width: 100%;
  }
  .form_group:not(:last-child) {
    margin-bottom: 1rem;
  }
  .form_control {
    width: 100%;
    padding: 1rem;
    font-family: 'Poppins', sans-serif;
    border: 0.15rem solid var(--greyColor);
    font-weight: 500;
    transition: all.25s cubic-bezier(0.165, 0.84, 0.44, 1);
    text-transform: capitalize;
  }
  .form_control:focus {
    border: 0.15rem solid var(--primaryColor);
  }
  @media (max-width: 760px) {
    .contact_form {
      width: 100%;
    }
  }
`;
