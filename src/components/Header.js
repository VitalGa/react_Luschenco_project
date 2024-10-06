import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/note'
              className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}>
              Note
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/create'
              className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}>
              Create
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/about'
              className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}>
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
