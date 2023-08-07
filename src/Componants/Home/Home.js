import React from "react";
import "./home.css";
import Header from "../../Componants/Header/Header";


const Home = () => {
  return (
    <>
      <Header />
      <div className="dashboard-container">
        <div className="content-container">
        <h1>Welcome to Hospital Management System</h1>
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus
          nunc nec odio aliquet, ut tincidunt urna ullamcorper. In non elit
          pharetra, finibus enim vel, tempus metus.
        </h4>
        <div className="features-container">
          <div className="feature">
            <i className="fa fa-hospital"></i>
            <h3>Manage Patients</h3>
            <p>
              Keep track of patient records, appointments, and medical history.
            </p>
          </div>
          <div className="feature">
            <i className="fa fa-user-md"></i>
            <h3>Doctor Management</h3>
            <p>
              Manage doctors' profiles, schedules, and patient assignments.
            </p>
          </div>
          <div className="feature">
            <i className="fa fa-bed"></i>
            <h3>Bed Allocation</h3>
            <p>
              Efficiently manage the allocation of beds and room occupancy.
            </p>
          </div>
        
        </div>
        <div className="features-container">
          <div className="feature">
            <i className="fa fa-hospital"></i>
            <h3>Staff Management</h3>
            <p>
              Keep track of patient records, appointments, and medical history.
            </p>
          </div>
          <div className="feature">
            <i className="fa fa-user-md"></i>
            <h3>Clients Management</h3>
            <p>
              Manage doctors' profiles, schedules, and patient assignments.
            </p>
          </div>
          <div className="feature">
            <i className="fa fa-bed"></i>
            <h3>About </h3>
            <p>
              Efficiently manage the allocation of beds and room occupancy.
            </p>
          </div>
        
        </div>
        </div>
      </div>
    </>
  );
};

export default Home;
