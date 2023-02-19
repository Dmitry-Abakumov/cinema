import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';

import Movies from 'shared/components/Movies/Movies';
import MoviesPageForm from 'components/MoviesPageForm/MoviesPageForm';

import { fetchMoviesByName } from 'shared/services/movies-search-api';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const onSubmit = query => {
    setSearchParams({ query });
  };

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;

    const searchMovieByName = async () => {
      try {
        setIsLoading(true);
        const { results } = await fetchMoviesByName(query);
        setMovies(results);
      } catch ({ message }) {
        setError(message);
      } finally {
        setIsLoading(false);
      }
    };

    searchMovieByName();
  }, [query]);

  return (
    <>
      {isLoading && (
        <TailSpin width="50" color="black" wrapperClass="spinner" />
      )}

      <MoviesPageForm onSubmit={onSubmit} />
      <Movies movies={movies} />

      {error && <p>{error}</p>}
    </>
  );
};

export default MoviesPage;
