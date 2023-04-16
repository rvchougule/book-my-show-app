import React, { useState } from "react";
import HeroSlider from "react-slick";
import { NextArrow, PrevArrow } from "./Arrows.Components";

const HeroCarousel = () => {
  const [images] = useState([
    {
      backdrop_path : "https://assets-in.bmscdn.com/promotions/cms/creatives/1681123745909_webbannernpa.jpg",
    },
    {
      backdrop_path :"https://assets-in.bmscdn.com/promotions/cms/creatives/1681379292848_miwebold.jpg",
    },
    {
      backdrop_path : "https://assets-in.bmscdn.com/promotions/cms/creatives/1681215782359_freeaccessweb.jpg",
    },
    {
      backdrop_path:"https://assets-in.bmscdn.com/promotions/cms/creatives/1681275775568_2plus1web.jpg",
    },
    
  ]);

  const settingsLG = {
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    slideToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    
    autoplaySpeed: 4000,
    cssEase: "linear",
  };

  const settings = {
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    slideToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <div className="lg:hidden">
        <HeroSlider {...settings}>
          {images.map((images, index) => (
            <div className="w-full h-56 md:h-80 py-3" key={index}>
              <img
                src={`${images.backdrop_path}`}
                alt="Hero Banner"
                className="w-full h-full rounded-md object-cover"
              />
            </div>
          ))}
        </HeroSlider>
      </div>
      <div className="hidden lg:block">
        <HeroSlider {...settingsLG}>
          {images.map((images, index) => (
            <div className="w-full h-96 px-2 py-3" key={index}>
              <img
                src={`${images.backdrop_path}`}
                alt="Hero Banner"
                className="w-full h-full rounded-md object-cover"
              />
            </div>
          ))}
        </HeroSlider>
      </div>
    </>
  );
};

export default HeroCarousel;
