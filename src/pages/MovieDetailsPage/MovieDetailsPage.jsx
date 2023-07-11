import { useParams, useLocation, useNavigate, Outlet } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { NavLink } from 'react-router-dom';
import { TbArrowBackUp } from 'react-icons/tb';
import { toast } from 'react-toastify';

import MovieDetails from 'components/MovieDetails/MovieDetails';

import css from './movie-details-page.module.css';

import { fetchMovieById } from 'shared/services/movies-search-api';

const MovieDetailsPage = () => {
  const [movieDetails, setMovieDetails] = useState();
  const [isLoading, setIsLoading] = useState();

  const { movieId } = useParams();

  const location = useLocation();
  const navigate = useNavigate();

  const initialLocation = useRef(location);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setIsLoading(true);
        const data = await fetchMovieById(movieId);
        setMovieDetails(data);
      } catch ({ message }) {
        toast.error('Oops, something went wrong. Try reloading the page');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
    <div className={css.wrap}>
      {isLoading && <TailSpin width="50" color="#fff" wrapperClass="spinner" />}

      <button
        className={css.navigationBtn}
        onClick={() =>
          navigate(
            location.state?.from || initialLocation.current.state?.from || '/'
          )
        }
        type="button"
      >
        <TbArrowBackUp size="30px" color="#fff" />
      </button>
      <MovieDetails movieInfo={movieDetails} />
      <ul className={css.navLinkList}>
        <li>
          <NavLink className={css.navLink} to="cast">
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink className={css.navLink} to="reviews">
            Reviews
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
