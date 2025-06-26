// src/components/SalesPage.jsx
import React, { useState, useEffect } from "react";
import "../styles/sales.css";

function SalesPage() {
  const [salesData, setSalesData] = useState({
    todaySales: 0,
    avgTicket: 0,
    transactions: []
  });

  // Simulate loading sales data
  useEffect(() => {
    // This would be API call in real app
    setTimeout(() => {
      setSalesData({
        todaySales: 2845.75,
        avgTicket: 32.50,
        transactions: [
          { id: 1, time: "09:15", amount: 42.50 },
          { id: 2, time: "10:30", amount: 18.75 },
          { id: 3, time: "11:45", amount: 56.25 }
        ]
      });
    }, 800);
  }, []);

  const handleNewSale = () => {
    console.log("Initiate new sale process");
    // In a real app, this would trigger the sale flow
  };

  return (
    <div className="pos-container">
      <div className="dashboard-section">
        <h2 className="section-title">Sales Dashboard</h2>
        
        <div className="kpi-container">
          <div className="kpi-card">
            <div className="kpi-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="var(--primary)" d="M5 22h14a2 2 0 0 0 2-2V9a1 1 0 0 0-1-1h-3V7a5 5 0 0 0-5-5h-1a5 5 0 0 0-5 5v1H4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2zm6-17a3 3 0 0 1 3 3v1H8V8a3 3 0 0 1 3-3z"/>
              </svg>
            </div>
            <div className="kpi-content">
              <div className="kpi-value">MK{salesData.todaySales.toFixed(2)}</div>
              <div className="kpi-label">Today's Sales</div>
            </div>
            <div className="kpi-trend positive">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                <path fill="currentColor" d="m5 9l7 7l7-7z"/>
              </svg>
              12.5%
            </div>
          </div>
          
          <div className="kpi-card">
            <div className="kpi-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="var(--secondary)" d="M19 5v14H5V5h14m0-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-7 9h-2V7h2v5zm0 4h-2v-2h2v2z"/>
              </svg>
            </div>
            <div className="kpi-content">
              <div className="kpi-value">MK{salesData.avgTicket.toFixed(2)}</div>
              <div className="kpi-label">Avg. Ticket</div>
            </div>
            <div className="kpi-trend neutral">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                <path fill="currentColor" d="M7 10h10v4H7z"/>
              </svg>
              0.3%
            </div>
          </div>
        </div>
        
        <div className="sale-action-section">
          <button 
            className="sale-button"
            onClick={handleNewSale}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
            </svg>
            New Sale
          </button>
        </div>
        
        <div className="recent-transactions">
          <h3 className="sub-section-title">Recent Transactions</h3>
          <div className="transactions-list">
            {salesData.transactions.map(transaction => (
              <div className="transaction-item" key={transaction.id}>
                <div className="transaction-time">{transaction.time}</div>
                <div className="transaction-amount">MK{transaction.amount.toFixed(2)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalesPage;