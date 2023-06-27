import React, {useContext, useEffect }from 'react'
import { ItemContext } from '../../components/CartContext/CartContext'
import './cartWidget.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import WidgetForm from '../../components/Forms/WidgetForm';
import Checkbox from '@mui/material/Checkbox';
import { Divider } from '@mui/material';
import mastercardIcon from "../../Imgs/mastercardIcon.png"
import visaIcon from "../../Imgs/visaIcon.png"
import otherCardIcon from "../../Imgs/otherCardIcon.png"
import IconButton from '@mui/material/IconButton';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Swal from 'sweetalert2'



/*function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
*/

const CartWidget = () => {


const {cart,setCart,count ,setCount, sumall} =useContext (ItemContext)

const [showPassword, setShowPassword] = React.useState(false);

const handleClickShowPassword = () => setShowPassword((show) => !show);

const handleMouseDownPassword = (event) => {
  event.preventDefault();
};



  const deleteItem = (e) => {
      const selectedProdName = e.target.name;
      const deleteditem = cart.filter (e => e.name !== selectedProdName)
      //const updatedCount = count - selectedProdTotal
      const sumall = deleteditem.map(item => item.total).reduce((prev, curr) => prev + curr, 0);
      console.log(sumall)
      setCount(sumall)
      setCart(deleteditem)
      }



return (
<div className='cartWidget'>
<div className='themeBars'>
    <h1>SHOP CART</h1>
</div>     

<TableContainer className="cartWidget " component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Producto</TableCell>
            <TableCell align="right">Cant</TableCell>
            <TableCell align="right">Precio</TableCell>
            <TableCell align="right">Total</TableCell>
            <TableCell align="right">Delete</TableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.cant}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.total}</TableCell>
              <TableCell align="right"><input className='deleteBtnForm' type="button" value="x" name={row.name} onClick={deleteItem}/></TableCell>

            </TableRow>
          ))}
        <TableRow
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
               
              </TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right">PRECIO TOTAL</TableCell>
              <TableCell align="right">${count}</TableCell>

            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>


</div>
)
}

export default CartWidget;
/*
 
*/