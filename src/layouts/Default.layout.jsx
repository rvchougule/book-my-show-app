import React from "react";
import Navbar from "../component/Navbar/Navbar.Component";

const DefaultlayoutHOC =
  (Component) =>
  ({ ...props }) => {
    return (
      <div>
        <Navbar />
        <Component {...props} />
        <div>footer</div>
      </div>
    );
  };

export default DefaultlayoutHOC;
