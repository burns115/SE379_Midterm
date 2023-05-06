import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  return (
    <nav className='navbar-item'>
      <ul className='navbar-list'>
        <li className='navbar-item'>
          <Link to="/" className='navbar-link'>Home</Link>
        </li>
        <li className='navbar-item'>
          <Link to="/FetchingData" className='navbar-link'>Products</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;