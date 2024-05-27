import React from 'react';
import './App.css';
import signInImage from './assets/logo.png';
import kakaoLoginImage from './assets/kakaoLogin.png';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Telephone from './pages/Telephone';
import Address from './pages/Address';
import Home from './pages/Home'; 
import Profile from './pages/Profile';
import ProductDetail from './pages/ProductDetail';

function SignIn() {
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
        <Route path="/" element={<SignIn />} />
        <Route path="/telephone" element={<Telephone />} />
        <Route path="/address" element={<Address />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/productDetail" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
