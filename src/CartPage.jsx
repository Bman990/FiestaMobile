import React from 'react';
import { useShoppingCart } from './ShoppingCartContext';
import './StyleSheet/Cart.css';

export default function CartPage() {
  const { cart } = useShoppingCart();

    // Function to calculate the total price of items in the cart
    const calculateTotal = () => {
      return cart.reduce((total, item) => {
        // Assuming item.price is a string representing the price (e.g., "$4.99")
        const price = parseFloat(item.price.replace('$', ''));
        return total + price * item.quantity;
      }, 0).toFixed(2); // Rounds to 2 decimal places
    };

  return (
    <div className='cartContainer'>
      <div className='cartContent'>
        <div className='cartSection'>
          <h2 className='cartHeaderText'>Your Cart</h2>

          {cart.length === 0 ? (
            <p className='emptyText'>Your cart is empty.</p>
          ) : (
            <ul className='cartItemsList'>
              {cart.map((item) => (
                <li key={item.name} className='cartItem'>
                  <div className='cartImageDiv'>
                    <img src={item.image} alt={item.name} className='cartImageStyle' />
                  </div>
                  <div className='cartItemDetails'>
                    <h2 className='cartItemName'>{item.name}</h2>
                    <h4 className='cartItemQuantity'>Quantity: {item.quantity}</h4>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className='totalSection'>
          <div className='totalContent'>
            <h1 className='totalText'>Your total is: ${calculateTotal()}</h1>
            <button className='payBtn'>Pay Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}