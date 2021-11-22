import logo from './logo.svg';
import './App.css';
import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';
import Header from './header/Header'
import Footer from './footer/Footer'
import Home from './home/Home';

function App() {
  const { data, isLoading } = useFeaturedBanners();
  // console.log(data, isLoading);

  return (
    
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
