import React from 'react';
import './WishList.css';
import WyldGearImg from '../assets/wyldgear.png';
import StanleyImg from '../assets/stanley.png';
import ProfileIcon from '../assets/profile-icon.png';

function App() {
  return (
    <div className="app">
      <div className="nav-bar">
        <div className="menu-icon">≡</div>
        <div className="brand">tumbler</div>
        <div className="profile-icon">
          <img src={ProfileIcon} alt="Profile Icon" className='profile-icon' />
        </div>
      </div>
      <main className="product-list">
        <div className="product-item">
          <img src={WyldGearImg} alt="Wyld Gear" className="product-img" />
          <div className="product-details">
            <div className="product-name">Wyld Gear</div>
            <div className="product-desc">Indigo 900ml</div>
            <div className="product-stock">재고 : 5</div>
            <button className="product-button">제거</button>
            <div className="product-line"></div>
          </div>
        </div>
        <div className="product-item">
          <img src={StanleyImg} alt="Stanley" className="product-img" />
          <div className="product-details">
            <div className="product-name">Stanley</div>
            <div className="product-desc">Pink 1200ml</div>
            <div className="product-stock">재고 : 3</div>
            <button className="product-button">제거</button>
            <div className="product-line"></div>
          </div>
        </div>
      </main>
      <button className="cart-button">장바구니에 추가</button>
      <footer className="footer">
        <div className="footer-icon">🏠</div>
        <div className="footer-icon">🔍</div>
        <div className="footer-icon">❤️2</div>
        <div className="footer-icon">🛒2</div>
      </footer>
    </div>
  );
}

export default App;
