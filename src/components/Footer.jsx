import { Link } from "react-router-dom"
import './Footer.css'

export const Footer = () => {
    return(
        <footer className="footer">
            <p>Copyright © <strong id="logo">CineStar</strong></p>
            <div className="container-footer-icon">
                <a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://es-la.facebook.com/"><i className="fa-brands fa-facebook"></i></a>
                <a href="https://twitter.com/?lang=es"><i className="fa-brands fa-twitter"></i></a>
            </div>
            <nav className="footer_nav">
                <ul className="footer_nav_ul">
                    <Link className="footer_nav_li" to={"/"}>Inicio</Link>
                    <Link className="footer_nav_li" to={"/somos"}>Somos</Link>
                    <Link className="footer_nav_li" to={"/contacto"}>Contacto</Link>
                    <Link className="footer_nav_li" to={"/candy"}>Candy</Link>
                </ul>
            </nav>
        </footer>
    )
}