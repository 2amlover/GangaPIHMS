import React from 'react';
import './diagnostic.css';
import Header from '../../Componants/Header/Header';
import Footer from '../../Componants/Footer/Footer';

const Diagnostic = () => {
  return (
    <>
      <Header />
      <div className="diagnostic-container">
        {/* <div className="logo-container">
        <div className="circle">
            <span className="pihms-logo">PI-HMS</span>
          </div>
        </div> */}
        <h2>Diagnostic</h2>
      </div>
      <Footer />
    </>
  );
};

export default Diagnostic;
