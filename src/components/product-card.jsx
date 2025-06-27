// src/components/ProductCard.jsx
import { useState, useContext } from "react";
import { ProductsContext } from "../context/products-context.jsx";
import { useCart } from "../context/cart-context.jsx";
import "../styles/product-card.css";

function ProductCard() {
  const productData = useContext(ProductsContext);
  const { addToCart } = useCart();
  
  // State for active category
  const [activeCategory, setActiveCategory] = useState("All");
  
  // Filter products based on active category
  const filteredProducts = activeCategory === "All" 
    ? productData 
    : productData.filter(product => product.category === activeCategory);
  
  // Categories for tabs
  const categories = ["All", "Beverages", "Snacks", "Dairy"];

  return (
    <div className="pos-container">
      <div className="category-tabs">
        {categories.map(category => (
          <button
            key={category}
            className={activeCategory === category ? "active" : ""}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="card-container">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-image-container">
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