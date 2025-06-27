import React, { createContext, useContext, useState, useEffect } from 'react';

// Transaction structure
export const TransactionData = {
  id: "",
  items: [],
  subtotal: 0,
  tax: 0,
  total: 0,
  time: "",
  date: "",
  salesperson: "staff",
  payment: "cash",
  amountPaid: 0,
  change: 0
};


const TransactionContext = createContext();

export function useTransactions() {
  return useContext(TransactionContext);
}

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(() => {
    // Load from localStorage on initial load
    const savedTransactions = localStorage.getItem('transactions');
    return savedTransactions ? JSON.parse(savedTransactions) : [];
  });

  // Persist to localStorage whenever transactions change
  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  // Add a new transaction
  const addTransaction = (transaction) => {
    const newTransaction = {
      ...transaction,
      id: Date.now().toString(), // Generate unique ID
      time: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString()
    };
    
    setTransactions(prev => [...prev, newTransaction]);
    return newTransaction;
  };

  // Clear all transactions (for testing/reset)
  const clearTransactions = () => {
    setTransactions([]);
    localStorage.removeItem('transactions');
  };

  // Get all transactions
  const getAllTransactions = () => {
    return [...transactions].reverse(); // Return most recent first
  };

  // Get a single transaction by ID
  const getTransactionById = (id) => {
    return transactions.find(t => t.id === id);
  };

  const value = {
    transactions,
    addTransaction,
    clearTransactions,
    getAllTransactions,
    getTransactionById
  };

  return (
    <TransactionContext.Provider value={value}>
      {children}
    </TransactionContext.Provider>
  );
};