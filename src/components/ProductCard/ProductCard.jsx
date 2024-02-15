import React, { useContext, useEffect, useState } from 'react'
import './ProductCard.css'
import { Link } from 'react-router-dom'
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { CartContext } from '../../contexts/CartContext';


// I want to make first letter uppercase
const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

function ProductCard({ product }) {

  // Use Global State
  // Note {} NOT []
  const { cart, addProduct, removeProduct } = useContext(CartContext)
  const [inCart, setInCart] = useState(false)

  // Has this product been added already ?
  useEffect(
    () => {
      // Is this Cart in Favorites ?
      setInCart(cart?.find(item => item.id == product.id))
      console.log(inCart)
    }, [cart]
  )

  return (
    <div className='product-card'>

      <Link to={`/details/${product?.id}`} className='card-container'>
        <img src={product?.image} />
        <h3>{product?.title}</h3>
        <p>{capitalizeFirstLetter(product?.category)}</p>
        <h3>{product?.price}€ </h3>
      </Link>

      <div className='heart-container'>
        {
          inCart ?
            <FaHeart onClick={() => removeProduct(product.id)} className="heart-blue" />
            :
            <FaRegHeart onClick={() => addProduct(product)} />
        }
      </div>

    </div>
  )
}

export default ProductCard