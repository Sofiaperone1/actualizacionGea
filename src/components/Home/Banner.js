import React from "react";
import "./Home.css";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const Banner = () => {
  
    return (
     
    <div className="homeBackg">
      <h1>Tienda energetica</h1>
      <h3>Ecologica, Cruelty free, Basura cero </h3>
       <Stack spacing={2} direction="row">
        <Button className="homeBtn" variant="outlined">Conoce nuestros productos</Button>
       </Stack>
    </div>
    
   
               
    ) };
  
  export default Banner;