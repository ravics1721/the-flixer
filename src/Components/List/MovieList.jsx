import React, { useState, useEffect } from "react";
import Card from "../Utility/Card";
import { getPopulerMovies } from "../../Services/movies";
import "../Style/movielist.css";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getPopulerMovies()
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="list">
      {movies &&
        movies.map((item, index) => {
          return (
            <Card
              key={index}
              id={item.id}
              title={item.title}
              rating={item.vote_average}
              relDate={item.release_date}
              path={item.poster_path}
            />
          );
        })}
    </div>
  );
};

export default MovieList;
