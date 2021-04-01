import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Utility/Header";
import {
  getMovieDetailsById,
  getImage,
  getVideos,
  getCredits,
} from "../Services/movies";
import "./Style/movie.css";

const Movie = () => {
  const { mid } = useParams();
  const [movie, setMovie] = useState({});
  const [key, setKey] = useState("");
  const [genres, setGenres] = useState([]);
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    if (mid) {
      getMovieDetailsById(mid)
        .then((res) => {
          console.log(res.data);
          setMovie(res.data);
          setGenres(res.data.genres);
        })
        .catch((err) => console.log(err.message));
    }
  }, []); //eslint-disable-line
  useEffect(() => {
    getVideos(mid)
      .then((res) => {
        setKey(res.data.results[0].key);
      })
      .catch((err) => console.log(err));
  }, []); //eslint-disable-line
  useEffect(() => {
    getCredits(mid)
      .then((res) => {
        console.log(res.data);
        setCasts(res.data.cast);
      })
      .catch((err) => console.log(err));
  }, []); //eslint-disable-line
  return (
    <div>
      <Header />
      <div
        className="m-custom-bg"
        style={{ backgroundImage: `url(${getImage(movie.backdrop_path)})` }}
      >
        <div className="m-parent">
          <div
            className="m-img"
            style={{ backgroundImage: `url(${getImage(movie.poster_path)})` }}
          ></div>
          <div className="m-details m-box">
            <h1 className="m-title">
              {movie.title} ({movie.release_date?.slice(0, 4)})
            </h1>
            <p className="m-tgr">
              {movie.release_date} ⚫
              {genres.map((gnr, index) => {
                const len = genres.length;
                return (
                  <span>
                    {gnr.name}
                    {index !== len ? ", " : " "}
                  </span>
                );
              })}
              ⚫ {movie.runtime} min
            </p>
            <div className="m-row">
              <div class="rating m-rt">{movie.vote_average}⭐</div>
              <div className="m-play">
                <a
                  className="mlink"
                  href={`https://www.youtube.com/watch?v=${key}`}
                  target="_blanck"
                >
                  <span class="ri-youtube-line ricon"></span>
                  Play Trailer
                </a>
              </div>
            </div>
            <p className="m-tagline">{movie?.tagline}</p>
            <h4 className="m-ow">Overview</h4>
            <p className="overview">{movie.overview}</p>
          </div>
        </div>
      </div>
      <div className="m-credits">
        <h3 style={{ marginLeft: "1.3rem" }}>Casts</h3>
        <div className="list">
          {casts?.map((cast) => {
            return (
              <div className="m-card">
                <div
                  className="m-card-img"
                  style={{
                    backgroundImage: `url(${getImage(cast.profile_path)})`,
                  }}
                ></div>
                <h4>{cast.name}</h4>
                <p>{cast.character}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Movie;
