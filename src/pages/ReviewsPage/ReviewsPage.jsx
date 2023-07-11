import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';
import { toast } from 'react-toastify';

import Reviews from 'components/Reviews/Reviews';

import { fetchMovieReviews } from 'shared/services/movies-search-api';

import css from './ReviewsPage.module.css';

const RewiewsPage = () => {
  const [reviews, setReviws] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const searchReviws = async () => {
      try {
        setIsLoading(true);
        const { results } = await fetchMovieReviews(movieId);
        setReviws(results);
      } catch ({ message }) {
        toast.error('Oops, something went wrong. Try reloading the page');
      } finally {
        setIsLoading(false);
      }
    };

    searchReviws();
  }, [movieId]);

  return (
    <>
      {isLoading && <TailSpin width="50" color="#fff" wrapperClass="spinner" />}

      <Reviews reviews={reviews} />

      {reviews?.length === 0 && !isLoading && (
        <h2 className={css.message}>
          Sorry, but there are no reviews for this movie.
        </h2>
      )}
    </>
  );
};

export default RewiewsPage;
