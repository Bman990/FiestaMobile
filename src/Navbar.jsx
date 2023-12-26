// import React from 'react';
// import tacoLogo from '/tacoLogo.png';
// import './StyleSheet/NavStyle.css';
// import BagSvg from './bagSvg';

// export default function Navbar(){
//     return(
//         <nav className='navStyle'>
//             <img src={tacoLogo} width='110' height='110' />

//             <ul className='navUL'>

//                 <li>
//                     <button>Menu</button>
//                 </li>

//                 <li>
//                 <button>Our Story</button>
//                 </li>

//                 <li>
//                     <button>Contact Us</button>
//                 </li>

//                 <li>
//                     <button className='svgBtn'>
//                     <BagSvg />
//                     <div className='quanityNum'>3</div>
//                     </button>
//                 </li>

//             </ul>
//         </nav>
//     )
// }











// import React from 'react';
// import tacoLogo from '/tacoLogo.png';
// import './StyleSheet/NavStyle.css';
// import BagSvg from './bagSvg';
// import { useShoppingCart } from './ShoppingCartContext';
// import { useNavigate } from 'react-router-dom';

// export default function Navbar() {
//   const { cart } = useShoppingCart();
//   const quantity = cart.reduce((total, item) => total + item.quantity, 0);
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate('/cart');
//   };

//   const sectionClick = (sectionId) => {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.scrollIntoView({ behavior: 'smooth' });
//     }
//   };


//   return (
//     <nav className='navStyle'>
//       <img src={tacoLogo} width='110' height='110' />

//       <ul className='navUL'>
//       <li>
//           <button onClick={() => sectionClick('menuSection')}>
//             Menu
//           </button>
//         </li>

//         <li>
//           <button onClick={() => sectionClick('storySection')}>
//             Our Story
//           </button>
//         </li>

//         <li>
//             <button className='svgBtn' onClick={handleClick}>
//             <BagSvg />
//             <div className='quanityNum'>{quantity}</div>
//             </button>
//         </li>
//       </ul>
//     </nav>
//   );
// }





// Navbar.js
import React from 'react';
import tacoLogo from '/tacoLogo.png';
import './StyleSheet/NavStyle.css';
import BagSvg from './bagSvg';
import { useShoppingCart } from './ShoppingCartContext';
import { useNavigate } from 'react-router-dom';

export default function Navbar({ scrollToSection }) {
  const { cart } = useShoppingCart();
  const quantity = cart.reduce((total, item) => total + item.quantity, 0);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/cart');
  };

  const handleSectionClick = (sectionId) => {
    // If already on the home page, scroll to the section
    if (window.location.pathname === '/') {
      scrollToSection(sectionId);
    } else {
      // If on a different page, navigate to the home page first, then scroll to the section
      navigate('/');
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 300); // Adjust the delay if needed
    }
  };

  return (
    <nav className='navStyle'>
      <img src={tacoLogo} width='110' height='110' onClick={() => handleSectionClick('heroSection')}/>

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
          <button className='svgBtn' onClick={handleClick}>
            <BagSvg />
            <div className='quanityNum'>{quantity}</div>
          </button>
        </li>
      </ul>
    </nav>
  );
}