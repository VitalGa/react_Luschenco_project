import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div className='container mt-5'>
      <div className='mb-3'>
        <Link to='/create' className='btn btn-primary'>
          Создать note
        </Link>
      </div>
      <div>
        <Link to='/note' className='btn btn-secondary'>
          Просмотреть note
        </Link>
      </div>
    </div>
  );
};

export default Main;
