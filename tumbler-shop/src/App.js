import React from 'react';
import './App.css';
import signInImage from './assets/logo.png';
import kakaoLoginImage from './assets/kakaoLogin.png';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Telephone from './pages/Telephone';
import Address from './pages/Address';

function Home() {
  return (
    <div className="App">
      <img src={signInImage} alt="Sign in to tumbler" className="logo" />
      <img src={kakaoLoginImage} alt="카카오 로그인" className="kakao-login" />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/telephone" element={<Telephone />} />
        <Route path="/address" element={<Address />} />
      </Routes>
    </Router>
  );
}

export default App;
