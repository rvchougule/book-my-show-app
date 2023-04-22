import React from "react";

function NavLg() {
  return (
    <>
      <div className="mx-0 h-full w-full items-center justify-between flex flex-col bg-darkBackground-800">
        <div className="h-20 p-3.5 flex  bg-darkBackground-800 mx-0">
          <img
            className="h-9 p-1 "
            alt="hut"
            src="//in.bmscdn.com/webin/common/icons/hut.svg"
          />
          <div className="flex  ">
            <div className=" py-2 flex">
              <h5 className="text-white text-base decoration-8 font-sans font-bold my-0 mr-4 ml-1">
                List Your Show
              </h5>
              <h5 className="text-white text-base decoration-8 font-sans my-0 mr-4 ml-1">
                Got a show, event, activity or a great experience? Partner with
                us & listed on BookMyShow
              </h5>
            </div>
            <button className="text-white bg-red-400 px-4 py-2.5  rounded">
              Contact today!
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

// Main Component
const FooterComponent = () => {
  return (
    <nav className="h-full w-full bg-darkBackground-800">
      {/* Mobile Screen NavBar */}
      <div className="md:hidden">{/* <NavSm /> */}</div>
      {/* Medium/Tab Screen NavBar */}
      <div className="hidden md:flex lg:hidden">{/* <NavMd /> */}</div>
      {/* Large Screen NavBar */}
      <div className="hidden md:hidden lg:flex">
        <NavLg />
      </div>
    </nav>
  );
};

export default FooterComponent;
