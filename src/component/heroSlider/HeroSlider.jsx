import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import banner_2 from '../../image/banner1-5.jpg'
import banner_1 from '../../image/banner1-4.jpg'

export default class VerticalMode extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      beforeChange: function(currentSlide, nextSlide) {
        console.log("before change", currentSlide, nextSlide);
      },
      afterChange: function(currentSlide) {
        console.log("after change", currentSlide);
      }
    };
    return (
      <div style={{height:'500px'}}>
        <Slider {...settings}>
            <div>
            <img src={banner_1} alt="" />
            </div>
          <div>
          <img src={banner_2} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}