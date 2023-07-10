import CartWidget from "../CartWidget/CartWidget";
import TituloPrincipal from "../TituloPrincipal/TituloPrincipal";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <TituloPrincipal saludo={"Tienda CG"} />
      </Link>

      <nav>
        <ul>
          <li>
            <NavLink to="/categoria/1"> Discos </NavLink>
          </li>
          <li>
            <NavLink to="/categoria/2"> Bolsos </NavLink>
          </li>
          <li>
            <NavLink to="/categoria/3"> Aros </NavLink>
          </li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  );
};

export default NavBar;
