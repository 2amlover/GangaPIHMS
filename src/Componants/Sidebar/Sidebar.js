import React from "react";
import {
  FaHome,
  FaHospitalUser ,
  FaStethoscope ,
  FaUsers ,
  FaMoneyBill,
  FaFileInvoiceDollar ,
  FaCalendarCheck ,
  FaCog ,
  FaSignInAlt ,
  FaFlask ,
  FaCommentDots ,
  FaUserInjured ,
  FaPrescriptionBottle ,
  FaBoxes 
   
} from "react-icons/fa";
import "./sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    // <div className={`sidebar ${isOpen ? "open" : ""}`}>
    <div className="sidebar">
      <div className="sidebar-header">
        <Link to="/"><h2>PI-HMS</h2></Link>
      </div>

      <ul className="sidebar-menu">
        <li>
          <FaHome className="sidebar-menu-icon" />
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <FaUserInjured   className="sidebar-menu-icon" />
          <Link to="/patientdetails">Patient</Link>
        </li>
        <li>
          <FaHospitalUser  className="sidebar-menu-icon" />
          <Link to="/inpatientdetails">In-Patient</Link>
        </li>
        <li>
          <FaUsers  className="sidebar-menu-icon" />
          <Link to="/staffdetails">Staff</Link>
        </li>
        <li>
          <FaFileInvoiceDollar  className="sidebar-menu-icon" />
          <Link to="/opbilling">Op-Billing</Link>
        </li>
        <li>
          <FaFlask  className="sidebar-menu-icon" />
          <Link to="/diagnostic">Diagnostic</Link> 
        </li>
        <li>
          <FaPrescriptionBottle  className="sidebar-menu-icon" />
          <Link to="/pharmacy">Pharmacy</Link>
        </li>
        <li>
          <FaCalendarCheck  className="sidebar-menu-icon" />
          <Link to="/appointment">Appointment</Link>
        </li>
        <li>
          <FaBoxes  className="sidebar-menu-icon" />
          <Link to="/inventory">Inventory</Link>
        </li>
        <li>
          <FaCommentDots  className="sidebar-menu-icon" />
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
