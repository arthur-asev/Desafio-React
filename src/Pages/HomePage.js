/* eslint-disable react/prop-types */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Basket from '../components/Basket';
import Product from '../components/Product';

export default function HomePage() {
    const [products, setProducts] = useState([]);
    const [cartItems,setCartItems] = useState([]);
    
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

    useEffect(() => {
            const fetchData = async () => {
                const {data} = await axios.get('products.json');
                setProducts(data);
            };
            fetchData();
    },[])

    return (
       
        <div>
            <div className="row center">
   
                {products.map((product) => (
                    <Product onAdd={onAdd} key={product.id} product={product}></Product>
                ))}
                    <Basket onAdd={onAdd}  onRemove={onRemove} cartItems={cartItems}  ></Basket>
            </div>
        </div>
    )
}
 