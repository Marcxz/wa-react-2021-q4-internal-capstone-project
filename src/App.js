import './App.css';
import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';
import Header from './header/Header'
import { Footer } from './footer/Footer'
import Home from './home/Home';
import { useState } from 'react/cjs/react.development';

function App() {
  useFeaturedBanners();
  const [isProduct, setIsProduct] = useState(false)

  return (
    
    <div className="App">
      <Header setIsProduct={setIsProduct} />
      <Home isProduct={isProduct} setIsProduct={setIsProduct} />
      <Footer />
    </div>
  );
}

export default App;
