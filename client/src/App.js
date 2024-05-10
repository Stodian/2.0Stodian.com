import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={AboutUs} />
                    <Route path="/services" component={Services} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/contact" component={Contact} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;