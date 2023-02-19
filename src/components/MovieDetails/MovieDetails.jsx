import PropTypes from 'prop-types';

import defaultImg from 'shared/images/default-movie.jpg';

import css from './movie-details.module.css';

const MovieDetails = ({ movieInfo }) => {
  return (
    <div className={css.detailsWrapper}>
      {movieInfo && (
        <div>
          <h2>{movieInfo.original_title}</h2>
          <div className="wrapper">
            <img
              src={
                movieInfo.poster_path
                  ? `https://image.tmdb.org/t/p/w200${movieInfo.poster_path}`
                  : defaultImg
              }
              alt=""
            />
            <div className={css.filmInfoWrapper}>
              <p>
                <span className={css.filmInfoTitle}>number of views - </span>
                {movieInfo.popularity}
              </p>
              <p>
                <span className={css.filmInfoTitle}>number of votes - </span>
                {movieInfo.vote_count}
              </p>
              <p>
                <span className={css.filmInfoTitle}>rating - </span>
                {movieInfo.vote_average}
              </p>
              <p>
                <span className={css.filmInfoTitle}>genres - </span>
                {movieInfo.genres.map(({ name }) => name).join(', ')}
              </p>
              <p>
                <span className={css.filmInfoTitle}>duration - </span>
                {movieInfo.runtime} minutes
              </p>
            </div>
          </div>
          <p>
            <span className={css.filmInfoTitle}>Overview - </span>
            {movieInfo.overview}
          </p>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;

MovieDetails.propTypes = {
  movieInfo: PropTypes.shape({
    original_title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    popularity: PropTypes.number.isRequired,
    vote_count: PropTypes.number.isRequired,
    vote_average: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ),
    overview: PropTypes.string.isRequired,
    runtime: PropTypes.number.isRequired,
  }),
};
