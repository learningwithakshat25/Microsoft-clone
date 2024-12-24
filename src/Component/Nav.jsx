import React from 'react'
import logo from '../assets/Microsoft-logo.png'

const Nav = () => {
  return (
    <div className='container mx-auto p-2 mt-2 flex flex-row items-center justify-between w-screen text-xl'>
        <div className="hamberger flex gap-4">
        <i class="fa-solid fa-bars"></i>
        <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="logo">
            <img className='w-20' src={logo} alt="Microsoft-logo" />
        </div>
        <div className="cart flex gap-4">
        <i class="fa-solid fa-cart-shopping"></i>
        <i class="fa-regular fa-user"></i>
        </div>
    </div>
  )
}

export default Nav