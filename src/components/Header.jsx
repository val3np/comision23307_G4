import { Link } from "react-router-dom"
import './Header.css'

export const Header = () => {
    return(
        <header className="header">
        
        <h1 className="header_tittle" id="cineStar">cineStar<i class="fa-sharp fa-solid fa-star"></i></h1>

        <nav className="header_nav">
            <ul className="nav_ul">
                <li className="nav_li"><Link to={'/'} className="li_a">Inicio</Link></li>
                <li className="nav_li"><Link to={'/somos'} className="li_a">Somos</Link></li>
                <li className="nav_li"><Link to={'/contacto'} className="li_a">Contacto</Link></li>
                <li className="nav_li"><Link to={`/entradas/peliculaId`} className="li_a">Entradas</Link></li>
            </ul>
        </nav>
    </header>
    )
}