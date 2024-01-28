import React from 'react';
import  { NavLink }  from 'react-router-dom';
const Navbar = () => {
  return (
    <header className='header'>
        <NavLink to="/" className={"w-10 h-10 font-bold bg-white shadow-md flex justify-center items-center rounded-lg"}>
            <p className='blue-gradient_text'>H.H</p>
        </NavLink>
        <nav className='text-lg flex font-medium gap-7'>
            <NavLink to='/about' className={({isActive})=>isActive?"text-blue-500":"text-black"}>
                About
            </NavLink>
            <NavLink to='/projects' className={({isActive})=>isActive?"text-blue-500":"text-black"}>
                Projects
            </NavLink>
            <NavLink to='/contact' className={({isActive})=>isActive?"text-blue-500":"text-black"}>
                Contact
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar;