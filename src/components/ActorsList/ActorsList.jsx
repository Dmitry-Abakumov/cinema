import css from './ActorsList.module.css';

import defaultImg from 'shared/images/avatar.png';

const ActorsList = ({ cast }) => {
  const castList = cast.map(({ profile_path, name, character, credit_id }) => (
    <li className={css.actorCard} key={credit_id}>
      <img
        className={css.img}
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/w200${profile_path}`
            : defaultImg
        }
        alt="actor"
      />
      <div className={css.actorInfoWrap}>
        <p className={css.text}>{name}</p>
        <p className={css.text}>Role: {character}</p>
      </div>
    </li>
  ));
  return <ul className={css.list}>{castList}</ul>;
};

export default ActorsList;

ActorsList.defaultProps = {
  cast: [],
};
