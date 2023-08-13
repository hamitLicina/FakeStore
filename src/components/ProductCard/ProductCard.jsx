import React from 'react'
import './ProductCard.css'

function ProductCard({product}) {
  return (
    <div className='product-card'>
        <img src={product.image} />
        <p>{product.title}</p>
        <p>{product.category}</p>
        <p>{product.price}€ </p>
    </div>
  )
}

export default ProductCard