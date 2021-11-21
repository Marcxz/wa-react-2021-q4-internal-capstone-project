import logo from './logo.svg';
import './App.css';
import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';
import Header from './header/Header'
import Footer from './footer/Footer'

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    
    <div className="App">
      <Header />
      <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
      </div>
      <Footer />
      
    </div>
  );
}

export default App;
