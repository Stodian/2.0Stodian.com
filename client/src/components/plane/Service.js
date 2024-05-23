import React from 'react';

const Service = () => {
  const style = {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent', // Slightly lighter grey
    color: '#222',          // Darker text for contrast
    padding: '40px',        // More padding for visual comfort
    textAlign: 'center',    // Center-align text for better readability
    zIndex: 5
  };

  return (
    <div style={style}>
      <h1>Drafting for M&E: Simplified</h1>
      <p>
        We transform complex mechanical and electrical processes into intuitive, 
        Lego-like drafting visualizations.
      </p>

      <h2>Key Benefits:</h2>
      <ul>
        <li>
          <strong>Clarity:</strong> Easily understand system layouts and interconnections.
        </li>
        <li>
          <strong>Efficiency:</strong> Streamline communication and decision-making.
        </li>
        <li>
          <strong>Accuracy:</strong> Minimize errors and ensure precision in your projects.
        </li>
      </ul>

      <h2>How We Do It:</h2>
      <p>
        Our approach combines industry expertise with the latest drafting tools.
        We break down intricate designs into modular components, making it easier to 
        visualize and modify your systems.
      </p>

      <button style={{ marginTop: '20px', padding: '10px 20px', background: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}>
        Learn More
      </button>
    </div>
  );
};

export default Service;
