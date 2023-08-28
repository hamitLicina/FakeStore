import React, { useState, createContext, useEffect} from 'react'

export const CartContext = createContext();

export default function CartContextProvider(props) {
    // I need to create global state
    const [cart, setCart] = useState([])

    // Get initial state from LocalStorage when page loads
    useEffect(
        () => {
            // Is there a value in LocalStorage
            const storedFavs = localStorage.getItem('fakeCart')
            // Check if somethings was there
            if (storedFavs) {
                // Parse converts from string to its datatype
                setCart(JSON.parse(storedFavs))
            }
            // Otherwise will use defauls state value
        }, []  // When the page loads once
    )

    useEffect(
        () => {
            console.log('update, cart is ', cart)
            localStorage.setItem('fakeCart', JSON.stringify(cart))

        }, [cart]
    )

    const addProduct = (productToAdd) => {
        console.log('adding', productToAdd)
        let newCart = [...cart, productToAdd]
        setCart(newCart)
        // localStorage.setItem("fakeCart", JSON.stringify(newCart))
    }

    const removeProduct = (productId) => {
        console.log("remove", productId)
        let newCart = cart.filter(item => item.id != productId)
        setCart(newCart)
        // localStorage.setItem("fakeCart", JSON.stringify(newCart))
    }

    return(
        <CartContextProvider value={{cart, addProduct, removeProduct, setCart}}>
            {props.children}
        </CartContextProvider>
    )
    
}