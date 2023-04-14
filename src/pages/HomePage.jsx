import React, { useState } from "react";

// HOC
import DefaultlayoutHOC from "../layouts/Default.layout";

// Components
import PosterSlider from "../component/PosterSlider/PosterSlider.Component";
import HeroCarousel from "../component/HeroCarousel/HeroCarousel.Component";
import EntertainmentCardSlider from "../component/Entertainment/EntertainmentCard.component";

const HomePage = () => {
  const [recommendedMovies, setRecommendedMovies] = useState();
  const [premierMovies, setPremierMovies] = useState();
  const [onlineStreamEvents, setOnlineStreamEvents] = useState();
  return (
    <>
      <HeroCarousel />
      <div className="container mx-auto px-4 md:px-12 my-8">
        <h1 className="text-2xl font-bold text-gray-800 md:ml-3 ml-0 my -3">
          The best of Entertainment
        </h1>
        <EntertainmentCardSlider />
      </div>

      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          title="Recommended Movies"
          subject="List Of Recommended Movies"
          posters={recommendedMovies}
          isDark={false}
        />
      </div>
      <div className="bg-premier-800 py-12">
        <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
          <div className="hidden md:flex">
            <img
            // data:image/png;base64,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
              src=""
              className=" w-full h-full"
              alt="RuPay Logo"
            />
          </div>
          <PosterSlider
            title="Premiers"
            subject="Brand New releases every Friday"
            posters={premierMovies}
            isDark={true}
          />
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          title="Online Streaming Event"
          subject="Online Stream Event"
          posters={onlineStreamEvents}
          isDark={false}
        />
      </div>
    </>
  );
};

export default DefaultlayoutHOC(HomePage);
