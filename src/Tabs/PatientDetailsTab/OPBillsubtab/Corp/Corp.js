import React from 'react'
import './corp.css';

const Corp = () => {
  return (
    <div className="corp-container">
    <div className="corp-items">
      <label htmlFor="salutation">Amount:</label>
      <input type="text" id="salutation" />
    </div>
    <div className="corp-items">
      <label htmlFor="firstName">Emp Number:</label>
      <input type="text" id="firstName" />
    </div>
    <div className="corp-items">
        <label htmlFor="emptypeSelect">Emp Type:</label>
        <select id="emptypeSelect">
          <option value="emp"></option>
          <option value="emp1">Full Time</option>
          <option value="emp2">Off Time</option>
        </select>
      </div>
    <div className="corp-items">
      <label htmlFor="firstName">Employer:</label>
      <input type="text" id="firstName" />
    </div>
    <div className="bank-items">
      <label htmlFor="firstName">Notes:</label>
      <input type="text" id="firstName" />
    </div>
  </div>
  )
}

export default Corp
