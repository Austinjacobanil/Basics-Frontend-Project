import React from 'react'
import './Connection.css'
import logo from '../../assets/logo.png'

const Connection = () => {
  return (
    <div className='connection'>
        <div className="connection-left">
        <img src={logo} alt="" className='connection-img' />
      </div>
      <div className="connection-right">
        <h3>Delivery Form</h3>
        <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type="text" name='name' placeholder='Enter your name' required/>
                <label>Phone number</label>
                <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
                <label>Write your message here</label>
                <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
            </form>
      </div>
    </div>
  )
}

export default Connection