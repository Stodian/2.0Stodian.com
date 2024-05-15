import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/icons/logos/Stodian Logo Final/White Version Final.png';

function Header() {
    const headerStyle = {
        backgroundColor: '#333',
        color: '#ffffff',
        padding: '15px 10px',
        display: 'flex',
        alignItems: 'center',
        zIndex: 1
    };

    const linkStyle = {
        margin: '0 10px',
        color: 'white',
        textDecoration: 'none',
    };

    const logoStyle = {
        height: '35px',
        marginLeft: '80px'
    };

    return (
        <header style={headerStyle} data-aos="fade-down">
            <Link to="/" data-aos="zoom-out-up">
                <img src={logo} alt="Stodian Logo" style={logoStyle} />
            </Link>
            <nav>
                <div className="link-container" style={{ marginLeft: '340px' }}>
                <ul className="header-links" style={{
                        margin: '0',
                        padding: '0',
                        listStyle: 'none',
                        display: 'flex',
                        justifyContent: 'centre',
                    }} data-aos="fade-up">
                    <li><Link to="/drafting" style={linkStyle}>Drafting</Link></li>
                    <li><Link to="/design" style={linkStyle}>Design</Link></li>
                    <li><Link to="/developments" style={linkStyle}>Developments</Link></li>
                    <li><Link to="/inventory" style={linkStyle}>Inventory</Link></li>
                    <li><Link to="/charity" style={linkStyle}>Charity</Link></li>
                    <li><Link to="/ed" style={linkStyle}>Ed</Link></li>
                </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;
