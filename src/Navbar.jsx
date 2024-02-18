import tacoLogo from '/tacoLogo.png';
import './StyleSheet/NavStyle.css';
import BagSvg from './bagSvg';
import { useShoppingCart } from './ShoppingCartContext';
import { Link, useLocation } from 'react-router-dom';



export default function Navbar() {
  const { cart } = useShoppingCart();
  const quantity = cart.reduce((total, item) => total + item.quantity, 0);
  const location = useLocation();

  const isCartPage = location.pathname === '/cart';

  const handleSectionClick = (sectionId) => {
    // Scroll to the section based on the hash in the URL after navigation
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className='navStyle'>
      <Link to="/" onClick={() => handleSectionClick('heroSection')}>
        <img src={tacoLogo} width='110' height='110' alt="Taco Logo" />
      </Link>

      {!isCartPage && (
        <ul className='navUL'>
          <li>
            <button onClick={() => handleSectionClick('menuSection')}>
              Menu
            </button>
          </li>

          <li>
            <button onClick={() => handleSectionClick('storySection')}>
              Our Story
            </button>
          </li>

          <li>
            <button onClick={() => handleSectionClick('contactSection')}>
              Contact Us
            </button>
          </li>

          <li>
            <Link to="cart" className='svgBtn'>
              <BagSvg />
              <div className='quanityNum'>{quantity}</div>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}