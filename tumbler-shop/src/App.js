import React from 'react';
import './App.css'; // ensure you have an App.css or adjust the path accordingly
import signInImage from './assets/logo.png'; // "Sign in to tumbler" 이미지
import kakaoLoginImage from './assets/kakaoLogin.png'; // "카카오 로그인" 이미지

function App() {
  return (
    <div className="App">
      <img src={signInImage} alt="Sign in to tumbler" className="logo" />
      <img src={kakaoLoginImage} alt="카카오 로그인" className="kakao-login" />
    </div>
  );
}

export default App;
