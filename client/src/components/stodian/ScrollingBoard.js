import React, { useEffect, useRef, useState, useCallback } from 'react';
import './ScrollingBoard.css';

const floorplans = [
  { title: "MEP Floorplans for Commercial Spaces", description: "Explore detailed MEP floorplans for commercial buildings, tailored for optimal efficiency.", access: "Website", buildingType: "Commercial", cost: "$19.99 / month" },
  { title: "MEP Floorplans for Residential Buildings", description: "Discover comprehensive MEP floorplans designed for residential projects, ensuring comfort and sustainability.", access: "Mobile App", buildingType: "Residential", cost: "$14.99 / month" },
  { title: "MEP Floorplans for Industrial Facilities", description: "Gain access to MEP floorplans tailored for industrial facilities, focusing on robust and efficient designs.", access: "Desktop Software", buildingType: "Industrial", cost: "$29.99 / month" },
  { title: "MEP Floorplans for Healthcare Environments", description: "View MEP floorplans specifically designed for healthcare settings, emphasizing safety and compliance.", access: "Website", buildingType: "Healthcare", cost: "$24.99 / month" },
  { title: "MEP Floorplans for Educational Institutions", description: "Access MEP floorplans for educational buildings, designed to support a conducive learning environment.", access: "Mobile App", buildingType: "Educational", cost: "$17.99 / month" },
  { title: "MEP Floorplans for Retail Spaces", description: "Explore MEP floorplans for retail environments, focusing on energy efficiency and customer experience.", access: "Website", buildingType: "Retail", cost: "$19.99 / month" },
  { title: "MEP Floorplans for Hospitality Venues", description: "Discover MEP floorplans designed for hospitality venues, ensuring guest comfort and operational efficiency.", access: "Desktop Software", buildingType: "Hospitality", cost: "$22.99 / month" },
  { title: "MEP Floorplans for Sports Facilities", description: "Gain access to MEP floorplans for sports facilities, tailored to meet the demands of athletic environments.", access: "Website", buildingType: "Sports", cost: "$27.99 / month" },
  { title: "MEP Floorplans for Transportation Hubs", description: "View MEP floorplans for transportation hubs, focusing on seamless integration and passenger flow.", access: "Mobile App", buildingType: "Transportation", cost: "$25.99 / month" }
];

const ScrollingBoard = () => {
  const [current, setCurrent] = useState(floorplans.length);
  const length = floorplans.length;
  const scrollingBoardRef = useRef(null);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => prev + 1);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => prev - 1);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  useEffect(() => {
    const handleTransitionEnd = () => {
      if (scrollingBoardRef.current) {
        if (current >= length * 2) {
          scrollingBoardRef.current.style.transition = 'none';
          setCurrent(length);
        } else if (current < length) {
          scrollingBoardRef.current.style.transition = 'none';
          setCurrent(length * 2 - 1);
        }
      }
    };

    const scrollingBoard = scrollingBoardRef.current;
    scrollingBoard.addEventListener('transitionend', handleTransitionEnd);

    return () => {
      scrollingBoard.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, [current, length]);

  useEffect(() => {
    if (scrollingBoardRef.current) {
      const activeElement = scrollingBoardRef.current.querySelector('.floorplan.active');
      if (activeElement) {
        const { offsetLeft, offsetWidth } = activeElement;
        const containerWidth = scrollingBoardRef.current.offsetWidth;
        const translateX = offsetLeft - (containerWidth / 2) + (offsetWidth / 2);
        scrollingBoardRef.current.style.transition = 'transform 0.5s ease-in-out';
        scrollingBoardRef.current.style.transform = `translateX(-${translateX}px)`;
      }
    }
  }, [current]);

  const getClassNames = (index) => {
    const adjustedIndex = (index - current + length * 2) % length;

    switch (adjustedIndex) {
      case 0:
        return 'floorplan active';
      case 1:
      case length - 1:
        return 'floorplan left';
      case 2:
      case length - 2:
        return 'floorplan far-left';
      case 3:
      case length - 3:
        return 'floorplan far-far-left';
      case 4:
      case length - 4:
        return 'floorplan far-far-far-left';
      default:
        return 'floorplan';
    }
  };

  return (
    <div className="scrolling-container">
      <button className="nav-button left" onClick={prevSlide}>❮</button>
      <div className="scrolling-board-wrapper">
        <div className="scrolling-board" ref={scrollingBoardRef}>
          {[...floorplans, ...floorplans, ...floorplans].map((floorplan, index) => (
            <div className={getClassNames(index)} key={index}>
              <h3>{floorplan.title}</h3>
              <p>{floorplan.description}</p>
              <p><strong>Access to</strong>: {floorplan.access}</p>
              <p className="building-type">{floorplan.buildingType}</p>
              <p className="cost">{floorplan.cost}</p>
            </div>
          ))}
        </div>
      </div>
      <button className="nav-button right" onClick={nextSlide}>❯</button>
    </div>
  );
};

export default ScrollingBoard;
