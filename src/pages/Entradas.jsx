import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import {getDoc,getDocs, doc, addDoc, collection} from "firebase/firestore";
import {db} from '../firebaseConfig/firebase.js';
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import {FaSquare, FaRegSquare} from "react-icons/fa" ;
import './Entradas.css';

export const Entradas = () => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState(0);
    const [position, setPosition] = useState("");
    const [date, setDate] = useState("");
    const [count, setCount] = useState(1);
    const [time, setTime] = useState("");
    const [tittle, setTittle] = useState("");

    //Calculo del precio de la cantidad de entradas seleccionadas
    const priceEntrada = 2000

    var price = Number(priceEntrada * count);

    const {peliculaId} = useParams();


    //Para obtener los datos de la tabla horarios        
            const getHorariosById = async (id) => {
                const HorariosDoc = await getDoc(doc(db, "horarios", id));
                if (HorariosDoc.exists()) {
                  setTime(HorariosDoc.data().time);
                  setTittle(HorariosDoc.data().tittle);
                } else {
                  console.log("La película no existe");
                }
              };

    

    //Para crear el registro en la tabla Entradas
    const entradaCollection = collection(db, "entradas");

      const createEntrada = async (e) => {
        e.preventDefault();
        await addDoc(entradaCollection, {
            tittle: tittle,
            name: name,
            lastName: lastName,
            email: email,
            time: time,
            date: date,
            position: position,
            count: Number(count),
            price: Number(price)
        });
      };


    
      useEffect(() => {
        getHorariosById(peliculaId)
      }, []);

    return(
        <>
        <Header/>
            <h2 className="tittle">Entradas</h2>
            <form action="" className="formEntrada">
                <div className="formContenedorEntrada">
                    <label htmlFor="tittleMovie" className="formLabelEntrada">Título</label>
                    <input type="text" className="formInputEntrada" id="tittleMovie" maxLength={30}  name="tittle" value={tittle} disabled/>
                </div>

                <div className="formContenedorEntrada">
                    <label htmlFor="clienteName" className="formLabelEntrada">Nombre</label>
                    <input type="text" className="formInputEntrada" id="clienteName" maxLength={30} placeholder="Ingrese su nombre" name="name" value={name}
                    onChange={(e) => setName(e.target.value)}/>
                </div>

                <div className="formContenedorEntrada">
                    <label htmlFor="clienteLastName" className="formLabelEntrada">Apellido</label>
                    <input type="text" className="formInputEntrada" id="clienteLastName" maxLength={30} placeholder="Ingrese su apellido" name="lastName" value={name}
                    onChange={(e) => setLastName(e.target.value)}/>
                </div>

                <div className="formContenedorEntrada">
                    <label htmlFor="clienteEmail" className="formLabelEntrada">Email</label>
                    <input type="email" className="formInputEntrada" id="clienteEmail" maxLength={30} placeholder="Ingrese su email" name="email" value={name}
                    onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div className="formContenedorEntrada">
                    <label htmlFor="timeMovie" className="formLabel">Time</label>
                    <input type="text" className="formInputEntrada" id="timeMovie" name="time" value={time} disabled/>
                </div>

                <div className="formContenedorEntrada">
                    <label htmlFor="dateEntrada" className="formLabelEntrada">Date</label>
                    <input type="date" className="formInputEntrada" id="dateEntrada" name="date" value={date}
                    onChange={(e) => setDate(e.target.value)}/>
                </div>

                <div className="formContenedorEntrada">
                    <label htmlFor="cantidadEntradas" className="formLabelEntrada">Cantidad de entradas</label>
                    <div className="formulario">
                            <select name="entradas" className="formInputEntrada" id="cantidadEntradas" onChange={(e) => setCount(Number(e.target.value))}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                            </select>
                    </div>
                </div>

                <div className="position">
                    <h2 className="positionTittle">Select your position</h2>
                    <div className="positionContainer">
                        <div className="positionIzq">
                            <div className="btnContainer">
                                {position?<FaSquare color="#ff0" size={28}/>:<FaSquare color="#f00" size={28}/>}
                                </div>
                            <div className="btnContainer"><button className="cuadrado"></button></div>
                            <div className="btnContainer"><button className="cuadrado"></button></div>
                            <div className="btnContainer"><button className="cuadrado"></button></div>
                            <div className="btnContainer"><button className="cuadrado"></button></div>
                            <div className="btnContainer"><button className="cuadrado"></button></div>
                            <div className="btnContainer"><button className="cuadrado"></button></div>
                            <div className="btnContainer"><button className="cuadrado"></button></div>
                            <div className="btnContainer"><button className="cuadrado"></button></div>
                            <div className="btnContainer"><button className="cuadrado"></button></div>
                            <div className="btnContainer"><button className="cuadrado"></button></div>
                            <div className="btnContainer"><button className="cuadrado"></button></div>
                            <div className="btnContainer"><button className="cuadrado"></button></div>
                            <div className="btnContainer"><button className="cuadrado"></button></div>
                            <div className="btnContainer"><button className="cuadrado"></button></div>
                            <div className="btnContainer"><button className="cuadrado"></button></div>
                        </div>
                        <div className="positionDer">
                            <div className="cuadrado" onClick={color}></div>
                            <div className="cuadrado"></div>
                            <div className="cuadrado"></div>
                            <div className="cuadrado"></div>
                            <div className="cuadrado"></div>
                            <div className="cuadrado"></div>
                            <div className="cuadrado"></div>
                            <div className="cuadrado"></div>
                            <div className="cuadrado"></div>
                            <div className="cuadrado"></div>
                            <div className="cuadrado"></div>
                            <div className="cuadrado"></div>
                        </div>
                    </div>
                </div>

                <div className="amountContainer">
                    <p className="amount">Total: {price}</p>
                </div>
                <div className="contenedorBtn">
                    <button className="btnComprar" type="submit" onSubmit={createEntrada}>Comprar</button>
                </div>
            </form>
        <Footer/>
        </>
    )
}