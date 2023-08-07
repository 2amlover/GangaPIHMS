import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//componants
import Sidebar from './Componants/Sidebar/Sidebar';
import Home from './Componants/Home/Home';
import Header from './Componants/Header/Header'
import Footer from './Componants/Footer/Footer'

//pages
import StaffDetails from './Pages/Staff/StaffDetails';
import Appointment from './Pages/Appointment/Appointment';
import Communication from './Pages/Communication/Communication';
import Diagnostic from './Pages/Diagnostic/Diagnostic';
import InPatientDetails from './Pages/InPatient/InPatientDetails'
import Inventory from './Pages/Inventory/Inventory';
import OpBilling from './Pages/Op-Billing/OpBilling';
import PatientDetails from './Pages/Patient/PatientDetails';
import Pharmacy from './Pages/Pharmacy/Pharmacy';
import DoctorCunsultaion from './Pages/DoctorCunsultation/DoctorCunsultaion';
import Finance from './Pages/Finance/Finance';

//tabs
import StaffDetailsTab from './Tabs/StaffDetailsTab/StaffDetailsTab';
import PatientDetailsTab from './Tabs/PatientDetailsTab/PatientDetailsTab'; 

//opbill
import OpBill from './Tabs/PatientDetailsTab/OPBill/OpBill';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Routes>
          
          {/* componants */}
          <Route path="/" element={<Home />} />
          <Route path="/header" element={<Header />} />
          <Route path="/footer" element={<Footer />} />

          {/* pages */}
          <Route path="/staffdetails" element={<StaffDetails />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/communication" element={<Communication />} />
          <Route path="/diagnostic" element={<Diagnostic />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/inpatientdetails" element={<InPatientDetails />} />
          <Route path="/opbilling" element={<OpBilling />} />
          <Route path="/patientdetails" element={<PatientDetails />} />
          <Route path="/pharmacy" element={<Pharmacy />} />
          <Route path="/doctorcunsultation" element={<DoctorCunsultaion />} />
          <Route path="/finance" element={<Finance />} />

          {/* tabs */}
          <Route path="/staffdetailstab/:staffID" element={<StaffDetailsTab />} />
          <Route path="/patientdetailstab/:id" element={<PatientDetailsTab />} /> 

          {/* opbill*/}  
          <Route path="/opbill" element={<OpBill />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;
