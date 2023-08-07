import React from "react";
import "./ins.css";

const Ins = () => {
  return (
    <div className="ins-container">
      <div className="ins-items">
        <label htmlFor="salutation">Amount:</label>
        <input type="text" id="salutation" />
      </div>
      <div className="ins-items">
        <label htmlFor="firstName">Policy #:</label>
        <input type="text" id="firstName" />
      </div>
      <div className="ins-items">
        <label htmlFor="relationSelect">Relation:</label>
        <select id="relationSelect">
          <option value="relation"></option>
          <option value="relation1">Fother</option>
          <option value="relation2">Mother</option>
          <option value="relation3">Husband</option>
        </select>
      </div>
      <div className="ins-items">
        <label htmlFor="firstName">Provider :</label>
        <input type="text" id="firstName" />
      </div>
      <div className="ins-items">
        <label htmlFor="firstName">Status:</label>
        <input type="text" id="firstName" placeholder="Approval Status" />
      </div>
      <div className="ins-items">
        <label htmlFor="firstName">Notes:</label>
        <input type="text" id="firstName" />
      </div>
    </div>
  );
};

export default Ins;
