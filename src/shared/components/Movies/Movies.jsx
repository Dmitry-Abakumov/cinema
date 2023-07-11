import { Link, useLocation } from 'react-router-dom';

import defaultPoster from 'shared/images/default-movie.jpg';

import css from './Movies.module.css';

const Movies = ({ movies }) => {
  const location = useLocation();
  console.log(movies);

  const moviesList = movies.map(({ id, title, poster_path, release_date }) => (
    <li className={css.movie} key={id}>
      <Link
        className={css.link}
        to={`/movies/${id}`}
        state={{ from: location }}
      >
        <img
          className={css.img}
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300${poster_path}`
              : defaultPoster
          }
          alt="poster"
        />
        <div className={css.filmInfoWrap}>
          <p className={css.text}>{title}</p>
          <p className={css.text}>{`Release data: ${release_date.replaceAll(
            '-',
            '.'
          )}`}</p>
        </div>
      </Link>
    </li>
  ));

  return <ul className={css.moviesWrap}>{moviesList}</ul>;
};

export default Movies;

Movies.defaultProps = {
  movies: [],
};
