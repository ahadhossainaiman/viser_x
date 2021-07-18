import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default class Fasilities extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <>
        <Slider {...settings}>
        <div className='h-12 w-24 h-60 bg-gray-800 ml-20 mt-10'>
          <div className="content-center ml-40 mt-12">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-11 w-11" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" className="text-white"/>
</svg>
</div>
<div className='text-justify ml-24 mt-6'><h1 className="font-extrabold text-3xl text-white">SEO Optimize</h1></div>

          </div>


          <div className='h-12 w-screen h-80 bg-gray-800'>
          <div className="content-center ml-44 mt-12">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-11 w-11" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" className="text-white"/>
</svg>
         
</div>
<div className='text-justify ml-16'><h1 className="font-extrabold text-3xl mt-6 text-white">Well Documentation</h1></div>
          </div>
          <div className='h-12 w-52 h-60 bg-gray-800 -mx-16 mt-10'>
          <div className="content-center ml-52 mt-12">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-11 w-11" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" className="text-white"/>
</svg>
</div>
<div className='text-justify ml-32 mt-6 '><h1 className="font-extrabold text-3xl text-white">Fully Responsive</h1></div>>
          </div>
          </Slider>
      </>
    );
  }
}