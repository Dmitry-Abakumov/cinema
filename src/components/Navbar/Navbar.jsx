import { NavLink } from 'react-router-dom';
import css from './navbar.module.css';

const Navbar = () => {
  return (
    <ul className={css.menu}>
      <li className={css.menuItem}>
        <NavLink className={css.link} to="/">
          Home
        </NavLink>
      </li>
      <li className={css.menuItem}>
        <NavLink className={css.link} to="/hits">
          Hits movies
        </NavLink>
      </li>
      <li className={css.menuItem}>
        <NavLink className={css.link} to="/movies">
          Movies
        </NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
