import React, {useContext} from 'react'
import './CartItem.css'
import { CartContext } from '../../contexts/CartContext'
import { FiTrash2 } from "react-icons/fi";
//FiTrash2

function CartItem({product}) {
    // Use Global State
    // NOTE {} NOT []
    const {cart, addProduct, removeProduct} = useContext(CartContext)

  return (
    <div className='cart-item'>
        <img src={product.image} />
        <h3>{product.title}</h3>
        <h3>{product.price}</h3>
        <h3>1</h3>
        <FiTrash2 className='trash-icon' onClick={() => removeProduct(product.id)} />
    </div>
  )
}

export default CartItem