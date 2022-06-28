const API_KEY = '31a0dc93409a2f9cdc2f4d925fcba2bc';
const BASE_URL = 'https://api.themoviedb.org/3';
const TRENDING_MOVIE = '/trending/movie/day';
const SEARCH_MOVIES = '/search/movie';
const MOVIE_BY_ID = '/movie/';

async function fetchWithErrorHandling(url = '') {
  const res = await fetch(url);
  const data = await res.json();

  return data;
}

const checkDates = ({ results }) => {
  if (!results || results.length === 0)
    return Promise.reject(new Error('No movies requested'));

  return results;
};

const checkMovie = obj => {
  if (!obj || obj.success === false) {
    return Promise.reject(new Error(`Not found movie`));
  }

  return obj;
};

export function fetchTrendingMovies() {
  const url = `${BASE_URL}${TRENDING_MOVIE}?api_key=${API_KEY}`;

  return fetchWithErrorHandling(url).then(checkDates);
}

export function searchMovies(searchQuery = '') {
  const url = `${BASE_URL}${SEARCH_MOVIES}?api_key=${API_KEY}&query=${searchQuery}`;

  if (!searchQuery.trim()) return alert('enter the movie');

  return fetchWithErrorHandling(url).then(checkDates);
}

export function searchMovieByID(id) {
  const url = `${BASE_URL}${MOVIE_BY_ID}${id}?api_key=${API_KEY}`;

  return fetchWithErrorHandling(url).then(checkMovie);
}

export function searchMovieCastByID(id) {
  const url = `${BASE_URL}${MOVIE_BY_ID}${id}/credits?api_key=${API_KEY}`;

  return fetchWithErrorHandling(url).then(checkMovie);
}
export function searchMovieReviewsByID(id) {
  const url = `${BASE_URL}${MOVIE_BY_ID}${id}/reviews?api_key=${API_KEY}`;

  return fetchWithErrorHandling(url).then(checkDates);
}
