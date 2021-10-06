import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CartContextProvider from './context/Cart'

ReactDOM.render(
  <React.StrictMode>
   <CartContextProvider>
     <App />
   </CartContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


