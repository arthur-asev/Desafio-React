import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './Pages/HomePage';

function App() {
  return (

    <BrowserRouter>
      <div className="grid-container">
    <header className="row">
      <div >
        <a className="logo" href="/">
          GamerLand
        </a>
      </div>
      <div className="cart">
        <a href="/cart">Carrinho</a>
        <img src="/assets/cart-icon.svg"/>
      </div>
     
    </header>
    <main>
      <div><HomePage /></div>
    </main>

    <footer className="row center" > todos os direitos reservados  -</footer>
       
    </div>
       
    </BrowserRouter>
  );
}

export default App;
