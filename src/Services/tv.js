import Axios from "axios";
import API_KEY from "./config";

const BASE_URL = "https://api.themoviedb.org/3";
const LANG = "language=en-US";

/**
 *
 * @param {String} tid - Tv series id
 * @returns  details of tv series or movies
 */
export const getDetails = async (tid) =>
  await Axios.get(`${BASE_URL}/tv/${tid}?api_key=${API_KEY}&${LANG}`);

/**
 *
 * @param {String} tid tv show id
 * @returns Cats and Crew details
 */
export const getCredits = async (tid) =>
  await Axios.get(`${BASE_URL}/tv/${tid}/credits?api_key=${API_KEY}&${LANG}`);

/**
 *
 * @returns  List of latests shows
 */
export const getLatestShows = async () =>
  await Axios.get(`${BASE_URL}/tv/latest?api_key=${API_KEY}&${LANG}`);

/**
 *
 * @returns  List of populer shows
 */
export const getPopulerShows = async () =>
  await Axios.get(`${BASE_URL}/tv/popular?api_key=${API_KEY}&${LANG}&page=1`);

/**
 *
 * @returns  List of top rated shows
 */
export const getTopRatedShow = async () =>
  await Axios.get(`${BASE_URL}/tv/top_rated?api_key=${API_KEY}&${LANG}&page=1`);

/**
 *
 * @param {String} tid - show title
 * @returns  Trailer details of the show
 */
export const getVideos = async (tid) =>
  await Axios.get(`${BASE_URL}/tv/${tid}/videos?api_key=${API_KEY}&${LANG}`);

/**
 *
 * @param {String} tid Show title
 * @returns  List of similer shows of a show
 */
export const getSimilerShows = async (tid) =>
  await Axios.get(
    `${BASE_URL}/tv/${tid}/similar?api_key=${API_KEY}&${LANG}&page=1`
  );

/**
 *
 * @param {String} title show title
 * @returns  list of shows that title
 */
export const searchTvShow = async (title) =>
  await Axios.get(
    `${BASE_URL}/search/tv?api_key=${API_KEY}&${LANG}&page=1&include_adult=false&query=${title}`
  );

//

// const imgArr = [
//   "/pcDc2WJAYGJTTvRSEIpRZwM3Ola.jpg",
//   "/iopYFB1b6Bh7FWZh3onQhph1sih.jpg",
//   "/egg7KFi18TSQc1s24RMmR9i2zO6.jpg",
//   "/vfuzELmhBjBTswXj2Vqxnu5ge4g.jpg",
//   "/fev8UFNFFYsD5q7AcYS8LyTzqwl.jpg",
//   "/JB17sIsU53NuWVUecOwrCA0CUp.jpg",
//   "/qZtAf4Z1lazGQoYVXiHOrvLr5lI.jpg",
//   "/gL8myjGc2qrmqVosyGm5CWTir9A.jpg",
//   "/suopoADq0k8YZr4dQXcU6pToj6s.jpg",
//   "/9ijMGlJKqcslswWUzTEwScm82Gs.jpg",
// ];
