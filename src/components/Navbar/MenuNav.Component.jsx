import React from 'react'
import { Link } from "react-router-dom";

function NavSm() {
    return (
      <>
        <div className="text-white flex items-center justify-between">
        <div className="flex items-center w-1/2 gap-4">
          <Link
              to="/movies"
              className="text-gray-200 text-base text-sm flex items-center cursor-pointer hover:text-white"
            >
              Movies
            </Link>
            <Link
              to="#"
              className="text-gray-200 text-base text-sm flex items-center cursor-pointer hover:text-white"
            >
              Stream
            </Link>
            <Link
              to="#"
              className="text-gray-200 text-base text-sm flex items-center cursor-pointer hover:text-white"
            >
              Events
            </Link>
            <Link
              to="/plays"
              className="text-gray-200 text-base text-sm flex items-center cursor-pointer hover:text-white"
            >
              Plays
            </Link>
            <Link
              to="#"
              className="text-gray-200 text-base text-sm flex items-center cursor-pointer hover:text-white"
            >
              Sports
            </Link>
            <Link
              to="#"
              className="text-gray-200 text-base text-sm flex items-center cursor-pointer hover:text-white"
            >
              Activities
            </Link>
            <Link
              to="#"
              className="text-gray-200 text-base text-sm flex items-center cursor-pointer hover:text-white"
            >
              Buzz
            </Link>
          </div>
        </div>
      </>
    );
  }
  
  function NavLg() {
    return (
      <>
        <div className="container flex mx-auto px-4 items-center justify-between">
          <div className="flex items-center w-1/2 gap-4">
          <Link
              to="/movies"
              className="text-gray-200 text-base text-sm flex items-center cursor-pointer hover:text-white"
            >
              Movies
            </Link>
            <Link
              to="#"
              className="text-gray-200 text-base text-sm flex items-center cursor-pointer hover:text-white"
            >
              Stream
            </Link>
            <Link
              to="#"
              className="text-gray-200 text-base text-sm flex items-center cursor-pointer hover:text-white"
            >
              Events
            </Link>
            <Link
              to="/plays"
              className="text-gray-200 text-base text-sm flex items-center cursor-pointer hover:text-white"
            >
              Plays
            </Link>
            <Link
              to="#"
              className="text-gray-200 text-base text-sm flex items-center cursor-pointer hover:text-white"
            >
              Sports
            </Link>
            <Link
              to="#"
              className="text-gray-200 text-base text-sm flex items-center cursor-pointer hover:text-white"
            >
              Activities
            </Link>
            <Link
              to="#"
              className="text-gray-200 text-base text-sm flex items-center cursor-pointer hover:text-white"
            >
              Buzz
            </Link>
          </div>
          <div className="flex items-center gap-4">
          
            <Link
              to="#"
              className="text-gray-200 text-base flex text-sm items-center cursor-pointer hover:text-white"
            >
              ListYourShow
            </Link>
            <Link
              to="#"
              className="text-gray-200 text-base flex text-sm items-center cursor-pointer hover:text-white"
            >
              Corporates
            </Link>
            <Link
              to="#"
              className="text-gray-200 text-base flex text-sm items-center cursor-pointer hover:text-white"
            >
              Offers
            </Link>
            <Link
              to="#"
              className="text-gray-200 text-base flex text-sm items-center cursor-pointer hover:text-white"
            >
              Gift Cards
            </Link>
          </div>
        </div>
      </>
    );
  }
const MenuNavComponent = () => {
    return (
        <nav className="bg-darkBackground-800 px-4 py-2">
          {/* Mobile Screen NavBar */}
          <div className="md:hidden">
            <NavSm />
          </div>
          {/* Medium/Tab Screen NavBar */}
          <div className="hidden md:flex lg:hidden">
            <NavLg />
          </div>
          {/* Large Screen NavBar */}
          <div className="hidden md:hidden lg:flex">
            <NavLg />
          </div>
        </nav>
      );
}

export default MenuNavComponent