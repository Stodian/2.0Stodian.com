import React, { useEffect } from 'react';  // Correct way to import React and useEffect together
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Background from './components/common/Background';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Stodian from './pages/Stodian';
import Drafting from './pages/Drafting';
import Design from './pages/Design';
import Developments from './pages/Developments';
import Inventory from './pages/Inventory';
import Charity from './pages/Charity';
import Login from './pages/Login.js';
import PrivateProjects from '../../client/src/pages/PrivateProjects.js';
import AOS from 'aos';
import 'aos/dist/aos.css';  // Importing AOS styles
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    useEffect(() => {
      AOS.init({
        duration: 2000,
        once: true, // whether animation should happen only once - while scrolling down
      });
    }, []); // The empty array ensures the effect runs only once after the initial render
  
    return (
      <Router>
        <div>
        <Background /> {/* This will render the background across all pages */}
          <Header />
          <Routes>
            <Route path="/" element={<Stodian />} />
            <Route path="/Drafting" element={<Drafting />} />
            <Route path="/Design" element={<Design />} />
            <Route path="/Developments" element={<Developments />} />
            <Route path="/Inventory" element={<Inventory />} />
            <Route path="/Charity" element={<Charity />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Projects" element={<PrivateProjects />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    );
  }
  
  export default App;