import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';

function App() {
 
  return (

    <BrowserRouter>
      <div className="grid-container">
    <header className="row">
      <div className="logo" >
        <a href="/">
          GamerLand
        </a>
        <img src="/assets/2923485.svg"/>
       
      </div>
      <div className="cart">
        <a href="/cart">Carrinho</a>
        <img src="/assets/cart-icon.svg"/>
      </div>
     
    </header>
    <main>
      <Route path="/"   component={HomePage}></Route>  
    </main>

    <footer className="row center" > todos os direitos reservados  -</footer>
       
    </div>
       
    </BrowserRouter>
  );
}

export default App;     
