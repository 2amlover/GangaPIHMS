import React from 'react'
import './historysection.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faSave } from "@fortawesome/free-solid-svg-icons";


const HistorySection = () => {
  return (
    <div className="history-section">
      <div className="history-cards-container">
        <div className="history-skeleton-card">
          <div className="historymain-content">
            <div className="history-content">
              <h2>History Details</h2>
            </div>
            <div className="history-details-container">
              <label htmlFor="salutation">Visit Type:</label>
              <input type="text" id="salutation" />

              <label htmlFor="firstName">Referred Doctor:</label>
              <input type="text" id="firstName" />

              <label htmlFor="middleName">Reason For Visit:</label>
              <input type="text" id="middleName" />

              <label htmlFor="lastName">Observation:</label>
              <input type="text" id="lastName" />

              <label htmlFor="maritalStatus">Advice:</label>
              <input type="text" id="maritalStatus" />

              <label htmlFor="maritalStatus">Medications:</label>
              <input type="text" id="maritalStatus" />
            </div>
            <div className="history-file">
              <label htmlFor="fileInput"></label>
              <input type="file" id="fileInput" />
            </div>
            <div className="history-button">
              <button className="history-cancel">
                <FontAwesomeIcon icon={faTimes} /> Cancel
              </button>
              <button className="history-save">
                <FontAwesomeIcon icon={faSave} /> Save
              </button>
            </div>
          </div>
        </div>
        <div className="history-skeleton-card1">
          <div className="historymain-content">
            <div className="history-content1">
              <h2>History List</h2>
            </div>
            <div className="history-search-content">
              <button className="history-new-button">+ New</button>
              <div className="history-search-bar-container">
                <input type="text" placeholder="Search..." />
                <button className="history-search-button">🔍 </button>
              </div>
            </div>
            <div className="history-subtag">
              <h5>Visit Dates</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HistorySection
