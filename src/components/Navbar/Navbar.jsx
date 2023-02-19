import { NavLink } from 'react-router-dom';
import css from './navbar.module.css';

const Navbar = () => {
  return (
    <ul className={css.menu}>
      <li>
        <NavLink className={css.link} to="/goit-react-hw-05-movies">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={css.link} to="/movies">
          Movies
        </NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
