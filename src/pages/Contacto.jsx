import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contacto.css';

export const Contacto  = () => {
    //let form = document.querySelector("#contactoForm");
//
    //async function btnEnviarForm(e) {
    //  e.preventDefault();
    //  let form = new FormData(this);
    //  let response = await fetch(this.action, {
    //    method: this.method,
    //    body: form,
    //    headers: {
    //      Accept: "application/json",
    //    },
    //  });   
    const notify = () => {

        toast.success('Success Notification !', {
            position: toast.POSITION.TOP_RIGHT
        });
        
      let nombre = document.querySelector("#clienteName").value;
      let apellido = document.querySelector("#clienteLastName").value;
      let email = document.querySelector("#clienteEmail").value;
      let telefono = document.querySelector("#telefono").value;
      let textArea = document.querySelector("#textArea").value; 

      if (nombre.length == 0 || nombre.length === "") {
        toast.success('Debe ingresar un nombre',{
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
        })
        return;
      } else {
        if (apellido.length == 0 || nombre.length === "") {
          toast({
            text: "Debe ingresar su apellido",
            duration: 3000,
            destination: "index.html",
            newWindow: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
              background: "#4267B3",
            },
          });
          return;
        } else {
          if (email.length == 0 || email.length === "") {
            toast({
              text: "Debe ingresar su email",
              duration: 3000,
              destination: "index.html",
              newWindow: true,
              gravity: "top",
              position: "right",
              stopOnFocus: true,
              style: {
                background: "#4267B3",
              },
            });
            return;
            } else {
                if (telefono.length == 0 || telefono.length === "") {
                  toast({
                    text: "Debe ingresar su email",
                    duration: 3000,
                    destination: "index.html",
                    newWindow: true,
                    gravity: "top",
                    position: "right",
                    stopOnFocus: true,
                    style: {
                      background: "#4267B3",
                    },
                  });
                  return;
                  }else {
              if (textArea.length == 0 || nombre.length === "") {
                toast({
                  text: "Debe ingresar un mensaje",
                  duration: 3000,
                  destination: "index.html",
                  newWindow: true,
                  gravity: "top",
                  position: "right",
                  stopOnFocus: true,
                  style: {
                    background: "#4267B3",
                  },
                });
                return;
              } else {
                  toast({
                    text: "Se envió correctamente",
                    duration: 3000,
                    destination: "index.html",
                    newWindow: true,
                    gravity: "top",
                    position: "right",
                    stopOnFocus: true,
                    style: {
                      background: "#4267B3",
                    },
                  });
                }
              }
            }
          }
        }
    }

    return(
        <>
        <Header/>
        <div className="contacto">
            <h2 class="contactoTittle">Contacto</h2>
                <form action="" class="contactoForm" method="GET">
                    <div className="formContenedor">
                        <label htmlFor="clienteName" className="formLabel">Nombre</label>
                        <input type="text" className="formInput" id="clienteName" maxLength={30} placeholder="Ingrese su nombre" name="name"/>
                    </div>

                    <div className="formContenedor">
                        <label htmlFor="clienteLastName" className="formLabel">Apellido</label>
                        <input type="text" className="formInput" id="clienteLastName" maxLength={30} placeholder="Ingrese su apellido" name="lastName"/>
                    </div>

                    <div className="formContenedor">
                        <label htmlFor="clienteEmail" className="formLabel">Email</label>
                        <input type="email" className="formInput" id="clienteEmail" maxLength={30} placeholder="Ingrese su email" name="email"/>
                    </div>

                    <div className="formContenedor">
                        <label htmlFor="clienteTelefono" className="formLabel">Teléfono</label>
                        <input type="number" className="formInput" id="clienteTelefono" maxLength={30} placeholder="Ingrese su teléfono" name="telefono"/>
                    </div>

                    <div className="formContenedor">
                        <label htmlFor="motivo" className="formLabel">Motivo</label>
                        <div className="formulario">
                            <select name="motivo" class="formInput" id="motivo">
                                <option value="reclamo">Reclamo</option>
                                <option value="sugerencia">Sugerencia</option>
                                <option value="contacto">Contacto</option>
                            </select>
                        </div>
                    </div>

                    <div className="formContenedor">
                        <label for="textArea" className="formLabel" id="mensaje">Comentarios</label>
                        <textarea className="formTextArea" id="textArea" cols={30} rows={10} placeholder="Ingrese su mensaje"></textarea>
                    </div>


                    <div class="formBtn">
                        <button type="reset" class="btnBorrar">Borrar</button>
                        <button type="submit" onClick={notify} class="btnEnviar">Enviar</button>
                        <ToastContainer />
                    </div>
                </form>
            </div>
        <Footer/>
        </>
    )
}