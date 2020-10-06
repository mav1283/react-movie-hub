import React from "react";
import Header from "./components/header/Header";
import SearchBox from "./components/searchbox/SearchBox";
import MovieList from "./components/movielist/MovieList";
import Footer from "./components/footer/Footer";
import "./stylesheets/styles.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <SearchBox />
        <MovieList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
