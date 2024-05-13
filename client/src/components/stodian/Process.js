import React from 'react';

const Service = () => {
  const style = {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#transparent', 
    color: '#333',
    padding: '40px',
    textAlign: 'center',
  };

  return (
    <div style={style}>
      <h1>Intuitive and Collaborative Design</h1>
      <p>
        We transform your ideas into reality through a seamless and collaborative design process.
      </p>

      <h2>Key Benefits:</h2>
      <ul>
        <li>
          <strong>Clarity:</strong> We ensure clear communication and transparent expectations throughout the project.
        </li>
        <li>
          <strong>Personalization:</strong> Your unique vision and requirements are at the heart of every design.
        </li>
        <li>
          <strong>Iteration:</strong> We embrace feedback and refine designs until they perfectly match your vision.
        </li>
      </ul>

      <h2>Our Design Process:</h2>
      <p>
        1. **Discovery:** We start by understanding your goals, target audience, and brand identity.
        2. **Concept Development:** We explore creative directions and present initial design concepts.
        3. **Refinement:**  We incorporate your feedback, iterating on designs until they meet your approval.
        4. **Finalization:** We deliver high-quality design assets ready for implementation.
      </p>

      <button style={{ marginTop: '20px', padding: '10px 20px', background: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px' }}>
        Start Your Project
      </button>
    </div>
  );
};

export default Service;
