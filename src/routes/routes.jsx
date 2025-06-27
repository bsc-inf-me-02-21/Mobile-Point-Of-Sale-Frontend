import {Routes, Route} from 'react-router-dom';
import Sales from '../pages/sales.jsx';
import Inventory from '../pages/inventory.jsx';
import Products from '../pages/products.jsx';
import More from "../pages/more.jsx";
import Cart from "../components/cart.jsx";
import Receipt from "../components/receipt.jsx";

const RoutesComponent = () => {
  
  
  return(
    
    
       <Routes>
         
         <Route path="/products" 
             element={<Products />}
             />
        
          <Route path="/sales" 
             element={<Sales />}
             />
             
               <Route path="/inventory" 
             element={<Inventory />}
             />
        
          <Route path="/more" 
             element={<More />}
             />
        
            <Route path="/cart" 
             element={<Cart />}
             />
             
            
     <Route path="/receipt/:id" element={<Receipt />} />
        
       
       </Routes>
    
    
    
    
    
    )
}

export default RoutesComponent;