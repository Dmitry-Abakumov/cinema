import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const Movies = ({ movies }) => {
  const location = useLocation();

  const moviesList = movies.map(({ id, original_title }) => (
    <li key={id}>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        {original_title}
      </Link>
    </li>
  ));

  return (
    <div className="wrapper">
      <ul>{moviesList}</ul>
    </div>
  );
};

export default Movies;

Movies.defaultProps = {
  movies: [],
};

Movies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
