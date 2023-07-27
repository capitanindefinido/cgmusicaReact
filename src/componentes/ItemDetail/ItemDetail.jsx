import React from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/CarritoContext";

const ItemDetail = ({ id, nombre, precio, img, stock }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { agregarProducto } = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    //console.log("Productos agregados: " + cantidad);
    const item = { id, nombre, precio };
    agregarProducto(item, cantidad);
  };

  return (
    <div className="contenedorItem">
      <h2>{nombre}</h2>
      <h3>${precio}</h3>
      <h3>ID: {id}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, harum.
      </p>
      <img src={img} alt={nombre} />
      {agregarCantidad > 0 ? (
        <Link to="/cart">
          {" "}
          <br />
          <br />
          <button className="boton">Terminar compra</button> <br />
          <br />{" "}
        </Link>
      ) : (
        <ItemCount
          inicial={1}
          stock={stock}
          funcionAgregar={manejadorCantidad}
        />
      )}
    </div>
  );
};

export default ItemDetail;
