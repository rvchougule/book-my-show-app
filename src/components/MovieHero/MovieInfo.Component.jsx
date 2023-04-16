import React, { useState, useContext } from "react";
import { MovieContext } from "../../context/Movie.context";
import PaymentModal from "../PaymentModal/Payment.Component";
import { BsFillStarFill } from "react-icons/bs";

const MovieInfo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [price, setPrice] = useState(0);

  const { movie } = useContext(MovieContext);

  const genres = movie.genres?.map(({ name }) => name).join(", ");

  const rentMovie = () => {
    setIsOpen(true);
    setPrice(149);
  };

  const buyMovie = () => {
    setIsOpen(true);
    setPrice(999);
  };

  return (
    <>
      <PaymentModal setIsOpen={setIsOpen} isOpen={isOpen} price={price} />;
      <div className="flex flex-col  max-w-3xl gap-8">
        <h1 className="text-white flex flex-col text-5xl font-bold">
          {movie.original_title}
        </h1>
        <div className="text-white flex flex-col gap-2">
          <span className="text-red-500 flex flex-row gap-3 text-3xl">
            <BsFillStarFill />
            <h3 className="text-2xl text-white font-sans font-bold">7.5/10 |</h3>
            <h3 className="text-xl text-white mt-2 font-sans">4.4k rating</h3>
          </span>
          <h4>Kannada, English, Hindi, Telgu, Tamil</h4>
          <h4>
            {movie.runtime} min | {genres}
          </h4>
        </div>
        <div className="flex items-center gap-3 md:px-4 md:w-screen text-xl px-4">
          <button
            onClick={rentMovie}
            className="bg-red-500  py-3 text-white font-semibold rounded-lg"
          >
            Rent $149
          </button>
          <button
            onClick={buyMovie}
            className="bg-red-500  py-3 text-white font-semibold rounded-lg"
          >
            Buy $999
          </button>
        </div>
      </div>
    </>
  );
};

export default MovieInfo;
