import React, { Component } from "react";
import "./App.css";

import Red from "./demo/RGB";
import Red2 from "./demo/RGBContext";

import { MovieProvider } from "./MovieContext";
import Nav from "./Nav";
import MovieList from "./MovieList";
import AddMoive from "./AddMovie";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MovieProvider>
          <Nav />
          <MovieList />
          <AddMoive/>
        </MovieProvider>
      </div>
    );
  }
}

export default App;
