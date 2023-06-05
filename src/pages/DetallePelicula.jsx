import { useState, useEffect } from "react";
import {Link, useParams} from "react-router-dom";
import{getDoc,doc} from "firebase/firestore";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import {db} from '../firebaseConfig/firebase.js';
import "./DetallePelicula.css"

export const DetallePelicula=()=>{
    const [poster,setPoster] = useState("")
    const [tittle,setTittle] = useState("")
    const [overview,setOverview] = useState("")
    const [genres,setGenres] = useState("")

    const {peliculaId} = useParams()

    const getPeliculaById = async (peliculaId) => {
        const peliculaDoc = await getDoc(doc(db, "peliculas", peliculaId));
        if (peliculaDoc.exists()) {
          setPoster(peliculaDoc.data().poster);
          setTittle(peliculaDoc.data().tittle);
          setGenres(peliculaDoc.data().genres);
          setOverview(peliculaDoc.data().overview);
        } else {
          console.log("La película no existe");
        }
      };
    
      useEffect(() => {
        getPeliculaById(peliculaId);
      }, []);

        return(
            <>
                <Header/>
                <div className="contenedorDetalle">
                        <img className="col" src={poster} alt={tittle} />
                        <div className="peliculaDetalle">
                            <h2 className="item">{tittle}</h2>
                            <div className="contenedorParrafos">
                              <p><strong>Overview: </strong>{overview}</p>
                              <p><strong>Generos: </strong>{genres}</p>
                            </div>
                            <div className="contenedorBtn">
                                <Link to={`/entradas/${peliculaId}`} className="btnEntradas">Entradas</Link>
                            </div>
                        </div>
                </div>
                <Footer/>
            </>
            )

}