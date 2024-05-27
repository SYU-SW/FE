import React from 'react';
import './ProductDetail.css';

const ProductDetail = () => {
    return (
        <div className="product-detail">
            <header className="header">
                <div className="menu-icon">&#9776;</div>
                <div className="logo">tumbler</div>
                <div className="user-icon">&#9679;</div>
            </header>
            <div className="product-container">
                <div className="product-image">
                    <img src="../assets/wyldgear.png" alt="Wyld Gear Tumbler" />
                </div>
                <div className="product-info">
                    <h1 className="product-title">Wyld Gear</h1>
                    <p className="product-volume">Indigo 900ml</p>
                    <p className="product-stock">제고: 5</p>
                    <p className="product-price">₩ 55,000</p>
                    <div className="buttons">
                        <button className="buy-button">구매하기</button>
                        <button className="cart-button">장바구니 담기</button>
                    </div>
                </div>
            </div>
            <div className="product-description">
                <div className="tabs">
                    <button className="tab active">상세 설명</button>
                    <button className="tab">리뷰</button>
                </div>
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
