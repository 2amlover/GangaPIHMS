import React from "react";
import "./visitsection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faSave } from "@fortawesome/free-solid-svg-icons";

const VisitSection = () => {
  return (
    <div className="visit-section">
      <div className="visit-cards-container">
        <div className="visit-skeleton-card">
          <div className="main-content">
            <div className="visit-content">
              <h2>Visit Details</h2>
            </div>
            <div className="visit-details-container">
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
            <div className="choose-file">
              <label htmlFor="fileInput"></label>
              <input type="file" id="fileInput" />
            </div>
            <div className="button">
              <button className="cancel">
                <FontAwesomeIcon icon={faTimes} /> Cancel
              </button>
              <button className="save">
                <FontAwesomeIcon icon={faSave} /> Save
              </button>
            </div>
          </div>
        </div>
        <div className="visit-skeleton-card1">
          <div className="main-content">
            <div className="visit-content1">
              <h2>Visit List</h2>
            </div>
            <div className="search-content">
              <button className="new-button">+ New</button>
              <div className="search-bar-container">
                <input type="text" placeholder="Search..." />
                <button className="search-button">🔍 </button>
              </div>
            </div>
            <div className="subtag">
              <h5>Visit Dates</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitSection;
