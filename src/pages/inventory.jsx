import React, { useState, useContext } from 'react'; import { ProductsContext } from '../context/products-context'; import '../styles/inventory.css';

const Inventory = () => { const { productsData } = useContext(ProductsContext); const [searchTerm, setSearchTerm] = useState(''); const [activeCategory, setActiveCategory] = useState('All');

const lowStockProducts = productsData.filter( product => product.quantity <= product.minStockLevel );

const categories = ['All', ...new Set(productsData.map(p => p.category))];

const filteredProducts = productsData.filter(product => { const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.category.toLowerCase().includes(searchTerm.toLowerCase()) || product.id.includes(searchTerm); const matchesCategory = activeCategory === 'All' || product.category === activeCategory; return matchesSearch && matchesCategory; });

return ( <div className="inventory-container">
 <div className="inventory-header"> <div className="header-content">
  <div className="title-group"> 
  <i className="fas fa-boxes header-icon"></i> <div> 
  <h1 className="inventory-title">Inventory Management</h1>
  <p className="inventory-subtitle">Track and manage your product inventory</p> </div>
  </div> 
  <div className="header-actions">
  <button className="action-btn export">
  <i className="fas fa-file-export"></i> Export </button> 
  <button className="action-btn primary"> <i className="fas fa-plus">
     </i> Add Product </button> 
    </div> 
   </div>
  </div>

<div className="dashboard-stats">
    <div className="stat-card primary">
      <div className="stat-content">
        <div className="stat-value">{productsData.length}</div>
        <div className="stat-label">Total Products</div>
      </div>
      <div className="stat-icon">
        <i className="fas fa-cubes"></i>
      </div>
    </div>
    <div className="stat-card warning">
      <div className="stat-content">
        <div className="stat-value">{lowStockProducts.length}</div>
        <div className="stat-label">Low Stock</div>
      </div>
      <div className="stat-icon">
        <i className="fas fa-exclamation-triangle"></i>
      </div>
    </div>
    <div className="stat-card success">
      <div className="stat-content">
        <div className="stat-value">87%</div>
        <div className="stat-label">Stock Coverage</div>
      </div>
      <div className="stat-icon">
        <i className="fas fa-chart-line"></i>
      </div>
    </div>
    <div className="stat-card info">
      <div className="stat-content">
        <div className="stat-value">MK 4.2M</div>
        <div className="stat-label">Inventory Value</div>
      </div>
      <div className="stat-icon">
        <i className="fas fa-coins"></i>
      </div>
    </div>
  </div>

  {lowStockProducts.length > 0 && (
    <div className="alert-section">
      <div className="section-header">
        <div className="header-title">
          <i className="fas fa-bell alert-icon"></i>
          <h3>Low Stock Alerts</h3>
          <span className="badge warning">{lowStockProducts.length}</span>
        </div>
        <button className="view-all">
          View All <i className="fas fa-arrow-right"></i>
        </button>
      </div>

      <div className="alert-grid">
        {lowStockProducts.slice(0, 4).map(product => (
          <div className="alert-card" key={product.id}>
            <div className="product-info">
              <div className="product-meta">
                <span className="product-category">{product.category}</span>
              </div>
              <div className="product-name">{product.name}</div>
              <div className="stock-indicator">
                <div className="stock-meter">
                  <div 
                    className="meter-fill" 
                    style={{ width: `${(product.quantity / product.minStockLevel) * 100}%` }}
                  ></div>
                </div>
                <div className="stock-data">
                  <span className="current-stock">{product.quantity} units</span>
                  <span className="min-stock">Min: {product.minStockLevel}</span>
                </div>
              </div>
            </div>
            <div className="product-actions">
              <button className="restock-btn">
                <i className="fas fa-arrow-up"></i> Restock
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )}

  <div className="inventory-controls">
    <div className="control-group">
      <div className="search-container">
        <i className="fas fa-search search-icon"></i>
        <input
          type="text"
          placeholder="Search products by name, SKU or category..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm && (
          <button className="clear-search" onClick={() => setSearchTerm('')}>
            <i className="fas fa-times"></i>
          </button>
        )}
      </div>
    </div>

    <div className="category-scroller">
      <div className="category-tabs">
        {categories.map(category => (
          <button
            key={category}
            className={`category-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  </div>

  <div className="inventory-section">
    <div className="section-header">
      <h3>Product Inventory</h3>
      <div className="header-info">
        <span className="results-count">{filteredProducts.length} products</span>
      </div>
    </div>

    {filteredProducts.length === 0 ? (
      <div className="empty-state">
        <div className="empty-content">
          <i className="fas fa-search fa-3x"></i>
          <h4>No products found</h4>
          <p>Try adjusting your search or filter criteria</p>
          <button className="reset-btn" onClick={() => { setSearchTerm(''); setActiveCategory('All'); }}>
            Reset Filters
          </button>
        </div>
      </div>
    ) : (
      <div className="inventory-grid">
        <div className="grid-header">
          <div className="header-item">#</div>
          <div className="header-item">Product Info</div>
          <div className="header-item hide-mobile">Category</div>
          <div className="header-item">Stock Qty</div>
          <div className="header-item hide-mobile">Price</div>
          <div className="header-item hide-mobile">Status</div>
          <div className="header-item hide-mobile">Actions</div>
        </div>

        <div className="grid-body">
          {filteredProducts.map((product, index) => (
            <div 
              className={`grid-row ${product.quantity <= product.minStockLevel ? 'warning' : ''}`}
              key={product.id}
            >
              <div className="grid-cell serial-number">{index + 1}</div>

              <div className="grid-cell product-info">
                <div className="product-name">
                  <div className="product-thumb">
                    {product.image ? (
                      <img src={product.image} alt={product.name} />
                    ) : (
                      <div className="placeholder-thumb">
                        <i className="fas fa-box"></i>
                      </div>
                    )}
                  </div>
                  {product.name}
                </div>
              </div>

              <div className="grid-cell hide-mobile">
                <span className="category-badge">{product.category}</span>
              </div>

              <div className="grid-cell">
                <div className="stock-display">
                  <span className={`stock-value ${product.quantity <= product.minStockLevel ? 'danger' : ''}`}>
                    {product.quantity}
                  </span>
                  <span className="stock-label">units</span>
                </div>
                <div className="min-stock hide-mobile">Min: {product.minStockLevel}</div>
              </div>

              <div className="grid-cell hide-mobile">
                <div className="price-value">MK{product.price.toFixed(2)}</div>
              </div>

              <div className="grid-cell hide-mobile">
                {product.quantity <= product.minStockLevel ? (
                  <span className="status-badge warning">
                    <i className="fas fa-exclamation-circle"></i> Low Stock
                  </span>
                ) : (
                  <span className="status-badge success">
                    <i className="fas fa-check-circle"></i> In Stock
                  </span>
                )}
              </div>

              <div className="grid-cell hide-mobile">
                <div className="action-group">
                  <button className="icon-btn edit">
                    <i className="fas fa-edit"></i>
                  </button>
                  <button className="icon-btn restock">
                    <i className="fas fa-arrow-up"></i>
                  </button>
                  <button className="icon-btn more">
                    <i className="fas fa-ellipsis-v"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
</div>

); };

export default Inventory;

