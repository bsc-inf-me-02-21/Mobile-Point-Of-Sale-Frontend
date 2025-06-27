import ParentPage from './pages/parent-page.jsx';
import './App.css'
import RoutesComponent from "./routes/routes.jsx";
import {ProductsProvider} from "./context/products-context.jsx";
import {CartProvider} from "./context/cart-context.jsx";
import {TransactionProvider} from "./context/transaction-context.jsx";


function App() {
  

  return (
  <ProductsProvider>
    <CartProvider>
     <TransactionProvider>
     <div className="App">
        <RoutesComponent />
            <ParentPage />
      </div>
       </TransactionProvider>
      </CartProvider> 
  </ProductsProvider>
     )
}

export default App
