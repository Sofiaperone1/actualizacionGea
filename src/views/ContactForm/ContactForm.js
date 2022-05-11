import React from "react";
import Button from '@mui/material/Button';

import Box from '@mui/material/Box'; 
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';


const ContactForm  = () => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
 

  return (
   
                  
                    <div className="fondo">
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
                    </div>
                  
               
  ) };

export default ContactForm;