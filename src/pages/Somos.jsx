import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import './Somos.css';

export const Somos = ( ) => {

    return(
        <>
        <Header/>
        <div className="container">
            <h2 className="titleSomos">¿Quienes somos?</h2>
            <p className="parrafo"><strong className="cineName">cineStar</strong> es una cadena de cines del grupo 4 con operaciones Argentina. En está página puedes encontrar las películas que se encuentra en taquillas para la compra online de entradas. Nuestro objetivo es crear un verdadero valor de diversión, comodidad y entretenimiento para nuestros clientes. Siempre a la vanguardia tecnológica en el sector cinematográfico</p>
            <img src="https://radio3cadenapatagonia.com.ar/wp-content/uploads/2023/03/cine.jpg" alt="cineStar" className="imagenCine"/>
        </div>
        <Footer/>
        </>
    )
}