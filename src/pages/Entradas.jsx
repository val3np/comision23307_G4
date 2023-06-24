import { useState, useEffect } from "react";
import {useNavigate, useParams} from "react-router-dom";
import {getDoc,getDocs, doc, addDoc, collection} from "firebase/firestore";
import {db} from '../firebaseConfig/firebase.js';
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { toast, ToastContainer } from 'react-toastify';
import Swal from "sweetalert2";
import jsPDF from 'jspdf';
import './Entradas.css';

export const Entradas = () => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [position, setPosition] = useState("");
    const [date, setDate] = useState("");
    const [count, setCount] = useState(1);
    const [time, setTime] = useState("");
    const [title, setTitle] = useState("");
    const seats = ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10", "A11", "A12", "A13", "A14", "A15", "A16", "A17", "A18", "A19", "A20", "A21", "A22" ]
  
    //Calculo del precio de la cantidad de entradas seleccionadas
    const priceEntrada = 2000

    const price = Number(priceEntrada * count);

    //Para obtener el id de la película
    const {peliculaId} = useParams();
    const navigate = useNavigate();

    //Para obtener los datos de la tabla horarios        
            const getHorariosById = async (id) => {
                const HorariosDoc = await getDoc(doc(db, "horarios", id));
                if (HorariosDoc.exists()) {
                  setTime(HorariosDoc.data().time);
                  setTitle(HorariosDoc.data().title);
                } else {
                  console.log("La película no existe");
                }
              };

    //Para borrar el contenido del formulario
      const borrarContenido = ()=> {
        setName("");
        setLastName("");
        setEmail("");
        setDate("");
      }

    //Variable que contiene la información que se mostrara en el ticket
      let ticket =  `
      Película: ${title}

      Fecha: ${date}
    
      Hora: ${time}
    
      Asiento: ${position}
    
      Total: ${price}
      `
    //Función para comprar entrada
    const comprar = (e)=>{
        e.preventDefault();

        if (name.length == 0 || name.length === "") {
            toast.error('Por favor, ingresa su nombre');
            return;
          } else {
          if (lastName.length == 0 || lastName.length === "") {
            toast.error('Por favor, ingrese su apellido');
            return;
          } else {
            if (email.length == 0 || email.length === "") {
              toast.error('Por favor, ingrese su email');
              return;
              } else{
                if (date.length == 0 || date.length === "") {
                    toast.error('Por favor, ingrese su emailuna fecha')
              }else {
                Swal.fire({
                    title:'OK',
                    text:'Tu compra fue realizada con éxito!',
                    background: '#fff',
                    color:'#fff'
                  }
                  );
                  const doc = new jsPDF()
                  doc.setTextColor(139, 92, 221);
                  doc.setFontSize(20);
                  doc.text("Entrada", 90, 15);
                  doc.setTextColor(0, 0, 0);
                  doc.setFontSize(14);
                  doc.text(ticket, 20, 27);
                  doc.save("Entrada.pdf");

                  navigate("/");
                  return
                  }
                }
            }
        }
    }
              
            
              


    //Para obtener el número de asiento
    const seleccionarAsiento = () => {
        if (seats.length === 0) {
          console.log("El array está vacío.");
          return;
        }
    
        const randomIndex = Math.floor(Math.random() * seats.length);
        const asiento = seats[randomIndex];
    
        setPosition(asiento);
      };

    
      useEffect(() => {
        getHorariosById(peliculaId);
        seleccionarAsiento();
    }, [seats]);

    
    return(
        <>
        <Header/>
            <h2 className="title">Entradas</h2>
            <form action="" className="formEntrada">
                <div className="formContenedorEntrada">
                    <label htmlFor="titleMovie" className="formLabelEntrada">Título</label>
                    <input type="text" className="formInputEntrada" id="titleMovie" maxLength={30}  name="title" value={title} disabled/>
                </div>

                <div className="formContenedorEntrada">
                    <label htmlFor="clienteName" className="formLabelEntrada">Nombre</label>
                    <input type="text" className="formInputEntrada" id="clienteName" maxLength={30} placeholder="Ingrese su nombre" name="name" value={name}
                    onChange={(e) => setName(e.target.value)}/>
                </div>

                <div className="formContenedorEntrada">
                    <label htmlFor="clienteLastName" className="formLabelEntrada">Apellido</label>
                    <input type="text" className="formInputEntrada" id="clienteLastName" maxLength={30} placeholder="Ingrese su apellido" name="lastName" value={lastName}
                    onChange={(e) => setLastName(e.target.value)}/>
                </div>

                <div className="formContenedorEntrada">
                    <label htmlFor="clienteEmail" className="formLabelEntrada">Email</label>
                    <input type="email" className="formInputEntrada" id="clienteEmail" maxLength={30} placeholder="Ingrese su email" name="email" value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div className="formContenedorEntrada">
                    <label htmlFor="timeMovie" className="formLabel">Time</label>
                    <input type="text" className="formInputEntrada" id="timeMovie" name="time" value={time} disabled/>
                </div>

                <div className="formContenedorEntrada">
                    <label htmlFor="dateEntrada" className="formLabelEntrada">Fecha</label>
                    <input type="date" className="formInputEntrada" id="dateEntrada" name="date" value={date}
                    onChange={(e) => setDate(e.target.value)}/>
                </div>

                <div className="formContenedorEntrada">
                    <label htmlFor="cantidadEntradas" className="formLabelEntrada">Cantidad de entradas</label>
                    <div className="formulario">
                            <select name="entradas" className="formInputEntrada" id="cantidadEntradas" onChange={(e) => setCount(Number(e.target.value))}>
                                <option value="1">1</option>
                            </select>
                    </div>
                </div>

                <div className="formContenedorEntrada">
                    <label htmlFor="seat" className="formLabelEntrada">N° de asiento</label>
                    <input type="text" className="formInputEntrada" id="seat" name="date" value={position}
                    onChange={(e) => setPosition(e.target.value)} disabled />
                </div>

                <div className="formContenedorEntrada">
                <label htmlFor="priceEntrada" className="formLabelEntrada">Total</label>
                <input type="text" className="formInputEntrada" id="priceEntrada" name="date" value={price} disabled />
                </div>
                <div className="formContenedorEntrada">
                    <div className="contenedorBtn">
                        <button className="btnBorrar" type="reset" onClick={borrarContenido}>Borrar</button>
                        <button className="btnComprar" onClick={comprar}>Comprar</button>
                        <ToastContainer />
                    </div>
                </div>
            </form>
        <Footer/>
        </>
    )
}