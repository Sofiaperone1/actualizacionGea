

import { ConstructionOutlined, ContentCutRounded } from "@mui/icons-material";
import React from "react";

import {useState, useContext} from "react"
import { ItemContext } from "../CartContext/CartContext";




const ItemCount = ({data}) => {
 
    const {cart,setCart, setCount,count} = useContext (ItemContext)

    const [counter, setCounter] = useState (0); 
   // const [cart, setCart] = useState([]);
    
    const sumarUno = () => {
        if (counter < data.stock ) {
        setCounter(counter + 1); 
      
        }
      };
      const restarUno = () => {
        if (counter > 0 ) { 
          setCounter (counter - 1) 
       
                            }};

        const addToCart = () => { cart.push({cant:counter, name:data.name, price:data.price, total:counter*data.price}) ;
                                  console.log(cart);
                               
                                 const sumall = cart.map(item => item.total).reduce((prev, curr) => prev + curr, 0);
                                 console.log(sumall)
                                 setCount(sumall)

                                

       }

     /*  fruits = [
        {  description: 'orange', Amount: 50},
        {  description: 'orange', Amount: 50},
        {  description: 'apple', Amount: 75},
        {  description: 'kiwi', Amount: 35},
        {  description: 'watermelon', Amount: 25},];
       const sumall = fruits.map(item => item.amount).reduce((prev, curr) => prev + curr, 0);
       console.log(sumall); */
                           
                              
  return (
    <div>
    <div className='contador'>
    <button className="roundBtn" onClick={restarUno}>
    -
    </button>

    <p  id="InitalCount"> {counter} </p>

    <button className="roundBtn" onClick={sumarUno}>
    +
    </button>
  
    </div>
 <button className="addToCart" onClick={addToCart}>AGREGAR AL CARRITO</button>
   </div>
  )
}

export default ItemCount

// <button className="addToCart" onClick={showCart}>AGREGAR AL CARRITO2</button>
