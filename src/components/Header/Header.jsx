// rfce
import React from 'react'
import "./Header.css"
import { AiOutlineShoppingCart } from "react-icons/ai";
//AiOutlineShoppingCart


function Header() {
  return (
    <div className='header-container'>
        <h3 className='logo'><a href='/'>Fake Store</a></h3>
        <AiOutlineShoppingCart className='shopping-car-icon' />
        <span className='number'>5</span>
    </div>
  )
}

export default Header
