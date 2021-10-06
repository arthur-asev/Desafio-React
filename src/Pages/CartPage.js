/* eslint-disable react/prop-types */
import React from 'react';
import Basket from '../components/Basket';

export default function CartPage(props) {
  const {cartItems,setCartItems} = props

  const onAdd = (product) =>{
    const exist = cartItems.find( (x) => x.id === product.id );
    
    if (exist){
        setCartItems(cartItems.map( (x) => x.id === product.id ? {...exist, qty:exist.qty + 1 , frete:exist.frete + 10} : x ))
    } else{
      setCartItems([...cartItems,{...product,qty: + 1, frete:+ 10}])
    }
}


  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 , frete:exist.frete - 10} : x
        )
      );
    }
  };
  


    return (
        <div>
            <Basket onAdd={onAdd}  onRemove={onRemove} cartItems={cartItems}  ></Basket>
        </div>
    )
}
