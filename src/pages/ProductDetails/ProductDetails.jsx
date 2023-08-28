import React, {useEffect, useState, useContext} from 'react'
import './ProductDetails.css'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { CartContext } from '../../contexts/CartContext'


function ProductDetails() {
// I need to use global state
// important NOTE {} not []
const {cart, addProduct, removeProduct} = useContext(CartContext)


    // This page shows details of a specific Product
    // When the page loads
    // Which Product 
    // The id is in the url 
    // Retrieve id with useParams
    const {productId} = useParams()

    // Create State
    const [product, setProduct] = useState("")
    const [inCart, setInCart] = useState(false)

    // https://fakestoreapi.com/products/7

    useEffect (
        () => {
            console.log('Show details', productId)
            // Make api call for to get details for this product 
            axios.get(`https://fakestoreapi.com/products/${productId}`)
            .then(res => {
                console.log(res.data)
                // I have the data, Where do I have to store it ?
                // Store this in State
                setProduct(res.data)

            })
            .catch(err => console.log(err))

        }, [] // Runs once when the page loads
    )

    // We must check if it is in cart 
    useEffect(
      () => {
        let found = cart.find(item => item.id == productId)
        console.log(found)
        setInCart(found)
      }, [cart]
    )

  return (
    <div className='details-container'>
      <Link to="/">Continue Shopping</Link>
      <div className='container-info'>
        <img src={product.image} />
        <div className='details-info'>
          <p style={{fontWeight:'bold'}}> {product?.title} </p>
          <p style={{fontWeight:'bold'}}> {product?.price} € </p>
          <h4> Description </h4>
          <p> {product?.description} </p>
          {
            inCart ?
            <button onClick={() => removeProduct(product.id)}>Remove from Cart</button>
            :
            <button onClick={() => addProduct(product)}>Add to Cart</button>
          }
        </div>
      </div>
    </div>
  )
}

export default ProductDetails