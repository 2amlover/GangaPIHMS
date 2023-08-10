import React from "react";
import "./addinsurancemodal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faSave, faPlus } from "@fortawesome/free-solid-svg-icons";

const AddInsuranceModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="insurancemodal-overlay">
      <div className="insurancemodal-content">
        <h2>Insurance Details</h2>
        <div className="insurance-modal-main-container">
          <div className="insurance-modal-container">
            <label htmlFor="salutation">Name as in Policy :</label>
            <input type="text" id="salutation" />

            <label htmlFor="firstName">Insurance Name :</label>
            <input type="text" id="firstName" />

            <label htmlFor="middleName">Type of Insurance :</label>
            <input type="text" id="middleName" />

            <label htmlFor="lastName">Policy Number :</label>
            <input type="text" id="lastName" />

            <label htmlFor="maritalStatus">Plan Number :</label>
            <input type="text" id="maritalStatus" />

            <label htmlFor="maritalStatus">Relationship :</label>
            <input type="text" id="maritalStatus" />

            <label htmlFor="salutation">Effective Date :</label>
            <input type="text" id="salutation" />

            <label htmlFor="salutation">Expiry Date :</label>
            <input type="text" id="salutation" />
          </div>
          <div className="insurance-modal-container1">
            <div className="modal-insurance-buttons">
              <button className="modal-insurance-button">
                <FontAwesomeIcon icon={faPlus} /> Insurance
              </button>
            </div>
            <div className="modal-table">
              <div className="table-header">SL</div>
              <div className="table-header">INSURANCE NAME</div>
              <div className="table-header">INSURER NAME</div>
            </div>
          </div>
        </div>   
          <div className="modal-buttons">
          <button className="modal-cancel-button" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} /> Cancel
          </button>
          <button className="modal-save-button">
            <FontAwesomeIcon icon={faSave} /> Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddInsuranceModal;
