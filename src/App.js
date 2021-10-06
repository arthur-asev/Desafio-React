/* eslint-disable react/prop-types */
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './Pages/HomePage';

function App() {
  return (

    <BrowserRouter>
      <div className="grid-container">

    <Header ></Header>

    <main>
      <Route path="/"   component={HomePage}></Route>  
    </main>

    <footer className="row center" > todos os direitos reservados  - ao criador </footer>
       
    </div>
       
    </BrowserRouter>
  );
}

export default App;     
