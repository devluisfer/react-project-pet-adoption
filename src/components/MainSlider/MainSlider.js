import React, { useState, useEffect } from "react";
import brands from "../../assets/brands";

const MainSlider = ({
  autoplay = false,
  autoplayInterval = 5000,
  slidesToShow = 2,
}) => {
  const brandActive = brands.filter((brand) => brand.status === "Active");



  const [index, setIndex] = useState(0);
  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + slidesToShow) % brandActive.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) =>
      prevIndex - slidesToShow < 0
        ? brandActive.length - slidesToShow
        : prevIndex - slidesToShow
    );
  };
  useEffect(() => {
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        nextSlide();
      }, autoplayInterval);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay, autoplayInterval]);

  //   const visibleBrands = brandActive.slice(startindex, endindex + 1);
  const getVisibleBrands = () => {
    const visibleBrands = [];
    for (let i = 0; i < slidesToShow; i++) {
      visibleBrands.push(brandActive[(index + i) % brandActive.length]);
    }
    return visibleBrands;
  };

  const visibleBrands = getVisibleBrands();

  return (
    <>
      <div className="flex justify-center items-center">
        <button
          onClick={prevSlide}
          className="rounded-full bg-[#b5f3ff] p-[10px] h-fit hover:bg-[#83eeff] disabled:hover:bg-[#b5f3ff]"
        >
          &#10094;
        </button>

        {/* <div className="flex justify-center px-[20px]">
          {visibleBrands.map((brand, index) => (
            <div className="flex" key={index} id={brand.id}>
              <img
                src={brand.images[0]}
                alt={brand.title}
                className="flex w-[220px] h-[200px] p-[10px]"
              />
            </div>
          ))}
            
        </div> */}
        <div className="flex justify-center px-[20px]">
          {visibleBrands.map((brand, index) => (
            <div className="flex" key={index} id={brand.id}>
              <img
                src={brand.images[0]}
                alt={brand.title}
                className="flex w-[220px] h-[200px] p-[10px]"
              />
            </div>
          ))}
        </div>

        <button
          onClick={nextSlide}

          className="rounded-full bg-[#b5f3ff] p-[10px] h-fit hover:bg-[#83eeff] disabled:hover:bg-[#b5f3ff]"
        >
          &#10095;
        </button>
      </div>
    </>
  );
};

export default MainSlider;
