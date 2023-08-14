import React from "react";
import "./newpatient.css";
import Header from "../../../Componants/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMapMarker,
  faFlag,
  faVenusMars,
  faCalendar,
  faClipboardCheck,
  faMobileAlt,
  faIdCard,
  faEnvelope,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

const NewPatient = () => {

  return (
    <>
      <Header />
      <div className="new-patient-tab-container">
        <h2> New Patient Registration</h2>
        <div className="new-patient-textboxes">
          <div className="search-content">
            <div className="textbox-mobile">
              <label htmlFor="mobileInput">Mobile : </label>
              {/* <div className="mobile-icon">
                <FontAwesomeIcon icon={faMobileAlt} />
              </div> */}
              <input type="text" id="mobileInput" placeholder="" />
            </div>
          </div>
          <div className="search-content">
            <div className="textbox-mobile">
              <label htmlFor="mobileInput">Patient Number :</label>
              <input type="text" id="mobileInput" placeholder="" />
            </div>
          </div>
          <div className="search-content">
            <div className="textbox-mobile">
              <label htmlFor="mobileInput">E-Mail :</label>
              <input type="text" id="mobileInput" placeholder="" />
            </div>
          </div>
          <div className="search-content">
            <div className="textbox-mobile">
              <label htmlFor="mobileInput">Occupation :</label>
              <input type="text" id="mobileInput" placeholder="" />
            </div>
          </div>
          <div className="search-content">
            <div className="textbox-mobile">
              <label htmlFor="mobileInput">Honorific :</label>
              <input type="text" id="mobileInput" placeholder="" />
            </div>
          </div>
        </div>
        <div className="new-patient-textboxes">
          <div className="search-content">
            <div className="textbox-mobile">
              <label htmlFor="mobileInput">First Name :</label>
              <input type="text" id="mobileInput" placeholder="" />
            </div>
          </div>
          <div className="search-content">
            <div className="textbox-mobile">
              <label htmlFor="mobileInput">Last Name :</label>
              <input type="text" id="mobileInput" placeholder="" />
            </div>
          </div>
          <div className="search-content">
            <div className="textbox-mobile">
              <label htmlFor="mobileInput">Address :</label>
              <input type="text" id="mobileInput" placeholder="" />
            </div>
          </div>
          <div className="search-content">
            <div className="textbox-mobile">
              <label htmlFor="mobileInput">Postal Code :</label>
              <input type="text" id="mobileInput" placeholder="" />
            </div>
          </div>
          <div className="search-content">
            <div className="textbox-mobile">
              <label htmlFor="mobileInput">Gender :</label>
              <input type="text" id="mobileInput" placeholder="" />
            </div>
          </div>
        </div>
        <div className="new-patient-textboxes">
          <div className="search-content">
            <div className="textbox-mobile">
              <label htmlFor="mobileInput">Age :</label>
              <input type="text" id="mobileInput" placeholder="" />
            </div>
          </div>
          <div className="search-content">
            <div className="textbox-mobile">
              <label htmlFor="mobileInput">Age Unit :</label>
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
              <label htmlFor="mobileInput">City :</label>
              <input type="text" id="mobileInput" placeholder="" />
            </div>
          </div>
          <div className="search-content">
            <div className="textbox-mobile">
              <label htmlFor="mobileInput">State :</label>
              <input type="text" id="mobileInput" placeholder="" />
            </div>
          </div>
          <div className="search-content">
            <div className="textbox-mobile">
              <label htmlFor="mobileInput">Country :</label>
              <input type="text" id="mobileInput" placeholder="" />
            </div>
          </div>
        </div>

        <div className="register-buttons">
        <button className="register-button" >
            <FontAwesomeIcon icon={faClipboardCheck} /> Register
          </button>
        </div>
        <div className="recent-patients-list-container">
          <h2>Patients Registred Recently / Patients Search Results </h2>
          <div className="column-names-container">
            <div className="column-name">Sl.No</div>
            <div className="column-name">Patient No</div>
            <div className="column-name">Patient Name</div>
            <div className="column-name">Phone Number</div>
            <div className="column-name">Action Buttons</div>
          </div>
          <div className="recent-patients-data-container">
          </div>
        </div>
      </div>
    </>
  );
};

export default NewPatient;
