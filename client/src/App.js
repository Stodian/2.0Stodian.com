import React, { useEffect } from 'react';  // Correct way to import React and useEffect together
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Background from './components/Background';
import Header from './components/Header';
import Footer from './components/Footer';
import Stodian from './pages/Stodian';
import Drafting from './pages/Drafting';
import Design from './pages/Holdings';
import Developments from './pages/Developments';
import Holdings from './pages/Holdings';
import Charity from './pages/Charity';
import Ed from './pages/Ed';
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
            <Route path="/Holdings" element={<Holdings />} />
            <Route path="/Charity" element={<Charity />} />
            <Route path="/Ed" element={<Ed />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    );
  }
  
  export default App;