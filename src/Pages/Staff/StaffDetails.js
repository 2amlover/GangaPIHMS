import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './staffdetails.css';
import Header from "../../Componants/Header/Header";

const StaffDetails = () => {
  const [staffList, setStaffList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchStaffList();
  }, []);

  const fetchStaffList = async () => {
    try {
      const response = await axios.post('http://ganga.pihms.co.in/Staff/get_StaffList', {
        m_FilterOptions: {
          m_Type: 5,
          m_Limit: '100',
          m_OrderBy: 'id',
        },
      });

      const staffData = response.data.ml_StaffList;
      setStaffList(staffData);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleStaffClick = (staffid) => {
    navigate(`/staffdetailstab/${staffid}`);
  };

  return (
<>
<Header />
    <div className="staff-container">
        <div className="column-names-container">
          <div className="column-name">ID</div>
          <div className="column-name">Staff Name</div>
          <div className="column-name">Gender</div>
          <div className="column-name">Staff No</div>
          <div className="column-name">Registration Date</div>
          <div className="column-name">Phone Primary</div>
        </div>
        <div className="data-container">
          {staffList.map((staff) => (
             <div key={staff.id} onClick={() => handleStaffClick(staff.id)}>
            <div
              className="staff-row">
              <div className="staff-data">{staff.id}</div>
              <div className="staff-data">{staff.displayName}</div>
              <div className="staff-data">{staff.gender}</div>
              <div className="staff-data">{staff.staffNumber}</div>
              <div className="staff-data">{staff.createdDateTime}</div>
              <div className="staff-data">{staff.phonePrimary}</div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default StaffDetails;
