import React from "react";
import Poster from "../Poster/Poster.Component";

const PlayPoster = (props) => {
  const { posters, title, subtitle, isDark } = props;

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

      <div className="flex">
        {posters.slice(0,4).map((each, index) => (
          <div key={index} style={{ display: "inline-flex" }}>
            <Poster {...each} isDark={isDark} />
          </div>
        ))} 
      </div>
    </>
  );
};

export default PlayPoster;
