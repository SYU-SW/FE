import React, { useState } from 'react';
import Product from '../components/Product';
import Cart from '../components/Cart';
import './CartPage.css'; 

const CartPage = () => {
  const initialProducts = [
    {
      id: 1,
      name: 'Wyld Gear',
      color: 'Indigo',
      volume: '900ml',
      stock: 5,
      price: 55000,
      image: 'path/to/wyld_gear_image.jpg',
      quantity: 1
    },
    {
      id: 2,
      name: 'Stanley',
      color: 'Black',
      volume: '1200ml',
      stock: 4,
      price: 130000,
      image: 'path/to/stanley_image.jpg',
      quantity: 2
    }
  ];

  const [products, setProducts] = useState(initialProducts);

  const updateQuantity = (id, delta) => {
    setProducts(products.map(product =>
      product.id === id
        ? { ...product, quantity: Math.max(1, Math.min(product.stock, product.quantity + delta)) }
        : product
    ));
  };

  return (
    <div className="cart-container">
      <div className="product-list">
        {products.map(product => (
          <Product
            key={product.id}
            product={product}
            updateQuantity={updateQuantity}
          />
        ))}
      </div>
      <Cart products={products} />
    </div>
  );
};

export default CartPage;
