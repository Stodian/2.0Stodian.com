import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/whitestodianlogo.png'; // Adjust the path as necessary

function Header() {
    const headerStyle = {
        backgroundColor: '#343a40',
        color: '#ffffff',
        padding: '10px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    };

    const navStyle = {
        margin: '0',
        padding: '0',
        display: 'flex',
        listStyle: 'none'
    };

    const linkStyle = {
        margin: '0 10px',
        color: 'white',
        textDecoration: 'none'
    };

    return (
        <header style={headerStyle}>
            <Link to="/">
                <img src={logo} alt="Stodian Logo" style={{ height: '50px' }} />
            </Link>
            <nav>
                <ul style={navStyle}>
                    <li><Link to="/" style={linkStyle}>Home</Link></li>
                    <li><Link to="/about" style={linkStyle}>About Us</Link></li>
                    <li><Link to="/services" style={linkStyle}>Services</Link></li>
                    <li><Link to="/portfolio" style={linkStyle}>Portfolio</Link></li>
                    <li><Link to="/contact" style={linkStyle}>Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;