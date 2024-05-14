import React, { useState, useEffect, useRef } from 'react';

const Service = () => {
  const [dynamicText, setDynamicText] = useState('');
  const dynamicRef = useRef(null);  

  useEffect(() => {
    const messages = ["Residential", "Commercial", "Industrial", "Educational", "Public"];
    const typingSpeed = 150;
    const deletingSpeed = 75;
    let currentMessage = 0;
    let charIndex = 0;
    let timeoutId; // Store the timeout ID for cleanup

    function typeLetter() {
      if (charIndex < messages[currentMessage].length) {
        setDynamicText(prevText => prevText + messages[currentMessage].charAt(charIndex));
        charIndex++;
        timeoutId = setTimeout(typeLetter, typingSpeed); // Store timeout ID
      } else {
        timeoutId = setTimeout(deleteText, 2000); // Store timeout ID
      }
    }

    function deleteText() {
      if (charIndex > 0) {
        setDynamicText(prevText => prevText.substring(0, charIndex - 1));
        charIndex--;
        timeoutId = setTimeout(deleteText, deletingSpeed); // Store timeout ID
      } else {
        currentMessage = (currentMessage + 1) % messages.length;
        timeoutId = setTimeout(typeLetter, 500); // Store timeout ID
      }
    }

    const span = dynamicRef.current;
    if (span) {  // Ensure the span is mounted before starting
      typeLetter();
    }

    return () => {
      clearTimeout(timeoutId); // Clear any pending timeouts on unmount
    };
  }, []);

  const pageStyle = {
    height: '100vh',  // 100% of the viewport height
    display: 'flex',
    flexDirection: 'column',
    marginTop: '200px',
    alignItems: 'center',
    fontSize: '3.5rem',               /* Large text similar to h1 */
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", /* Font styling */
    backgroundColor: '#transparent',       /* Light gray background color */
    color: '#333',                     /* Dark gray text color */
    fontWeight: 'bold', /* Makes the text bold */
    zIndex: 2,
  };


  return (
<main id="page1" className="page" style={pageStyle}>
  <div className="typed-words">
    <span id="constant1">Your Partner in </span>
    <span id="dynamic" ref={dynamicRef}>
      {dynamicText}
      <span className="blinking-cursor">|</span> 
    </span>
    <span id="constant2"> Design</span>
  </div>

  <style jsx>{`
    .blinking-cursor { /* Target the blinking-cursor class directly */
      animation: blink-caret 1s step-end infinite;
    }

    @keyframes blink-caret {
      from, to {
        opacity: 0; 
      }
      50% {
        opacity: 1;
      }
    }
  `}</style>
      
      <div style={{ display: 'flex' }}> {/* Container to hold the buttons */}
      
             <button className="button1" style={{
                backgroundColor: '#8B0000', // Maroon color
                color: 'white',
                padding: '12px 24px',
                border: 'none',
                borderRadius: '5px',
                fontSize: '18px',
                cursor: 'pointer',
                margin: '10px', // Add some spacing between buttons
                transition: 'all 0.3s ease', /* Smooth transition for hover effects */
                fontFamily: "'Arial', sans-serif", /* Clean and professional font */
                fontWeight: 'bold', /* Makes text bold to stand out */
                textTransform: 'uppercase', /* Uppercase text for a more impactful appearance */
                outline: 'none', /* Removes the outline to clean up focus style */
                zIndex: 1, /* Keeps button above other content */
            }}>

               Free Custom Design

             </button>

             <button className="button2" style={{
                backgroundColor: 'white', // Maroon color
                color: '#800000',
                padding: '12px 24px',
                border: '2px solid #ccc', /* Soft grey border for subtle definition */
                borderRadius: '5px',
                fontSize: '18px',
                cursor: 'pointer',
                margin: '10px', // Add some spacing between buttons
                transition: 'all 0.3s ease', /* Smooth transition for hover effects */
                fontFamily: "'Arial', sans-serif", /* Clean and professional font */
                fontWeight: 'bold', /* Makes text bold to stand out */
                textTransform: 'uppercase', /* Uppercase text for a more impactful appearance */
                outline: 'none', /* Removes the outline to clean up focus style */
                zIndex: 1, /* Keeps button above other content */
            }}>
              How it Works
            </button>
        </div>
    

    </main>
  );
};

export default Service;
