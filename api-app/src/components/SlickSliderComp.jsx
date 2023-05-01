import React, { Component } from "react";
import Slider from "react-slick";

export default function SlickSliderComp() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    dotsClass: "dots_custom"
  };

  const pictures = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg'];

    return (
      <div className="slider">
        <Slider {...settings}>
          {
            pictures.map( (pic) => (
              <div>
                <img 
                  src={require(`../img/${pic}`)} 
                  alt="" 
                  className="sliderimg"
                />
              </div>
            ) )
          }
        </Slider>
      </div>
    );
  }