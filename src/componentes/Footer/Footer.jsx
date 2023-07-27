import CartWidget from "../CartWidget/CartWidget";
import TituloPrincipal from "../TituloPrincipal/TituloPrincipal";
import "./Footer.css";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";

const NavBar = () => {
  const instagram = () => {
    window.location.replace("https://www.instagram.com/cgacituamusica/?hl=es");
  };
  const facebook = () => {
    window.location.replace(
      "https://www.facebook.com/cgacituamusica/?locale=es_LA"
    );
  };
  const youtube = () => {
    window.location.replace(
      "https://www.youtube.com/channel/UCYM2fMKobeX_lU49zIg77Zg"
    );
  };
  const spotify = () => {
    window.location.replace(
      "https://open.spotify.com/artist/6ap7S9wFqVroSlfFcTRC5O"
    );
  };
  return (
    <footer className="head">
      <Link to="/">
        <TituloPrincipal
          saludo={"t o d o s  l o s  d e r e c h o s r e s e r v a d o s  ©"}
        />
      </Link>

      <nav>
        <ul>
          <li className="nav-link">
            <a onClick={instagram}>
              <FontAwesomeIcon icon={faInstagram} />{" "}
            </a>
          </li>
          <li className="nav-link">
            <a onClick={facebook}>
              <FontAwesomeIcon icon={faFacebookF} />{" "}
            </a>
          </li>
          <li className="nav-link">
            <a onClick={youtube}>
              <FontAwesomeIcon icon={faYoutube} />{" "}
            </a>
          </li>
          <li className="nav-link">
            <a onClick={spotify}>
              <FontAwesomeIcon icon={faSpotify} />{" "}
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default NavBar;
