import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';
import { toast } from 'react-toastify';

import ActorsList from 'components/ActorsList/ActorsList';

import { fetchMovieCast } from 'shared/services/movies-search-api';

const CastPage = () => {
  const [cast, setCast] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const searchMovieCast = async () => {
      try {
        setIsLoading(true);
        const { cast } = await fetchMovieCast(movieId);
        setCast(cast);
      } catch  {
        toast.error('Oops, something went wrong. Try reloading the page')
      } finally {
        setIsLoading(false);
      }
    };

    searchMovieCast();
  }, [movieId]);

  return (
    <>
      {isLoading && <TailSpin width="50" color="#fff" wrapperClass="spinner" />}

      <ActorsList cast={cast} />

      {cast?.length === 0 && !isLoading && (
        <h2>Sorry, there is no information about the actors</h2>
      )}
    </>
  );
};

export default CastPage;
