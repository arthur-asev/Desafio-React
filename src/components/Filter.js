/* eslint-disable react/prop-types */
import React from "react";
import "./Filter.css";
export default function Filter(props) {
  const { sortAlpha, sortPrice, sortScore } = props;

  return (
    <div>
      <div className="filter">
        <select onChange={sortAlpha}>
          <option value="none">Filtrar por ordem alfabetica</option>
          <option value="alpha">Filtrar por ordem alfabetica</option>
        </select>

        <select onChange={sortPrice}>
          <optgroup selected label="Filtrar por preço ⌵">
            <option value="lowest">Menor preço </option>
            <option value="highest">Maior preço</option>
          </optgroup>
        </select>

        <select onChange={sortScore}>
          <optgroup label="Filtrar por score ⌵">
            <option value="low">Menor score</option>
            <option value="best">Maior score</option>
          </optgroup>
        </select>
      </div>
    </div>
  );
}
