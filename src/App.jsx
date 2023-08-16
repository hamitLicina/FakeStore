import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Homepage from './pages/Homepage/Homepage'
import Footer from './components/Footer/Footer'
import ProductDetails from './pages/ProductDetails/ProductDetails'

function App() {
  

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/details/:productId' element={<ProductDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
