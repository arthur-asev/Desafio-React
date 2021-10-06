/* eslint-disable react/prop-types */
import React from "react";
import { useCart } from "../context/Cart";

export default function ProductDetails() {
  const { cartItems, onAdd } = useCart([]);

  return (
    <div className="card">
      {cartItems.map((product) => (
        <ul key={product.id} product={product}>
          <img
            className="large"
            src={"/assets/" + product.image}
            alt={product.name}
          />
          <li>
            <h1 className="score">Classificação:{product.score}</h1>
          </li>
          <li>
            <h1 className="productName">{product.name}</h1>
          </li>
          <li>
            <h1 className="price">R$: {product.price}</h1>
          </li>
          <button onClick={() => onAdd(product)}>Enviar ao Carrinho</button>
        </ul>
      ))}
    </div>
  );
}
