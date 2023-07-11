import { useEffect, useState } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { toast } from 'react-toastify';

import Movies from 'shared/components/Movies/Movies';

import { fetchTrendingMovies } from 'shared/services/movies-search-api';

import css from './HitMoviesPage.module.css';

const HitMoviesPage = () => {
  const [initialMovies, setInitialMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchInitialFilms = async () => {
      try {
        setIsLoading(true);
        const data = await fetchTrendingMovies();
        setInitialMovies(data.results);
      } catch ({ message }) {
        toast.error('Oops, something went wrong. Try reloading the page');
      } finally {
        setIsLoading(false);
      }
    };

    fetchInitialFilms();
  }, []);

  return (
    <div className={css.wrap}>
      <h2 className={css.title}>Trending today</h2>
      {isLoading && <TailSpin width="50" color="#fff" wrapperClass="spinner" />}

      <Movies movies={initialMovies} />
    </div>
  );
};

export default HitMoviesPage;
