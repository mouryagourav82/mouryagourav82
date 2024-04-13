import React from 'react'
import style from "../component_firstpage/below_navbar_3.module.css";
import Cards from './cards';

function Thirdblock() {
  return (
    <div className={style.main} id='services'>
        <div className={style.first}>
            <p>What I Do</p>
        </div>
        <div  className={style.second}>
            <h2>My Services</h2>
        </div>
        <div className={style.container}>
            <div className={style.cards}>
                <Cards logo='./images/support.png' title="Web Development" des=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua "/>
            </div>
            <div  className={style.cards} >
                <Cards logo='./images/layers.png' title="Graphic Design" des=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua "/>
            </div>
            <div className={style.cards}>
                <Cards logo='./images/brifcase.png' title="Digital Marketing" des=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua "/>
            </div>
        </div>
            <div className={style.container}>
            <div className={style.cards}>
                <Cards logo='./images/graph.png' title="SEO Optimization" des=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua "/>
            </div>
            <div  className={style.cards}>
                <Cards logo='./images/device.png' title="Apps Development" des=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua "/>
            </div>
            <div className={style.cards}>
                <Cards logo='./images/light-bulb.png' title="Creative Solutions" des=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua "/>
            </div>
        </div>
        
    </div>
  )
}

export default Thirdblock;