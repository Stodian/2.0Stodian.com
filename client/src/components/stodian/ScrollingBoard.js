// src/ScrollingBoard.js
import React, { useEffect, useRef } from 'react';
import './ScrollingBoard.css';

const floorplans = [
  { title: "Oscar's Cooking Club", description: "A culinary community for food enthusiasts to share recipes, cooking tips, and delicious creations.", access: "Discord", price: "$8.99 / month" },
  { title: "Luna's Nature Explorers", description: "Connect with nature enthusiasts, share outdoor adventures, and learn about the wonders of the natural world.", access: "WhatsApp", price: "$7.99 / month" },
  { title: "Jacob's Dev Club", description: "The sickest dev community on the planet for people that love building.", access: "Discord", price: "$7.99 / month" },
  { title: "Eva's Design Collective", description: "Dive into the world of design with fellow enthusiasts.", access: "WhatsApp", price: "$9.99 / month" }
  // Add more floorplans as needed
];

const ScrollingBoard = () => {
  const scrollingBoardRef = useRef(null);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (scrollingBoardRef.current) {
        scrollingBoardRef.current.scrollLeft += 2;

        // Check if we've reached the end of the scroll
        if (scrollingBoardRef.current.scrollLeft >= scrollingBoardRef.current.scrollWidth / 2) {
          scrollingBoardRef.current.scrollLeft = 0;
        }
      }
    }, 20);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="scrolling-container">
      <div className="scrolling-board" ref={scrollingBoardRef}>
        {[...floorplans, ...floorplans].map((floorplan, index) => (
          <div className="floorplan" key={index}>
            <h3>{floorplan.title}</h3>
            <p>{floorplan.description}</p>
            <p><strong>Access to</strong>: {floorplan.access}</p>
            <button className="subscribe-button">Subscribe. {floorplan.price}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingBoard;
