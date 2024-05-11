import React from 'react';

const Custom = () => {
    const style = {
        height: '100vh',  // 100% of the viewport height
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',  // Light grey background
        color: '#333',  // Dark text color
        padding: '20px',
        boxSizing: 'border-box'
    };

    return (
        <div style={style}>
            <h1>Our Services</h1>
            <p>Explore the wide range of services we offer.</p>
        </div>
    );
};

export default Custom;