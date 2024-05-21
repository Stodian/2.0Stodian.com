import React from 'react';

const CloudpointScanning = () => {
  const style = {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    color: '#222',
    padding: '40px',
    textAlign: 'center'
  };

  return (
    <div style={style}>
      <h1>Cloudpoint Scanning: Precision Redefined</h1>
      <p>
        Harness the power of advanced cloudpoint scanning technology to capture 
        detailed, accurate representations of your physical spaces.
      </p>

      <h2>Key Benefits:</h2>
      <ul>
        <li>
          <strong>Detail:</strong> Capture intricate details with high precision.
        </li>
        <li>
          <strong>Efficiency:</strong> Save time with quick and comprehensive scans.
        </li>
        <li>
          <strong>Versatility:</strong> Apply scans to various applications including 
          architecture, engineering, and construction.
        </li>
      </ul>

      <h2>How We Do It:</h2>
      <p>
        Utilizing state-of-the-art scanning equipment, we provide detailed point cloud 
        data that can be used for 3D modeling, analysis, and more. Our team ensures 
        accurate and reliable results for all your project needs.
      </p>

      <button style={{ marginTop: '20px', padding: '10px 20px', background: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}>
        Learn More
      </button>
    </div>
  );
};

export default CloudpointScanning;
