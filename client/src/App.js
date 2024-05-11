import React, { useEffect } from 'react';  // Correct way to import React and useEffect together
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Background from './components/Background';
import Header from './components/Header';
import Footer from './components/Footer';
import Stodian from './pages/Design';
import Drafting from './pages/Stodian';
import Design from './pages/Holdings';
import Development from './pages/Developments';
import Holdings from './pages/Drafting';
import Charity from './pages/Drafting';
import Ed from './pages/Drafting';
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
            <Route path="../client/src/pages/Stodian.js" element={<Stodian />} />
            <Route path="../client/src/pages/Drafting.js" element={<Drafting />} />
            <Route path="../client/src/pages/Design.js" element={<Design />} />
            <Route path="../client/src/pages/Developments.js" element={<Development />} />
            <Route path="../client/src/pages/Holdings.js" element={<Holdings />} />
            <Route path="../client/src/pages/Charity.js" element={<Charity />} />
            <Route path="../client/src/pages/Ed.js" element={<Ed />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    );
  }
  
  export default App;