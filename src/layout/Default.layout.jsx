import React from "react";
import Navbar from "../components/Navbar/Navbar.Component";
import MenuNavComponent from "../components/Navbar/MenuNav.Component";

const DefaultLayoutHoc =
  (Component) =>
  ({ ...props }) => {
    return (
      <div>
        <Navbar />
        <MenuNavComponent/>
        <Component {...props} />
        <div>Footer</div>
      </div>
    );
  };

export default DefaultLayoutHoc;