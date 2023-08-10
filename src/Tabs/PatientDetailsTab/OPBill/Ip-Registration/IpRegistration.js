import React, { useState } from 'react';
import "./ipregistration.css";
import Header from "../../../../Componants/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faBuilding } from "@fortawesome/free-solid-svg-icons";
import AddInsuranceModal from './Add-InsuranceModalTab/AddInsuranceModal';
import ReviewModal from './ReviewModalTab/ReviewModal';

const IpRegistration = () => {
  const [isInsuranceModalOpen, setIsInsuranceModalOpen] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  const openInsuranceModal = () => {
    setIsInsuranceModalOpen(true);
  };

  const closeInsuranceModal = () => {
    setIsInsuranceModalOpen(false);
  };

  const openReviewModal = () => {
    setIsReviewModalOpen(true);
  };

  const closeReviewModal = () => {
    setIsReviewModalOpen(false);
  };
  return (
    <>
      <Header />
      <div className="ipregistartiontab-container">
        <h2>New InPatient Registration</h2>
        <div className="ip-insurance-buttons">
          <button className="ip-insurance-button" onClick={openInsuranceModal}>
            {" "}
            <FontAwesomeIcon icon={faBuilding} /> Add Insurance
          </button>
        </div>
        <AddInsuranceModal isOpen={isInsuranceModalOpen} onClose={closeInsuranceModal} />
        <div className="new-patient-textboxes">
          <div className="search-content">
            <div className="textbox-mobile">
              <label htmlFor="mobileInput">Mobile : </label>
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
              <label htmlFor="mobileInput">Address :</label>
              <input type="text" id="mobileInput" placeholder="" />
            </div>
          </div>
          <div className="search-content">
            <div className="textbox-mobile">
              <label htmlFor="mobileInput">Honorific :</label>
              <input type="text" id="mobileInput" placeholder="" />
            </div>
          </div>
          <div className="search-content">
            <div className="textbox-mobile">
              <label htmlFor="mobileInput">First Name :</label>
              <input type="text" id="mobileInput" placeholder="" />
            </div>
          </div>
        </div>
        <div className="new-patient-textboxes">
          <div className="search-content">
            <div className="textbox-mobile">
              <label htmlFor="mobileInput">Last Name : </label>
              <input type="text" id="mobileInput" placeholder="" />
            </div>
          </div>
          <div className="search-content">
            <div className="textbox-mobile">
              <label htmlFor="mobileInput">Area :</label>
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
          <div className="search-content">
            <div className="textbox-mobile">
              <label htmlFor="mobileInput">Age :</label>
              <input type="text" id="mobileInput" placeholder="" />
            </div>
          </div>
        </div>
        <div className="new-patient-textboxes">
          <div className="search-content">
            <div className="textbox-mobile">
              <label htmlFor="mobileInput">Age Unit : </label>
              <input type="text" id="mobileInput" placeholder="" />
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
          <div className="search-content">
            <div className="textbox-mobile">
              <label htmlFor="mobileInput">Email :</label>
              <input type="text" id="mobileInput" placeholder="" />
            </div>
          </div>
        </div>
        <div className="new-patient-textboxes">
          <div className="search-content">
            <div className="textbox-mobile">
              <label htmlFor="mobileInput">Occupation : </label>
              <input type="text" id="mobileInput" placeholder="" />
            </div>
          </div>
          <div className="search-content">
            <div className="textbox-mobile">
              <label htmlFor="mobileInput">Referring Doctor :</label>
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
              <label htmlFor="mobileInput">Emergency Contact Name :</label>
              <input type="text" id="mobileInput" placeholder="" />
            </div>
          </div>
          <div className="search-content">
            <div className="textbox-mobile">
              <label htmlFor="mobileInput">Emergency Contact Relation :</label>
              <input type="text" id="mobileInput" list="relationOptions"  className="input-element"  placeholder="Select Relation" />
              <datalist id="relationOptions">
                <option value="Self" />
                <option value="Husband" />
                <option value="Wife" />
                <option value="Son" />
                <option value="Daughter" />
                <option value="Sister" />
                <option value="Brother" />
                <option value="Mother" />
              </datalist>
            </div>
          </div>
        </div>
        <div className="new-patient-textboxes">
          <div className="search-content">
            <div className="textbox-mobile">
              <label htmlFor="mobileInput">Emergency Contact Phone : </label>
              <input type="text" id="mobileInput" placeholder="" />
            </div>
          </div>
          <div className="search-content">
            <div className="textbox-mobile">
              <label htmlFor="mobileInput">Bill Type :</label>
              <input type="text" id="mobileInput" list="billtypeOptions"  className="input-element"  placeholder="Select Bill-Type" />
              <datalist id="billtypeOptions">
                <option value="Self" />
                <option value="Insurance" />
              </datalist>
            </div>
          </div>
          <div className="search-content">
            <div className="textbox-mobile">
              <label htmlFor="mobileInput">Select Insurance :</label>
              <input type="text" id="mobileInput" list="insuranceOptions"  className="input-element"  placeholder="Select Insurance" />
              <datalist id="insuranceOptions">
                <option value="Star Health" />
                <option value="Acme Insurance" />
                <option value="Pacific Life Insure" />
                <option value="MetLife Coverage" />
              </datalist>
            </div>
          </div>
          <div className="search-content">
            <div className="textbox-mobile">
              <label htmlFor="mobileInput">Ward Type :</label>
              <input type="text" id="mobileInput" list="wardTypeOptions"  className="input-element"  placeholder="Select Ward-Type" />
              <datalist id="wardTypeOptions">
                <option value="General Ward" />
                <option value="MICU Ward" />
                <option value="Labour Ward" />
                <option value="ICU Ward" />
                <option value="Twin Sharing Ward" />
              </datalist>
            </div>
          </div>
          <div className="search-content">
            <div className="textbox-mobile">
              <label htmlFor="mobileInput">Ward Number :</label>
              <input type="text" id="mobileInput" placeholder="" />
            </div>
          </div>
        </div>
        <div className="new-patient-textboxes">
          <div className="search-content">
            <div className="textbox-mobile">
              <label htmlFor="mobileInput">Bed Number : </label>
              <input type="text" id="mobileInput" placeholder="" />
            </div>
          </div>
          <div className="search-content">
            <div className="textbox-mobile">
              <label htmlFor="mobileInput">Ward :</label>
              <input type="text" id="mobileInput" list="wardOptions"  className="input-element"  placeholder="Select Ward" />
              <datalist id="wardOptions">
                <option value="201" />
                <option value="202" />
                <option value="203" />
                <option value="204" />
                <option value="205" />
              </datalist>
            </div>
          </div>
          <div className="search-content">
            <div className="textbox-mobile">
              <label htmlFor="mobileInput">Bed :</label>
              <input type="text" id="mobileInput" list="bedOptions"  className="input-element"  placeholder="Select Bed" />
              <datalist id="bedOptions">
                <option value="201-B01" />
                <option value="202-B01" />
                <option value="203-B01" />
                <option value="204-B01" />
                <option value="205-B01" />
              </datalist>
            </div>
          </div>
        </div>
        <div className="ip-review-buttons">
          <button className="ip-review-button" onClick={openReviewModal}>
            {" "}
            <FontAwesomeIcon icon={faEye} /> Review
          </button>
        </div>
        <ReviewModal isOpen={isReviewModalOpen} onClose={closeReviewModal} />
      </div>
    </>
  );
};

export default IpRegistration;
