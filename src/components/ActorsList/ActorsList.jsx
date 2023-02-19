import PropTypes from 'prop-types';

import css from './actors-list.module.css';

import defaultImg from 'shared/images/avatar-male.jpg';

const ActorsList = ({ cast }) => {
  const castList = cast.map(({ profile_path, name, character, credit_id }) => (
    <li key={credit_id}>
      <img
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/w200${profile_path}`
            : defaultImg
        }
        alt=""
      />
      <p>{name}</p>
      <p>{character}</p>
    </li>
  ));
  return <ul className={css.list}>{castList}</ul>;
};

export default ActorsList;

ActorsList.defaultProps = {
  cast: [],
};

ActorsList.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      profile_path: PropTypes.string,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
      credit_id: PropTypes.string.isRequired,
    })
  ),
};
