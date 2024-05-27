import React from 'react';
import './NavigationBar.css';
import { FaHome, FaSearch, FaHeart, FaShoppingBasket } from 'react-icons/fa';

const NavigationBar = () => {
  return (
    <div className="navigation-bar">
      <div className="nav-item">
        <FaHome />
      </div>
      <div className="nav-item">
        <FaSearch />
      </div>
      <div className="nav-item">
        <FaHeart />
        <span className="badge">2</span>
      </div>
      <div className="nav-item">
        <FaShoppingBasket />
        <span className="badge">2</span>
      </div>
    </div>
  );
};

export default NavigationBar;
