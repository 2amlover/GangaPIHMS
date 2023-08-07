import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaUser } from "react-icons/fa";
import './patientdetails.css';
import Header from '../../Componants/Header/Header';

const PatientDetails = () => {
  const [patientList, setPatientList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPatientList();
  }, []);

  const fetchPatientList = async () => {
    try {
      const response = await axios.post('http://ganga.pihms.co.in/Patient/get_PatientList', {
        m_FilterOptions: {
          m_Type: 5,
          m_Limit: '100',
          m_OrderBy: 'id',
        },
      });

      const patientData = response.data.ml_Patient;
      setPatientList(patientData);
    } catch (error) {
      console.log(error.message);
    }
  };
  const handlePatientClick = (id) => {
    navigate(`/patientdetailstab/${id}`);
  };

  return (
    <>
      <Header />
      <div className="patient-container">
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
             <div key={patient.id} onClick={() => handlePatientClick(patient.id)}>
            <div
              className="patient-row">
              <div className="patient-data">{patient.id}</div>
              <div  className="patient-data">
                  {patient.profilePhoto ? (
                    <img
                      src={`data:image/jpeg;base64,${patient.profilePhoto}`}
                      style={{ width: "30px", height: "30px", marginRight: "50px", borderRadius: "50%", border: "2px solid #ccc",boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)" }}
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
                <button className="action-button">Package</button>
                <button className="action-button">OpBill</button>
                <button className="action-button">IPCase</button>
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
