import {useEffect, useState} from "react";
import {Link} from 'react-router-dom'
import{collection,getDocs,doc} from "firebase/firestore"
import {db} from '../firebaseConfig/firebase.js';
import "./PeliculasCard.css"

export const PeliculasCard = () => {
    //1 configurar los hooks
    const [peliculas,setPeliculas] = useState([])
    //2 referenciamos a la db de firestore
    const peliculasCollection = collection(db,"peliculas")
    //3 funcion para mostrar todos los docs
    const getPeliculas = async () =>{
    const data = await getDocs(peliculasCollection)
    console.log(data.docs);  
    setPeliculas(                 //
      data.docs.map((doc)=>({...doc.data(),id:doc.id}))
    )
    }
     //4 useEffect 
     useEffect(()=>{
      getPeliculas()
    },[])
    return (
    
      <div className="moviesGrid">
        {peliculas.map((pelicula)=>(
        <Link to={`/pelicula/${pelicula.id}`}>
        <img className="movieImage" src={pelicula.poster} alt={pelicula.title} />
        <div className="movieTitle">{pelicula.title}</div>
        </Link>))}
      </div>
    );
}
