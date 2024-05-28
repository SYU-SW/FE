import React from 'react';
import './Home.css';
import '../App.css';
import '../Fonts.css';
import tumbler from '../assets/tumbler.png';
import NavigationBar from '../components/NavigationBar';

function Home() {
  return (
    <div className="App">
      <div className="nav-bar">
        <div className="menu-icon">≡</div>
        <div className="brand">
          <img src={tumbler} alt="tumbler" className="tumbler-img" />
        </div>
      </div>
      <div className="search-section">
        <input type="text" placeholder="검색할 내용을 입력하세요" className="search-input" />
        <div className="search-close">×</div>
      </div>
      <NavigationBar />
    </div>
  );
}

export default Home;
