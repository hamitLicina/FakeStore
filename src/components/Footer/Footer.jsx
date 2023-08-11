import React from 'react'
import './Footer.css'
import { AiTwotoneHeart } from "react-icons/ai";
//AiTwotoneHeart


function Footer() {
  return (
    <div className='footer-container'>
        <p>Made with <AiTwotoneHeart className='heart-icon' /> by mimo</p>
        <a className='contact-link'>Contact Us</a>
    </div>
  )
}

export default Footer