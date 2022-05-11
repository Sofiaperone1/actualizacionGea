import React from 'react'
import icon1 from '../../Imgs/icon1.png'
import icon2 from '../../Imgs/icon2.png'
import icon3 from '../../Imgs/icon3.png'
import Divider from '@mui/material/Divider';
import fu4 from '../../Imgs/fu4.1.png';


const OtherLinks = () => {
  return (
<div className='otherLinks'>
    <div className='firstContainer'>
         <div>
            <img src={icon1} alt='icon1' />
            <img src={icon2} alt='icon2' />
            <img src={icon3} alt='icon3' />
        </div>
        <h1>Otros links de interes</h1>
        <Divider variant="middle" />
    </div>
    <div className='secondContainer'>
    <div className='firstLineC'>
            <div>
                <h2>
                    Sahumar
                </h2>
                <h4>
                    Su significado material y espiritual
                </h4>
            </div>
            <div>
                <h2>
                ¿Para qué sirve un sahumerio?
                </h2>
                <h4>
                Limpiar energéticamente y alcanzar un estado de armonía
                </h4>
            </div>
            <div>
                <h2>
                Cómo sahumar tu espacio?
                </h2>
                <h4>
                Aclara tu intención  Elige tus elementos 
                </h4>
            </div>
    </div>
    <img className='imgRotativa' src={fu4} alt='img-rotativa' />
    <div className='secondLineC'>
            <div>
                <h2>
                Ventila y enciende 
                </h2>
                <h4>
                Cada planta o resina tiene un proceso diferente de incendio
                </h4>
            </div>
            <div>
                <h2>
                Realiza movimientos circulares hacia la derecha 
                </h2>
                <h4>
                Empieza contigo mismo comenzando por los pies hasta la cabeza y de ahí regresando al corazón,
                </h4>
            </div>
            <div>
                <h2>
                Cierra 
                </h2>
                <h4>
                Tómate unos minutos para reposar tus pensamientos.
                </h4>
            </div>
    </div>
    </div>
</div>
  )
}

export default OtherLinks;

/* <div>
    <img src="https://img.icons8.com/external-photo3ideastudio-lineal-photo3ideastudio/70/000000/external-incense-sleep-photo3ideastudio-lineal-photo3ideastudio.png"/>
    <img src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/70/000000/external-leaf-ecology-vitaliy-gorbachev-lineal-vitaly-gorbachev.png"/>
    <img src="https://img.icons8.com/external-wanicon-solid-wanicon/65/000000/external-peace-world-humanitarian-day-wanicon-solid-wanicon.png"/>
    </div>   */