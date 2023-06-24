import { useState, useEffect } from "react";
import {Link, useParams} from "react-router-dom";
import{getDoc,doc} from "firebase/firestore";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import {db} from '../firebaseConfig/firebase.js';
import "./DetallePelicula.css"

export const DetallePelicula=()=>{
    const [poster,setPoster] = useState("")
    const [title,setTitle] = useState("")
    const [overview,setOverview] = useState("")
    const [genres,setGenres] = useState("")
    const [trailer,setTrailer] = useState("");
    
//Para obtener el id de la película
    const {peliculaId} = useParams()

//Para obetener la información de las películas
    const getPeliculaById = async (peliculaId) => {
        const peliculaDoc = await getDoc(doc(db, "peliculas", peliculaId));
        if (peliculaDoc.exists()) {
          setPoster(peliculaDoc.data().poster);
          setTitle(peliculaDoc.data().title);
          setGenres(peliculaDoc.data().genres);
          setOverview(peliculaDoc.data().overview);
          setTrailer(peliculaDoc.data().trailer);
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
                        <img className="col" src={poster} alt={title} />
                        <div className="peliculaDetalle">
                            <h2 className="item">{title}</h2>
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

//