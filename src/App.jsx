import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Homepage from './pages/Homepage/Homepage'
import Footer from './components/Footer/Footer'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import CartContextProvider from './contexts/CartContext'
import CheckOut from './pages/CheckOut/CheckOut'


function App() {
  

  return (
    <>
      <BrowserRouter>
      <CartContextProvider>

        <Header />

        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path='/details/:productId' element={<ProductDetails />} />
        
        </Routes>

        <Footer />
      
      </CartContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App