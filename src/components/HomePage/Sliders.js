import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sliderImg from '../../images/slide-1.jpg';
import sliderImg2 from '../../images/slide-2.jpg';
import sliderImg3 from '../../images/slide-3.jpg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default class Sliders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      settings: {
        dots: true,
        infinite: true,
        //autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'linear',
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
      items: [
        { img: sliderImg, title: 'Minimal Furniture Store' },
        { img: sliderImg2, title: 'Modern Living Room' },
        { img: sliderImg3, title: 'Luxury Interior shop' },
      ],
    };
  }

  render() {
    const { settings, items } = this.state;
    return (
      <SliderWrapper>
        <Slider {...settings}>
          {items.map((el, index) => {
            return (
              <div key={index} className="slide-item">
                <div
                  className="slide"
                  style={{
                    background: `linear-gradient(360deg, rgba(0, 0, 0,.5) 0%, rgba(65, 65, 65,.15) 90%),  
                    url("${el.img}") center/cover no-repeat`,
                  }}
                >
                  <div className="container d-flex align-items-center h-100 justify-content-center">
                    <div className="slider_content ">
                      <h1>{el.title}</h1>
                      <Link className="btn-primary" to="/products">
                        Shop now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </SliderWrapper>
    );
  }
}

const SliderWrapper = styled.div`
  .slide-item {
    height: 75vh;
  }
  .slide {
    height: 100%;
  }
  .slider_content {
    text-align: center;
  }
  .slider_content h1 {
    text-transform: uppercase;
    font-size: 3rem;
    font-weight: 800;
    margin: 0 auto;
    color: var(--whiteColor);
    letter-spacing: 1px;
    margin-bottom: 1rem;
  }
  .slick-dots {
    position: absolute;
    bottom: 0;
    padding-bottom: 1rem;
  }
  .slick-dots li button {
    margin: 0;
  }

  .slick-dots .slick-active {
    border: 2px solid var(--whiteColor);
    border-radius: 50%;
    background: var(--primaryColor);
  }
  .slick-dots li button::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 1rem;
    height: 1rem;
    content: '';
    background-color: var(--darkColor);
    border-radius: 50%;
    text-align: center;
    opacity: 0.5;
    color: black;
  }
  @media screen and (max-width: 767px) {
    .slider_content h1 {
      font-size: 2rem;
    }
  }
`;
