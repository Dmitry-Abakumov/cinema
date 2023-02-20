import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';

import ActorsList from 'components/ActorsList/ActorsList';

import { fetchMovieCast } from 'shared/services/movies-search-api';

const CastPage = () => {
  const [cast, setCast] = useState();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const searchMovieCast = async () => {
      try {
        setIsLoading(true);
        const { cast } = await fetchMovieCast(movieId);
        setCast(cast);
      } catch ({ message }) {
        setError(message);
      } finally {
        setIsLoading(false);
      }
    };

    searchMovieCast();
  }, [movieId]);

  return (
    <>
      {isLoading && (
        <TailSpin width="50" color="black" wrapperClass="spinner" />
      )}

      <ActorsList cast={cast} />

      {cast?.length === 0 && !isLoading && (
        <h2>Sorry, there is no information about the actors</h2>
      )}

      {error && <p>{error}</p>}
    </>
  );
};

export default CastPage;
