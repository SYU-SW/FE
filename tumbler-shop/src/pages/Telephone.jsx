
import React, { useState } from 'react';
import './Telephone.css';

const Telephone = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleInputChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = () => {
    console.log('Phone number submitted:', phoneNumber);
  };

  return (
    <div className="telephone-container">
      <h1>전화번호를 입력하세요</h1>
      <input
        type="text"
        value={phoneNumber}
        onChange={handleInputChange}
        placeholder="010-1111-2222"
        className="input-box"
      />
      <button onClick={handleSubmit} className="submit-button">다음</button>
    </div>
  );
};

export default Telephone;
