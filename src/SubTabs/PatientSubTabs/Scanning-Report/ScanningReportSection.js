import React from 'react'
import './scanningreportsection.css';

const ScanningReportSection = () => {
  return (
    <div className="scanning-section">
    <div className="scanning-cards-container">
      <div className="scanning-skeleton-card">
        <div className="scanningmain-content">
          <div className="scanning-content">
          <h2>Scanning Details of Selected Scan</h2>
          </div>
        </div>
      </div>
      <div className="scanning-skeleton-card1">
        <div className="scanningmain-content">
          <div className="scanning-content1">
            <h2>Scanning List</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ScanningReportSection
