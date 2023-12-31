/* import React from "react";
import { useState, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../service/config";
import { collection, addDoc } from "firebase/firestore";
import "./Checkout.css";

const Checkout = () => {
  const { carrito, vaciarCarrito, total } = useContext(CarritoContext);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacion, setEmailConfirmacion] = useState("");
  const [error, setError] = useState("");
  const [ordenId, setOrdenId] = useState("");

  const manejadorFormulario = (e) => {
    e.preventDefault();

    //Verificar que los campos esten completos:
    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError("Por favor, complete todos los campos");
      return;
    }

    //Validar que los email coinciden:
    if (email != emailConfirmacion) {
      setError("Los campos de email no coinciden");
      return;
    }

    //Crear objeto de la orden
    const orden = {
      items: carrito.map(producto => ({
        id: producto.item.id,
        nombre: producto.item.nombre,
        cantidad: producto.cantidad,
      })),
      total: total,
      nombre,
      apellido,
      telefono,
      email,
      fecha: new Date(),
    }

    //Paso 2: Guardamos la orden en la bd:

    addDoc(collection(db, "ordenes"), orden)
      .then(docRef => {
        setOrdenId(docRef.id);
        vaciarCarrito();
      })
      .catch((error) => {
        console.log("Error al crear la orden", error);
        setError("Se produjo un error al crear la orden de compras");
      })
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={manejadorFormulario} className="formulario">
        {carrito.map((producto) => (
          <div key={producto.item.id}>
            <p>
              {producto.item.nombre} x {producto.cantidad}
            </p>
            <p>Precio: ${producto.item.precio}</p>
          </div>
        ))}
        <hr />
        <div className="form-group">
          <label htmlFor=""> Nombre </label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="">Apellido </label>
          <input
            type="text"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="">Telefono </label>
          <input
            type="text"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="">Email </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="">Email Confirmación</label>
          <input
            type="email"
            value={emailConfirmacion}
            onChange={(e) => setEmailConfirmacion(e.target.value)}
          />
        </div>

        {error && <p style={{ color: "red" }}> {error} </p>}
        <button type="submit"> Finalizar Compra </button>
      </form>
      {ordenId && (
        <strong>¡Gracias por tu compra! Tu número de orden es {ordenId}</strong>
      )}
    </div>
  );
};

export default Checkout;
 */

//VERSION CON STOCK

import React from "react";
import { useState, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../service/config";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import "./Checkout.css";

const Checkout = () => {
  const { carrito, vaciarCarrito, total } = useContext(CarritoContext);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacion, setEmailConfirmacion] = useState("");
  const [error, setError] = useState("");
  const [ordenId, setOrdenId] = useState("");

  const manejadorFormulario = (e) => {
    e.preventDefault();

    //Verificar que los campos esten completos:
    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError("Por favor, complete todos los campos");
      return;
    }

    //Validar que los email coinciden:
    if (email != emailConfirmacion) {
      setError("Los campos de email no coinciden");
      return;
    }

    //Crear objeto de la orden
    const orden = {
      items: carrito.map((producto) => ({
        id: producto.item.id,
        nombre: producto.item.nombre,
        cantidad: producto.cantidad,
      })),
      total: total,
      nombre,
      apellido,
      telefono,
      email,
      fecha: new Date(),
    };

    //Paso 2: Actualizar stock y generar una orden de compra:

    Promise.all(
      orden.items.map(async (productoOrden) => {
        const productoRef = doc(db, "productos", productoOrden.id);
        //Por cada producto en la coleecion "productos" obtengo una referencia.
        const productoDoc = await getDoc(productoRef);
        const stockActual = productoDoc.data().stock;
        //Data me permite acceder a la información del documento.

        await updateDoc(productoRef, {
          stock: stockActual - productoOrden.cantidad,
        });
        //Modifico el stock y subo la información actualizada.
      })
    )
      .then(() => {
        //Guardamos la orden en la base de datos:
        addDoc(collection(db, "ordenes"), orden)
          .then((docRef) => {
            setOrdenId(docRef.id);
            vaciarCarrito();
          })
          .catch((error) => {
            console.log("Error al crear la orden", error);
            setError("Error al crear la orden, vuelva más tarde");
          });
      })
      .catch((error) => {
        console.log(
          "Error al actualizar el stock. Dedicate a otra cosa",
          error
        );
        setError("Error al actualizar el stock. Intente nuevamente");
      });
  };

  return (
    <div>
      
      <form onSubmit={manejadorFormulario} className="formulario">
      <h1 className="tituloCheck">c h e c k o u t</h1>
        {carrito.map((producto) => (
          <div key={producto.item.id}>
            <p>
              {producto.item.nombre} x {producto.cantidad}
            </p>
            <p>Precio: ${producto.item.precio}</p>
          </div>
        ))}
        <hr />
        <div className="form-group">
          <label htmlFor="" className="label"> N o m b r e </label>
          <input
            className="input"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="" className="label">A p e l l i d o  </label>
          <input
            className="input"
            type="text"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="" className="label">T e l e f o n o  </label>
          <input
            className="input"
            type="text"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="" className="label">E m a i l  </label>
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="" className="label">C o n f i r m a r C o r r e o</label>
          <input
            className="input"
            type="email"
            value={emailConfirmacion}
            onChange={(e) => setEmailConfirmacion(e.target.value)}
          />
        </div>
        <br />  
        {error && <p style={{ color: "red" }}> {error} </p>}
        <button type="submit" className="boton"> Finalizar Compra </button>
      </form>
      <br />
      {ordenId && (
        <strong>¡Gracias por tu compra! Tu número de orden es {ordenId}</strong>
      )}
    </div>
  );
};

export default Checkout;
