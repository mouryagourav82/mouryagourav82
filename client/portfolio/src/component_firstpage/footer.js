import React from 'react'
import style from './footer.module.css';
function Footer() {
  return (
    <div className={style.main}>
        {/* <footer> */}
        <div className={style.first}>
            <div className={style.c1}>
                <div >
                    <h2 className='text-3xl'>Olivia Ava</h2>
                </div>
                <div className={style.c11}>
                    <p >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit eiusmod tempor
                     incididunt labore et dolore magna aliqua.
                     Ut enim ad minim veniam, quis nostrud exercitation ullamco consectetur.
                    </p>
                </div>
               
            </div>
            <div className={style.c2}>
                 <h3 className='text-3xl'>Our Services</h3>
                   <ul>
                        <li>Graphic Design</li>
                        <li>Web Development</li>
                        <li>Digital Marketing</li>
                        <li>SEO Optimization</li>
                        <li>Creative Solutions</li>
                   </ul>
            </div>
            
        </div>
        <div className={style.second}>
            <div className={style.foo}>
            <p className={style.p2}> &#169;2023 Olivia - All Rights Reserved.</p><p className={style.p1}>Terms & Conditions | Privacy Policy</p>
            </div>
        </div>
        {/* </footer> */}
    </div>
  )
}

export default Footer;