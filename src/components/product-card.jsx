import Products from "../data/products-data.jsx";
import {useState} from "react";
import test from "../images/coca.jpg";
import "../styles/product-card.css";

function ProductCard() {
  
  const [productData, setProductData] = useState(Products);
  
  
  
  
  const card =  productData.map((product) => {
    return <div className="Card" key={product.id}>
    <h2> {product.name} </h2>
    <img src={test} />
    <h3> MK{product.price} </h3>
    <h4> {product.category} </h4>
    <button> Add To Cart </button>
    
    </div>
    
  })
  
  return (
    <div className="card-container">
      {card}
    </div>
  );
}

export default ProductCard;