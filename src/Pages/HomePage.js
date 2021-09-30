import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '../components/Product';

export default function HomePage() {

    const [products, setProducts] = useState([]);
    
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
                    <Product key={product.id} product={product}></Product>
                ))}
           
            </div>
        </div>
    )
}
 