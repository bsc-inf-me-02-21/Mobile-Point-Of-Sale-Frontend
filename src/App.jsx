import ParentPage from './pages/parent-page.jsx';
import './App.css'
import RoutesComponent from "./routes/routes.jsx";
import {ProductsProvider} from "./context/products-context.jsx";
import {CartProvider} from "./context/cart-context.jsx";



function App() {
  

  return (
  <ProductsProvider>
    <CartProvider>
     <div className="App">
        <RoutesComponent />
            <ParentPage />
      </div>
      </CartProvider> 
  </ProductsProvider>
     )
}

export default App
