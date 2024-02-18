
import tacoLogo from '/tacoLogo.png';
import './StyleSheet/NavStyle.css';
import BagSvg from './bagSvg';
import { useShoppingCart } from './ShoppingCartContext';
import { Link, useLocation } from 'react-router-dom';



export default function Navbar() {
  const { cart } = useShoppingCart();
  const quantity = cart.reduce((total, item) => total + item.quantity, 0);
  const location = useLocation();

  const handleSectionClick = (sectionId) => {
    if (sectionId === 'cart') {
      // If navigating to the cart, use React Router's Link
      return;
    }
  
    // For other sections, check if we are already on the home page
    const isHomePage = location.pathname === '/';
  
    if (!isHomePage) {
      // If not on the home page, navigate to the home page with the section as a hash
      window.location.href = `/?section=${sectionId}`;
    }
    
    // If on the home page, scroll to the section
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className='navStyle'>

    <Link to="/" id="heroSection" onClick={() => handleSectionClick('heroSection')}>
      <img src={tacoLogo} width='110' height='110' alt="Taco Logo" className='mobileStyleImg'/>
    </Link>

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
          <Link to="/cart" className='svgBtn'>
            <BagSvg />
            <div className='quanityNum'>{quantity}</div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}