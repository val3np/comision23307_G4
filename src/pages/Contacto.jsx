import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useState } from "react";
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contacto.css';

export const Contacto  = () => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [texto, setTexto] = useState("");
    const [motivo, setMotivo] = useState("");
    const [email, setEmail] = useState("");
    const [celular, setCelular] = useState("");

    //Validación del formulario
      const handleSubmit = (e) => {
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
            } else {
                if (celular.length == 0 || celular.length === "") {
                  toast.error('Por favor, ingresa su número de teléfono');
                    return;
                  }else {
              if (texto.length == 0 || texto.length === "") {
                toast.error('Por favor, ingrese su mensaje');
                  return;
              } else {
                toast.success('¡Se envió correctamente su mensaje!', {
                  toastStyle: {
                    background: 'white',
                    color: 'white',
                  },
                });
                return
                }
              }
            }
          }
        }
    }

    //Para borrar el contenido del formulario
    const borrarContenido = ()=> {
      setName("");
      setLastName("");
      setEmail("")
      setCelular("")
      setTexto("")
    }

    return(
        <>
        <Header/>
        <div className="contacto">
            <h2 class="contactoTittle">Contacto</h2>
                <form onSubmit={handleSubmit} class="contactoForm">
                    <div className="formContenedor">
                        <label htmlFor="clienteName" className="formLabel">Nombre</label>
                        <input type="text" className="formInput" id="clienteName" maxLength={30} value={name}
                        onChange={(e) => setName(e.target.value)} placeholder="Ingrese su nombre" name="name"/>
                    </div>

                    <div className="formContenedor">
                        <label htmlFor="clienteLastName" className="formLabel">Apellido</label>
                        <input type="text" className="formInput" id="clienteLastName" maxLength={30} value={lastName}
                        onChange={(e) => setLastName(e.target.value)}placeholder="Ingrese su apellido" name="lastName"/>
                    </div>

                    <div className="formContenedor">
                        <label htmlFor="clienteEmail" className="formLabel">Email</label>
                        <input type="email" className="formInput" id="clienteEmail" maxLength={30} value={email}
                        onChange={(e) => setEmail(e.target.value)}placeholder="Ingrese su email" name="email"/>
                    </div>

                    <div className="formContenedor">
                        <label htmlFor="clienteTelefono" className="formLabel">Teléfono</label>
                        <input type="number" className="formInput" id="clienteTelefono" maxLength={30} value={celular}
                        onChange={(e) => setCelular(e.target.value)} placeholder="Ingrese su teléfono" name="telefono"/>
                    </div>

                    <div className="formContenedor">
                        <label htmlFor="motivo" className="formLabel">Motivo</label>
                        <div className="formulario">
                            <select name="motivo" class="formInput" id="motivo" value={motivo} onChange={(e) => setMotivo(e.target.value)}>
                                <option value="reclamo">Reclamo</option>
                                <option value="sugerencia">Sugerencia</option>
                                <option value="contacto">Contacto</option>
                            </select>
                        </div>
                    </div>

                    <div className="formContenedor">
                        <label for="textArea" className="formLabel" id="mensaje">Comentarios</label>
                        <textarea className="formTextArea" id="textArea" cols={30} rows={10} value={texto}
                        onChange={(e) => setTexto(e.target.value)} placeholder="Ingrese su mensaje"></textarea>
                    </div>


                    <div class="formBtn">
                        <button type="reset" onClick={borrarContenido} class="btnBorrar">Borrar</button>
                        <button type="submit" class="btnEnviar">Enviar</button>
                        <ToastContainer />
                    </div>
                </form>
            </div>
        <Footer/>
        </>
    )
}