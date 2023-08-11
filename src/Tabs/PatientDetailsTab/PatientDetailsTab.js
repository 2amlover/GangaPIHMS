import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import "./patientdetailstab.css";
import { Link } from "react-router-dom";
import Header from "../../Componants/Header/Header";
// import { FaUser } from "react-icons/fa";
import FemaleImage from "../../Assets/MPP.png";
import { useParams } from "react-router-dom";
import DetailsSection from "../../SubTabs/PatientSubTabs/Details/DetailsSection";
import VisitSection from "../../SubTabs/PatientSubTabs/Visit/VisitSection";
import HistorySection from "../../SubTabs/PatientSubTabs/History/HistorySection";
import LabReportSection from "../../SubTabs/PatientSubTabs/Lab-Report/LabReportSection";
import BillingSection from "../../SubTabs/PatientSubTabs/Billing/BillingSection";
import InsuranceSection from "../../SubTabs/PatientSubTabs/Insurance/InsuranceSection";
import ScanningReportSection from "../../SubTabs/PatientSubTabs/Scanning-Report/ScanningReportSection";
import BirthDetailSection from "../../SubTabs/PatientSubTabs/Birth-Detail/BirthDetailSection";
import { useNavigate } from "react-router-dom";


// Inside your OPBill button click handler


const PatientDetailsTab = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleOPBillClick = () => {
    navigate(`/opbill/${id}`);
  };
  
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

  const skeletonData = {
    // displayName: "",
    // patientNumber: "",
    // gender: "",
    // address: "",
    // city: "",
    // state: "",
    // postalCode: "",
  };

  const [patientData, setPatientData] = useState(skeletonData);

  useEffect(() => {
    fetchPatientDetails();
  }, []);

  const fetchPatientDetails = async () => {
    try {
      const response = await axios.post(
        "http://ganga.pihms.co.in/Patient/get_PatientDetail",
        {
          m_PatientID: id,
        }
      );
      setPatientData(response.data.m_Patient);
    } catch (error) {
      console.error("Error fetching patient details:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="patientdetailstab-container">
        <div className="patient-details-container">
          <div className="profile-icon-container">
            <div className="patient-profile-icon">
              <img src={FemaleImage} alt="Profile" width={150} height={150}    className="profile-image"/>
            </div>
          </div>
          <div className="patient-name-container">
            <div className="stage1">
              <h2 className="large-font patient-name hoverable">
                {patientData.displayName}
              </h2>
              <h2 className="small-font patient-name">
                {patientData.patientNumber}
              </h2>
            </div>
            <div className="stage2">
              <h2 className="small-font patient-icon">
                <FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
              </h2>
              <h2 className="small-font patient-adress">
                {patientData.address}
              </h2>
              <h2 className="small-font patient-state"> {patientData.state}</h2>
              <h2 className="small-font patient-city"> {patientData.city}</h2>
              <h2 className="small-font patient-postalcode">
                {" "}
                {patientData.postalCode}{" "}
              </h2>
            </div>
            <div className="info-cards-container">
              <div className="info-card">
                <h2 className="info-label">Age</h2>
                <h2 className="info-value">{patientData.age}</h2>
              </div>
              <div className="info-card">
                <h2 className="info-label">Gender</h2>

                <h2 className="info-value"> {patientData.gender}</h2>
              </div>
              <div className="info-card">
                <h2 className="info-label">Religion</h2>

                <h2 className="info-value"> {patientData.religion}</h2>
              </div>
            </div>
          </div>
          <div className="opbuttons">
          <button className="opbill-button" onClick={handleOPBillClick}>
        <Link to={`/opbill/${id}`}>OP-Bill</Link>
      </button>
            <button className="op-button">
              <Link to="/ipregistration"> + IP Registration</Link>
            </button>
          </div>
        </div>
        {/* <hr className="divider" /> */}
        <div className="contents">
          <h3 onClick={() => handleSectionChange("Details")}>Details</h3>
          <h3 onClick={() => handleSectionChange("Visit")}>Visit</h3>
          <h3 onClick={() => handleSectionChange("History")}>History</h3>
          <h3 onClick={() => handleSectionChange("Lab Report")}>Lab Report</h3>
          <h3 onClick={() => handleSectionChange("Billing")}>Billing</h3>
          <h3 onClick={() => handleSectionChange("Insurance")}>Insurance</h3>
          <h3 onClick={() => handleSectionChange("Birth Detail")}>
            Birth Detail
          </h3>
          <h3 onClick={() => handleSectionChange("Scanning Report")}>
            Scanning Report
          </h3>
        </div>
        <div className="details-section-container">
          {activeSection === "Details" && (
            <DetailsSection data={detailsData} id={id} />
          )}
          {activeSection === "Visit" && <VisitSection data={visitData} />}
          {activeSection === "History" && <HistorySection data={historyData} />}
          {activeSection === "Lab Report" && (
            <LabReportSection data={labreportData} />
          )}
          {activeSection === "Billing" && <BillingSection data={billingData} />}
          {activeSection === "Insurance" && (
            <InsuranceSection data={insuranceData} />
          )}
          {activeSection === "Birth Detail" && (
            <BirthDetailSection data={birthdetailData} />
          )}
          {activeSection === "Scanning Report" && (
            <ScanningReportSection data={scanningreportData} />
          )}
        </div>
      </div>
    </>
  );
};

export default PatientDetailsTab;
