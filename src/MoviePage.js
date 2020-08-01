import React from "react";

import { MovieProvider } from "./MovieContext";
import MovieList from "./MovieList";
import AddMoive from "./AddMovie";


function MoviePage() {
  return (
    <div className="App">
      <MovieProvider>
        <MovieList />
        <AddMoive />
      </MovieProvider>
    </div>
  );
}

export default MoviePage;
