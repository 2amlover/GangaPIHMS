import React from "react";
import "./billingsection.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';

const BillingSection = () => {
  return (
    <div className="billing-section">
      <div className="billing-cards-container">
        <div className="billing-skeleton-card">
          <div className="billing-main-content">
            <div className="billing-content">
              <h2>Bill Items</h2>
            </div>
            <div className="billing-container">
              <div className="billing-items">
                <h2>ItemName </h2>
                <h2>ItemQty</h2>
                <h2>ItemUnitPrice</h2>
                <h2>ItemTotalPrice</h2>
              </div>
            </div>
            <div className="print-button">
            <button className="printing-button">
           <FontAwesomeIcon icon={faPrint} /> Print
           </button>
            </div>
          </div>
        </div>
        <div className="billing-skeleton-card1">
          <div className="billing-main-content">
            <div className="billing-content1">
              <h2>Bill List</h2>
            </div>
            <div className="billing-subtag-container">
            <div className="billing-subtag">
              <h3>OP Bills</h3>
            </div>
            <div className="opbill-card">
            </div>
            <div className="billing-subtag1">
              <h3>IP Bills</h3>
            </div>
            <div className="opbill-card1">
            </div>
            <div className="opbill-card2">
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BillingSection;
