import './App.css';
import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';
import Header from './header/Header'
import { Footer } from './footer/Footer'
import Home from './home/Home';
import { BrowserRouter as Router} from 'react-router-dom'
function App() {
  useFeaturedBanners();

  return (
      <Router>
        <div className="App">
          <Header />
          <Home />
          <Footer />
        </div>
      </Router>
  );
}

export default App;
