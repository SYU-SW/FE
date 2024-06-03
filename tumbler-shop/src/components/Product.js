import React from 'react';

const Product = ({ product, updateQuantity }) => {
  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <h2>{product.name}</h2>
        <p>{product.color} {product.volume}</p>
        <p>재고: <span>{product.stock}</span></p>
        <p>₩<span>{product.price.toLocaleString()}</span></p>
        <div className="quantity">
          <button onClick={() => updateQuantity(product.id, -1)}>-</button>
          <span>{product.quantity}</span>
          <button onClick={() => updateQuantity(product.id, 1)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
