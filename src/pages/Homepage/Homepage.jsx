import React, { useEffect, useState } from 'react'
import './Homepage.css'
import axios from 'axios'
import ProductCard from '../../components/ProductCard/ProductCard'

function Homepage() {
    // Create State for the products
    const [products, setProducts] = useState([])
    // Create State for the categories
    const [categories, setCategories] = useState([])
    // Create State for the filtered categories
    const [filteredProducts, setFilteredProducts] = useState([]);



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
                    setFilteredProducts(res.data);
                })
                .catch(err => console.log(err))

            // Make API call to get all categories 
            axios.get(`https://fakestoreapi.com/products/categories`)
                .then(res => {
                    console.log(res.data)
                    // I have the categories data, what do I do with it ?
                    // I want to store this data in state
                    setCategories(['All', ...res.data])

                })
                .catch(err => console.log(err))


        }, [] // Runs only one time when the page loaded
    )

    const handleCategoryClick = (category) => {
        if (category === 'All') {
            setFilteredProducts(products);
        } else {
            const filteredProducts = products.filter(product => product.category === category);
            setFilteredProducts(filteredProducts);
        }
    }

    // I want to make first letter uppercase
    const capitalizeFirstLetter = (string) => {

        return string.charAt(0).toUpperCase() + string.slice(1);
    };



    return (
        <div className='homepage-container'>
            <div className='categories'>
                {/* Categories will be hear */
                    // categories.map(item => <p key={item.id}>{item.data}</p>)
                    categories.map(cat => {
                        return <button className='categories-btn' key={cat}
                            onClick={() => handleCategoryClick(cat)}>{capitalizeFirstLetter(cat)}</button>
                    })
                }

            </div>
            <div className='products-container'>

                {/* Products will be hear */
                    // products.map(item => <p key={item.id}>{item.title}</p>)

                    filteredProducts.map(item => <ProductCard product={item} key={item.id} />)
                }
            </div>
        </div>
    )
}

export default Homepage