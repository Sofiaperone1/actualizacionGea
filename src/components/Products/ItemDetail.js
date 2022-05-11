import React from 'react'
import cap5 from "../../Imgs/cap5.png" 
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const ItemDetail = () => {
  return (
   
   <div className="itemDetail">
       <img src={cap5} alt="img-detail" />
   <div className="detailContainer">
        <h1> Nombre producto </h1>
        <h2> $ 450 </h2>
        <p className='itemDescrip'> Description del producto lorem lorem lorem lorem lorem lorem <br/>lorem lorem lorem lorem</p>
        <div className='contador'>
        <button className="roundBtn">
       -
        </button>
<p>0</p>
        <button className="roundBtn">
       +
        </button>
        </div>
      
   <button className="addToCart">AGREGAR AL CARRITO</button>

      <div className='addToFavs'>
         <h6>Anadir a mis favoritos </h6>
         <button> <FavoriteBorderIcon fontSize="small" /> </button>
      </div>
    
    </div>
    </div>

  )
}

export default ItemDetail