import React, { useContext } from "react";
import { MovieContext } from "../../context/Movie.context";
import MovieInfo from "./MovieInfo.Component";
import { BsFillStarFill } from "react-icons/bs";

const MovieHero = () => {
  const { movie } = useContext(MovieContext);

  const genres = movie.genres?.map(({ name }) => name).join(", ");

  // console.log(genres);
  return (
    <>
      <div>
        {/* Mobile and Tab Screen (sm and md) */}
        <div className="lg:hidden w-full">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt="Cover Poster"
            className="m-4  rounded"
            style={{ width: "calc(100%-50vw)", height: "350px"}}
          />
        </div>
        <div className="flex flex-col gap-3 lg:hidden">
          <div className="flex flex-col-reverse gap-3 px-4 my-3">
            <div className="text-black flex flex-col gap-2 md:px-4">
            <span className="text-red-500 flex flex-row gap-3 text-3xl">
            <BsFillStarFill />
            <h3 className="text-2xl text-red font-sans font-bold">
              7.5/10 |
            </h3>
            <h3 className="text-2xl text-red font-sans font-bold">4.4k rating</h3>
          </span>
              <h4>Kannada, English, Hindi, Telgu, Tamil</h4>
              <h4>
                {movie.runtime} min | {genres}
              </h4>
            </div>
          </div>
          <div className="flex items-center gap-3 md:px-4 md:w-screen text-xl px-4">
            <button className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg">
              Rent $149
            </button>
            <button className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg">
              Buy $999
            </button>
          </div>
        </div>

        {/* Large Screen Size i.e., Laptop */}
        <div
          className="relative hidden w-full lg:block"
          style={{ height: "28rem" }}
        >
          <div
            className="absolute z-10 w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgb(34,34,34) 24.95%, rgb(34,34,34) 38.2%, rgba(34,34,34,0.03) 97.47%, rgb(34, 34, 34) 100%)",
            }}
          >
            <div className="absolute z-30 left-24 top-10 flex items-center gap-10">
              <div className="w-64 h-96">
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt="Movie Poster"
                  className="w-full h-full rounded-lg
                "
                />
              </div>
              <div className="">
                <MovieInfo movie={movie} />
              </div>
            </div>
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt="Backdrop poster"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieHero;
