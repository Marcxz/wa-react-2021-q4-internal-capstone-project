import './App.css';
import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';
import Header from './header/Header'
import { Footer } from './footer/Footer'
import Home from './home/Home';
import { BrowserRouter as Router} from 'react-router-dom'
import EcommerceContext from './state/Context';
import { useState } from 'react/cjs/react.development';

function App() {
  useFeaturedBanners();
  
  const [cart, setCartProduct] = useState([])
  const [quantityCart, setQuantityCart] = useState(0)
  const [totalCart, setTotalCart] = useState(0)
  const [customer, setCustomer] = useState({
    name: '',
    email: '',
    zipCode: '',
    notes: '',
})
  return (
      <Router>
        
        <div className="App">
          <EcommerceContext.Provider
            value = {{cart, setCartProduct,
                      quantityCart, setQuantityCart,
                      totalCart, setTotalCart,
                      customer, setCustomer}}
          >
            <Header />
            <Home />
            <Footer />
          </EcommerceContext.Provider>
        </div>
      </Router>
  );
}

export default App;
