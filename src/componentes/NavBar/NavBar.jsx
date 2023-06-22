import CartWidget from '../CartWidget/CartWidget'
import TituloPrincipal from '../TituloPrincipal/TituloPrincipal'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
        <TituloPrincipal saludo={"Tienda CG"}/>
        <nav>
            <ul>
                <li>
                    Discos
                </li>
                <li>
                    Bolsos
                </li>
                <li>
                    Poleras
                </li>
            </ul>
        </nav>
        <CartWidget/>
    </header>
  )
}

export default NavBar