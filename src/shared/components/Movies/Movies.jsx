import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const Movies = ({ movies }) => {
  const location = useLocation();

  const moviesList = movies.map(
    ({ id, title, belongs_to_collection: name }) => (
      <li key={id}>
        <Link to={`/movies/${id}`} state={{ from: location }}>
          {title || name}
        </Link>
      </li>
    )
  );

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
      title: PropTypes.string.isRequired,
      belongs_to_collection: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }),
    })
  ).isRequired,
};
