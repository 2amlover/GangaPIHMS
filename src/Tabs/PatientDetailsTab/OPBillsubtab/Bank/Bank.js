import React from "react";
import "./bank.css";

const Bank = () => {
  return (
    <div className="bank-container">
      <div className="bank-items">
        <label htmlFor="salutation">Amount:</label>
        <input type="text" id="salutation" />
      </div>
      <div className="bank-items">
        <label htmlFor="bankSelect">Bank:</label>
        <select id="bankSelect" className="dropdown-card">
          <option value="bank"></option>
          <option value="bank1">HDFC</option>
          <option value="bank2">Union Bank Of India</option>
          <option value="bank3">State Bank Of Indiia</option>
        </select>
      </div>
      <div className="bank-items">
        <label htmlFor="firstName">Card #:</label>
        <input type="text" id="firstName" />
      </div>
      <div className="bank-items">
        <label htmlFor="firstName">Trn #:</label>
        <input type="text" id="firstName" />
      </div>
      <div className="bank-items">
        <label htmlFor="firstName">Notes:</label>
        <input type="text" id="firstName" />
      </div>
    </div>
  );
};

export default Bank;
