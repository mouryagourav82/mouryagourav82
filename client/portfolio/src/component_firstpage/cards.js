import React from 'react'
import style from '../component_firstpage/cards.module.css';
function Cards(props) {
    // super();
    const {logo} = props;
    const {title} = props;
    const {des} = props;
    
  return (
    <div className={style.main}>
        <div  className={style.logo}>
            <div className={style.logo1}>
                <img src={logo} alt='cards' width="40px" height="40px" />
            </div>
        </div>
        <div className={style.title}>
            <h3>{title}</h3>
        </div>
        <div className={style.des}>
            <p>{des}</p>
        </div>
        <div>

        </div>
    </div>
  )

  }
export default Cards;