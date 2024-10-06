import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Home
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              to='/note'
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Note
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              to='/create'
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Create
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              to='/about'
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
