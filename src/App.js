/* eslint-disable react/prop-types */
import axios from "axios";
import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import { useCart } from "./context/Cart";
import Routes from "./Routes";

function App() {
  const { cartItems, setProducts } = useCart([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("products.json");
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header countCartItems={cartItems.length}></Header>
        <Routes />

        <div className="grid-container">
          <main></main>

          <footer className="footer">
            {" "}
            todos os direitos reservados - ao criador{" "}
          </footer>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
