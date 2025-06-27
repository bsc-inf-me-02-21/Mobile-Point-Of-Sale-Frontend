// src/components/Cart.jsx
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import BarcodeScanner from "../components/barcode-scanner.jsx";
import { useCart } from "../context/cart-context.jsx";
import "../styles/cart.css";
import {ProductsContext} from "../context/products-context.jsx";


const Cart = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanError, setScanError] = useState("");
  const navigate = useNavigate();
  const {productsData} = useContext(ProductsContext);
  
  // Use cart context functions
  const { 
    cartItems, 
    addToCart, 
    removeFromCart, 
    resetCart,
    updateQuantity
  } = useCart();
  

  
  // Calculate cart total
  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  
  // Handle successful scan
  const onScanSuccess = (decodedText) => {
    const product = productData.find(p => p.id === decodedText);
    
    if (product) {
      addToCart(product);
      setScanError("");
    } else {
      setScanError(`Product not found: ${decodedText}`);
    }
  };
  
  // Handle scan errors
  const onScanFailure = (errorMessage) => {
    if (!errorMessage.includes("NotFoundException") && 
        !errorMessage.includes("NoMultiFormatReader")) {
      console.warn(`QR error = ${errorMessage}`);
    }
  };
  
  // Start scanning
  const startScanning = () => {
    setIsScanning(true);
    setScanError("");
  };
  
  // Stop scanning
  const stopScanning = () => {
    setIsScanning(false);
  };
  
  // Complete sale
  const handleCompleteSale = () => {
    alert(`Sale completed successfully! Total: MK${cartTotal.toFixed(2)}`);
    resetCart();
  };

  return (
    <div className="CartWrapper">
      <div className="scanner-container">
        <h2 className="scanner-title">Scan Products</h2>
        
        <BarcodeScanner
          onScanSuccess={onScanSuccess}
          onScanFailure={onScanFailure}
          isScanning={isScanning}
          onStartScanning={startScanning}
          onStopScanning={stopScanning}
        />
        
        {!isScanning && cartItems.length > 0 && (
          <div className="scan-success">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
              <path fill="#28a745" d="m10 13.6l5.9-5.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-6.6 6.6q-.3.3-.7.3t-.7-.3l-2.6-2.6q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l1.9 1.9Z"/>
            </svg>
            <p>Product added to cart!</p>
          </div>
        )}
        
        {!isScanning && cartItems.length === 0 && (
          <div className="scan-placeholder">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24">
              <path fill="var(--gray)" d="M2 6h4v12H2V6m5 0h4v12H7V6m5 0h4v12h-4V6m5 0h4v12h-4V6Z"/>
            </svg>
            <p>Position barcode inside frame</p>
          </div>
        )}
        
        {scanError && (
          <div className="scan-error">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <path fill="#dc3545" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
            </svg>
            {scanError}
          </div>
        )}
        
        <div className="scan-controls">
          <button 
            className={`scan-btn ${isScanning ? 'scanning-active' : ''}`}
            onClick={isScanning ? stopScanning : startScanning}
          >
            {isScanning ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                </svg>
                Stop Scanning
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M4 4h4v2H4V4m14 0v2h2v4h2V4h-4m-2 14h2v4h-2v-4M4 16v2h2v4h2v-4H4m0-2h4v2H4v-2M2 2v6h6V2H2m10 0v6h6V2h-6m6 16v6h-6v-6h6M8 2v6H2V2h6Z"/>
                </svg>
                Scan Barcode
              </>
            )}
          </button>
          
          <button 
            className="select-btn"
            onClick={() => navigate("/products")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentColor" d="M19 5v14H5V5h14m0-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-7 13l-4-4l1.41-1.41L10 13.17l6.59-6.59L18 8l-8 8z"/>
            </svg>
            Select Products
          </button>
        </div>
        
        <div className="cart-section">
          <div className="cart-header">
            <h3 className="cart-title">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path fill="currentColor" d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.79 1.03H8.1l-.9 1.63l-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1V2m6 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5H16Z"/>
              </svg>
              Shopping Cart
            </h3>
            
            {cartItems.length > 0 && (
              <button 
                className="reset-cart-btn"
                onClick={resetCart}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12Z"/>
                </svg>
                Reset Cart
              </button>
            )}
          </div>
          
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24">
                <path fill="var(--gray)" d="M17 18c1.11 0 2 .89 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2v2h2l3.6 7.59l-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25c0-.05.01-.09.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2H1m6 16c1.11 0 2 .89 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5H16Z"/>
              </svg>
              <p>No items in cart</p>
              <p>Scan or select products to add to cart</p>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cartItems.map(item => (
                  <div key={item.id} className="cart-item">

                    <div className="item-info">
                      <h4>{item.name}</h4>
                      <p className="item-category">{item.category}</p>
                      <div className="price-row">
                        <span className="item-price">MK{(item.price * item.quantity).toFixed(2)}</span>
                        <div className="item-qty">
                          <button onClick={() => {
                            if (item.quantity > 1) {
                              updateQuantity(item.id, item.quantity - 1);
                            } else {
                              removeFromCart(item.id);
                            }
                          }}>
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="cart-total">
                <div className="total-row">
                  <span>Subtotal:</span>
                  <span>MK{cartTotal.toFixed(2)}</span>
                </div>
                <div className="total-row">
                  <span>Tax (10%):</span>
                  <span>MK{(cartTotal * 0.1).toFixed(2)}</span>
                </div>
                <div className="total-row grand-total">
                  <span>Total:</span>
                  <span>MK{(cartTotal * 1.1).toFixed(2)}</span>
                </div>
              </div>
              
              <div className="sale-actions">
                <button className="complete-sale" onClick={handleCompleteSale}>
                  Complete Sale
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;