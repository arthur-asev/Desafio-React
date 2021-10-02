/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';


export default function Product(props) {
    const {product,onAdd} = props
      
    return (
  
      <div key={product.id} className="card">
      <Link to={`/product/${product.id}`}>
        <img className="medium" src={'/assets/'+ product.image} alt={product.name} />
      </Link>
        <ul className="card-body">
        <li><h1 className="score">Classificação:{product.score}</h1></li>
        <li><h1 className="productName">{product.name}</h1></li>
        <li><h1 className="price">R$: {product.price}</h1></li>
        <button onClick={() => onAdd(product)}>Enviar ao Carrinho</button>
        </ul>

      </div>

    )
}
