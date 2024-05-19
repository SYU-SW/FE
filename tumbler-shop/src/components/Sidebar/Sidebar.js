import React from 'react';
import './Sidebar.css';
import line from '../assets/line.png';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Sidebar</h2>
      <ul>
        <li>개인 정보</li>
        <li><img src={line} alt="line" /></li>
        <li>구매 내역</li>
        <li><img src={line} alt="line" /></li>
        <li>나의 리뷰</li>
        <li><img src={line} alt="line" /></li>
        <li>관심 목록</li>
        <li><img src={line} alt="line" /></li>
        <li>장바구니</li>
        <li><img src={line} alt="line" /></li>
        <li>설정</li>
        <li><img src={line} alt="line" /></li>
      </ul>
    </div>
  );
};

export default Sidebar;
