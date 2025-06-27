// src/components/ProductCard.jsx
import { useState, useContext } from "react";
import {ProductsContext} from "../context/products-context.jsx";
import Products from "../data/products-data.jsx";
import "../styles/product-card.css";
import Coca from "../images/coca.jpg";

function ProductCard() {
  const productData = useContext(ProductsContext);

  const [cart, setCart] = useState([]);
  
  const addToCart = (product) => {
    setCart(prevCart => [...prevCart, product]);
    console.log(`Added ${product.name} to cart`);
  };

  return (
    <div className="pos-container">
   
      
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