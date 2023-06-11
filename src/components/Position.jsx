import { useState, useEffect } from "react";
import { db } from "../firebaseConfig/firebase";
import { getDocs, doc, collection, getDoc} from "firebase/firestore";
import "./Position.css";


export const Position = () => {

    const [entradas,setEntradas] = useState([])
    const [positions,setPositions] = useState([])
    //2 referenciamos a la db de firestore
    const entradasCollection = collection(db,"entradas")
    //3 funcion para mostrar todos los docs
    const getEntradas = async () =>{
    const data = await getDocs(entradasCollection)
 /* console.log(data.docs);   */
    setEntradas(                 //
    data.docs.map((doc)=>({...doc.data(),id:doc.id}))
)

}

//Para seleccionar el

    let asientos =  document.querySelectorAll(".cuadrado");
    let seleccion = "No seleccionado";
    let disponibilidad = "Disponible";

    asientos.forEach((asiento, index) => {
      asiento.addEventListener("click", (e)=>{
          e.preventDefault()
              const asiento = e.target;
    
              if( seleccion == "No seleccionado" ){
                  seleccion = "Seleccionado";
                  disponibilidad = "No disponible";
                  asiento.style.backgroundColor = "red";
                  
              }else {
                  seleccion = "No seleccionado";
                  disponibilidad = "Disponible";
                  asiento.style.backgroundColor = "white";
              }
      })})

      useEffect(()=>{
        getEntradas()
    },[])


    return(
        <>
        <div className="position">
                    <h2 className="positionTittle">Select your position</h2>
                    <div className="positionContainer">
                        <div className="positionIzq">
                            <div className="btnContainer"><button className="cuadrado" id="A1"></button></div>
                            <div className="btnContainer"><button className="cuadrado" id="A2"></button></div>
                            <div className="btnContainer"><button className="cuadrado" id="A3"></button></div>
                            <div className="btnContainer"><button className="cuadrado" id="A4"></button></div>
                            <div className="btnContainer"><button className="cuadrado" id="A5"></button></div>
                            <div className="btnContainer"><button className="cuadrado" id="A6"></button></div>
                            <div className="btnContainer"><button className="cuadrado" id="A7"></button></div>
                            <div className="btnContainer"><button className="cuadrado" id="A8"></button></div>
                            <div className="btnContainer"><button className="cuadrado" id="A9"></button></div>
                            <div className="btnContainer"><button className="cuadrado" id="A10"></button></div>
                            <div className="btnContainer"><button className="cuadrado" id="A11"></button></div>
                            <div className="btnContainer"><button className="cuadrado" id="A12"></button></div>
                            <div className="btnContainer"><button className="cuadrado" id="A13"></button></div>
                            <div className="btnContainer"><button className="cuadrado" id="A14"></button></div>
                            <div className="btnContainer"><button className="cuadrado" id="A15"></button></div>
                            <div className="btnContainer"><button className="cuadrado" id="A16"></button></div>
                        </div>
                        <div className="positionDer">
                            <div className="cuadrado" id="A17"></div>
                            <div className="cuadrado" id="A18"></div>
                            <div className="cuadrado" id="A19"></div>
                            <div className="cuadrado" id="A20"></div>
                            <div className="cuadrado" id="A21"></div>
                            <div className="cuadrado" id="A22"></div>
                            <div className="cuadrado" id="A23"></div>
                            <div className="cuadrado" id="A24"></div>
                            <div className="cuadrado" id="A25"></div>
                            <div className="cuadrado" id="A26"></div>
                            <div className="cuadrado" id="A27"></div>
                            <div className="cuadrado" id="A28"></div>
                        </div>
                    </div>
                </div>
        </>
    )
}