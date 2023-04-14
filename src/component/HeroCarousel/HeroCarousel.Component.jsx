import React, { useState } from "react";
import HeroSlider from "react-slick";

const HeroCarousel = () => {
  const [images, setImages] = useState([
    // images
  ]);
  return (
    <>
      <div className="lg:hidden">
        <HeroSlider />
        {images.map((image) => {
          <div className="w-full h-full md:h-80 py-3">
            <img
              src=""
              alt="heroBanner"
              className="w-full h-full rounded-md object-cover"
            />
          </div>;
        })}
      </div>
      <div className="hidden lg:block"></div>
    </>
  );
};

export default HeroCarousel;
