import React from "react";
import { useParams } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import "./staffdetailstab.css";
import Header from "../../Componants/Header/Header";

const StaffDetailsTab = () => {
  const { staffName, staffID } = useParams();

  return (
    <>
      <Header />
      <div className="staffdetailstab-container2">
        <div className="staffdetails-container">
          <div className="staff-profile-icon">
            <FaUser size={62} />
          </div>
          <div className="staff-name-container">
            <h3 className="staff-id">Staff ID : {staffID}</h3>
            <h3 className="staff-name">Name : {staffName}</h3>
          </div>
        </div>
        <div className="staff-details-container">
          <label htmlFor="staffNumber">Staff ID:</label>
          <input type="text" id="staffNumber" />

          <label htmlFor="salutation">DisplayName:</label>
          <input type="text" id="salutation" />

          <label htmlFor="firstName">AddressLine1:</label>
          <input type="text" id="firstName" />

          <label htmlFor="middleName">AddressLine2:</label>
          <input type="text" id="middleName" />

          <label htmlFor="lastName">Area:</label>
          <input type="text" id="lastName" />

          <label htmlFor="maritalStatus">CityID:</label>
          <input type="text" id="maritalStatus" />

          <label htmlFor="gender">CityName:</label>
          <input type="text" id="gender" />

          <label htmlFor="age">StateName:</label>
          <input type="text" id="age" />

          <label htmlFor="ageUnit">CountryID:</label>
          <input type="text" id="ageUnit" />

          <label htmlFor="dob">CountryName:</label>
          <input type="text" id="dob" />

          <label htmlFor="identificationNo">PostalCode:</label>
          <input type="text" id="identificationNo" />

          <label htmlFor="address">AddressType:</label>
          <input type="text" id="address" />

          <label htmlFor="postalCode">LandMark:</label>
          <input type="text" id="postalCode" />

          <label htmlFor="city">GeoLocation:</label>
          <input type="text" id="city" />

          <label htmlFor="state">State:</label>
          <input type="text" id="state" />

          <label htmlFor="country">Country:</label>
          <input type="text" id="country" />

          <label htmlFor="mobile">Mobile:</label>
          <input type="text" id="mobile" />

          <label htmlFor="phone">Phone:</label>
          <input type="text" id="phone" />

          <label htmlFor="email">E-Mail:</label>
          <input type="text" id="email" />

          <label htmlFor="dateOfJoining">Date Of Joining:</label>
          <input type="text" id="dateOfJoining" />

          <label htmlFor="emergencyContact">Emergency Contact:</label>
          <input type="text" id="emergencyContact" />

          <label htmlFor="notes">Notes:</label>
          <input type="text" id="notes" />

          <label htmlFor="uan">UAN:</label>
          <input type="text" id="uan" />

          <label htmlFor="biometricEmpCode">Biometric Emp Code:</label>
          <input type="text" id="biometricEmpCode" />

          <label htmlFor="employmentType">Employment Type:</label>
          <input type="text" id="employmentType" />

          <label htmlFor="esiNumber">ESI Number:</label>
          <input type="text" id="esiNumber" />

          <label htmlFor="pan">PAN:</label>
          <input type="text" id="pan" />
        </div>
      </div>
    </>
  );
};

export default StaffDetailsTab;
