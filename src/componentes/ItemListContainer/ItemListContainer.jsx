import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
//Firestores
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../../service/config";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const { idCategoria } = useParams();

  useEffect(() => {
    const misProductos = idCategoria
      ? query(collection(db, "productos"), where("idCat", "==", idCategoria))
      : collection(db, "productos");
    getDocs(misProductos)
      .then((res) => {
        const nuevosProductos = res.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProductos(nuevosProductos);
      })
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
