import { CandyCard } from "../components/CandyCard";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig/firebase';
import "./Candy.css";

export const Candy = () =>{
    const [total, setTotal] = useState (0);
    const [products, setProducts] = useState ([]);
    const [quantity, setQuantity] =  useState (1);
    const [candys,setCandys] = useState([]);


      // referenciamos a la db de firestore
      const candysCollection = collection(db,"candy")
      // funcion para mostrar todos los docs
      const getCandys = async () =>{
      const data = await getDocs(candysCollection)
      console.log(data.docs);  
      setCandys(                 //
        data.docs.map((doc)=>({...doc.data(),id:doc.id}))
      )
      }

 
     const btnAdd = document.querySelectorAll(".btnAdd")
     
     btnAdd.forEach((btn, index) => {
         btn.addEventListener("click", (e)=>{
             e.preventDefault()
             const btn = e.target;
            quantity = quantity + 1;
            const productoAdd = products[index];
                setProducts(products.filter((_, i) => i !== index));
                setTotal(total + productoAdd.price * quantity);
         })})
 
         const cleanCart = () => {
             setProducts([]);
             setTotal(0);
         };

         const removeProduct = (index) => {
            const productoEliminado = products[index];
            if(quantity = 1){
                setProducts(products.filter((_, i) => i !== index));
                setTotal(total - productoEliminado.price);
            } else {
                quantity = quantity - 1;
                setProducts(products.filter((_, i) => i !== index));
                setTotal(total - productoEliminado.price * quantity);
            }
         }
    

    return(
        <>
        <Header/>
        <h2 className="titlePag">Candy</h2>
        <div className="cartContainer">
            <div className="shoppingCardContainer">
                {products.length === 0 ? (<p className="contenido vacio">No hay elementos en el carrito</p>) : ( <ul>
                    {products.map((product, index) => (
                    <li key={index}>
                        {product.name} - ${product.price}
                        <div className="btnContainer">
                            <button className="btnAdd" >+</button>
                            <p>{quantity}</p>
                            <button className="btnRemove" /* onClick={() => removeProduct(index)} */>-</button>
                        </div>
                    </li> ))}
                </ul>)}
                <hr/>
                <p className="contenido total" >Total {total}</p>
                <div className="vaciarContainer">
                    <button className="btnVaciar" onClick={() => cleanCart()}>Vaciar</button>
                </div>
            </div>

        </div>
        <div className="candysGrid">
            <CandyCard products={products}/>
        </div>
        <Footer/>
        </>
    )
}