import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig/firebase';
import Swal from "sweetalert2";
import "./Candy.css";

export const Candy = () =>{

    const [total, setTotal] = useState (0);
    const [products, setProducts] = useState ([]);
    const [quantity, setQuantity] =  useState (1);
    const [candys,setCandys] = useState([]);
    const [price, setPrice] = useState(0)


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

//Para aumentar la cantidad del producto en el carrito
         const addProduct = (id) =>{
            const updatedCartItems = [...products];
            const existingItemIndex = updatedCartItems.findIndex((item) => item.id === id);

            if (existingItemIndex !== -1) {
              updatedCartItems[existingItemIndex].quantity += 1;
            } else {
              const candy = candys.find((candy) => candy.id === id);
              updatedCartItems.push({ ...candy, quantity: quantity + 1 });
            }
        
            const newTotal = updatedCartItems.reduce(
              (total, item) => total + item.price * item.quantity,
              0
            );

            const newQuantity = updatedCartItems.reduce(
              (quantity, item) => item.quantity,
              0
            );
            setQuantity(newQuantity);
            setProducts(updatedCartItems);
            setTotal(newTotal);
        };

    //Para disminuir la cantidad del producto en el carrito
        const removeProduct = (id) => {
            const updatedCartItems = [...products];
            const existingItemIndex = updatedCartItems.findIndex((item) => item.id === id);
          
            if (existingItemIndex !== -1) {
              const currentItem = updatedCartItems[existingItemIndex];
              if (currentItem.quantity === 1) {
                updatedCartItems.splice(existingItemIndex, 1);
              } else {
                currentItem.quantity -= 1;
              }
            }
          
            console.log(id);
            const newTotal = updatedCartItems.reduce(
              (total, item) => total + item.price * item.quantity,
              0
            );

            const newQuantity =updatedCartItems.reduce(
              (quantity, item) => item.quantity,
              0
            );
            setQuantity(newQuantity)
            setProducts(updatedCartItems);
            setTotal(newTotal);
          };

 //Para vaciar el carrito
         const cleanCart = () => {
          if(products.length === 0){
            return console.log("El carrito está vacío");
        }else{
                setProducts([]);
                setTotal(0);
         }}


//Para agregar productos al carrito
         const addCarrito = (e) => {
            const productId = e.target.getAttribute('id');
            const existingProduct = products.find((product) => product.id === productId);

            if (existingProduct) {
              const updatedProducts = products.map((product) => {
                if (product.id === productId) {
                  const newQuantity = product.quantity + 1;
                  const newPrice = product.price * newQuantity;
                  return {
                    ...product,
                    id: productId,
                    quantity: newQuantity,
                    price: newPrice
                  };
                }
                return product;
              });
          
              const newTotal = updatedProducts.reduce(
                (total, product) => total + product.price,
                0
              );

              setProducts(updatedProducts);
              setTotal(newTotal);
            } else {
            const newProduct = {
              id: productId,
              imagen: e.target.getAttribute('imagen'),
              name: e.target.getAttribute('name'),
              price: parseFloat(e.target.getAttribute('price')),
              quantity: 1
            };
        
            const newTotal = total + newProduct.price;
          
            setProducts([...products, newProduct]);
            setQuantity(newProduct.quantity)
            setTotal(newTotal);
          }
        }; 

    //Función para comprar
        const comprar= ()=>{
                if(products.length === 0){
                    return console.log("El carrito está vacío");
                }else{
                        Swal.fire({
                          title:'OK',
                          text:'Tu compra fue realizada con éxito!',
                          background: '#fff',
                          color:'#fff'
                        }
                        )
                        cleanCart()
                    }}
          
  
            

           
         // useEffect 
      useEffect(()=>{
          getCandys();
      },[])

    return(
        <>
        <Header/>
        <h2 className="titlePag">Candy</h2>
        <div className="cartContainer">
            <div className="shoppingCardContainer">
                {products.length === 0 ? (<p className="contenido vacio">El carrito está vacío</p>) : ( <ul>
                    {products.map((product) => (
                    <li key={product.id} className="liShoppingCard">
                        <div className="imagenContainer"><img className="imagenProduct" src={product.imagen} alt={product.name} /></div>
                        <div className="nameContainer">{product.name}</div> 
                        <div className="btnContainer">
                            <button className="btnAdd" key={product.id} onClick={() => addProduct(product.id)}>+</button>
                            <p className="pShoppingCard">{product.quantity}</p>
                            <button className="btnRemove" key={product.id} onClick={() => removeProduct(product.id)}>-</button>
                        </div>
                        <div className="priceContainer">{"$" + (product.price * product.quantity)}</div>
                    </li> ))}
                </ul>)}
                <hr/>
                <p className="contenido total" >Total {total}</p>
                <div className="btnContainerCandy">
                    <button className="btnVaciar" onClick={() => cleanCart()}>Vaciar</button>
                    <button className="btnComprarCandy" onClick={() => comprar()}>Comprar</button>
                </div>
            </div>

        </div>
        <div className="candysGrid">
            {candys.map((candy)=>(
            <div className="candysFlex">
                <div className="candyDescription" >
                    <img src={candy.imagen} alt={candy.name} className='candyImagen'/>
                    <p className='candyName' >{candy.name}</p>
                    <button className='btnPrice' key={candy.id} id={candy.id} name={candy.name} price={candy.unitPrice} imagen={candy.imagen} onClick={addCarrito}>${candy.unitPrice}</button>
                </div>
            </div>))}
        </div>
        <Footer/>
        </>
    )
}