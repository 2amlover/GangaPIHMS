import React, { useEffect, useState } from "react";
import axios from "axios";
import "./detailssection.css";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faSave } from '@fortawesome/free-solid-svg-icons';

const DetailsSection = () => {
  const { id } = useParams();

  // Skeleton data to show when patientData is null or being fetched
  const skeletonData = {
    solutation: "",
    firstName: "",
    lastName: "",
    maritalStatus: "",
    religion: "",
    gender: "",
    age: "",
    ageUnit: "",
    DOB: "",
    occupation: "",
  };

  const [patientData, setPatientData] = useState(skeletonData);

  useEffect(() => {
    // Fetch patient details from the API when the component mounts
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
      setPatientData(response.data.m_Patient); // Update the patientData state with the fetched data
    } catch (error) {
      console.error("Error fetching patient details:", error);
    }
  };

  return (
    <div className="details-section">
      <div className="skeleton-cards-container">
        <h2>Patient Details</h2>
        <div className="patient-details-container">
          <label htmlFor="staffNumber">Solutation:</label>
          <input type="text" id="staffNumber" />

          <label htmlFor="salutation">FirstName:</label>
          <input type="text" id="salutation"  value={patientData.firstName} readOnly/>

          <label htmlFor="firstName">LastName:</label>
          <input type="text" id="firstName" value={patientData.lastName} readOnly/>

          <label htmlFor="middleName">MaritalStatus:</label>
          <input type="text" id="middleName" value={patientData.maritalStatus} readOnly/>

          <label htmlFor="lastName">Religion:</label>
          <input type="text" id="lastName" value={patientData.religion} readOnly/>

          <label htmlFor="maritalStatus">Gender:</label>
          <input type="text" id="maritalStatus" value={patientData.gender} readOnly/>

          <label htmlFor="gender">Age:</label>
          <input type="text" id="gender" value={patientData.age} readOnly/>

          <label htmlFor="age">AgeUnit:</label>
          <input type="text" id="age" value={patientData.ageUnit} readOnly/>

          <label htmlFor="ageUnit">DOB:</label>
          <input type="text" id="ageUnit" value={patientData.dateOfBirth} readOnly/>

          <label htmlFor="dob">Occupation:</label>
          <input type="text" id="dob" value={patientData.occupation} readOnly/>

          <label htmlFor="identificationNo">MonthlyIncome:</label>
          <input type="text" id="identificationNo" value={patientData.incomeRange} readOnly/>

          <label htmlFor="address">Mobile:</label>
          <input type="text" id="address" value={patientData.phoneSecondary} readOnly/>

          <label htmlFor="postalCode">Phone:</label>
          <input type="text" id="postalCode" value={patientData.phonePrimary} readOnly/>

          <label htmlFor="city">E-Mail:</label>
          <input type="text" id="city" value={patientData.email} readOnly/>

          <label htmlFor="state">Address:</label>
          <input type="text" id="state"  value={patientData.address} readOnly/>

          <label htmlFor="country">PostalCode:</label>
          <input type="text" id="country" value={patientData.postalCode}  readOnly/>

          <label htmlFor="mobile">Emg.Contact Name:</label>
          <input type="text" id="mobile" value={patientData.emergencyContactName} readOnly/>

          <label htmlFor="phone">Emg.Contact Phone:</label>
          <input type="text" id="phone"  value={patientData.emergencyContactPhone} readOnly/>

          <label htmlFor="email">Emg.Contact Email:</label>
          <input type="text" id="email" value={patientData.emergencyContactEmail} readOnly/>

          <label htmlFor="dateOfJoining">City:</label>
          <input type="text" id="dateOfJoining" value={patientData.city} readOnly/>

          <label htmlFor="emergencyContact">State:</label>
          <input type="text" id="emergencyContact"  value={patientData.state} readOnly/>

          <label htmlFor="notes">Country:</label>
          <input type="text" id="notes" value={patientData.country} readOnly/>

          <label htmlFor="uan">Emg.Contact Relationship:</label>
          <input type="text" id="uan"  value={patientData.emergencyContactRelationship} readOnly/>

          <label htmlFor="biometricEmpCode">Referring Doctor:</label>
          <input type="text" id="biometricEmpCode" value={patientData.referenceDoctor} readOnly/>

          {/* <label htmlFor="biometricEmpCode">Family Doctor:</label>
          <input type="text" id="biometricEmpCode"   value={patientData.familyDoctor} readOnly/> */}
          
        </div>
        <div className="buttons">
          <button className="cancel-button">
        <FontAwesomeIcon icon={faTimes} /> Cancel
      </button>
      <button className="save-button">
        <FontAwesomeIcon icon={faSave} /> Save
      </button>
          </div>
        </div>
      </div>
  );
};

export default DetailsSection;
