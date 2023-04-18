import React from "react";
import MovieNavbar from "../components/Navbar/MovieNavbar.Component";
import MenuNavComponent from "../components/Navbar/MenuNav.Component";

const MovieLayoutHoc =
  (Component) =>
  ({ ...props }) => {
    return <>
    <div className="overflow-x-hidden">
        <MovieNavbar />
        <MenuNavComponent />
        <Component {...props} />
        <div>Footer</div> 
    </div>
    </>
  };

export default MovieLayoutHoc;
