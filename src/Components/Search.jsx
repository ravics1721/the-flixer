import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Header from "./Utility/Header";
import { getImage, searchMovies } from "../Services/movies";
import "./Style/search.css";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const Search = () => {
  const query = useQuery();
  const [results, setResults] = useState([]);
  const [mTitle, setMTitle] = useState("");
  useEffect(() => {
    if (query.get("query")) {
      const title = query.get("query");
      setMTitle(title);
      searchMovies(title)
        .then((res) => {
          setResults(res.data.results);
        })
        .catch((err) => console.log(err));
    }
  }, []); //eslint-disable-line react-hooks/exhaustive-deps
  function handleSearch(e) {
    e.preventDefault();
    searchMovies(mTitle)
      .then((res) => {
        setResults(res.data.results);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <Header />
      <br />
      <SearchBox
        onchange={(e) => setMTitle(e.target.value)}
        onsubmit={handleSearch}
        value={mTitle}
      />

      {results?.map((res) => {
        return (
          <SCard
            id={res.id}
            title={res.title}
            date={res.release_date}
            overview={res.overview}
            imgPath={res.poster_path}
          />
        );
      })}
    </div>
  );
};

export default Search;

function SCard({ id, title, date, overview, imgPath }) {
  return (
    <div className="s-card sd2">
      <Link to={`/movie/${id}`}>
        <div
          className="s-img"
          style={{ backgroundImage: `url(${getImage(imgPath)})` }}
        ></div>
      </Link>
      <div className="s-details">
        <h2 className="s-name">
          <Link to={`/movie/${id}`} className="s-link">
            {title}
          </Link>
        </h2>
        <p className="s-date">{date}</p>
        <p className="s-overview">{overview}</p>
      </div>
    </div>
  );
}

function SearchBox({ onsubmit, onchange, value }) {
  return (
    <div className="s-box">
      <form onSubmit={onsubmit}>
        <input
          onChange={onchange}
          className="s-input-area"
          type="search"
          required
          placeholder="Search movie by name..."
          value={value}
        />
        <input className="s-search-btn" type="submit" value="SEARCH" />
      </form>
    </div>
  );
}
