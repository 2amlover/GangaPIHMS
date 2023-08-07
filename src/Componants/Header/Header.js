import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQrcode,
  faHome,
  faArrowLeft,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <div className="header-icons">
          <span>
            <FontAwesomeIcon icon={faQrcode} /> QA
          </span>
          <span>
            <FontAwesomeIcon icon={faHome} /> Main
          </span>
          <span>
            <FontAwesomeIcon icon={faArrowLeft} /> Back
          </span>
          <div className="usericon">
            <span className="profile-icon">
              <FontAwesomeIcon icon={faUser} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
