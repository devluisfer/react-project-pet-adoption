import React, {useState} from 'react';
import Slider from 'react-slick';
import brands from "../../assets/brands";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SecondSlider = ({
  autoplay = true,
}) => {
  const brandActive = brands.filter((brand) => brand.status === "Active");

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: autoplay,
    autoplaySpeed: 1000,
    autoplayIntervall: 0,
    pauseOnHover: false,
    prevArrow: <div className="arrow-prev"></div>,
    nextArrow: <div className="arrow-next"></div>,
  };


  return (
    <Slider {...settings} className='w-[500px]'>
      {brandActive.map((brand, index) => (
        <div key={index} id={brand.id} className=" p-[10px]">
          <img
            src={brand.images[0]}
            alt={brand.title}
            className="w-full h-[200px]"
          />
        </div>
      ))}
    </Slider>
  );
};

export default SecondSlider;
