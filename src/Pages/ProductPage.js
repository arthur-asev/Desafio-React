/* eslint-disable react/prop-types */
import React from "react";
import Filter from "../components/Filter";
import Product from "../components/Product";
import { useCart } from "../context/Cart";

export default function HomePage() {
  const { setProducts, products, onAdd } = useCart([]);
  const sortAlpha = (product) => {
    const sort = product.target.value;

    setProducts(
      products
        .slice()
        .sort((a, b) =>
          sort === "alpha"
            ? a.name > b.name
              ? 1
              : -1
            : sort === "none"
            ? a.name < b.name
              ? 1
              : -1
            : a.id > b.id
            ? 1
            : -1
        )
    );
  };

  const sortScore = (product) => {
    const sort = product.target.value;
    setProducts(
      products
        .slice()
        .sort((a, b) =>
          sort === "low"
            ? a.score > b.score
              ? 1
              : -1
            : sort === "best"
            ? a.score < b.score
              ? 1
              : -1
            : a.id < b.id
            ? 1
            : -1
        )
    );
  };

  const sortPrice = (product) => {
    const sort = product.target.value;
    setProducts(
      products
        .slice()
        .sort((a, b) =>
          sort === "lowest"
            ? a.price > b.price
              ? 1
              : -1
            : sort === "highest"
            ? a.price < b.price
              ? 1
              : -1
            : a.id < b.id
            ? 1
            : -1
        )
    );
  };

  return (
    <div>
      <Filter
        sortAlpha={sortAlpha}
        sortPrice={sortPrice}
        sortScore={sortScore}
      ></Filter>
      <div className="row center">
        {products.map((product) => (
          <Product onAdd={onAdd} key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
