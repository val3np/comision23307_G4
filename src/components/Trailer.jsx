import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import{getDoc,doc} from "firebase/firestore";
import {db} from '../firebaseConfig/firebase.js';
import "./Trailer.css";

export const Trailer = () =>{
    
    const [trailer,setTrailer] = useState("");
    const [tittle,setTittle] = useState("")

    const {peliculaId} = useParams();
   

    const getTrailerById = async (peliculaId) => {
        const peliculaDoc = await getDoc(doc(db, "peliculas", peliculaId));
        if (peliculaDoc.exists()) {
          setTrailer(peliculaDoc.data().trailer);
          setTittle(peliculaDoc.data().tittle);
        } else {
          console.log("La película no existe");
        }
      };

      

      useEffect(() => {
        getTrailerById(peliculaId);
      }, []); 
    return(
        <>
      {/*   <div>
            <iframe src={trailer} title={tittle} frameborder="0" width={1130} height={634} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>  */}
        </>
     )
}