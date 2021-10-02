/* eslint-disable react/prop-types */
import React from 'react';
import './Basket.css';

export default function Basket(props) {
    const {cartItems ,onAdd ,onRemove} = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const shippingPrice = itemsPrice < 250 ? 0 : 10;
    const totalPrice = itemsPrice + shippingPrice;
    return (
        <div>
            {cartItems.length === 0 && <h1>O carrinho está vazio</h1>}
            {cartItems.map((item) => (
                <div key={item.id} className="cardItem">
                <ul>
                <li>{item.name}</li>
                <li><button onClick={() => onRemove(item)} className="remove">
                    -
                </button>{' '}
                </li>
                <li> 
                <button onClick={() => onAdd(item)} className="add">
                 +
                </button>
                </li>
                <li>
                {item.qty}x {item.price.toFixed(2)}  
                </li>
                </ul>
                </div>
            ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
                ${shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={() => alert('Implement Checkout!')}>
                Checkout
              </button>
            </div>
          </>
        )}
        </div> 
    )
}
