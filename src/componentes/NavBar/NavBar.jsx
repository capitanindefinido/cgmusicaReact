import CartWidget from "../CartWidget/CartWidget";
import TituloPrincipal from "../TituloPrincipal/TituloPrincipal";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="head">
      <Link to="/">
        <TituloPrincipal saludo={"C r i s t ó b a l G a c i t ú a "} />
      </Link>

      <nav>
        <ul>
          <li className="nav-link">
            <NavLink to="/categoria/1"> D i s c o s </NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/categoria/2"> B o l s o s </NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/categoria/3"> A r o s </NavLink>
          </li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  );
};

export default NavBar;
