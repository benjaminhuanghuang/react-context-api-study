import React, { useState, useContext } from "react";

import {MovieContext} from './MovieContext'

import Movie from "./Movie";

function MovieList() {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      {movies.map((movie, i) => (
        <Movie key={movie.id} name={movie.name} price={movie.price}/>
      ))}
    </div>
  );
}

export default MovieList;
