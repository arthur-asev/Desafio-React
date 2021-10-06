/* eslint-disable react/prop-types */
import React from "react";
import Basket from "../components/Basket";
import "../Pages/CartPage.css";
export default function CartPage() {
  return (
    <div className="cart-container">
      <Basket></Basket>
    </div>
  );
}
