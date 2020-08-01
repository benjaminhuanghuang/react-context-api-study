import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";
import { MovieProvider } from "./MovieContext";

import Red from "./demo/RGB";
import Red2 from "./demo/RGBContext";

import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import MoviePage from "./MoviePage";

function App() {
  return (
    <MovieProvider>
      <Router>
        <Nav />
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/movies" component={MoviePage}></Route>
      </Router>
    </MovieProvider>
  );
}

export default App;
