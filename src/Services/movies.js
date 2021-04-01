import Axios from "axios";
import API_KEY from "./config";

const BASE_URL = "https://api.themoviedb.org/3";
const LANG = "language=en-US&page=1";

/**
 *
 * @param {String} mid - movie id
 * @returns Movie Details
 */

export const getMovieDetailsById = async (mid) =>
  await Axios.get(`${BASE_URL}/movie/${mid}?api_key=${API_KEY}&language=en-US`);

/**
 *
 * @param {String} mid movie id
 * @returns Cast And Crew details
 */
export const getCredits = async (mid) =>
  await Axios.get(
    `${BASE_URL}/movie/${mid}/credits?api_key=${API_KEY}&language=en-US`
  );

/**
 *
 * @returns Lists of Movies Playing In Theatres
 */
export const getNowPlayingMovies = async () => {
  return await Axios.get(`
${BASE_URL}/movie/now_playing?api_key=${API_KEY}&${LANG}`);
};

/**
 *
 * @returns List of current populer movies
 */
export const getPopulerMovies = async () => {
  const res = await Axios.get(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&${LANG}`,
    {
      headers: {
        Accept: "application/json",
      },
    }
  );
  return res;
};

/**
 *
 * @returns  List of Top Rated Movies in IMDB
 */
export const getTopRatedMovies = async () => {
  return await Axios.get(
    `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&${LANG}`
  );
};

/**
 *
 * @returns  List of Upcoming movies in theatres
 */
export const getUpcommingMovies = async () => {
  return await Axios.get(
    `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&${LANG}`
  );
};

/**
 *
 * @param {String} mid - movie id
 * @returns  list of recommended movies
 */
export const getRecommendedMovies = async (mid) =>
  await Axios.get(
    `${BASE_URL}/movie/${mid}/recommendations?api_key=${API_KEY}&${LANG}`
  );

/**
 *
 * @param {String} mid = movie id
 * @returns  List of similer movies of a movies
 */
export const getSimilerMovies = async (mid) =>
  await Axios.get(
    `${BASE_URL}/movie/{movie_id}/similar?api_key=${API_KEY}&${LANG}`
  );

/**
 *
 * @param {String} title - movie title
 * @returns  - List of response movies
 */
export const searchMovies = async (title) => {
  return await Axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&${LANG}&include_adult=false&query=${title}`
  );
};

/**
 *
 * @param {String} id - movie id or person id
 * @returns Image of movie or actors
 */
export const getImage = (id) => `https://image.tmdb.org/t/p/original/${id}`;

/**
 *
 * @param {String} mid - Movie Id
 * @returns  trailer information
 */
export const getVideos = async (mid) =>
  await Axios.get(`${BASE_URL}/movie/${mid}/videos?api_key=${API_KEY}&${LANG}`);
