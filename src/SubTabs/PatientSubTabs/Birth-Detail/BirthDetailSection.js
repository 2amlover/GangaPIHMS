import React from "react";
import "./birthdetailsection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faTimes } from "@fortawesome/free-solid-svg-icons";

const BirthDetailSection = () => {
  return (
    <div className="birthdetail-section">
      <div className="birthdetail-cards-container">
        <div className="birthdetail-skeleton-card">
          <div className="birthdetailmain-content">
            <div className="birthdetail-content">
              <h2>Birth Details Section </h2>
            </div>
            <div className="new-patient-textboxes">
              <div className="search-content">
                <div className="textbox-mobile">
                  <label htmlFor="mobileInput">Baby Name : </label>
                  <input type="text" id="mobileInput" placeholder="" />
                </div>
              </div>
              <div className="search-content">
                <div className="textbox-mobile">
                  <label htmlFor="mobileInput">Date Of Birth :</label>
                  <input type="date" id="mobileInput" placeholder="" />
                </div>
              </div>
              <div className="search-content">
                <div className="textbox-mobile">
                  <label htmlFor="mobileInput">Sex :</label>
                  <input type="text" id="mobileInput" placeholder="" />
                </div>
              </div>
              <div className="search-content">
                <div className="textbox-mobile">
                  <label htmlFor="mobileInput">Father Name :</label>
                  <input type="text" id="mobileInput" placeholder="" />
                </div>
              </div>
              <div className="search-content">
                <div className="textbox-mobile">
                  <label htmlFor="mobileInput">Father Occupation :</label>
                  <input type="text" id="mobileInput" placeholder="" />
                </div>
              </div>
            </div>
            <div className="new-patient-textboxes">
              <div className="search-content">
                <div className="textbox-mobile">
                  <label htmlFor="mobileInput">Father Qualification : </label>
                  <input type="text" id="mobileInput" placeholder="" />
                </div>
              </div>
              <div className="search-content">
                <div className="textbox-mobile">
                  <label htmlFor="mobileInput">Mother Name :</label>
                  <input type="text" id="mobileInput" placeholder="" />
                </div>
              </div>
              <div className="search-content">
                <div className="textbox-mobile">
                  <label htmlFor="mobileInput">Mother Occupation :</label>
                  <input type="text" id="mobileInput" placeholder="" />
                </div>
              </div>
              <div className="search-content">
                <div className="textbox-mobile">
                  <label htmlFor="mobileInput">Mother Qualification :</label>
                  <input type="text" id="mobileInput" placeholder="" />
                </div>
              </div>
              <div className="search-content">
                <div className="textbox-mobile">
                  <label htmlFor="mobileInput">Age at time of Marriage :</label>
                  <input type="text" id="mobileInput" placeholder="" />
                </div>
              </div>
            </div>
            <div className="new-patient-textboxes">
              <div className="search-content">
                <div className="textbox-mobile">
                  <label htmlFor="mobileInput">Age at Delivery : </label>
                  <input type="text" id="mobileInput" placeholder="" />
                </div>
              </div>
              <div className="search-content">
                <div className="textbox-mobile">
                  <label htmlFor="mobileInput">Order of giving Birth :</label>
                  <input type="text" id="mobileInput" placeholder="" />
                </div>
              </div>
              <div className="search-content">
                <div className="textbox-mobile">
                  <label htmlFor="mobileInput">Birth Weight :</label>
                  <input type="text" id="mobileInput" placeholder="" />
                </div>
              </div>
              <div className="search-content">
                <div className="textbox-mobile">
                  <label htmlFor="mobileInput">Birth Time :</label>
                  <input type="text" id="mobileInput" placeholder="" />
                </div>
              </div>
              <div className="search-content">
                <div className="textbox-mobile">
                  <label htmlFor="mobileInput">Kind Of Delivery : </label>
                  <input type="text" id="mobileInput" placeholder="" />
                </div>
              </div>
            </div>
            <div className="new-patient-textboxes">
              <div className="search-content">
                <div className="textbox-mobile">
                  <label htmlFor="mobileInput">Pregnancy Period :</label>
                  <input type="text" id="mobileInput" placeholder="" />
                </div>
              </div>
              <div className="search-content">
                <div className="textbox-mobile">
                  <label htmlFor="mobileInput">Consultant Doctor :</label>
                  <input type="text" id="mobileInput" placeholder="" />
                </div>
              </div>
              <div className="search-content">
                <div className="textbox-mobile">
                  <label htmlFor="mobileInput">Native Place :</label>
                  <input type="text" id="mobileInput" placeholder="" />
                </div>
              </div>
              <div className="search-content">
                <div className="textbox-mobile">
                  <label htmlFor="mobileInput">IPCase Number :</label>
                  <input type="text" id="mobileInput" placeholder="" />
                </div>
              </div>
            </div>
            <div className="birthdetail-buttons">
            <button className="birthdetail-cancel-buttons">
              <FontAwesomeIcon icon={faTimes} /> Cancel
            </button>
            <button className="birthdetail-save-buttons">
              <FontAwesomeIcon icon={faSave} /> Save 
            </button>
          </div>
          </div>
         
        </div>
        
      </div>
    </div>
  );
};

export default BirthDetailSection;
