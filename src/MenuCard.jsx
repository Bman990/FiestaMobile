import React from 'react';
import './StyleSheet/MenuCard.css';
import { useShoppingCart } from './ShoppingCartContext';

export default function MenuCard({ name, price, image, desc }) {
  const { increaseQuantity, decreaseQuantity, removeQuantity, cart } = useShoppingCart();
  const cartItem = cart.find((item) => item.name === name);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <div className="menu-item-card">
      <img src={image} alt={name} width={510} height={500} className='imageItemStyle' />
      <div className="details">
        <h3 className="item-name">{name}</h3>
        <p className="item-price">{price}</p>
        <p className="item-desc">{desc}</p>

        <div className='buttonDiv'>
          {quantity === 0 ? (
            <button className='orderBtn' onClick={() => increaseQuantity({ name, price, image, desc, quantity: 1 })}>
              Add to order
            </button>
          ) : (
            <div className='addedBtns'>
              <div className='quantityChangeDiv'>
                <button className='changeBtn' onClick={() => decreaseQuantity({ name, price, image, desc })}>
                  -
                </button>
                <div className='quantityDisplay'>{quantity}</div>
                <button className='changeBtn' onClick={() => increaseQuantity({ name, price, image, desc })}>
                  +
                </button>
              </div>

              <div className='removeBtnDiv'>
                <button className='removeBtn' onClick={() => removeQuantity({ name, price, image, desc })}>
                  Remove
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
