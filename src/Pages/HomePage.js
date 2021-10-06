/* eslint-disable react/prop-types */
import React from 'react';
import Product from '../components/Product';

export default function HomePage(props) {
    const  {products,setCartItems,cartItems}= props

    const onAdd = (product) =>{
      const exist = cartItems.find( (x) => x.id === product.id );
      
      if (exist){
          setCartItems(cartItems.map( (x) => x.id === product.id ? {...exist, qty:exist.qty + 1 , frete:exist.frete + 10} : x ))
      } else{
        setCartItems([...cartItems,{...product,qty: + 1, frete:+ 10}])
      }
  }
    return (
       
        <div>
            <div className="row center">
   
                {products.map((product) => (
                    <Product onAdd={onAdd} key={product.id} product={product}></Product>
                ))}
            </div>
        </div>
    )
}
 