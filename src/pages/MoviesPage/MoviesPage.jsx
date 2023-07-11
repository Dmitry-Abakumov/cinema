import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';
import { toast } from 'react-toastify';

import Movies from 'shared/components/Movies/Movies';
import MoviesPageForm from 'components/MoviesPageForm/MoviesPageForm';

import { fetchMoviesByName } from 'shared/services/movies-search-api';

import css from './MoviesPage.module.css';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const onSubmit = query => {
    if (query === currentQuery)
      return toast.warn('Search for this query has already been completed');

    setSearchParams({ query });
  };

  const currentQuery = searchParams.get('query');

  useEffect(() => {
    if (!currentQuery) return;

    const searchMovieByName = async () => {
      try {
        setIsLoading(true);
        const { results } = await fetchMoviesByName(currentQuery);
        setMovies(results);
      } catch ({ message }) {
        toast.error('Oops, something went wrong. Try reloading the page');
      } finally {
        setIsLoading(false);
      }
    };

    searchMovieByName();
  }, [currentQuery]);

  return (
    <div className={css.moviesWrap}>
      <MoviesPageForm onSubmit={onSubmit} />

      {isLoading && <TailSpin width="50" color="#fff" wrapperClass="spinner" />}

      <Movies movies={movies} />
    </div>
  );
};

export default MoviesPage;
