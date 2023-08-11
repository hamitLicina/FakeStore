import React, {useEffect, useState} from 'react'
import './Homepage.css'
import axios from 'axios'
import ProductCard from '../../components/ProductCard/ProductCard'

function Homepage() {
    // Create State for the products
    const [products, setProducts] = useState([])

    // Show all products when the page loads 
    // This is the all products end point https://fakestoreapi.com/products
    // This is te Categories end point https://fakestoreapi.com/products/categories


    useEffect(
        () => {
            console.log('homepage loaded')
            // Make API call to get all products 
            axios.get(`https://fakestoreapi.com/products`)
            .then(res => {
                console.log(res.data)
                // I have the products data, what do I do with it ?
                // I want to store this data in state
                setProducts(res.data)

            })
            .catch(err => console.log(err))

        }, [] // Runs only one time when the page loaded
    )

  return (
    <div className='homepage-container'>
        <div className='categories'> {/* Categories will be hear */}
            <button>All</button>
        </div>
        <div className='products-container'>
            {/* Products will be hear */
                // products.map(item => <p key={item.id}>{item.title}</p>)

                products.map(item => <ProductCard product={item}
                    key={item.id}/>)
            }
        </div>
    </div>
  )
}

export default Homepage