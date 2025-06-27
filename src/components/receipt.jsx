
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTransactions } from "../context/transaction-context";
import "../styles/receipt.css";

const Receipt = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getTransactionById } = useTransactions();
  const [transaction, setTransaction] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTransaction = () => {
      try {
        const foundTransaction = getTransactionById(id);
        if (foundTransaction) {
          setTransaction(foundTransaction);
        } else {
          setError("Transaction not found");
        }
        setIsLoading(false);
      } catch (err) {
        setError("Failed to load transaction");
        setIsLoading(false);
        console.error("Error loading transaction:", err);
      }
    };

    fetchTransaction();
  }, [id, getTransactionById]);

  const handleGoBack = () => {
    navigate("/sales");
  };

  if (isLoading) {
    return (
      <div className="ReceiptWrapper">
        <div className="receipt-loading">
          <div className="loading-spinner"></div>
          <p>Loading receipt...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="ReceiptWrapper">
        <div className="receipt-error">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
            <path fill="#e74c3c" d="M11 15h2v2h-2zm0-8h2v6h-2zm1-5C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8z"/>
          </svg>
          <h3>{error}</h3>
          <p>The requested transaction could not be found</p>
          <button onClick={handleGoBack} className="back-button">
            Back to Sales
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="ReceiptWrapper">
      <div className="receipt-container">
        <button onClick={handleGoBack} className="back-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8l8 8l1.41-1.41L7.83 13H20v-2z"/>
          </svg>
          Back to Sales
        </button>
        
        <div className="receipt-header">
          <h2>Transaction Receipt</h2>
          <div className="receipt-meta">
            <span>ID: {transaction.id}</span>
            <span>{transaction.date} at {transaction.time}</span>
          </div>
        </div>
        
        <div className="receipt-store-info">
          <h3>Shop Name</h3>
          <p>123 Market Street</p>
          <p>Lilongwe, Malawi</p>
          <p>Phone: +265 123 456 789</p>
        </div>
        
        <div className="receipt-items">
          <div className="receipt-items-header">
            <span>Item</span>
            <span>Qty</span>
            <span>Price</span>
            <span>Total</span>
          </div>
          
          {transaction.items.map((item, index) => (
            <div className="receipt-item" key={index}>
              <div className="item-name">
                {item.name}
                <span className="item-category">{item.category}</span>
              </div>
              <div className="item-qty">{item.quantity}</div>
              <div className="item-price">MK{item.price.toFixed(2)}</div>
              <div className="item-total">MK{(item.price * item.quantity).toFixed(2)}</div>
            </div>
          ))}
        </div>
        
        <div className="receipt-totals">
          <div className="receipt-row">
            <span>Subtotal:</span>
            <span>MK{transaction.subtotal.toFixed(2)}</span>
          </div>
          <div className="receipt-row">
            <span>Tax (10%):</span>
            <span>MK{transaction.tax.toFixed(2)}</span>
          </div>
          <div className="receipt-row grand-total">
            <span>Total:</span>
            <span>MK{transaction.total.toFixed(2)}</span>
          </div>
        </div>
        
        <div className="receipt-payment">
          <div className="receipt-row">
            <span>Payment Method:</span>
            <span className="payment-method">{transaction.payment.toUpperCase()}</span>
          </div>
          <div className="receipt-row">
            <span>Amount Paid:</span>
            <span>MK{transaction.amountPaid.toFixed(2)}</span>
          </div>
          {transaction.payment === "cash" && transaction.change > 0 && (
            <div className="receipt-row">
              <span>Change:</span>
              <span>MK{transaction.change.toFixed(2)}</span>
            </div>
          )}
        </div>
        
        <div className="receipt-footer">
          <p>Thank you for your purchase!</p>
          <p>Salesperson: {transaction.salesperson}</p>
        </div>
        
        <div className="receipt-actions">
          <button className="print-button" onClick={() => window.print()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentColor" d="M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM8 5h8v3H8V5zm8 14H8v-4h8v4zm2-4v-2H6v2H4v-4c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v4h-2z"/>
            </svg>
            Print Receipt
          </button>
        </div>
      </div>
    </div>
  );
};

export default Receipt;