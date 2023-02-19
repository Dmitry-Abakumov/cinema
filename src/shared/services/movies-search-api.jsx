import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'a1735b4b403b356dec5f0993d9adcd8f',
  },
});

export const fetchTrendingMovies = async () => {
  const { data } = await instance.get('/trending/movie/day');

  return data;
};

export const fetchMovieById = async id => {
  const { data } = await instance.get(`/movie/${id}`);

  return data;
};

export const fetchMoviesByName = async query => {
  const { data } = await instance.get('/search/movie', {
    params: {
      query,
    },
  });

  return data;
};

export const fetchMovieReviews = async id => {
  const { data } = await instance.get(`/movie/${id}/reviews`);

  return data;
};

export const fetchMovieCast = async id => {
  const { data } = await instance.get(`/movie/${id}/credits`);

  return data;
};
