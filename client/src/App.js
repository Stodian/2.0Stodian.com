import React, { useEffect } from 'react';  // Correct way to import React and useEffect together
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Background from './components/Background';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';  // Importing AOS styles


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
          <Header />
          <Background /> {/* This will render the background across all pages */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    );
  }
  
  export default App;