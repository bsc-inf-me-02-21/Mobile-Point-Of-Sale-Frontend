import Header from "../components/header.jsx";
import ProductIcon from "../images/goods-cartons.svg";
import ProductGrid from "../components/product-grid.jsx";

const Products = () => {
  
  
  return(
    <div className="ProductsWrapper">
  
  <Header name="Products" icon={ProductIcon}/>
  
  <ProductGrid />
    
    </div>
    
    )
}

export default Products;