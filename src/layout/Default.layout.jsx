import React from "react";
import Navbar from "../components/Navbar/Navbar.Component";
import MenuNavComponent from "../components/Navbar/MenuNav.Component";
import FooterComponent from "../components/Footer/Footer.Component";

const DefaultLayoutHoc =
  (Component) =>
  ({ ...props }) => {
    return (
      <div className="overflow-x-hidden">
        <Navbar />
        <MenuNavComponent/>
        <Component {...props} />
        <FooterComponent />
      </div>
    );
  };

export default DefaultLayoutHoc;