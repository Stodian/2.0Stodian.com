import React from 'react';

const PrivateProjects = () => {
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
        <div className="container mt-5" style={style}>
             <h2>Private Projects Page</h2>
             <p>This page is only accessible after signing in.</p>
        </div>
    );
};

export default PrivateProjects;