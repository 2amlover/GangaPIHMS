import React, { useState } from "react";
// import { Link } from 'react-router-dom';
import Header from "../../../Componants/Header/Header";
import "./opbill.css";
import FemaleImage from "../../../Assets/FPP1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTimes,
  faEye,
  faBed,
  faMoneyBill,
  faUniversity,
  faHands,
  faMobileAlt,
  faBuilding
} from "@fortawesome/free-solid-svg-icons";
import Cash from '../../../Tabs/PatientDetailsTab/OPBillsubtab/Cash/Cash';
import Bank from '../../../Tabs/PatientDetailsTab/OPBillsubtab/Bank/Bank';
import Ins from '../../../Tabs/PatientDetailsTab/OPBillsubtab/Ins/Ins';
import Corp from '../../../Tabs/PatientDetailsTab/OPBillsubtab/Corp/Corp';
import Upi from '../../../Tabs/PatientDetailsTab/OPBillsubtab/UPI/Upi';
import PreviewModal from './PreviewModalTab/PreviewModal';

const OpBill = () => {
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);

  const openPreviewModal = () => {
    setIsPreviewModalOpen(true);
  };

  const closePreviewModal = () => {
    setIsPreviewModalOpen(false);
  };

 
  const cashdata = "This is the birth detail section data.";
  const bankdata = "This is the scanning report section data.";
  const insdata = "This is the birth detail section data.";
  const corpdata = "This is the scanning report section data.";
  const upidata = "This is the birth detail section data.";

  const [activeSection, setActiveSection] = useState("Cash");

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };
  return (
    <>
      <Header />
      <div className="opbilltab-container">
        <div className="opbill-details-container">
          <div className="profile-icon-container">
            <div className="opbill-profile-icon">
              <img src={FemaleImage} alt="Profile" width={150} height={150} />
            </div>
          </div>
          <div className="opbill-name-container"></div>
          <div className="patient-buttons">
            <button className="patient-button">
              {" "}
              <FontAwesomeIcon icon={faEdit} />Patient
               {/* <Link to="/patientdetailstab">Patient</Link>  */}
            </button>
          </div>
        </div>
        <div className="opbill-cards-container">
          <div className="opbill-skeleton-card">
            <div className="opbill-content-container">
              <div className="opbill-tags">
                <div className="child1">
                  <label htmlFor="salutation">Billing Domain:</label>
                  <input type="text" id="salutation" />
                </div>
                <div className="child2">
                  <label htmlFor="firstName">Ref. Doctor:</label>
                  <input type="text" id="firstName" />
                </div>
              </div>
              <div className="opbill-tags1">
                <div className="child3">
                  <label htmlFor="salutation">Billing Items:</label>
                  <input type="text" id="salutation" />
                </div>
                <div className="child4">
                  <div className="child-textbox">
                    <label htmlFor="firstName">Rs.</label>
                    <input type="text" id="firstName" />
                  </div>
                  <div className="child1-textbox">
                    <label htmlFor="firstName">Qty.</label>
                    <input type="text" id="firstName" />
                  </div>
                  <div className="addbuton">
                    <button className="add-button">+ Add</button>
                  </div>
                </div>
              </div>
              <div className="opbill-tags3">
                <div className="items1">
                  <h3>SL#</h3>
                  <h3>Item Particulars</h3>
                </div>
                <div className="items2">
                  <h3>Unit Price</h3>
                  <h3>Qty</h3>
                  <h3>Amount</h3>
                </div>
              </div>
              <div className="opbill-card-container">
                <div className="opbill-card-coontents">
                  <div className="opbill-card-coontents1">
                    <h2>Amount:</h2>
                    <h2>Paid:</h2>
                    <h2>Balance:</h2>
                  </div>
                  <div className="opbill-card-coontents2">
                    <h2>Sub Total:</h2>
                    <h2>Discount:</h2>
                    <h2>Total:</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opbill-skeleton-card1">
            <div className="opbill-card1-container">
              <div className="opbill-card1-items1">
                <div className="card1-items1">
                  <label htmlFor="salutation">Discount:</label>
                  <input type="text" id="salutation" />
                </div>
                <div className="card1-items2">
                  <label htmlFor="firstName">Approved By:</label>
                  <input type="text" id="firstName" />
                </div>
                <div className="card1-items3">
                  <label htmlFor="firstName">Comments:</label>
                  <input type="text" id="firstName" />
                </div>
              </div>
              <div className="opbill-card1-items2-container">
              <div className="opbill-card1-items2">
                {/* <h2> <FontAwesomeIcon icon={faMoneyBill } />CASH</h2> */}
                <h3 onClick={() => handleSectionChange("Cash")}><FontAwesomeIcon icon={faMoneyBill } />CASH</h3>
                <h3 onClick={() => handleSectionChange("Bank")}><FontAwesomeIcon icon={faUniversity  } />BANK</h3>
                <h3 onClick={() => handleSectionChange("Ins")}><FontAwesomeIcon icon={faHands  } />INS..</h3>
                <h3 onClick={() => handleSectionChange("Corp")}><FontAwesomeIcon icon={faMobileAlt  } />CORP..</h3>
                <h3 onClick={() => handleSectionChange("Upi")}><FontAwesomeIcon icon={faBuilding  } />UPI</h3>
              </div>
              <div className="details-section-container">
                {activeSection === "Cash" && <Cash data={cashdata} />}
                {activeSection === "Bank" && <Bank data={bankdata} />}
                {activeSection === "Ins" && <Ins data={insdata}  />}
                {activeSection === "Corp" && <Corp data={corpdata} />}
                {activeSection === "Upi" && <Upi data={upidata}  />}
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="opbill-skeleton-card2">
          <div className="opbill-card-container-button">
            <button className="opbill-card-cancel">
              <FontAwesomeIcon icon={faTimes} /> Cancel
            </button>
            <div className="na-buttons">
              <button className="opbill-card-na">
                <FontAwesomeIcon icon={faBed} /> NA
              </button>
              <button className="opbill-card-preview" onClick={openPreviewModal}>
                <FontAwesomeIcon icon={faEye} /> Pre-view
              </button>
            </div>
            <PreviewModal isOpen={isPreviewModalOpen} onClose={closePreviewModal} />
          </div>
        </div>
      </div>
    </>
  );
};

export default OpBill;
