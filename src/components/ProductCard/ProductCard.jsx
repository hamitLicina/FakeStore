import React from 'react'
import './ProductCard.css'
import { AiFillHeart } from 'react-icons/ai';
// AiFillHeart

 // I want to make first letter uppercase
 const capitalizeFirstLetter = (string) => {

  return string.charAt(0).toUpperCase() + string.slice(1);
};


function ProductCard({product}) {
  return (
    <div className='product-card'>
      <a href= {`/details/${product.id}`} className='product-card-img-heart'>
        < AiFillHeart className='red-heart' />
        <img src={product.image} />
      </a>
       
        <p style={{fontWeight:'bold'}}>{product.title}</p>
        <p style={{color:'var(--gray)'}}>{capitalizeFirstLetter(product.category)}</p>
        <p style={{fontWeight:'bold'}}>{product.price}€ </p>
    </div>
  )
}

export default ProductCard