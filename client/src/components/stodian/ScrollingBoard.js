// src/ScrollingBoard.js
import React, { useEffect, useRef, useState } from 'react';
import './ScrollingBoard.css';

const floorplans = [
  { title: "Oscar's Cooking Club", description: "A culinary community for food enthusiasts to share recipes, cooking tips, and delicious creations.", access: "Discord", buildingType: "Restaurant", cost: "$8.99 / month" },
  { title: "Luna's Nature Explorers", description: "Connect with nature enthusiasts, share outdoor adventures, and learn about the wonders of the natural world.", access: "WhatsApp", buildingType: "Park", cost: "$7.99 / month" },
  { title: "Jacob's Dev Club", description: "The sickest dev community on the planet for people that love building.", access: "Discord", buildingType: "Office", cost: "$7.99 / month" },
  { title: "Eva's Design Collective", description: "Dive into the world of design with fellow enthusiasts.", access: "WhatsApp", buildingType: "Studio", cost: "$9.99 / month" }
];

const ScrollingBoard = () => {
  const [current, setCurrent] = useState(0);
  const length = floorplans.length;
  const scrollingBoardRef = useRef(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + length) % length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollingBoardRef.current) {
      const activeElement = scrollingBoardRef.current.querySelector('.floorplan.active');
      if (activeElement) {
        const { offsetLeft, offsetWidth } = activeElement;
        const containerWidth = scrollingBoardRef.current.offsetWidth;
        const translateX = offsetLeft - (containerWidth / 2) + (offsetWidth / 2);
        scrollingBoardRef.current.style.transform = `translateX(-${translateX}px)`;
      }
    }
  }, [current]);

  return (
    <div className="scrolling-container">
      <button className="nav-button left" onClick={prevSlide}>❮</button>
      <div className="scrolling-board-wrapper">
        <div className="scrolling-board" ref={scrollingBoardRef}>
          {[...floorplans, ...floorplans].map((floorplan, index) => (
            <div className={index % length === current ? "floorplan active" : "floorplan"} key={index}>
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
