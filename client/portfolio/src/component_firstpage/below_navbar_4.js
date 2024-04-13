import React from 'react'
import Cards4 from './card4.js';
import style from '../component_firstpage/below_navbar_4.module.css';


function Forthblock() {
  return (
    <div className={style.main} id='work'>
        <div className={style.first}>
            <p>Portfolio</p>
        </div>
        <div className={style.second}>
            <h2>My Works</h2>
        </div>
        <div className={style.third}>
            <div  className={style.card}>
            <Cards4 logo='./images/work-1.jpg'/>
            </div>
            <div className={style.card}>
            <Cards4 logo='./images/work-2.jpg'/>
            </div>
            <div  className={style.card}>
            <Cards4 logo='./images/work-3.jpg'/>
            </div>
            <div className={style.card}>
            <Cards4 logo='./images/work-4.jpg'/>
            </div>
            <div className={style.card}>
            <Cards4 logo='./images/work-5.jpg'/>
            </div>
            <div className={style.card}>
            <Cards4 logo='./images/work-6.jpg'/>
            </div>
        </div>
        
        <div className={style.forth}>
            <button>View More Portfolio</button>
        </div>
    </div>
  )
}

export default Forthblock;