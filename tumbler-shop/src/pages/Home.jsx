import React from 'react';
import './Home.css';
import '../App.css';
import WyldGearImg from '../assets/wyldgear.png';
import StanleyImg from '../assets/stanley.png';
import CorkcicleImg from '../assets/corkcicle.png';
import StanleyMugImg from '../assets/stanleymug.png';
import BannerImg from '../assets/banner.png';
import tumbler from '../assets/tumbler.png';
import ProductLine from '../assets/productline.png';
import ProductDetail from './ProductDetail';
import NavigationBar from '../components/NavigationBar';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      <div className="nav-bar">
        <div className="menu-icon">≡</div>
        <div className="brand">
          <img src={tumbler} alt="tumbler" className="tumbler-img" />
        </div>
      </div>
      <main>
        <div className="latest-section">
          <img src={BannerImg} alt="This season's latest" className="latest-img" />
        </div>
        <div className="product-grid">
          <div className="product-card">
            <img src={WyldGearImg} alt="Wyld Gear" className="product-img" />
            <div className="product-name">Wyld Gear</div>
            <Link to="/ProductDetail/wyld-gear">
              <button className="product-button">자세히 보기</button>
            </Link>
            <div className="product-line">
            <img src={ProductLine} alt="ProductLine" className="product-line" />
            </div>
          </div>
          <div className="product-card">
            <img src={StanleyImg} alt="Stanley" className="product-img" />
            <div className="product-name">Stanley</div>
            <Link to="/ProductDetail/stanley">
              <button className="product-button">자세히 보기</button>
            </Link>
            <div className="product-line">
            <img src={ProductLine} alt="ProductLine" className="product-line" />
            </div>
          </div>
          <div className="product-card">
            <img src={CorkcicleImg} alt="Corkcicle" className="product-img" />
            <div className="product-name">Corkcicle</div>
            <Link to="/ProductDetail/corkcicle">
              <button className="product-button">자세히 보기</button>
            </Link>
            <div className="product-line">
            <img src={ProductLine} alt="ProductLine" className="product-line" />
            </div>
          </div>
          <div className="product-card">
            <img src={StanleyMugImg} alt="Stanley Mug" className="product-img" />
            <div className="product-name">Stanley Mug</div>
            <Link to="/ProductDetail/stanley-mug">
              <button className="product-button">자세히 보기</button>
            </Link>
            <div className="product-line">
            <img src={ProductLine} alt="ProductLine" className="product-line" />
            </div>
          </div>
        </div>
      </main>
      <NavigationBar />
      </div>
  );
}


export default Home;
