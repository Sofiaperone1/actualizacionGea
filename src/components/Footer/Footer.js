import React from 'react'
import "./Footer.css"
import logo1 from "../../Imgs/logo1.png"
import mastercardIcon from "../../Imgs/mastercardIcon.png"
import visaIcon from "../../Imgs/visaIcon.png"
import otherCardIcon from "../../Imgs/otherCardIcon.png"
import CSoonIcon from "../../Imgs/CSoonIcon.png"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>

<img src={logo1} calt='logoGea' />

<div>
<img src={CSoonIcon} className="CSoonIcon" alt="CSoonIcon" />

<h4>CABA</h4>
<p> ALEM 1546 </p>
<p> sucursalgea5@gmail.com </p>
<p> 0115478965 </p>

<h4> CORDOBA </h4>
<p> GARIBALDI 259 </p>
<p> sucursalgea4@gmail.com</p>
<p> 4875985647</p>


<h4>TRES ARROYOS </h4>
<p> CONSTITUCION 1658 </p>
<p> sucursalgea6@gmail.com</p>
<p> 284569654</p>
</div>

<div>
  <ul>
  <li><Link to="/" className="navlinks" >Home</Link></li>
  <li><Link to="/productos" className="navlinks" >Shop</Link></li>
  <li><Link to="/contact" className="navlinks" >Contact</Link></li>
  <li><Link to="/cartWidget" className="navlinks" >Widget</Link></li>
  </ul>
</div>


<div className='footerCardIcons'>
<img src={visaIcon} alt="visaIcon" />
<img src={mastercardIcon} alt="mastercardIcon" />
<img src={otherCardIcon} alt="mastercardIcon" />
</div>

    </div>
  )
}

export default Footer;