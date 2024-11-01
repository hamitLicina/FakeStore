// rfce
import React, { useContext } from 'react'
import "./Header.css"
import { AiOutlineShoppingCart } from "react-icons/ai";
//AiOutlineShoppingCart
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import logo from '../../assets/hamitlicina.jpeg'
import { GiChainedHeart } from "react-icons/gi";
//<GiChainedHeart />



function Header() {

  //use global state
  //NOTE {} not []
  const { cart, addProduct, removeProduct } = useContext(CartContext)

  return (
    <div className='header-container'>
      <Link to="/"><h3 className='logo'>Hamit's Store <img src={logo} className='hamitLicinaLogo' alt="Hamit Licina's Logo" /></h3></Link>
      <div className='cart-wrapper'>
        <Link to="/liked">
          <GiChainedHeart className='likes-icon' />
          <p className='cart-number-second'>{cart.length}</p>
        </Link>

        <Link to="/checkout">
          <AiOutlineShoppingCart className='shopping-car-icon' />
          <p className='cart-number'>{cart.length}</p>
        </Link>
      </div>
    </div>
  )
}

export default Header