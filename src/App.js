
import React from "react";
import "./App.css"



import {  BrowserRouter, Routes, Route} from 'react-router-dom';
//import ItemDetailContainer from './Views/ItemDetailContainer/ItemDetailContainer';
// import {CartContext} from './components/CartContext/CartContext'

import Navbar from "./components/Navbar/Navbar";
import Home from "./views/Home/Home.js";
import ContactForm from "./views/ContactForm/ContactForm.js"
import Cartwidget from "./views/Cartwidget/Cartwidget"
import Products from "./views/Products/Products"
import Error404 from "./components/Error404.js"



const App = () => {
  
  return (
 //   <CartContext>
    <BrowserRouter>
     <div className="App">
      <Navbar/>
    <Routes>
     <Route path="/"  element={<Home/>}></Route>
     <Route path="/productos" index element={<Products/>}></Route>
     <Route path="/contact" index element={<ContactForm/>}></Route>
     <Route path="/cartWidget" index element={<Cartwidget/>}></Route>

     <Route path="*"  component={<Error404/>} ></Route>


     </Routes>
    </div>
    </BrowserRouter>
  //  </CartContext>
  // <Route path="/detail/:id"  component={ItemDetailContainer} ></Route>
    
  )

}
export default App;