import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  return (
    <div className='container pt-8'>
      <div className='flex justify-between items-center'>
        <div className='text-xl font-medium'>Shahzaib Rajput</div>
       <ul className='gap-10 lg:gap-16 hidden md:flex'>
        <li className='menuLink'><a href='#hero'>Home</a></li>
        <li className='menuLink'><a href='#Project'>Project</a></li>
        <li className='menuLink'><a href='#About'>About</a></li>
        <li className='menuLink'><a href='#Skills'>Skills</a></li>
        <li className='menuLink'><a href='#Contact'>Contact</a></li>
       </ul>
       <GiHamburgerMenu className='md: hidden' size={30}/>
      </div>
    </div>
  )
}

export default Navbar
