import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faBox, faBed } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { FaUser } from "react-icons/fa";
import "./patientdetails.css";
import Header from "../../Componants/Header/Header";

const PatientDetails = () => {
  const [patientList, setPatientList] = useState([]);
  const navigate = useNavigate();
  const [filterOptions, setFilterOptions] = useState({
    m_Limit: "100",
    m_OrderBy: "id",
    m_Type: 1,
    m_Duration: "All",
  });
  useEffect(() => {
    fetchPatientList();
  }, [filterOptions]);

  const fetchPatientList= async () => {
    try {
      const response = await axios.post(
        "http://ganga.pihms.co.in/Patient/get_PatientList",
        {
          m_FilterOptions: filterOptions,
        }
      );

      const patientData = response.data.ml_Patient;
      setPatientList(patientData);
    } catch (error) {
      console.log(error.message);
    }
  };

  

  const handlePatientClick = (id) => {
    navigate(`/patientdetailstab/${id}`);
  };
  const handlePatientClick1 = (id) => {
    navigate(`/package/${id}`);
  };
  const handlePatientClick2 = (id) => {
    navigate(`/opbill/${id}`);
  };

  return (
    <>
      <Header />
      <div className="patient-container">
        <div className="top-content">
          <div className="header-part">
            <select
              id="recentselect"
              className="recent-options"
              onChange={(e) =>
                setFilterOptions({
                  ...filterOptions,
                  m_Duration: e.target.value,
                })
              }
              value={filterOptions.m_Duration}
            >
              <option value="All">Recent 100</option>
              <option value="Current Day">Current Day</option>
              <option value="Current Week">Current Week</option>
              <option value="Current Month">Current Month</option>
              <option value="All">Recent 1000</option>
            </select>
            <Link to="/new-patient" className="new-patient-button">
              <FontAwesomeIcon icon={faUserPlus} /> New Patient
            </Link>
          </div>
          <div className="header-content">
            <div className="header-search-content">
              <select id="bankSelect" className="hedaer-primary-button">
                <option value="bank">Phone Primary </option>
                <option value="bank1">First Name</option>
                <option value="bank2">Patient Number</option>
              </select>
              <div className="hedaer-search-bar-container">
                <input type="text" placeholder="Search..." />
                <button className="header-search-button">🔍 </button>
              </div>
            </div>
          </div>
        </div>
        <div className="column-names-container">
          <div className="column-name">ID</div>
          <div className="column-name">Profile</div>
          <div className="column-name">Patient No</div>
          <div className="column-name">Patient Name</div>
          <div className="column-name">Phone No</div>
          <div className="column-name">Registration Date</div>
          <div className="column-name">Action Buttons</div>
        </div>
        <div className="data-container">
          {patientList.map((patient) => (
            <div key={patient.id}>
              <div className="patient-row">
                <div
                  className="patient-data"
                  onClick={() => handlePatientClick(patient.id)}
                >
                  {patient.id}
                </div>
                <div className="patient-data">
                  {patient.profilePhoto ? (
                    <img
                      src={`data:image/jpeg;base64,${patient.profilePhoto}`}
                      style={{
                        width: "30px",
                        height: "30px",
                        marginRight: "50px",
                        borderRadius: "50%",
                        border: "2px solid #ccc",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                      }}
                    />
                  ) : (
                    <span style={{ color: "grey", fontSize: "30px" }}>
                      <FaUser />
                    </span>
                  )}
                </div>
                <div className="patient-data">{patient.patientNumber}</div>
                <div className="patient-data">{patient.firstName}</div>
                <div className="patient-data">{patient.phonePrimary}</div>
                <div className="patient-data">{patient.createdDateTime}</div>
                <div className="patient-actions">
                  <button
                    className="action-button"
                    onClick={() => handlePatientClick1(patient.id)}
                  >
                    {" "}
                    {/* <FontAwesomeIcon icon={faBox } />*/} Package
                  </button>
                  <button
                    className="action-button"
                    onClick={() => handlePatientClick2(patient.id)}
                  >
                    {/* <FontAwesomeIcon icon={faBox } /> */}OpBill
                  </button>
                  {/* <Link to="/opbill" className="action-button"> OpBill</Link> */}
                  <button
                    className="action-button"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate("/ipregistration");
                    }}
                  >
                    {/* <FontAwesomeIcon icon={faBed } />*/} IPCase
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PatientDetails;
