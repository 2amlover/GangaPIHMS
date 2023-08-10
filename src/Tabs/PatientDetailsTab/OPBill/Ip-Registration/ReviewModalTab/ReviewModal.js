import React from 'react';
import './reviewmodal.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const ReviewModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div className="reviewmodal-overlay">
      <div className="reviewmodal-content">
      <h2 className="reviewmodal-title">Please Review the NEW IP Case Registration and Click on Save Button.</h2>        <hr className="divider" />
        <div className="review-table">
          <div className="column-names">
            <div>Name:</div>
            <div>Gender/Age:</div>
            <div>Address:</div>
            <div>City/State:</div>
            <div>Referring Doctor:</div>
            <div>Consultant Doctor:</div>
            <div>Emergency Contact Name:</div>
            <div>Bill Type / Insurance:</div>
            <div>Ward No. / Bed No.:</div>
          </div>
            <hr className="divider" />
          <div className="review-buttons">
            <div className="review-action-buttons">
              <button className="edit-ip-case-button"  onClick={onClose}>Edit IP Case</button>
              <button className="register-new-ipcase-button"><FontAwesomeIcon icon={faCheckCircle} /> Register New IP Case</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;
