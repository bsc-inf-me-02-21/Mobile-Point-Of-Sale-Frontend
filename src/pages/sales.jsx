import Header from "../components/header.jsx";
import ProductIcon from "../images/sales.svg";
import '../styles/sales.css';

const Sales = () => {
  
  
  return(
    <div className="SalesWrapper">
  
  <Header name="Sales" icon={ProductIcon}/>
 

 
  <div>
    <h2>Scan Barcode</h2>
    <h2>Cart</h2>
  </div>

  

  <div className="kpi">

    <h3>Total Sales - Date</h3>
    <h1>MK50, 000</h1>

  </div>

  <div className="kpi">

    <h3>Trending Product</h3>
    <h1>CoCala</h1>

  </div>
    
    </div>
    
    )
}

export default Sales;