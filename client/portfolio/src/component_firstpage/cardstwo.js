import React from 'react'
import style from '../component_firstpage/cardtwo.module.css';
import pic2 from './gallery.png';
function Cards2(props) {
  const {logo} = props;
  return (
    <div className={style.main}>
      <div className={style.main2}>
        <div className={style.first}>
          <img src={logo} width="300px" alt='image1' />
        </div>
        <div className={style.second}>
          <img src={pic2} width="30px" alt='logo1'/>
        </div>
        <div className={style.third}>
          <div>
            <p style={{color:"#7142CC", fontSize:"14px",textAlign:'left'}}>App Store | Social Media</p>
          
            <h3>Creative Web Design</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards2;