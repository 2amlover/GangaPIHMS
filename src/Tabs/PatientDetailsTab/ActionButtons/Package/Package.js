import React, { useState,useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import Header from '../../../../Componants/Header/Header';
import './package.css';

const Package = () => {
const { id } = useParams();

const skeletonData = {
  // displayName: "",
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
      <div className="packagetab-container">
        <h2>Patient New Package</h2>
        {/* <h2 className="patient-name"> {id}</h2> */}
        <div className="package-details-container">
              <label htmlFor="patientNumber">Patient Number:</label>
              <input type="text" id="patientNumber" value={patientData.patientNumber}/>

              <label htmlFor="displayName">Patient Name:</label>
              <input type="text" id="displayName" value={patientData.displayName}/>

              <label htmlFor="middleName">Package Name:</label>
              <input type="text" id="middleName" />
              </div>
        <div className="buttons">
          <button className="package-save-button">
            <FontAwesomeIcon icon={faSave} /> Save
          </button>
        </div>
      </div>
    </>
  );
};

export default Package;
