import React from 'react'
import './labreportsection.css';

const LabReportSection = () => {
  return (
    <div className="labreport-section">
      <div className="labreport-cards-container">
        <div className="labreport-skeleton-card">
          <div className="labreportmain-content">
            <div className="labreport-content">
              <h2>Lab Details of Selected Lab</h2>
            </div>
          </div>
        </div>
        <div className="labreport-skeleton-card1">
          <div className="labreportmain-content">
            <div className="labreport-content1">
              <h2>Lab Report</h2>
            </div>
            <div className="labreport-subtag">
              <h3>Diag Plan</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LabReportSection
