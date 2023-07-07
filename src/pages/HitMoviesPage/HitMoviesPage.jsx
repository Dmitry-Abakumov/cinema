import { useEffect, useState } from 'react';
import { TailSpin } from 'react-loader-spinner';

import Movies from 'shared/components/Movies/Movies';

import { fetchTrendingMovies } from 'shared/services/movies-search-api';

import css from './HitMoviesPage.module.css';

const HitMoviesPage = () => {
  const [initialMovies, setInitialMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInitialFilms = async () => {
      try {
        setIsLoading(true);
        const data = await fetchTrendingMovies();
        setInitialMovies(data.results);
      } catch ({ message }) {
        setError(message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchInitialFilms();
  }, []);

  return (
    <div className={css.wrap}>
      <h2>Trending today</h2>
      {isLoading && (
        <TailSpin width="50" color="black" wrapperClass="spinner" />
      )}

      <Movies movies={initialMovies} />

      {error && <p>{error}</p>}
    </div>
  );
};

export default HitMoviesPage;
