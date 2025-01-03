import React from 'react'
import logo from '../assets/Microsoft-logo.png'
import { useState } from 'react';

const Nav = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  return (
    <div className='container mx-auto p-2 mt-2 flex flex-row items-center justify-between w-screen text-xl'>
        <div className="hamberger flex gap-4 md:hidden  ">
        <i onClick={()=> setisMenuOpen(!isMenuOpen)} class="fa-solid fa-bars"></i>
        <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="logo">
            <img className='w-20' src={logo} alt="Microsoft-logo" />
        </div>
        <div className="items hidden md:flex ">
          <ul className='flex flex-row gap-4 '>
            <li className='text-sm hover:underline underline-offset-8'>Microsoft 365</li>
            <li className='text-sm hover:underline underline-offset-8'>Teams</li>
            <li className='text-sm hover:underline underline-offset-8'>Copilot</li>
            <li className='text-sm hover:underline underline-offset-8'>Windows</li>
            <li className='text-sm hover:underline underline-offset-8'>Surface</li>
            <li className='text-sm hover:underline underline-offset-8'>Xbox</li>
            <li className='text-sm hover:underline underline-offset-8'>Support</li>
          </ul>
        </div>
        <div className={`bg-gray-100 absolute top-14 left-0 w-screen h-screen flex-col gap-4 flex items-start p-4 ${isMenuOpen ? "opacity-100 " : "opacity-0"}`  }>
          <ul className='flex flex-col gap-4  '>
            <li className='text-md hover:underline underline-offset-8'>Microsoft 365</li>
            <li className='text-md  hover:underline underline-offset-8'>Teams</li>
            <li className='text-md  hover:underline underline-offset-8'>Copilot</li>
            <li className='text-md  hover:underline underline-offset-8'>Windows</li>
            <li className='textmd  hover:underline underline-offset-8'>Surface</li>
            <li className='text-md  hover:underline underline-offset-8'>Xbox</li>
            <li className='text-md  hover:underline underline-offset-8'>Support</li>
          </ul>
        </div>
        <div className="cart flex gap-4">
        <i className="fa-solid fa-magnifying-glass hidden md:inline"></i>
        <i class="fa-solid fa-cart-shopping"></i>
        <i class="fa-regular fa-user"></i>
        </div>
    </div>
  )
}

export default Nav