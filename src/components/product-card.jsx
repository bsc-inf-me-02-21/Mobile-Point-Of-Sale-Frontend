import { useState, useContext, useEffect } from "react";
import { ProductsContext } from "../context/products-context.jsx";
import { useCart } from "../context/cart-context.jsx";
import { useNavigate } from 'react-router-dom';


import { FaCartPlus, FaShoppingCart, FaSearch } from 'react-icons/fa';
import { FaBox } from 'react-icons/fa';
import "../styles/product-card.css"; 

function ProductCard() {
  const { productsData } = useContext(ProductsContext);
  const { addToCart, cartItems } = useCart();
  const navigate = useNavigate();

  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const categories = ["All", ...new Set(productsData.map(p => p.category))];

  const filteredProducts = productsData.filter(product => {
    const matchesCategory = activeCategory === "All" || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <div className="pos-container">
      {/* Sticky header */}
      <div className={`search-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <span className="search-icon-react">
            <FaSearch size={20} />
          </span>

          {searchQuery && (
            <button
              className="clear-search"
              onClick={() => setSearchQuery('')}
              aria-label="Clear search"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"/>
              </svg>
            </button>
          )}
        </div>

        {!searchQuery && (
          <div className="category-tabs-wrapper">
            <div className="category-tabs">
              {categories.map(category => (
                <button
                  key={category}
                  className={activeCategory === category ? "active" : ""}
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={activeCategory === category}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Products grid */}
      <div className="card-container">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-image-container">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                  loading="lazy"
                />
              </div>

              <div className="product-details">
                <h3 className="product-name">{product.name}</h3>

                {/* New: Separate tags on the same line */}
                <div className="tags-row">
                  <span className="tag category-tag">{product.category}</span>
                  <span className={`tag stock-tag ${product.quantity <= product.minStockLevel ? 'low-stock' : ''}`}>
                    <FaBox />
                    {product.quantity} in stock
                  </span>
                </div>

                <div className="product-meta">
                  <div className="price-row">
                    <span className="product-price">MK{product.price.toFixed(2)}</span>
                  </div>

                  <button
                    className="add-to-cart-btn"
                    onClick={() => addToCart(product)}
                    aria-label={`Add ${product.name} to cart`}
                  >
                    <FaCartPlus size={20} color="white" />
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24">
              <path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"/>
            </svg>
            <h3>No products found</h3>
            <p>Try adjusting your search or filter</p>
          </div>
        )}
      </div>

      {/* Floating Cart Button */}
      <button
        className="cart-fab"
        aria-label="View cart"
        onClick={handleCartClick}
      >
        <FaShoppingCart size={24} color="white" />
        {cartItemsCount > 0 && (
          <span className="cart-count">{cartItemsCount}</span>
        )}
      </button>
    </div>
  );
}

export default ProductCard;
