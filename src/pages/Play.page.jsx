import React from "react";
import DefaultLayoutHoc from "../layout/Default.layout";

// components
import Poster from "../components/Poster/Poster.Component";
import PlayFilters from "../components/PlayFilters/PlayFilters.Component";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.Component";


const PlayPage = () => {
  return (
    <>
      <HeroCarousel />
      <div className="container mx-auto overflow-x-hidden mx-0 px-0 my-2">
        <div className="row mx-0 px-0">
          <div className="col-3 hidden md:flex lg:flex">
            <div className="lg:w-1/4 p-4 bg-white rounded">
              <h2 className="text-2xl font-bold mb-4">Filters</h2>
              <div>
                <PlayFilters
                  title="Date"
                  tags={["Today", "Tomorrow", "This Weekend"]}
                />
              </div>
              <div>
                <PlayFilters
                  title="Language"
                  tags={["English", "Kannada", "Hindi", "Telgu"]}
                />
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="w-full flex flex-col lg:flex-col gap-4">
              <h2 className="text-2xl  font-bold mb-4">Plays in Hospet</h2>
              <div className="flex flex-wrap">
                <div className="w-1/2 md:w-2/4 lg:w-4/12 my-3 flex items-center">
                  <Poster
                    isPlay={true}
                    src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-so-rude-of-me-by-swati-sachdeva-0-2022-9-4-t-6-10-37.jpg"
                    title="So Rude of Me By Sweets"
                    subtitle="Comedy Shows | English, Kannada | 18yrs+ | 2hr 30mins"
                  />
                </div>
                <div className="w-1/2 md:w-2/4 lg:w-4/12 my-3 flex items-center">
                  <Poster
                    isPlay={true}
                    src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-suhani-shah-kahaani-india-tour-0-2022-8-29-t-12-36-14.jpg"
                    title="So Rude of Me By Sweets"
                    subtitle="Comedy Shows | English, Kannada | 18yrs+ | 2hr 30mins"
                  />
                </div>
                <div className="w-1/2 md:w-2/4 lg:w-4/12 my-3 flex items-center">
                  <Poster
                    isPlay={true}
                    src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-daddy-kool-by-atul-khatri-0-2022-8-16-t-10-37-17.jpg"
                    title="So Rude of Me By Sweets"
                    subtitle="Comedy Shows | English, Kannada | 18yrs+ | 2hr 30mins"
                  />
                </div>
                <div className="w-1/2 md:w-2/4 lg:w-4/12 my-3 flex items-center">
                  <Poster
                    isPlay={true}
                    src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-sunburn-arena-ft-dj-snake-delhi-ncr-0-2022-8-19-t-11-31-17.jpg"
                    title="So Rude of Me By Sweets"
                    subtitle="Comedy Shows | English, Kannada | 18yrs+ | 2hr 30mins"
                  />
                </div>
                <div className="w-1/2 md:w-2/4 lg:w-4/12 my-3 flex items-center">
                  <Poster
                    isPlay={true}
                    src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-so-rude-of-me-by-swati-sachdeva-0-2022-9-4-t-6-10-37.jpg"
                    title="So Rude of Me By Sweets"
                    subtitle="Comedy Shows | English, Kannada | 18yrs+ | 2hr 30mins"
                  />
                </div>
                <div className="w-1/2 md:w-2/4 lg:w-4/12 my-3 flex items-center">
                  <Poster
                    isPlay={true}
                    src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-so-rude-of-me-by-swati-sachdeva-0-2022-9-4-t-6-10-37.jpg"
                    title="So Rude of Me By Sweets"
                    subtitle="Comedy Shows | English, Kannada | 18yrs+ | 2hr 30mins"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:col-12  md:hidden lg:hidden">
            <div className="lg:w-1/4 p-4 bg-white rounded">
              <h2 className="text-2xl font-bold mb-4">Filters</h2>
              <div>
                <PlayFilters
                  title="Date"
                  tags={["Today", "Tomorrow", "This Weekend"]}
                />
              </div>
              <div>
                <PlayFilters
                  title="Language"
                  tags={["English", "Kannada", "Hindi", "Telgu"]}
                />
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default DefaultLayoutHoc(PlayPage);
