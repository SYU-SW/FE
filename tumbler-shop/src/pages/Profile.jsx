import React from 'react';
import './Profile.css';

const ProfilePage = () => {
    return (
        <div className="profile-page">
            <header className="header">
                <div className="menu-icon">☰</div>
                <div className="logo">tumbler</div>
            </header>
            <div className="profile-picture">
                <img src="profile-picture-url" alt="Profile" className="profile-img" />
                <div className="edit-icon">✎</div>
            </div>
            <div className="form-group">
                <label htmlFor="name">이름</label>
                <input type="text" id="name"/>
            </div>
            <div className="form-group">
                <label htmlFor="phone">전화번호</label>
                <input type="text" id="phone"  />
            </div>
            <div className="form-group">
                <label htmlFor="postal-code">주소</label>
                <div className="address-group">
                    <input type="text" id="postal-code" />
                    <button className="find-postal-code">우편번호 찾기</button>
                </div>
                <input type="text" id="address1"  />
                <input type="text" id="address2" />
            </div>
            <div className="button-group">
                <button className="cancel-button">취소</button>
                <button className="save-button">저장</button>
            </div>
        </div>
    );
};

export default ProfilePage;
