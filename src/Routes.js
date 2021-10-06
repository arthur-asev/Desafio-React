import React from "react";
import { Route, Switch } from "react-router-dom";
import CartPage from "./Pages/CartPage";
import ProductPage from "./Pages/ProductPage";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={ProductPage}></Route>
      <Route path="/cart/" component={CartPage}></Route>
    </Switch>
  );
}
