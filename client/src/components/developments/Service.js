import React, { useState, useEffect, useRef } from 'react';
import './Timeline.css';

const steps = [
  { title: "Phase 1", content: "Submit Your Floor Plans: Start by sending us your detailed floor plans. Ensure they include all necessary architectural elements and dimensions for accurate assessment." },
  { title: "Phase 2", content: "Initial Consultation: Our team will review your floor plans and schedule a consultation to discuss your specific requirements, preferences, and any constraints." },
  { title: "Phase 3", content: "Preliminary Design: Based on the consultation, we will create a preliminary MEP layout. This includes initial placements of mechanical, electrical, and plumbing systems." },
  { title: "Phase 4", content: "Feedback and Revisions: You will review the preliminary design and provide feedback. We will make necessary revisions to ensure the layout meets all your requirements and expectations." },
  { title: "Phase 5", content: "Final MEP Layout: After incorporating your feedback, we will finalize the MEP layout and send you the complete, fully designed MEP plans ready for implementation." }
];

const Timeline = () => {
  const [progress, setProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(0);
  const scrollContainerRef = useRef(null);

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    const totalHeight = container.scrollHeight - container.clientHeight;
    const scrollProgress = (container.scrollTop / totalHeight) * 100;
    setProgress(scrollProgress);

    const phaseHeight = container.clientHeight;
    const currentPhase = Math.floor(container.scrollTop / phaseHeight);
    setCurrentPhase(currentPhase);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (idx) => {
    const phaseElement = document.getElementById(`step${idx + 1}`);
    if (phaseElement) {
      phaseElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="timeline-component">
      <div className="timeline-container" ref={scrollContainerRef}>
        <div className="progress-container">
          <div className="progress-bar" style={{ height: `${progress}%` }}></div>
          <div className="progress-steps">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className={`progress-step ${currentPhase === idx ? 'active' : ''}`}
                onClick={() => handleClick(idx)}
                style={{ top: `${(idx / steps.length) * 100}%` }}
              >
                {`Phase ${idx + 1}`}
              </div>
            ))}
          </div>
        </div>
        <div className="timeline">
          {steps.map((step, idx) => (
            <div key={idx} className="timeline-item" id={`step${idx + 1}`}>
              <div className="timeline-content">
                <h2>{step.title}</h2>
                <p>{step.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
