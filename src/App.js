
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './components/Header'
import Coins from './components/Coin'
import Coindetails from './components/Coindetails'
import Exchange from './components/Exchange'
import Home from './components/Home'
import Footer from './components/Footer';

function App() {
  return (
    <>
    
    <Router >
    <Header/>
      <Routes >
        <Route path='/' element={<Home/>}/>
        <Route path='/coins' element={<Coins/>}/>
        <Route path='/exchange' element={<Exchange/>}/>
        <Route path='/coin/:id' element={<Coindetails/>}/>
      </Routes>

      <Footer/>
    </Router>
    
    </>
  );
}

export default App;
