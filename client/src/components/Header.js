import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../icons/logos/Stodian Logo Final/White Version Final.png'; // Adjust the path as necessary client\public\icons\logos\Stodian Logo Final\White Version Final.png

function Header() {
    const headerStyle = {
        backgroundColor: '#333',
        color: '#ffffff',
        padding: '10px 10px',
        display: 'flex',
        alignItems: 'center'
    };

    const navStyle = {
        margin: '0',
        padding: '0',
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'center', // This centers the nav items in the nav area
        alignItems: 'center' // This centers the nav items vertically
    };

    const linkStyle = {
        margin: '0 10px',
        color: 'white',
        textDecoration: 'none',
    };      

    const logoStyle = {
        height: '35px', // Adjust the height as needed
        marginLeft: '80px'
    };


    return (
        <header style={headerStyle}>
            <Link to="/">
                <img src={logo} alt="Stodian Logo" style={logoStyle} />
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