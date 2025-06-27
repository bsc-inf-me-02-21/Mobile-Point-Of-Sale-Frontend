import { createContext, useState } from "react";
import Products from "../data/products-data.jsx";


export const ProductsContext = createContext([]);

export const ProductsProvider = ({ children }) => {
  const [productsData] = useState(Products); 
  
  return (
    <ProductsContext.Provider value={productsData}>
      {children}
    </ProductsContext.Provider>
  );
};