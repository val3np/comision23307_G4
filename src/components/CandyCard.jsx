import { useState, useEffect } from 'react';
import { collection, getDocs, getDoc, doc } from 'firebase/firestore';
import { db } from '../firebaseConfig/firebase';
import './CandyCard.css';

export const CandyCard = () =>{
     // configurar los hooks
     const [candys,setCandys] = useState([]);
     const [products, setProducts] = useState ([]);
     const [name, setName] = useState("");

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

     let namePro = candys.map(candy=>{
        let name = candy.name;
     } 
     ) 
     

  
     const addProduct = ()=>{
        
        const nuevoProductAdd = {
             /* name: namePro.name,
            price: Number(price) */
        }
        setProducts([...products, nuevoProductAdd])
     }
     console.log(products);
      // useEffect 
      useEffect(()=>{
       getCandys();
     },[])
    return(
        <>
        {candys.map((candy)=>(
        <div className="candysFlex">
            <div className="candyDescription">
                <img src={candy.imagen} alt={candy.name} className='candyImagen'/>
                <p className='candyName'>{candy.name}</p>
            </div>
            <div className='btnContainer' onClick={addProduct}>
                <button className='btnPrice'>${candy.unitPrice}</button>
            </div>
        </div>))}
        </>
    )
        }