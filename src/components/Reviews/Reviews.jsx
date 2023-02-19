import PropTypes from 'prop-types';

import css from './reviews.module.css';

const Reviews = ({ reviews }) => {
  const movieReviews = reviews.map(({ author, content, id }) => (
    <li key={id}>
      <p>
        <span className={css.author}>author: </span>
        {author}
      </p>
      <p>{content}</p>
    </li>
  ));

  return <ul>{movieReviews}</ul>;
};

export default Reviews;

Reviews.defaultProps = {
  revews: [],
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
