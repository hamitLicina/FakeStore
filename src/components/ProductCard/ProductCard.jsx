import React, {useContext, useEffect, useState} from 'react'
import './ProductCard.css'
import { Link } from 'react-router-dom'
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { CartContext } from '../../contexts/CartContext';


 // I want to make first letter uppercase
 const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

function ProductCard({product}) {

  // Use Global State
  // Note {} NOT []
  const {cart, addProduct, removeProduct} = useContext(CartContext)
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
      {
        inCart ?
        <FaHeart onClick={() => removeProduct(product.id)} className="heart-blue" />
        :
        <FaRegHeart onClick={() => addProduct(product)} />
      }
      <Link to= {`/details/${product?.id}`} className='product-card'>
        <img src={product?.image} />
      </Link>       
        <p style={{fontWeight:'bold'}}>{product?.title}</p>
        <p style={{color:'var(--gray)'}}>{capitalizeFirstLetter(product?.category)}</p>
        <p style={{fontWeight:'bold'}}>{product?.price}€ </p>
    </div>
  )
}

export default ProductCard