import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';

import Reviews from 'components/Reviews/Reviews';

import { fetchMovieReviews } from 'shared/services/movies-search-api';

const RewiewsPage = () => {
  const [reviews, setReviws] = useState();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const searchReviws = async () => {
      try {
        setIsLoading(true);
        const { results } = await fetchMovieReviews(movieId);
        setReviws(results);
      } catch ({ message }) {
        setError(message);
      } finally {
        setIsLoading(false);
      }
    };

    searchReviws();
  }, [movieId]);

  return (
    <>
      {isLoading && (
        <TailSpin width="50" color="black" wrapperClass="spinner" />
      )}

      <Reviews reviews={reviews} />

      {reviews?.length === 0 && !isLoading && (
        <h2>Sorry, but there are no reviews for this movie.</h2>
      )}

      {error && <p>{error}</p>}
    </>
  );
};

export default RewiewsPage;
