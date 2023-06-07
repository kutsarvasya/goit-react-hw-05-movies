import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const KEY = 'dace3ba60ee82f0a15c6bb8af3a62e30';

export async function searchMovies() {
  const { data } = await axios('/trending/movie/day', {
    params: { api_key: KEY },
  });
  return data;
}

//
export async function searchMoviesDetails(id) {
  const { data } = await axios(`/movie/${id}`, {
    params: { api_key: KEY },
  });
  return data;
}

export async function getMoviesCredits(id) {
  const { data } = await axios(`/movie/${id}/credits`, {
    params: { api_key: KEY },
  });
  return data;
}

export async function getMoviesReviews(id) {
  const { data } = await axios(`/movie/${id}/reviews`, {
    params: { api_key: KEY },
  });
  return data;
}

export async function getMoviesBySearch(query) {
  const { data } = await axios(`/search/movie`, {
    params: { api_key: KEY, query: query },
  });
  return data;
}
