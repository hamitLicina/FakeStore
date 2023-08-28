import React, {useContext, useState} from 'react'
import './CheckOut.css'
import CartItem from '../../components/CartItem/CartItem'
import { CartContext } from '../../contexts/CartContext'
import Modal from 'react-modal'
import { useNavigate } from 'react-router-dom'


function CheckOut() {
    let navigate = useNavigate()

    // Use Global State
    // Note {} Not []
    const {cart, addProduct, removeProduct, setCart} = useContext(CartContext)

    // I need to Create state to Control Modal
    const [isOpen, setIsOpen] = useState(false);

    // Styling for Modal
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            // MarginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '600px',
            height: '40%',
        },
        overlay:{
            backgroundColor:"rgba(0, 0, 0, 0.6)"
        }
    };

    // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
    Modal.setAppElement(document.getElementById('root'));

    const getTotal = () => {
        //loop through products in cart
        let total = 0;
        for (let i = 0; i < cart.length; i++){
          total += cart[i].price;
        }
        return total;
       }
    
       const closeOrder = () =>{
        setIsOpen(false)
        //clear the cart
        setCart([])  
        //navigate to homepage
        navigate('/')
       }
    
      return (
        <div className="checkout-container">
            <h2>Item   Price   Quantity   Remove</h2>
            <div className="items-container">
            {
                cart.map(item => <CartItem product={item}/>)
                // cart.map(item=><p>{item?.title}</p>)
            }
            </div>
            <div className="checkout-right">
            <h2>Total {getTotal()}</h2>
            <button onClick={()=>setIsOpen(true)}>Checkout</button>
            </div>
            {/* Checkout should clear cart? */}
    
          <Modal
              isOpen={isOpen}   
              onRequestClose={()=>setIsOpen(false)}
              style={customStyles}
              contentLabel="Contact Us Modal" >
            <div className="modal-header">
              <h2>Your Order was successful!</h2>
              <h4>Check your email for the order confirmation.  Thank you for shopping with Hamit's Fake Store!</h4>
              <button className="modal-close-btn" onClick={closeOrder}>Return to Main Page
              </button>
            </div>
            
          </Modal>
    
        </div>
      )
    }
    
    export default CheckOut