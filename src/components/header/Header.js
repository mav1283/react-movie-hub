import React from "react";
import { FcFilmReel } from "react-icons/fc";

function Header() {
  return (
    <header className="App-header">
      <h1>
        <FcFilmReel />
        Movie<span className="orange">hub</span>
      </h1>
    </header>
  );
}

export default Header;
