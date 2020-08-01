import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { MovieContext } from "./MovieContext";

function Nav() {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/Movies">Movies</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
