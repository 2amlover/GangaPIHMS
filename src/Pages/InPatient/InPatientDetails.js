import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './inpatientdetails.css';
import Header from '../../Componants/Header/Header';

// const InPatientDetails = () => {
//   const [ipcaseList, setIPCaseList] = useState([]);

//   useEffect(() => {
//     fetchIPCaseList();
//   }, []);

//   const fetchIPCaseList = async () => {
//     try {
//       const response = await axios.post('http://ganga.pihms.co.in/InPatient/get_IPCaseList',
//        {
//         m_FilterOptions: {
//           m_Type: 5,
//           m_Limit: '10',
//           m_OrderBy: 'id',
//         },
//       });

//       const ipcaselistData = response.data.ml_IPCaseList;
//       setIPCaseList(ipcaselistData);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };


const InPatientDetails = () => {
  const [ipcaseList, setIPCaseList] = useState([]);

  useEffect(() => {
         fetchIPCaseList();
      }, []);

  const fetchIPCaseList = async () => {
    try {
      const response = await axios.post('http://ganga.pihms.co.in/InPatient/get_IPCaseList', {
        m_FilterOptions: {
          m_Type: 5,
          m_Limit: '100',
          m_OrderBy: 'id',
        },
      });

      const ipcaselistData = response.data.ml_IPCaseList;
      setIPCaseList(ipcaselistData);
    } catch (error) {
      console.log(error.message);
    }
  };

 
  return (
    <>
      <Header />
      <div className="patient-container">
        <div className="column-names-container">
          <div className="column-name">ID</div>
          <div className="column-name">IPCase</div>
          <div className="column-name">Patient Name</div>
          <div className="column-name">Phone No</div>
          <div className="column-name">Bill Type </div>
          <div className="column-name">Patient No</div>
          <div className="column-name">Action Buttons</div>
        </div>

        <div className="data-container">
          {ipcaseList.map((ipcase) => (
            <div className="patient-row">
              <div className="patient-data">{ipcase.id}</div>
              <div className="patient-data">{ipcase.ipCaseNumber}</div>
              <div className="patient-data">{ipcase.name}</div>
              <div className="patient-data">{ipcase.phone}</div>
              <div className="patient-data">{ipcase.billedType}</div>
              <div className="patient-data">{ipcase.patientNumber}</div>
              <div className="patient-actions">
                <button className="action-button">Case Sheet</button>
                <button className="action-button">Sub Tags</button>
                <button className="action-button">Consumables</button>
                <button className="action-button">IP OP Bills</button>
                <button className="action-button">Payment</button>
                <button className="action-button">IP Billing</button>
                <button className="action-button">Label</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default InPatientDetails;
