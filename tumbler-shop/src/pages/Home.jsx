import React from 'react';
import './App.css';
import Sidebar from '../components/Sidebar';  // Assuming Sidebar component is available
import ProductCard from './ProductCard';  // A new component to represent each product card

const products = [
  { name: 'Wyld Gear', details: '자세히 보기', imgSrc: '../assets/image1.png' },
  { name: 'Stanley', details: '자세히 보기', imgSrc: '../assets/image2.png' },
  { name: 'Corkcicle', details: '자세히 보기', imgSrc: '../assets/image3.png' },
  { name: 'Stanley', details: '자세히 보기', imgSrc: '../assets/image4.png' },
];

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <header className="header">
          <button className="menu-btn">☰</button>
          <div className="logo">tumbler</div>
        </header>
        <div className="banner">
          <img src="../assets/banner.png" alt="This season's latest" />
        </div>
        <div className="products">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
