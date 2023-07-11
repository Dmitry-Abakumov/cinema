import defaultImg from 'shared/images/default-movie.jpg';

import css from './movie-details.module.css';

const MovieDetails = ({ movieInfo }) => {
  return (
    <>
      {movieInfo && (
        <>
          <h2 className={css.title}>{movieInfo.original_title}</h2>
          <div className={css.contentWrap}>
            <div className={css.filmInfoWrap}>
              <img
                className={css.img}
                src={
                  movieInfo.poster_path
                    ? `https://image.tmdb.org/t/p/w300${movieInfo.poster_path}`
                    : defaultImg
                }
                alt=""
              />
              <div className={css.textInfoWrap}>
                <p className={css.info}>
                  <span>number of views - </span>
                  {movieInfo.popularity}
                </p>
                <p className={css.info}>
                  <span>number of votes - </span>
                  {movieInfo.vote_count}
                </p>
                <p className={css.info}>
                  <span>rating - </span>
                  {movieInfo.vote_average}
                </p>
                <p className={css.info}>
                  <span>genres - </span>
                  {movieInfo.genres.map(({ name }) => name).join(', ')}
                </p>
                <p className={css.info}>
                  <span>duration - </span>
                  {movieInfo.runtime} minutes
                </p>
              </div>
            </div>
            {movieInfo.overview && (
              <p className={css.overview}>
                <span>Overview - </span>
                {movieInfo.overview}
              </p>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default MovieDetails;
