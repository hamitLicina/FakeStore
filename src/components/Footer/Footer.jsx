import React from 'react'
import './Footer.css'
import { AiTwotoneHeart } from "react-icons/ai";
//AiTwotoneHeart
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 1)'
  }
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement(document.getElementById('root'));



function Footer() {
  // We need to create a State to control modal
  const [isOpen, setIsOpen] = React.useState(false)


  return (
    <div className='footer-container'>
        <p>Made with <AiTwotoneHeart className='heart-icon' /> by mimo</p>
        <button className='contact-btn' onClick={() => setIsOpen(true)}>Contact Us</button>
        <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
        contentLabel="Contact Us Modal"
      >
        <div className='modal-header'>
          <h2>Contact Us</h2>
          <button className='modal-close-btn' onClick={() => setIsOpen(false)}>X</button>
        </div>
        
        <form>
          <label htmlFor='name'></label>
          <input type='text' id='name' placeholder='First Name' />
          <label htmlFor='surname'></label>
          <input type='text' id='surname'  placeholder='Last Name' />
          <label htmlFor='message' ></label>
          <textarea id='message' rows='5'  placeholder='Write Your Message Here'></textarea>
          <button type='submit'>Submit</button>
        </form>
      </Modal>
    </div>
  )
}

export default Footer