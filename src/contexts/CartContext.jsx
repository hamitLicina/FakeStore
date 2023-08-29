import React, { useState, createContext, useEffect} from 'react'

export const CartContext = createContext();

export default function CartProvider(props) {
    // I need to create global state
    const [cart, setCart] = useState([])

    // Get initial state from LocalStorage when page loads
    useEffect(
        () => {
            // Is there a value in LocalStorage
            const storedCart = localStorage.getItem('fakeCart')
            // Check if somethings was there
            if (storedCart) {
                // Parse converts from string to its datatype
                setCart(JSON.parse(storedCart))
            }
            // Otherwise will use defauls state value
        }, []  // When the page loads once
    )

    useEffect(
        () => {
            console.log('update, cart is ', cart)
            localStorage.setItem('fakeCart', JSON.stringify(cart))

        }, [cart]  // Store the actual cart data
    )

    const addProduct = (productToAdd) => {
        // console.log('adding', productToAdd)
        let prevCart  = [...prevCart, productToAdd]
        setCart(prevCart)
        // localStorage.setItem("fakeCart", JSON.stringify(prevCart ))
    }

    const removeProduct = (productId) => {
        // console.log("remove", productId)
        let prevCart = prevCart.filter(item => item.id !== productId)
        setCart(prevCart)
        // localStorage.setItem("fakeCart", JSON.stringify(prevCart ))
    }

    return(
        <CartContext.Provider value={{cart, addProduct, removeProduct, setCart}}>
            {props.children}
        </CartContext.Provider>
    )
    
}