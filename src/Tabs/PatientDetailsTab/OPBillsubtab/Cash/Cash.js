import React from 'react'
import './cash.css';

const Cash = () => {
  return (
    <div className="cash-container">
    <div className="cash-items">
      <label htmlFor="salutation">Amount:</label>
      <input type="text" id="salutation" />
    </div>
    <div className="cash-items">
      <label htmlFor="firstName">Notes:</label>
      <input type="text" id="firstName" />
    </div>
  </div>
  )
}

export default Cash
