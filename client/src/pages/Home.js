import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    const heroStyle = {
        padding: '50px',
        textAlign: 'center',
        backgroundColor: 'transparent',
        color: 'black',
        fontSize: '22px'
    };

    const introStyle = {
        margin: '20px',
        textAlign: 'center',
        color: 'grey'
    };

    const buttonStyle = {
        display: 'block',
        width: '200px',
        margin: '20px auto',
        padding: '10px',
        textAlign: 'center',
        backgroundColor: '#007BFF',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '5px'
    };

    return (
        <div>
            <div style={heroStyle}>
                <h1>Welcome to Stodian Design</h1>
                <p>Innovating with passion and purpose</p>
            </div>
            <div style={introStyle}>
                <h2>About Us</h2>
                <p>At Stodian Design, we are committed to delivering exceptional architectural and design services that not only meet but exceed your expectations. Our team is dedicated to pushing the boundaries of design innovation while ensuring sustainability and efficiency in all our projects.</p>
            </div>
            <Link to="/contact" style={buttonStyle}>Get In Touch</Link>
        </div>
    );
}

export default Home;