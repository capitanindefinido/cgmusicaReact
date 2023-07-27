import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, nombre, precio, img, stock }) => {
  return (
    <div className="cardProducto">
      <img className="imgProducto" src={img} alt={nombre} />
      <h3>{nombre}</h3>
      <p>${precio}</p>
      <p>Stock: {stock}</p>
      <Link to={`/item/${id}`}>D e t a l l e s</Link>
    </div>
  );
};

export default Item;
