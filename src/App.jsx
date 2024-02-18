
import Navbar from './Navbar';
import Footer from './Footer';
import CartPage from './CartPage';
import { Routes, Route } from 'react-router-dom'
import { ShoppingCartProvider } from './ShoppingCartContext';
import Home from './Home';

function App() {
  
  return (
    <>
      <ShoppingCartProvider>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='cart' element={<CartPage />} />
        </Routes>
        <Footer />
      </ShoppingCartProvider>
    </>
  );
}

export default App;
