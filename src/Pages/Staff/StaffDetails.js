import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./staffdetails.css";
import Header from "../../Componants/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

const StaffDetails = () => {
  const [staffList, setStaffList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchStaffList();
  }, []);

  const fetchStaffList = async () => {
    try {
      const response = await axios.post(
        "http://ganga.pihms.co.in/Staff/get_StaffList",
        {
          m_FilterOptions: {
            m_Type: 5,
            m_Limit: "100",
            m_OrderBy: "id",
          },
        }
      );

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
        <div className="top-content">
          <div className="header-part">
            <select id="recentselect" className="recent-options">
              <option value="All">Recent 100</option>
              <option value="Current Day">Current Day</option>
              <option value="Current Week">Current Week</option>
              <option value="Current Month">Current Month</option>
              <option value="All">Recent 1000</option>
            </select>
            <Link to="/new-staff" className="new-patient-button">
              <FontAwesomeIcon icon={faUserPlus} /> New Staff
            </Link>
          </div>
          <div className="header-content">
            <div className="header-search-content">
              <select id="bankSelect" className="hedaer-primary-button">
                <option value="bank">Staff Number </option>
                <option value="bank">Phone Primary </option>
                <option value="bank1">First Name</option>
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
          <div className="column-name">Staff Name</div>
          <div className="column-name">Gender</div>
          <div className="column-name">Staff No</div>
          <div className="column-name">Registration Date</div>
          <div className="column-name">Phone Primary</div>
        </div>
        <div className="data-container">
          {staffList.map((staff) => (
            <div key={staff.id} onClick={() => handleStaffClick(staff.id)}>
              <div className="staff-row">
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
