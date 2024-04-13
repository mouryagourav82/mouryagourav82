import React from "react";
import style from '../component_firstpage/below_navbar_1.module.css';
function Firstblock(){
    return(
        <div id="home" className={style.main}>
            <div>
                <div className={`${style.first} text-[3vw]`}>
                    <h2>Hello, I'm</h2>
                </div>
                <div className={`${style.second } text-[4vw]`}>
                    <h1>Gourav Maurya </h1>
                </div>
                <div  className={style.third}>
                    <p>
                        I'm a professional freelance web developer from New Delhi. 
                        I have spent the past 10+ years building my skills and reputation with
                        my client base and am always looking to develop new work relationships.
                    </p>
                </div>
                <div>
                    <button  className={style.b1}>Let's Talk</button>
                    <button  className={style.b2}> <a href="./Resume.pdf" download> Download Resume</a></button>
                </div>
            </div>
        </div>
    );
}
export default Firstblock;