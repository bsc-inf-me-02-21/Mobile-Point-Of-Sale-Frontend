import React, { useState, useContext } from 'react';
import { ProductsContext } from '../context/products-context';
import * as XLSX from 'xlsx';
import '../styles/inventory.css';

const Inventory = () => {
  const { productsData } = useContext(ProductsContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const lowStockProducts = productsData.filter(
    product => product.quantity <= product.minStockLevel
  );

  const categories = ['All', ...new Set(productsData.map(p => p.category))];

  const filteredProducts = productsData.filter(product => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.id.includes(searchTerm);
    const matchesCategory =
      activeCategory === 'All' || product.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const exportToExcel = () => {
    const exportData = filteredProducts.map(({ id, name, category, quantity, minStockLevel, price }) => ({
      ID: id,
      Name: name,
      Category: category,
      Quantity: quantity,
      'Min Stock Level': minStockLevel,
      Price: price
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Inventory');
    XLSX.writeFile(workbook, 'inventory_export.xlsx');
  };

  return (
    <div className="inventory-container">
      <div className="inventory-header">
        <div className="header-content">
          <div className="title-group">
            <i className="fas fa-boxes header-icon"></i>
            <div>
              <h1 className="inventory-title">Inventory Management</h1>
              <p className="inventory-subtitle">Track and manage your product inventory</p>
            </div>
          </div>
          <div className="header-actions">
            <button className="action-btn export" onClick={exportToExcel}>
              <i className="fas fa-file-export"></i> Export
            </button>
            <button className="action-btn primary">
              <i className="fas fa-plus"></i> Add Product
            </button>
          </div>
        </div>
      </div>

      <div className="inventory-controls">
        <div className="search-container">
          <i className="fas fa-search search-icon"></i>
          <input
            type="text"
            placeholder="Search by name, category, or ID"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          {searchTerm && (
            <button className="clear-search" onClick={() => setSearchTerm('')}>
              <i className="fas fa-times"></i>
            </button>
          )}
        </div>
        <div className="category-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`category-btn ${cat === activeCategory ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="inventory-grid">
        <div className="grid-header">
          <div className="header-item">ID</div>
          <div className="header-item">Product</div>
          <div className="header-item">Category</div>
          <div className="header-item hide-mobile">Qty</div>
          <div className="header-item hide-mobile">Min Stock</div>
          <div className="header-item hide-mobile">Price</div>
          <div className="header-item hide-mobile">Status</div>
        </div>
        {filteredProducts.map((product) => (
          <div key={product.id} className="grid-row">
            <div className="grid-cell">{product.id}</div>
            <div className="grid-cell product-info">
              <div className="product-name">
                {product.image ? (
                  <div className="product-thumb">
                    <img src={product.image} alt={product.name} />
                  </div>
                ) : (
                  <div className="placeholder-thumb">
                    <i className="fas fa-image"></i>
                  </div>
                )}
                {product.name}
              </div>
            </div>
            <div className="grid-cell">{product.category}</div>
            <div className="grid-cell hide-mobile">{product.quantity}</div>
            <div className="grid-cell hide-mobile">{product.minStockLevel}</div>
            <div className="grid-cell hide-mobile">${product.price.toFixed(2)}</div>
            <div className="grid-cell hide-mobile">
              <span className={`status-badge ${product.quantity <= product.minStockLevel ? 'warning' : 'success'}`}>
                {product.quantity <= product.minStockLevel ? 'Low Stock' : 'In Stock'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inventory;