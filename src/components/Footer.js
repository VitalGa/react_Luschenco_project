import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='bg-light text-center text-lg-start mt-auto py-4'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 text-center'>
            <p className='text-muted mb-0'>&copy; 2024 Алекс Лущенко. Все права защищены.</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-12 text-center'>
            <nav>
              <ul className='nav justify-content-center'>
                <li className='nav-item'>
                  <Link to='/' className='nav-link'>
                    Home
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/about' className='nav-link'>
                    About
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/create' className='nav-link'>
                    Create
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/note' className='nav-link'>
                    Note
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
