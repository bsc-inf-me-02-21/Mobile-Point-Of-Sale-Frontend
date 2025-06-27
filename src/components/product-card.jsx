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
  // State for search query
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter products based on active category and search query
  const filteredProducts = productData.filter(product => {
    const matchesCategory = activeCategory === "All" || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  // Categories for tabs
  const categories = ["All", "Beverages", "Snacks", "Dairy"];

  return (
    <div className="pos-container">
      {/* Search bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
         className="search-input"
        />
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24"
          className="search-icon"
        >
          <path fill="currentColor" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3l-1.4 1.4ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z"/>
        </svg>
      </div>
      
      {/* Conditionally render category tabs only when not searching */}
      {!searchQuery && (
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
      )}
      
      <div className="card-container">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
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
          ))
        ) : (
          <div className="no-results">
            <p>No products found</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;