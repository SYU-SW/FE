import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src="../assets/image 1" alt="Wyld gear"/>
      <div className="product-name">{product.name}</div>
      <div className="product-details">{product.details}</div>
      <button className="wishlist-btn">♥</button>
    </div>
  );
};

export default ProductCard;
