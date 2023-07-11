import css from './reviews.module.css';

const Reviews = ({ reviews }) => {
  const movieReviews = reviews.map(({ author, content, id }) => (
    <li className={css.rewiew} key={id}>
      <p className={css.text}>
        <span className={css.author}>author: </span>
        {author}
      </p>
      <p className={css.text}>{content}</p>
    </li>
  ));

  return <ul className={css.rewiewsWrap}>{movieReviews}</ul>;
};

export default Reviews;

Reviews.defaultProps = {
  reviews: [],
};
