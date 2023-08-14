import React, { useState } from "react";
import "./newstaff.css";
import Header from "../../../Componants/Header/Header";

const NewStaff = () => {
  const [staffList, setStaffList] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleRegister = () => {
    if (name && age) {
      const newStaff = {
        name: name,
        age: age,
      };
      setStaffList([...staffList, newStaff]);
      setName("");
      setAge("");
    }
  };

  return (
    <>
      <Header />
      <div className="new-staff-tab-container">
        <h2>New Staff</h2>
        <div className="text-boxes-container">
          <div className="textbox">
            <label htmlFor="nameInput">Name:</label>
            <input
              type="text"
              id="nameInput"
              className="staff-input"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="textbox">
            <label htmlFor="ageInput">Age:</label>
            <input
              type="text"
              id="ageInput"
              className="staff-input"
              placeholder="Enter age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
        </div>
        <div className="register-button-container">
          <button className="register" onClick={handleRegister}>
            Register
          </button>
        </div>
        <div className="columns">
          <div className="column-no">Sl No</div>
          <div className="column-no">Name</div>
          <div className="column-no">Age</div>
        </div>
        <div className="staff-data-container">
          {staffList.map((staff, index) => (
            <div className="staff-data-row" key={index}>
              <div className="column-value">{index + 1}</div>
              <div className="column-value">{staff.name}</div>
              <div className="column-value">{staff.age}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NewStaff;
