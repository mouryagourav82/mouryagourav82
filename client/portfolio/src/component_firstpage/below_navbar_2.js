import React from "react";
import style from '../component_firstpage/below_navbar_2.module.css';

function Secondblock(){
    return(
        <div className={style.main} id="about">
            <div className={style.main1}>
                <div className={style.first}>
                    <h3 className="text-2xl">About Me</h3>
                </div>
                <div className={style.ins}>
                    <img src='./images/g2.png' width="55%" height="60%" alt="none" className="m-auto py-12"/>
                </div>
                <div className={style.second}>
                    <h1 className="text-3xl">Gourav Maurya</h1>
                </div>
                <div className={style.third}>
                    <p>
                    I'm a professional freelance web developer from New York. 
                    I have spent the past 10+ years building 
                    my skills and reputation with my client base and am always looking to 
                    develop new work relationships.
                    </p>
                </div>
                <div>
                    <div style={{height:'50px'}}>
                        <div>
                        <h3 style={{display:'flex', justifyContent:'space-between', marginLeft:'9%', marginTop:'4.5%', color:'#7142CC', fontSize:'20px'}}>Ui Ux Design 
                        <span style={{display:'flex', alignItems:'flex-end', textAlign:'right', color:'#7142CC', fontSize:'15px',marginRight:'7%'}}>90%</span></h3>
                    </div>
                    <div className={style.container}>
                    <div className={style.progress}>
                        <div className={style.bar1}>
                        </div>
                    </div>
                    </div>
                    </div>
                    {/* web development */}
                    <div style={{height:'50px'}}>
                        <div>
                        <h3 style={{display:'flex', justifyContent:'space-between', marginLeft:'9%', marginTop:'4.5%', color:'#7142CC', fontSize:'20px'}}>Web Development
                        <span style={{display:'flex', alignItems:'flex-end', textAlign:'right', color:'#7142CC', fontSize:'15px',marginRight:'7%'}}>100%</span></h3>
                    </div>
                    <div className={style.container}>
                    <div className={style.progress}>
                        <div className={style.bar2}>
                        </div>
                    </div>
                    </div>
                    </div>
                    {/* software development */}
                    <div >
                        <div>
                        <h3 className={style.left1} style={{display:'flex', justifyContent:'space-between', marginLeft:'9%', marginTop:'4.5%', color:'#7142CC', fontSize:'20px'}}>Software Development
                        <span style={{display:'flex', alignItems:'flex-end', textAlign:'right', color:'#7142CC', fontSize:'15px',marginRight:'7%'}}>75%</span></h3>
                    </div>
                    <div className={style.container}>
                    <div className={style.progress}>
                        <div className={style.bar3}>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
                <div>
                        <button className={style.button}>Hire Me</button>
                </div>
            </div>
            <div className={style.main2}>
               <img src='./images/g2.png'  alt="none" className=" h-3/4 "/>
            </div>
        </div>
    );
}
export default Secondblock;