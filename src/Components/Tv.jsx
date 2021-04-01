import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./Utility/Header";
import { getDetails, getVideos, getCredits } from "../Services/tv";
import { getImage } from "../Services/movies";
import "./Style/movie.css";

const Tv = () => {
  const { tid } = useParams();
  const [tvshow, setTvshow] = useState({});
  const [key, setKey] = useState("");
  const [genres, setGenres] = useState([]);
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    if (tid) {
      getDetails(tid)
        .then((res) => {
          console.log(res.data);
          setTvshow(res.data);
          setGenres(res.data.genres);
        })
        .catch((err) => console.log(err.message));
    }
  }, []); //eslint-disable-line
  useEffect(() => {
    getVideos(tid)
      .then((res) => {
        setKey(res.data.results[0].key);
      })
      .catch((err) => console.log(err));
  }, []); //eslint-disable-line
  useEffect(() => {
    getCredits(tid)
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
        style={{ backgroundImage: `url(${getImage(tvshow.backdrop_path)})` }}
      >
        <div className="m-parent">
          <div
            className="m-img"
            style={{ backgroundImage: `url(${getImage(tvshow.poster_path)})` }}
          ></div>
          <div className="m-details m-box">
            <h1 className="m-title">
              {tvshow.name} ({tvshow.first_air_date?.slice(0, 4)})
            </h1>
            <p className="m-tgr">
              {tvshow.first_air_date} ⚫
              {genres.map((gnr, index) => {
                const len = genres.length;
                return (
                  <span>
                    {gnr.name}
                    {index !== len ? ", " : " "}
                  </span>
                );
              })}
              ⚫ {tvshow.episode_run_time} min
            </p>
            <div className="m-row">
              <div class="rating m-rt">{tvshow.vote_average}⭐</div>
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
            <p className="m-tagline">{tvshow?.tagline}</p>
            <h4 className="m-ow">Overview</h4>
            <p className="overview">{tvshow.overview}</p>
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

export default Tv;
