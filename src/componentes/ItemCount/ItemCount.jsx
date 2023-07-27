import React from "react";
import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ inicial, stock, funcionAgregar }) => {
  const [contador, setContador] = useState(inicial);
  const incrementar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };
  const decrementar = () => {
    if (contador > inicial) {
      setContador(contador - 1);
    }
  };
  return (
    <>
      <div>
        <br />
        <button className="boton" onClick={decrementar}>
          {" "}
          -{" "}
        </button>
        <p>{contador}</p>
        <button className="boton" onClick={incrementar}>
          {" "}
          +{" "}
        </button>
        <br />
        <br />
        <button className="boton" onClick={() => funcionAgregar(contador)}>
          Agregar al carrito
        </button>
        <br />
        <br />
      </div>
    </>
  );
};

export default ItemCount;
