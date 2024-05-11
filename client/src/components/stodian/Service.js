import React from 'react';

const Service = () => {
    const style = {
        height: '100vh',  // 100% of the viewport height
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',  // Light grey background
        color: '#333',  // Dark text color
        padding: '20px',
        boxSizing: 'border-box'
    };

    return (
        <div style={style}>
            <div> style={{
                    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sansSerif",
                    margin: 0,
                    padding: 0,
                    backgroundColor: '#f5f5f5',
                    color: '#333', /* Text color */
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh', /* Ensure the body takes up the full height of the viewport */
                    zIndex: 1, /* Higher than the canvas' z-index */
            }}
                    <h1>Our Services</h1>
            </div>
            <div> style={{

            }}            
            <p>Explore the wide range of services we offer.</p></div>

        </div>
    );
};

export default Service;