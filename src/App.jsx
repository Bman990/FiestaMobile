
import Navbar from './Navbar';
import Footer from './Footer';
import CartPage from './CartPage';
import {Routes, Route, Router } from 'react-router-dom';
import { ShoppingCartProvider } from './ShoppingCartContext';
import Home from './Home';

function App() {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <>
    <Router basename='basename="/FiestaMobile"'>
      <ShoppingCartProvider>
        <Navbar scrollToSection={scrollToSection} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>
        <Footer />
      </ShoppingCartProvider>
      </Router>
    </>
  );
}

export default App;
