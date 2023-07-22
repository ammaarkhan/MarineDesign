// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from './HomePage';
import TheTeam from './TheTeam';
import Sponsor from './Sponsor';
import ContactUs from './ContactUs';
import ElectricPropulsion from './ElectricPropulsion';
import AUV from './AUV';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/the-team" element={<TheTeam />} />
        <Route path="/sponsor" element={<Sponsor />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/electric-propulsion" element={<ElectricPropulsion />} />
        <Route path="/auv" element={<AUV />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
