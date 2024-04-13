import React from 'react'
import style from './card4.module.css';
function Card4(props) {
  const {logo} = props;
  return (
    <div>
        <div className={style.b1}>
        
            <div className={style.b2}>
              
              <img src={logo} alt='pic1' className={style.img1}/>
              <p style={{margin:'7%',marginBottom:'12%'}}>App Store | Social Media</p>
              <p style={{marginLeft:'10%',marginBottom:'5%'}}>Creative Web Design</p>
              <img src='./images/gallery.png' alt='pic2' className={style.img2}/>
            </div>
        </div>
    </div>
  )
}

export default Card4;