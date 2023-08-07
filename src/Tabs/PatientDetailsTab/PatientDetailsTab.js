import React, { useState } from "react";
import "./patientdetailstab.css";
import { Link } from 'react-router-dom';
import Header from "../../Componants/Header/Header";
// import { FaUser } from "react-icons/fa";
import FemaleImage from '../../Assets/FPP1.png'; 
import MaleImage from '../../Assets/MPP1.png'; 
import { useParams } from "react-router-dom";
import DetailsSection from "../../SubTabs/PatientSubTabs/Details/DetailsSection"
import VisitSection from "../../SubTabs/PatientSubTabs/Visit/VisitSection";
import HistorySection from "../../SubTabs/PatientSubTabs/History/HistorySection";
import LabReportSection from "../../SubTabs/PatientSubTabs/Lab-Report/LabReportSection";
import BillingSection from "../../SubTabs/PatientSubTabs/Billing/BillingSection";
import InsuranceSection from "../../SubTabs/PatientSubTabs/Insurance/InsuranceSection";
import ScanningReportSection from "../../SubTabs/PatientSubTabs/Scanning-Report/ScanningReportSection";
import BirthDetailSection from "../../SubTabs/PatientSubTabs/Birth-Detail/BirthDetailSection";

const PatientDetailsTab = () => {
  const { id } = useParams();

  const detailsData = "This is the details section data.";
  const visitData = "This is the visit section data.";
  const historyData = "This is the history section data.";
  const labreportData = "This is the lab report section section data.";
  const billingData = "This is the billing section data.";
  const insuranceData = "This is the insurance section data.";
  const birthdetailData = "This is the birth detail section data.";
  const scanningreportData = "This is the scanning report section data.";

  const [activeSection, setActiveSection] = useState("Details");

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };


  return (
    <>
      <Header />
      <div className="patientdetailstab-container">
        <div className="patient-details-container">
          <div className="profile-icon-container">
            {/* <div className="patient-profile-icon">
              <FaUser size={150} />
            </div> */}
            <div className="patient-profile-icon">
           <img src={FemaleImage} alt="Profile" width={150} height={150} />
           </div>
   
          </div>
          <div className="patient-name-container">
            <h2 className="patient-name"> {id}</h2>
          </div>
          <div className="opbuttons">
          <button  className="opbill-button">
          <Link to="/opbill">OP-Bill</Link>
          </button>
          <button  className="op-button">
             + IP REgistration
          </button>
          </div>
        </div>
        <div className="contents">
          <h3 onClick={() => handleSectionChange("Details")}>Details</h3>
          <h3 onClick={() => handleSectionChange("Visit")}>Visit</h3>
          <h3 onClick={() => handleSectionChange("History")}>History</h3>
          <h3 onClick={() => handleSectionChange("Lab Report")}>Lab Report</h3>
          <h3 onClick={() => handleSectionChange("Billing")}>Billing</h3>
          <h3 onClick={() => handleSectionChange("Insurance")}>Insurance</h3>
          <h3 onClick={() => handleSectionChange("Birth Detail")}>Birth Detail</h3>
          <h3 onClick={() => handleSectionChange("Scanning Report")}>Scanning Report</h3>
        </div>
        <div className="details-section-container">
          {activeSection === "Details" && <DetailsSection data={detailsData}  id={id} />}
          {activeSection === "Visit" && <VisitSection data={visitData} />}
          {activeSection === "History" && <HistorySection data={historyData} />}
          {activeSection === "Lab Report" && <LabReportSection data={labreportData} />}
          {activeSection === "Billing" && <BillingSection data={billingData} />}
          {activeSection === "Insurance" && <InsuranceSection data={insuranceData} />}
          {activeSection === "Birth Detail" && <BirthDetailSection data={birthdetailData} />}
          {activeSection === "Scanning Report" && <ScanningReportSection data={scanningreportData} />}
        </div>
      </div>
    </>
  );
};

export default PatientDetailsTab;
