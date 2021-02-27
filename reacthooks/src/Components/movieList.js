import React from "react";
import Cardi from "./Card";
import "../movieList.css";

const MovieList = ({ movies }) => {
  return (
    <>
      {movies.map((movie, i) => (
        <Cardi movie={movie} key={i} />
      ))}
    </>
  );
};
export default MovieList;
