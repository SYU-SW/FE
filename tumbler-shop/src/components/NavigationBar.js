import React from 'react';
import './NavigationBar.css';
import { FaHome, FaSearch, FaHeart, FaShoppingBasket } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <div className="navigation-bar">
      <Link to="/" className="nav-item">
        <FaHome />
      </Link>
      <Link to="/search" className="nav-item">
        <FaSearch />
      </Link>
      <Link to="/wishlist" className="nav-item">
        <FaHeart />
        <span className="badge">2</span>
      </Link>
      <Link to="/cart" className="nav-item">
        <FaShoppingBasket />
        <span className="badge">2</span>
      </Link>
    </div>
  );
};

export default NavigationBar;
