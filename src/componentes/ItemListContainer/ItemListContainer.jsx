import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getProductos, getProductosPorCat } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const { idCategoria } = useParams();

  useEffect(() => {
    const funcion = idCategoria ? getProductosPorCat : getProductos;
    funcion(idCategoria)
      .then((res) => setProductos(res))
      .catch((error) => console.log(error));
  }, [idCategoria]);

  return (
    <>
      <h1 style={{ color: "#2f4794", textAlign: "center" }}>{greeting}</h1>
      <ItemList productos={productos} />
    </>
  );
};

export default ItemListContainer;
