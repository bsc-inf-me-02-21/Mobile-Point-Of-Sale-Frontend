// src/components/ProductCard.jsx
import { useState } from "react";
import Products from "../data/products-data.jsx";
import "../styles/product-card.css";
import Coca from "../images/coca.jpg";

function ProductCard() {
  const [productData] = useState(Products);
  const [cart, setCart] = useState([]);
  
  const addToCart = (product) => {
    setCart(prevCart => [...prevCart, product]);
    console.log(`Added ${product.name} to cart`);
  };

  return (
    <div className="pos-container">
      <div className="header">
        <h1>Mobile POS</h1>
        <div className="cart-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="white" d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.79 1.03H8.1l-.9 1.63l-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1V2m6.16 4l-.93-2H3.28l2.33 4H7.16m7.84 11a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m-1-9l2.78-5H8.89l5.11 5Z"/>
          </svg>
          <span className="cart-count">{cart.length}</span>
        </div>
      </div>
      
      <div className="category-tabs">
        <button className="active">All Products</button>
        <button>Beverages</button>
        <button>Snacks</button>
        <button>Dairy</button>
      </div>
      
      <div className="card-container">
        {productData.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-image-container">
              {/*
              <img 
                src={product.image} 
                alt={product.name} 
                className="product-image"
              />
        */}

<img 
                    src={product.image} 
                alt={product.name} 
                className="product-image"
              />
            </div>
            
            <div className="product-details">
              <h3 className="product-name">{product.name}</h3>
              <span className="product-category">{product.category}</span>
              <div className="price-row">
                <span className="product-price">MK{product.price.toFixed(2)}</span>
                <button 
                  className="add-to-cart-btn"
                  onClick={() => addToCart(product)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2v-6Z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCard;