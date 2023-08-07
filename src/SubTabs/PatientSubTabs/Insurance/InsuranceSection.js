import React from 'react'
import './insurancesection.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faSave } from "@fortawesome/free-solid-svg-icons";


const InsuranceSection = () => {
  return (
    <div className="insurance-section">
      <div className="insurance-cards-container">
        <div className="insurance-skeleton-card">
          <div className="insurancemain-content">
            <div className="insurance-content">
              <h2>Insurance Details of Selected Insurance</h2>
            </div>
            <div className="insurance-details-container">
              <label htmlFor="salutation">Policy Number:</label>
              <input type="text" id="salutation" />

              <label htmlFor="firstName">Plan Number:</label>
              <input type="text" id="firstName" />

              <label htmlFor="middleName">Effective Date:</label>
              <input type="text" id="middleName" />

              <label htmlFor="lastName">Expiry Date:</label>
              <input type="text" id="lastName" />

              <label htmlFor="maritalStatus">Insurance Name :</label>
              <input type="text" id="maritalStatus" />

              <label htmlFor="maritalStatus">Insurer Name In Policy:</label>
              <input type="text" id="maritalStatus" />

              <label htmlFor="salutation">Address :</label>
              <input type="text" id="salutation" />

              <label htmlFor="firstName">City :</label>
              <input type="text" id="firstName" />

              <label htmlFor="middleName">State :</label>
              <input type="text" id="middleName" />

              <label htmlFor="lastName">Country :</label>
              <input type="text" id="lastName" />

              <label htmlFor="maritalStatus">Postal Code:</label>
              <input type="text" id="maritalStatus" />

              <label htmlFor="maritalStatus">Relation Name:</label>
              <input type="text" id="maritalStatus" />

              <label htmlFor="salutation">Relation Address:</label>
              <input type="text" id="salutation" />

              <label htmlFor="firstName">Relation City :</label>
              <input type="text" id="firstName" />

              <label htmlFor="middleName">Relation State :</label>
              <input type="text" id="middleName" />

              <label htmlFor="lastName">Relation Country:</label>
              <input type="text" id="lastName" />

              <label htmlFor="maritalStatus">Relation Phone:</label>
              <input type="text" id="maritalStatus" />

              <label htmlFor="maritalStatus">Special Notes:</label>
              <input type="text" id="maritalStatus" />
            </div>
            <div className="insurance-button">
              <button className="insurance-cancel">
                <FontAwesomeIcon icon={faTimes} /> Cancel
              </button>
              <button className="insurance-save">
                <FontAwesomeIcon icon={faSave} /> Save
              </button>
            </div>
          </div>
        </div>
        <div className="insurance-skeleton-card1">
        <div className="historymain-content">
            <div className="history-content1">
              <h2>Insurance List</h2>
            </div>
            <div className="insurance-search-content">
              <button className="insurance-new-button">+ New</button>
              <div className="insurance-search-bar-container">
                <input type="text" placeholder="Search..." />
                <button className="insurance-search-button">🔍 </button>
              </div>
            </div>
            <div className="insurance-subtag-container">
            <div className="insurance-subtag">
              <h3>INSURANCE NAME</h3>
              <h4>Name In Policy </h4>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsuranceSection
