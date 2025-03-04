import React from "react";
import data from "../data";
import "./ProductList.css";

const ProductList = () => {
    return (
        <div className="product-container">
            <h2>Our Products</h2>
            <div className="product-grid">
                {data.map((product) => (
                    <div key={product.id} className="product-card">
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                        <span className="price">${product.price}</span>
                        <button className="buy-btn">Buy Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
