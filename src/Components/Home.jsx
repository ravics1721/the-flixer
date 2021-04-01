import React from "react";
import Header from "./Utility/Header";
import SearchBox from "./Utility/SearchBox";
import MovieList from "./List/MovieList";
import TvList from "./List/TvList";
import Footer from "./Utility/Footer";
import "./Style/home.css";

const Home = () => {
  return (
    <div>
      <Header />
      <SearchBox />
      <div className="h-popular-section">
        <h1 className="hm-title">What's Popular</h1>
        <MovieList />
      </div>
      <div className="h-popular-section">
        <h1 className="hm-title">What's Top on TV</h1>
        <TvList />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
