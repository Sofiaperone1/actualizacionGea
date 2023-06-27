import Form from "../../components/Forms/ContactForm.js"
import React from "react";
import "./ContactForm.css"
//import Maps from "../../components/Maps.js";
import Divider from '@mui/material/Divider';
import Sucursales from './Sucursales.js'

const ContactForm  = () => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };  
  
 

  return (
   <div className="contactView">

    <div className='themeBars'>
    <h1>CONTACT US </h1>
 </div>   
 <div className="contactFormBlock" >   
    <div>
    
    <h1>NUESTRAS SUCURSALES:</h1>
    <Divider />
    <div className="branchOfficesInfo">
    <Sucursales/>
    </div>
    </div>
    <div className="mapContainer">
 {/*  <Maps/> */}
    </div>
    
    </div>
            <Form/>
   </div>

                  
               
  ) };

export default ContactForm;



/* 

   <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 400,
          height: 500,
        },
      }}
    >
  
      <Paper elevation={3} >
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '30ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic"  type="text" label="Nombre y Apellido" variant="standard" />
      <TextField id="standard-basic" label="Email" variant="standard" type="email"/>
      <TextField
          id="standard-number"
          label="Telefono"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
        <TextField
          id="outlined-multiline-static"
          
          multiline
          rows={4}
          defaultValue="Hola Gea queria consultarte"
        />
        
      <div className="suscribeCF">
      Suscribirme al boletin semanal 
      <Checkbox {...label} defaultChecked />
      </div>
      <Button variant="outlined" className="sendCF">
      Enviar
      </Button>  
    </Box>
    </Paper>
    </Box>

    */