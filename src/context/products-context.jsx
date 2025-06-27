import { createContext, useState, useEffect } from "react";
import Products from "../data/products-data.jsx";

export const ProductsContext = createContext({
  productsData: [],
  loading: true
});

export const ProductsProvider = ({ children }) => {
  const [productsData, setProductsData] = useState(Products);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/products");
        const data = await response.json();
        setProductsData(data);
      } catch (error) {
        console.error("Failed to load products", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ productsData, loading }}>
      {children}
    </ProductsContext.Provider>
  );
};