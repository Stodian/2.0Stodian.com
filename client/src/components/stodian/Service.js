import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const Service = () => {
  const dynamicTextRef = useRef('');
  const [dynamicText, setDynamicText] = useState('');
  const dynamicRef = useRef(null);
  const button1Ref = useRef(null);
  const button2Ref = useRef(null);
  const currentMessageIndex = useRef(0);
  const charIndex = useRef(0);
  const timeoutId = useRef(null);

  useEffect(() => {
    const messages = ["Residential", "Commercial", "Industrial", "Educational", "Public"];
    const typingSpeed = 150;
    const deletingSpeed = 75;

    function typeLetter() {
      if (charIndex.current < messages[currentMessageIndex.current].length) {
        dynamicTextRef.current += messages[currentMessageIndex.current].charAt(charIndex.current);
        setDynamicText(dynamicTextRef.current);  // Trigger re-render
        charIndex.current++;
        timeoutId.current = setTimeout(typeLetter, typingSpeed);
      } else {
        timeoutId.current = setTimeout(deleteText, 2000);
      }
    }

    function deleteText() {
      if (charIndex.current > 0) {
        dynamicTextRef.current = dynamicTextRef.current.slice(0, -1);
        setDynamicText(dynamicTextRef.current);  // Trigger re-render
        charIndex.current--;
        timeoutId.current = setTimeout(deleteText, deletingSpeed);
      } else {
        currentMessageIndex.current = (currentMessageIndex.current + 1) % messages.length;
        timeoutId.current = setTimeout(typeLetter, 500);
      }
    }

    const span = dynamicRef.current;
    if (span) {
      typeLetter();
    }

    return () => {
      clearTimeout(timeoutId.current);
    };
  }, []);

  useEffect(() => {
    const handleHover = (element, scale) => {
      gsap.to(element, { scale: scale, duration: 0.3, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' });
    };

    const handleHoverOut = (element) => {
      gsap.to(element, { scale: 1, duration: 0.3, boxShadow: 'none' });
    };

    const button1 = button1Ref.current;
    const button2 = button2Ref.current;

    if (button1) {
      button1.addEventListener('mouseenter', () => handleHover(button1, 1.05));
      button1.addEventListener('mouseleave', () => handleHoverOut(button1));
    }

    if (button2) {
      button2.addEventListener('mouseenter', () => handleHover(button2, 1.05));
      button2.addEventListener('mouseleave', () => handleHoverOut(button2));
    }

    return () => {
      if (button1) {
        button1.removeEventListener('mouseenter', () => handleHover(button1, 1.05));
        button1.removeEventListener('mouseleave', () => handleHoverOut(button1));
      }

      if (button2) {
        button2.removeEventListener('mouseenter', () => handleHover(button2, 1.05));
        button2.removeEventListener('mouseleave', () => handleHoverOut(button2));
      }
    };
  }, []);

  const pageStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '200px',
    alignItems: 'center',
    fontSize: '3.5rem',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: 'transparent',
    color: '#333',
    fontWeight: 'bold',
    zIndex: 1, // Higher z-index to sit above the background
    position: 'relative', // Ensure it sits on top of the background
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
        .blinking-cursor {
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

        .button1, .button2 {
          transition: all 0.3s ease;
        }

        .button1:hover {
          background-color: #a00000; /* Darker maroon color */
        }

        .button2:hover {
          background-color: #f0f0f0; /* Light gray color */
          color: #a00000; /* Darker maroon color */
        }
      `}</style>

      <div style={{ display: 'flex' }}>
        <button ref={button1Ref} className="button1" style={buttonStyle1}>
          Free Custom Design
        </button>
        <button ref={button2Ref} className="button2" style={buttonStyle2}>
          How it Works
        </button>
      </div>

    </main>
  );
};

const buttonStyle1 = {
  backgroundColor: '#8B0000',
  color: 'white',
  padding: '12px 24px',
  border: 'none',
  borderRadius: '5px',
  fontSize: '18px',
  cursor: 'pointer',
  margin: '10px',
  fontFamily: "'Arial', sans-serif",
  fontWeight: 'bold',
  textTransform: 'uppercase',
  outline: 'none',
  zIndex: 1, // Higher z-index for the button to ensure it sits above other content
  position: 'relative',
};

const buttonStyle2 = {
  backgroundColor: 'white',
  color: '#800000',
  padding: '12px 24px',
  border: '2px solid #ccc',
  borderRadius: '5px',
  fontSize: '18px',
  cursor: 'pointer',
  margin: '10px',
  fontFamily: "'Arial', sans-serif",
  fontWeight: 'bold',
  textTransform: 'uppercase',
  outline: 'none',
  zIndex: 1, // Higher z-index for the button to ensure it sits above other content
  position: 'relative',
};

export default Service;
