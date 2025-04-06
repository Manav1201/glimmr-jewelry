// src/components/ProductList.js
import React from 'react';

const ProductList = () => {
  // Sample data
  const products = [
    { id: 1, name: 'Necklace', price: '$100' },
    { id: 2, name: 'Earrings', price: '$50' },
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Shop</h2>
      <ul>
        {products.map(product => (
          <li key={product.id} className="mb-2">
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;