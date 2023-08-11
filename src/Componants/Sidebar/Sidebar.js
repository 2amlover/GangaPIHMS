import React, { useState } from "react";
import {
  FaHome,
  FaHospitalAlt,
  FaUserMd,
  FaStethoscope ,
  FaBriefcaseMedical,
  FaMoneyBill,
  FaCalendarAlt,
  FaNotesMedical,
  FaCog ,
  FaSignInAlt ,
   
} from "react-icons/fa";
import "./sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-header">
        <Link to="/"><h2>PI-HMS</h2></Link>
      </div>

      <ul className="sidebar-menu">
        <li>
          <FaHome className="sidebar-menu-icon" />
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <FaHospitalAlt  className="sidebar-menu-icon" />
          <Link to="/patientdetails">Patient</Link>
        </li>
        <li>
          <FaUserMd className="sidebar-menu-icon" />
          <Link to="/inpatientdetails">In-Patient</Link>
        </li>
        <li>
          <FaBriefcaseMedical className="sidebar-menu-icon" />
          <Link to="/staffdetails">Staff</Link>
        </li>
        <li>
          <FaMoneyBill className="sidebar-menu-icon" />
          <Link to="/opbilling">Op-Billing</Link>
        </li>
        <li>
          <FaCalendarAlt className="sidebar-menu-icon" />
          <Link to="/diagnostic">Diagnostic</Link> 
        </li>
        <li>
          <FaNotesMedical className="sidebar-menu-icon" />
          <Link to="/pharmacy">Pharmacy</Link>
        </li>
        <li>
          <FaCalendarAlt className="sidebar-menu-icon" />
          <Link to="/appointment">Appointment</Link>
        </li>
        <li>
          <FaBriefcaseMedical className="sidebar-menu-icon" />
          <Link to="/inventory">Inventory</Link>
        </li>
        <li>
          <FaCalendarAlt className="sidebar-menu-icon" />
          <Link to="/communication">Communication</Link>
        </li>
        <li>
          <FaMoneyBill className="sidebar-menu-icon" />
          <Link to="/finance">Finance</Link>
        </li>
        <li>
          <FaStethoscope className="sidebar-menu-icon" />
          <Link to="/doctorcunsultation">Doctor Consultation</Link>
        </li>
        <li>
          <FaCog  className="sidebar-menu-icon" />
          <Link to="/settings">Settings</Link>
        </li>
        <li>
          <FaSignInAlt  className="sidebar-menu-icon" />
          <Link to="/login">Login</Link>
        </li>
       
      </ul>
    </div>
  );
};

export default Sidebar;
