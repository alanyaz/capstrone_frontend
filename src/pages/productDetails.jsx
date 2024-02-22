// src/ProductDetails.js
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`)
            .then(response => {
                setProduct(response.data);
            })
            .catch(error => console.error("There was an error fetching the product details:", error));
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <section style={{width : "80%" , margin : "2rem auto"}}>
            <div style={{ display: "flex", flexDirection: "row"  , gap : "3rem", alignItems : "center" }}>
                <div style={{ width: "20rem", height: "20rem" }}>
                    <img src={product.thumbnail} alt={product.title} style={{ width: '100%', height: '100%' }} />
                </div>
                <div style={{ width: "20rem", display: "flex", flexDirection: "column" }}>
                    <h2>{product.title}</h2>
                    <p>Description: {product.description}</p>
                    <p>Price: ${product.price}</p>
                    <button style={{ backgroundColor : "#000" , marginTop : '1rem' , outline : "none" , border : "none", padding : ".8rem 3rem" , color :"white" , borderRadius : ".5rem"}}>Buy Now</button>

                </div>
            </div>
        </section>
    );
}

export default ProductDetails;
