import React from 'react';

function MEInventoryPlaceholder() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: 'transparent' 
    }}>
      <div style={{
        padding: '30px',
        borderRadius: '8px',
        textAlign: 'center', 
        backgroundColor: 'transparent' 
      }}>
        <h2>Future M&E Inventory</h2>
        <p>
          This page is currently under development. In the future, it will showcase
          a comprehensive and interactive inventory of all mechanical and
          electrical (M&E) components within the building.
        </p>
        <p>
          The inventory will feature infinite scrolling, allowing you to
          effortlessly browse through all available components, filter by specific
          categories, and access detailed information about each item.
        </p>
        <p>
          Stay tuned for exciting updates as we bring this interactive inventory
          to life!
        </p>
      </div>
    </div>
  );
}

export default MEInventoryPlaceholder;
