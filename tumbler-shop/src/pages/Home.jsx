import React from 'react';
import './Home.css';
import WyldGearImg from '../assets/wyldgear.png';
import StanleyImg from '../assets/stanley.png';
import CorkcicleImg from '../assets/corkcicle.png';
import StanleyMugImg from '../assets/stanleymug.png';
import BannerImg from '../assets/banner.png';
import NavigationBar from '../components/NavigationBar'; // 확장자를 제거합니다.

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="nav-bar">
          <div className="menu-icon">≡</div>
          <div className="brand">tumbler</div>
        </div>
      </header>
      <main>
        <div className="latest-section">
          <img src={BannerImg} alt="This season's latest" className="latest-img" />
          <div className="latest-text">This season’s latest</div>
        </div>
        <div className="product-grid">
          <div className="product-card">
            <img src={WyldGearImg} alt="Wyld Gear" className="product-img" />
            <div className="product-name">Wyld Gear</div>
            <button className="product-button">자세히 보기</button>
          </div>
          <div className="product-card">
            <img src={StanleyImg} alt="Stanley" className="product-img" />
            <div className="product-name">Stanley</div>
            <button className="product-button">자세히 보기</button>
          </div>
          <div className="product-card">
            <img src={CorkcicleImg} alt="Corkcicle" className="product-img" />
            <div className="product-name">Corkcicle</div>
            <button className="product-button">자세히 보기</button>
          </div>
          <div className="product-card">
            <img src={StanleyMugImg} alt="Stanley Mug" className="product-img" />
            <div className="product-name">Stanley Mug</div>
            <button className="product-button">자세히 보기</button>
          </div>
        </div>
      </main>
      <NavigationBar />
    </div>
  );
}

export default Home;
