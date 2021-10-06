/* eslint-disable react/prop-types */
import React from "react";
import { useCart } from "../context/Cart";
import "./Basket.css";

export default function Basket() {
  const { cartItems, setCartItems, onAdd, onRemove } = useCart([]);
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  let frete = cartItems.reduce((a, b) => a + b.frete, 0);
  const total = itemsPrice;
  total >= 250 ? (frete = 0) : total;

  return (
    <div>
      {cartItems.length === 0 && (
        <h1 className="cart-text">O carrinho está vazio</h1>
      )}
      {cartItems.map((item) => (
        <div key={item.id} className="cardItem">
          <ul>
            <li>
              <img
                className="small"
                src={"/assets/" + item.image}
                alt={item.name}
              />
            </li>
            <li>{item.name}</li>
            <span>
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>
            </span>
            <span>
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </span>
            <li>
              {item.qty}x {item.price.toFixed(2)}
            </li>
          </ul>
        </div>
      ))}

      {cartItems.length !== 0 && (
        <div className="priceContainer">
          <div>
            {" "}
            <button
              className="cleanCart"
              onClick={() =>
                setCartItems(cartItems.filter((x) => (x.length = 0)))
              }
            >
              Limpar Carrinho
            </button>
          </div>
          <div>
            <div className="frete">Frete:${frete.toFixed(2)}</div>
          </div>
          <div>
            <div className="total">
              <strong>Total:R$:{(total + frete).toFixed(2)}</strong>
            </div>
          </div>
          <div>
            <button
              className="checkout"
              onClick={() => alert("Implement Checkout!")}
            >
              Finalizar compra
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
