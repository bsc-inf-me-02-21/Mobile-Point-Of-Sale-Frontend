import React, { useState, useEffect, useContext } from "react";
import "../styles/sales.css";
import { useNavigate } from "react-router-dom";
import { useTransactions } from "../context/transaction-context"; // ADDED

function SalesPage() {
  const navigate = useNavigate();
  const { getAllTransactions } = useTransactions(); // ADDED
  
  const [salesData, setSalesData] = useState({
    todaySales: 0,
    avgTicket: 0,
    transactions: []
  });

  // Load real transaction data
  useEffect(() => {
    const loadSalesData = () => {
      const allTransactions = getAllTransactions();
      
      // Get today's date in the same format used in transactions
      const today = new Date();
      const todayFormatted = today.toLocaleDateString();
      
      // Filter today's transactions
      const todaysTransactions = allTransactions.filter(
        transaction => transaction.date === todayFormatted
      );
      
      // Calculate today's sales total
      const todaySales = todaysTransactions.reduce(
        (total, transaction) => total + transaction.total,
        0
      );
      
      // Calculate average ticket
      const avgTicket = todaysTransactions.length > 0
        ? todaySales / todaysTransactions.length
        : 0;
      
      // Get recent transactions (last 5)
      const recentTransactions = allTransactions
        .slice(0, 5)
        .map(t => ({
          id: t.id,
          time: t.time,
          amount: t.total
        }));
      
      setSalesData({
        todaySales,
        avgTicket,
        transactions: recentTransactions
      });
    };
    
    loadSalesData();
    
    // Refresh data every minute
    const interval = setInterval(loadSalesData, 60000);
    
    return () => clearInterval(interval);
  }, [getAllTransactions]);

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
              {/* Real trend calculation would go here */}
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
              {/* Real trend calculation would go here */}
              0.3%
            </div>
          </div>
        </div>
        
        <div className="sale-action-section">
          <button 
            className="sale-button"
            onClick={() => navigate("/cart")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
            </svg>
            New Sale
          </button>
        </div>
        
        <div className="recent-transactions">
          <h3 className="sub-section-title">Recent Transactions</h3>
          {salesData.transactions.length > 0 ? (
            <div className="transactions-list">
              {salesData.transactions.map(transaction => (
                <div 
                  className="transaction-item" 
                  key={transaction.id}
                  onClick={() => navigate(`/transaction/${transaction.id}`)}
                >
                  <div className="transaction-time">{transaction.time}</div>
                  <div className="transaction-amount">MK{transaction.amount.toFixed(2)}</div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-transactions">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                <path fill="var(--gray)" d="M20 12c0-1.1-.9-2-2-2V7c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3c-1.1 0-2 .9-2 2v5h1.33L4 19h1l.67-2h8.66l.67 2h1l.67-2H20v-5zm-4-2h-3V7h3v3zM8 7h3v3H8V7zm-2 5h12v3H6v-3z"/>
              </svg>
              <p>No transactions yet</p>
              <p>Start a new sale to see transaction history</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SalesPage;