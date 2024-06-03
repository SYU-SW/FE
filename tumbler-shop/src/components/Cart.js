import React from 'react';

const Cart = ({ products }) => {
  const totalPrice = products.reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <div className="cart">
      <h2>총 가격: ₩{totalPrice.toLocaleString()}</h2>
      <button className="purchase-button">구매하기</button>
    </div>
  );
};

export default Cart;
