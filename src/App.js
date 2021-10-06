/* eslint-disable react/prop-types */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './Pages/HomePage';
import CartPage  from './Pages/CartPage';
import ProductDetails from './Pages/ProductDetails';
function App() {
  
  const [products, setProducts] = useState([]);
  const [cartItems,setCartItems] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
        const {data} = await axios.get('products.json');
        setProducts(data);
    };
    fetchData();
},[])

  return (

    <BrowserRouter>
      <div className="grid-container">

    <Header ></Header>

    <main>
      <Switch>
      <Route path="/"  exact component={HomePage}><HomePage products={products} setProducts={setProducts} setCartItems={setCartItems} cartItems={cartItems}></HomePage></Route>
      <Route path="/productdetails/" component={ProductDetails}></Route>  
      <Route path="/cart/" component={CartPage}><CartPage cartItems={cartItems} setCartItems={setCartItems}></CartPage></Route>
      </Switch>
    </main>

    <footer className="row center" > todos os direitos reservados  - ao criador </footer>
       
    </div>
       
    </BrowserRouter>
  );
}

export default App;     
