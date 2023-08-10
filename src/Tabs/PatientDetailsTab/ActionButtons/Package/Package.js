import React from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import Header from '../../../../Componants/Header/Header';
import './package.css';

const Package = () => {
const { id } = useParams();

  return (
    <>
      <Header />
      <div className="packagetab-container">
        <h2>Patient New Package</h2>
        {/* <h2 className="patient-name"> {id}</h2> */}
        <div className="textbox-container">
          <div className="textbox">
            <label htmlFor="textbox1">Patient Number :</label>
            <input type="text" id="textbox1" placeholder="" />
          </div>
          <div className="textbox">
            <label htmlFor="textbox2">Patient Name :</label>
            <input type="text" id="textbox2" placeholder=""  />
          </div>
          <div className="textbox">
            <label htmlFor="textbox3">Package Name :</label>
            <input type="text" id="textbox3" placeholder="" />
          </div>
        </div>
        <div className="buttons">
          <button className="package-save-button">
            <FontAwesomeIcon icon={faSave} /> Save
          </button>
        </div>
      </div>
    </>
  );
};

export default Package;
