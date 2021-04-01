import React, { useState, useEffect } from "react";
import Card from "../Utility/Card";
import { getPopulerShows } from "../../Services/tv";

const TvList = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getPopulerShows()
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="list">
      {movies &&
        movies.map((movie, index) => {
          return (
            <Card
              key={index}
              id={movie.id}
              title={movie.name}
              relDate={movie.first_air_date}
              path={movie.poster_path}
              rating={movie.vote_average}
              isTV={true}
            />
          );
        })}
    </div>
  );
};

export default TvList;
