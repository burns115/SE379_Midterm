import React from 'react';
import { Link } from 'react-router-dom';

const Products = ({ product }) => {
  return (
    <div>
      {product.map(product => (
        <div key={product.id}>
          <Link to={`/products/${product.id}`}>
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
          </Link>
        </div>
        
      ))}
    </div>
  );
};

export default Products;