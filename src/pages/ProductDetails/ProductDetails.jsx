import React, {useEffect, useState} from 'react'
import './ProductDetails.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'


function ProductDetails() {
    // This page shows details of a specific Product
    // When the page loads
    // Which Product 
    // The id is in the url 
    // Retrieve id with useParams
    const {productId} = useParams()

    // Create State
    const [product, setProduct] = useState("")

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

  return (
    <div className='details-container'>
      <img src={product.image} />
      <div className='container-info'>
        <p style={{fontWeight:'bold'}}> {product?.title} </p>
        <p style={{fontWeight:'bold'}}> {product?.price} € </p>
        <h4> Description </h4>
        <p> {product?.description} </p>
        <button>Add to Chart</button>
      </div>
    </div>
  )
}

export default ProductDetails
