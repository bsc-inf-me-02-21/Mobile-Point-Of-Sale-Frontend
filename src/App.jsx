import ParentPage from './pages/parent-page.jsx';
import './App.css'
import RoutesComponent from "./routes/routes.jsx";
import {ProductsProvider} from "./context/products-context.jsx";

function App() {
  

  return (
  <ProductsProvider>
    <div className="App">
    
  
    <RoutesComponent />
    <ParentPage />
    
     </div>
     </ProductsProvider>
     )
}

export default App
