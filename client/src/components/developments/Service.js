import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import './Timeline.css';

const Timeline = () => {
  const [progress, setProgress] = useState(0);

  const handleScroll = () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress = (window.scrollY / totalHeight) * 100;
    setProgress(scrollProgress);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="timeline-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      <div className="timeline">
        {Array.from({ length: 5 }).map((_, idx) => (
          <div key={idx} className="timeline-item" id={`step${idx + 1}`}>
            <div className="timeline-content">
              <h2>Step {idx + 1}</h2>
              <p>Details of step {idx + 1}...</p>
            </div>
          </div>
        ))}
      </div>
      <div className="timeline-controls">
        {Array.from({ length: 5 }).map((_, idx) => (
          <Link key={idx} to={`step${idx + 1}`} smooth={true} duration={500} className="control-button">
            Step {idx + 1}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
