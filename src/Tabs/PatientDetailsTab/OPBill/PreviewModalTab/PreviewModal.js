import React from "react";
import "./previewmodal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave,faEdit } from "@fortawesome/free-solid-svg-icons";

const PreviewModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="previewmodal-overlay">
      <div className="previewmodal-content">
        <h2 className="previewmodal-title">
          Please Review the Bill Details and Click on Save Button.
        </h2>
        <hr className="divider" />
        <div className="preview-table">
          <div className="preview-column-names">
            <div>SL #</div>
            <div>Bill Item Details</div>
            <div>Unit Price</div>
            <div>Quantity</div>
            <div>Total Price</div>
          </div>
        </div>
        <div className="preview-card-container">
          <div className="preview-card-coontents">
            <div className="preview-card-coontents1">
              <h2>Amount:</h2>
              <h2>Paid:</h2>
              <h2>Balance:</h2>
            </div>
            <div className="preview-card-coontents2">
              <h2>Sub Total:</h2>
              <h2>Discount:</h2>
              <h2>Total:</h2>
            </div>
          </div>
        </div>
        <div className="preview-buttons">
          <button className="preview-edit-bill-button" onClick={onClose}>
          <FontAwesomeIcon icon={faEdit} /> Edit Bill
          </button>
          <button className="preview-save-bill-button"><FontAwesomeIcon icon={faSave} /> Save Bill</button>
        </div>
      </div>
    </div>
  );
};

export default PreviewModal;
