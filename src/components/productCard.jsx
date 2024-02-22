// src/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div style={{width : '18rem' ,  }}>
     <div className="" style={{width : "14rem" , height : '14rem'}}>
        <Link to={`/product/${product.id}`}>
     <img src={product.thumbnail} alt={product.title} style={{ width: '100%', height: '100%' }} />
        </Link>
     </div>
      <h3 >{product.title}</h3>
      <p>Price: ${product.price}</p>
      <p>{product.description.slice(0 , 50)}</p>  
    </div>
  );
}

export default ProductCard;
