import { useParams, useLocation, useNavigate, Outlet } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { Link } from 'react-router-dom';

import MovieDetails from 'components/MovieDetails/MovieDetails';

import css from './movie-details-page.module.css';

import { fetchMovieById } from 'shared/services/movies-search-api';

const MovieDetailsPage = () => {
  const [movieDetails, setMovieDetails] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState();

  const { movieId } = useParams();

  const location = useLocation();
  const navigate = useNavigate();

  const prevLocation = useRef(location);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setIsLoading(true);
        const data = await fetchMovieById(movieId);
        setMovieDetails(data);
      } catch ({ message }) {
        setError(message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
    <>
      {isLoading && (
        <TailSpin width="50" color="black" wrapperClass="spinner" />
      )}

      <button
        className={css.navigationBtn}
        onClick={() =>
          navigate(
            location.state?.from ||
              prevLocation.current.state.from ||
              '/goit-react-hw-05-movies'
          )
        }
        type="button"
      >
        Go back
      </button>
      <MovieDetails movieInfo={movieDetails} />
      <ul>
        <li>
          <Link to="cast" state={{ from: location }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: location }}>
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />

      {error && <p>{error}</p>}
    </>
  );
};

export default MovieDetailsPage;
