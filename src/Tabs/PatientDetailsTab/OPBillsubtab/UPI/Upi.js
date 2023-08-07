import React from 'react'
import './upi.css';

const Upi = () => {
  return (
    <div className="upi-container">
    <div className="upi-items">
      <label htmlFor="salutation">Amount:</label>
      <input type="text" id="salutation" />
    </div>
    <div className="upi-items">
      <label htmlFor="firstName">Notes:</label>
      <input type="text" id="firstName" />
    </div>
  </div>
  )
}

export default Upi
