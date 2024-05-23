import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/icons/logos/Stodian Logo Final/White Version Final.png';

function Header() {
    const headerStyle = {
        backgroundColor: '#333',
        color: '#ffffff',
        padding: '15px 10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 1,
    };

    const linkStyle = {
        margin: '0 10px',
        color: 'white',
        textDecoration: 'none',
    };

    const logoStyle = {
        height: '35px',
        marginLeft: '100px'
    };

    const navStyle = {
        flexGrow: 1,
        display: 'flex',
        marginLeft: '500px',
    };

    const linkContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        listStyle: 'none',
        margin: '0',
        padding: '0',
    };

    return (
        <header style={headerStyle} data-aos="fade-down">
            <Link to="/" data-aos="zoom-out-up" style={{ display: 'flex', alignItems: 'center' }}>
                <img src={logo} alt="Stodian Logo" style={logoStyle} />
            </Link>
            <nav style={navStyle}>
                <ul className="header-links" style={linkContainerStyle} data-aos="fade-up">
                    <li><Link to="/plane" style={linkStyle}>Plane</Link></li>
                    <li><Link to="/space" style={linkStyle}>Space</Link></li>
                    <li><Link to="/developments" style={linkStyle}>Developments</Link></li>
                    <li><Link to="/inventory" style={linkStyle}>Inventory</Link></li>
                    <li><Link to="/login" style={linkStyle}>Login</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
