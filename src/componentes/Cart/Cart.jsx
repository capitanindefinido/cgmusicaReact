import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";

const Cart = () => {
  const { carrito, vaciarCarrito, total, cantidadTotal } =
    useContext(CarritoContext);

  if (cantidadTotal === 0) {
    return (
      <>
        <h2>No hay productos en el carrito</h2>
        <Link to="/">Ver Productos</Link>
      </>
    );
  }
  return (
    <div>
      {carrito.map((producto) => (
        <CartItem key={producto.id} {...producto} />
      ))}
      <div className="pagoCarrito">
        <h3>Total : ${total}</h3>
        <h3>Cantidad total: {cantidadTotal}</h3>
        <button className="boton" onClick={() => vaciarCarrito()}>
          Vaciar Carrito
        </button>
        <br />
        <Link to="/checkout">
          <br />
          <button className="boton">Finalizar Compra</button>
          <br />
        </Link>
      </div>
    </div>
  );
};

export default Cart;
