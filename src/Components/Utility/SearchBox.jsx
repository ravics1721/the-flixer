import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { getImage } from "../../Services/movies";
import "../Style/search.css";

const Search = () => {
  const history = useHistory();
  const [title, setTitle] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    history.push(`/search?query=${title}`);
  }

  return (
    <div
      className="s-parent"
      style={{
        backgroundImage: `url(${getImage("9ijMGlJKqcslswWUzTEwScm82Gs.jpg")})`,
      }}
    >
      <h1 className="s-title">Welcome.</h1>
      <h1 className="s-title2">
        Thousands of movies, Tv shows and people to discover, Explore now.
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="s-input-box">
          <input
            onChange={(e) => {
              setTitle(e.target.value);
              console.log(title);
            }}
            className="s-input"
            type="search"
            placeholder="Search for movies..."
            value={title}
            required
          />
          <span className="s-btn-box">
            <buttton className="s-btn" type="submit">
              Search
            </buttton>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Search;
