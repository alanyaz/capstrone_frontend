// src/Products.js
import React, { useEffect, useState } from 'react';
import ProductCard from '../components/productCard';

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => setProducts(data.products))
      .catch(error => console.error("There was an error fetching the products:", error));
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' , gap : '2rem' , padding : "1rem " , width : "80%", margin:"auto"}}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default HomePage;
