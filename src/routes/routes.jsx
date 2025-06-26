import {Routes, Route} from 'react-router-dom';
import Sales from '../pages/sales.jsx';
import Inventory from '../pages/inventory.jsx';
import Products from '../pages/products.jsx';
import More from "../pages/more.jsx";


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
        
          
        
       
       </Routes>
    
    
    
    
    
    )
}

export default RoutesComponent;