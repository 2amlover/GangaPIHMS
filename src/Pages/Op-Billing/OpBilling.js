import "./opbilling.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../Componants/Header/Header";

const OpBilling = () => {
  const [opbillList, setOPBillList] = useState([]);

  useEffect(() => {
    fetchOPBillList();
  }, []);

  const fetchOPBillList = async () => {
    try {
      const response = await axios.post('http://ganga.pihms.co.in/OPBilling/get_OPBillList',
        {
          m_FilterOptions: {
            m_Type: 5,
            m_Limit: '100',
            m_OrderBy: 'id',
          },
        }
      );

      const opbillData = response.data.ml_OPBillList;
      setOPBillList(opbillData);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Header />
      <div className="patient-container">
        <div className="column-names-container">
          <div className="column-name">SL</div>
          <div className="column-name">Bill No</div>
          <div className="column-name">Patient No</div>
          <div className="column-name">Patient Name</div>
          <div className="column-name">Bill Date</div>
          <div className="column-name">Payment Mode</div>
          <div className="column-name">Payable</div>
          <div className="column-name">balance</div>
          <div className="column-name">Received</div>
          <div className="column-name">Action </div>
        </div>

        <div className="data-container">
          {opbillList.map((opbill) => (
            <div className="patient-row">
              <div className="opbill-data">{opbill.parentBillID}</div>
              <div className="opbill-data">{opbill.billNumber}</div>
              <div className="opbill-data">{opbill.patientNumber}</div>
              <div className="opbill-data">{opbill.patientName}</div>
              <div className="opbill-data">{opbill.billDateTime}</div>
              <div className="opbill-data">{opbill.billType}</div>
              <div className="opbill-data">{opbill.payableAmount}</div>
              <div className="opbill-data">{opbill.balanceAmount}</div>
              <div className="opbill-data">{opbill.receivedAmount}</div>
              <div className="patient-actions">
                <button className="action-button">Package</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OpBilling;
