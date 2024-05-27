import React, { useState } from 'react';
import './ProductDetail.css';
import wyldgear from '../assets/wyldgear.png';

const reviews = [
    {
        rating: 5,
        date: '2024/04/28',
        text: 'Each Stainless Steel Tumbler boasts a built-in bottle opener in its base while the Durable Spill-resistant lid stands guard, keeping your drinks secured even as you conquer rough terrains.'
    },
    {
        rating: 5,
        date: '2024/04/25',
        text: 'Engineered with triple insulation, your ice defies the heat for 24 hours, and your warm beverages maintain their steam for up to 6 hours.'
    },
    
];

const ProductDetail = () => {
    const [activeTab, setActiveTab] = useState('description');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="product-detail">
            <header className="header">
                <div className="menu-icon">&#9776;</div>
                <div className="logo">tumbler</div>
                <div className="user-icon">&#9679;</div>
            </header>
            <div className="product-container">
                <div className="product-image">
                    <img src={wyldgear} alt="Wyld Gear Tumbler" />
                </div>
                <div className="product-info">
                    <h1 className="product-title">Wyld Gear</h1>
                    <p className="product-volume">Indigo 900ml</p>
                    <p className="product-stock">재고: 5</p>
                    <p className="product-price">₩ 55,000</p>
                    <div className="buttons">
                        <button className="buy-button">구매하기</button>
                        <button className="cart-button">장바구니 담기</button>
                    </div>
                </div>
            </div>
            <div className="product-description">
                <div className="tabs">
                    <button
                        className={`tab ${activeTab === 'description' ? 'active' : ''}`}
                        onClick={() => handleTabClick('description')}
                    >
                        상세 설명
                    </button>
                    <button
                        className={`tab ${activeTab === 'reviews' ? 'active' : ''}`}
                        onClick={() => handleTabClick('reviews')}
                    >
                        리뷰
                    </button>
                </div>
                {activeTab === 'description' && (
                    <div className="description">
                        <p>
                            Our Insulated 30 oz WYLD Tumbler Cup sets new standards for outdoor enthusiasts,
                            marrying a rugged exterior ready to tackle the elements with cutting-edge features
                            handpicked for comfort and performance.
                        </p>
                        <h2>소재 및 스펙</h2>
                        <p>
                            Each Stainless Steel Tumbler boasts a built-in bottle opener in its base while the Durable
                            Spill-resistant lid stands guard, keeping your drinks secured even as you conquer rough
                            terrains. Engineered with triple insulation, your ice defies the heat for 24 hours, and
                            your warm beverages maintain their steam for up to 6 hours.
                        </p>
                    </div>
                )}
                {activeTab === 'reviews' && (
                    <div className="reviews">
                        <div className="review-summary">
                            <span className="review-rating">⭐ 4.5</span>
                            <span className="review-count">(50 리뷰들)</span>
                        </div>
                        {reviews.map((review, index) => (
                            <div key={index} className="review">
                                <div className="review-rating">⭐ {review.rating}</div>
                                <div className="review-date">{review.date}</div>
                                <div className="review-text">{review.text}</div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <footer className="footer">
                <div className="footer-icon">&#8962;</div>
                <div className="footer-icon">&#9825;</div>
                <div className="footer-icon">&#128717;</div>
            </footer>
        </div>
    );
};

export default ProductDetail;
