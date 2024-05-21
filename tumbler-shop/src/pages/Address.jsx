import React, { useState } from 'react';
import './Address.css';

const Address = () => {
  const [zipcode, setZipcode] = useState('');
  const [address, setAddress] = useState('');
  const [detailAddress, setDetailAddress] = useState('');

  const handleZipcodeChange = (e) => {
    setZipcode(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleDetailAddressChange = (e) => {
    setDetailAddress(e.target.value);
  };

  const handleSubmit = () => {
    console.log('Address submitted:', { zipcode, address, detailAddress });
  };

  return (
    <div className="address-container">
      <h1>주소를 입력하세요</h1>
      <div className="input-group">
        <input
          type="text"
          value={zipcode}
          onChange={handleZipcodeChange}
          placeholder="우편번호"
          className="input-box"
        />
        <button className="find-zipcode-button">우편번호 찾기</button>
      </div>
      <input
        type="text"
        value={address}
        onChange={handleAddressChange}
        placeholder="주소"
        className="input-box"
      />
      <input
        type="text"
        value={detailAddress}
        onChange={handleDetailAddressChange}
        placeholder="상세주소"
        className="input-box"
      />
      <button onClick={handleSubmit} className="submit-button">다음</button>
    </div>
  );
};

export default Address;
