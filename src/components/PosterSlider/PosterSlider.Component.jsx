import React from "react";
import Slider from "react-slick";
import Poster from "../Poster/Poster.Component";

const PosterSlider = (props) => {
    const { posters, title, subtitle, isDark, config } = props;
    if (Array.isArray(posters) && posters.length > 0) {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <>
        <div className="flex flex-col items-start sm:ml-3 my-2">
          <h3
            className={`text-2xl font-mono font-bold ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            {title}
          </h3>
          <p
            className={`text-sm font-sans ${
              isDark ? "text-white" : "text-gray-800"
            }`}
          >
            {subtitle}
          </p>
        </div>
        {config && (
          <Slider {...config}>
            {posters.map((each, index) => (
              <Poster {...each} isDark={isDark} key={index} />
            ))}
          </Slider>
        )}
        {!config && (
          <Slider {...settings}>
            {posters.map((each, index) => (
              <Poster {...each} isDark={isDark} key={index} />
            ))}
          </Slider>
        )}
      </>
    );
  }
};

export default PosterSlider;
