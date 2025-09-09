import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Slidebar() {
  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
  };
  return (
    <>
      <div className="slider-container mt-11 shadow-md">
        <Slider {...settings}>
          <div>
            <img
              src="house1.png"
              alt=""
              className="w-full h-64 object-contain"
            />
          </div>
          <div>
            <img
              src="house2.png"
              alt=""
              className="w-full h-64 object-contain"
            />
          </div>
          <div>
            <img
              src="house3.png"
              alt=""
              className="w-full h-64 object-contain"
            />
          </div>
          <div>
            <img
              src="house4.png"
              alt=""
              className="w-full h-64 object-contain"
            />
          </div>
          <div>
            <img
              src="house5.png"
              alt=""
              className="w-full h-64 object-contain"
            />
          </div>
          <div>
            <img
              src="house6.png"
              alt=""
              className="w-full h-64 object-contain"
            />
          </div>
        </Slider>
        <button className="px-4 py-3 bg-teal-500 rounded-md absolute right-16">
          View more
        </button>
      </div>
    </>
  );
}
export default Slidebar;
