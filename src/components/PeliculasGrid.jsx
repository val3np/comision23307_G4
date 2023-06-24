import { PeliculasCard } from "./PeliculasCard"
import { useState, useEffect } from "react";
import{collection,getDocs,doc} from "firebase/firestore"
import {db} from '../firebaseConfig/firebase.js';
import { Spinner } from "../components/Spinner.jsx";
import "./PeliculasGrid.css"


export const PeliculasGrid=()=>{
    const [cargando,setCargando]= useState(true);
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
   
    useEffect(()=>{
        setCargando(true)

        if(getPeliculas == true){
            getPeliculas()
        }setCargando(false)
        
    
    },[])

    if(cargando){
        return <Spinner/>
    }
    return(
        <>
            <h2 className="titleP">Cartelera</h2>
            <div className="movies">
                <PeliculasCard/>
            </div>
        </>
)
}