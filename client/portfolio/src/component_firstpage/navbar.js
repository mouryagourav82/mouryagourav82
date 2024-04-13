import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='nav-background-color w-full flex items-center justify-between px-[5vw] relative '>
      <div>
      <a href="#home">
        <h1 className='text-3xl'> PORTFOLIO</h1></a>
      </div>
      <div className='lg:hidden absolute right-5'>
        <button onClick={toggleMenu} className='text-xl'>
          &#9776;
        </button>
      </div>
      <div className={`lg:flex lg:items-center lg:gap-10 py-5 hidden`}>
        <ul className='flex flex-col lg:flex-row lg:items-center lg:gap-10 py-5'>
          <li><a href="#home"> Home</a></li>
          <li><a href="#about">About Me</a></li>
          <li>
            <div className='dropdown'>
              <button className='dropbtn'><a href="#services"> Services</a></button>
              <div className='dropdowncontent'>
                <a href="#s">Services</a>
                <a href="#s">Services Details</a>
              </div>
            </div>
          </li>
          <li>
            <div className='dropdown'>
              <button className='dropbtn'><a href="#work"> Portfolio</a></button>
              <div className='dropdowncontent'>
                <a href="#work">Portfolio</a>
                <a href="#work">Portfolio Details</a>
              </div>
            </div>
          </li>
          
          <li><a href="#contact1">Contact</a></li>
        </ul>
      </div>
      {/* responsive navbar  */}
      <div className={`lg:hidden ${isOpen ? 'flex flex-col items-end': 'hidden'} `} style={{ position: 'absolute', top: '35px', right: '0px' }}>
        <ul className='bg-zinc-500 text-white flex w-[30vw] flex-col text-center '>
          <li className=' hover:bg-[#7142CC] py-2'><a href="#home"> Home</a></li>
          <li  className=' hover:bg-[#7142CC] py-2'><a href="#about">About Me</a></li>
          <li>
            <div className='dropdown  w-full py-2 hover:bg-[#7142CC]'>
              <button className='dropbtn'><a href="#services"> Services</a></button>
              <div className='dropdowncontent1'>
              <a href="#s">Services</a>
                <a href="#s">Services Details</a>
              </div>
            </div>
          </li>
          <li>
            <div className='dropdown  w-full py-2 hover:bg-[#7142CC]'>
              <button className='dropbtn'><a href="#work"> Portfolio</a></button>
              <div className='dropdowncontent1'>
              <a href="#work">Portfolio</a>
                <a href="#work">Portfolio Details</a>
              </div>
            </div>
          </li>
          
          <li  className=' hover:bg-[#7142CC] py-2'><a href="#contact1">Contact</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
