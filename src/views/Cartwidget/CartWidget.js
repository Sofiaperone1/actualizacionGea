import React, {useContext, useEffect }from 'react'
import { ItemContext } from '../../components/CartContext/CartContext'
import cartWidget from "./cartWidget.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';


/*function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
*/

export default function BasicTable() {
  const {cart,setCart,count ,setCount, sumall} =useContext (ItemContext)

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
<div className='cartWidgetCont'>
<div className='themeBars'>
    <h1>SHOP CART</h1>
 </div>     
  
  <button >
    Finalizar compra
  </button>
              </div>
  );
}


/*
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
              <TableCell align="right"><input type="button" value="x" name={row.name} onClick={deleteItem}/></TableCell>

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
*/