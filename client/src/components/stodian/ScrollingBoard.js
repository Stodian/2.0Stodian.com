import React from 'react';
import './ScrollingBoard.css';

const floorplans = [
  'Floorplan 1',
  'Floorplan 2',
  'Floorplan 3',
  'Floorplan 4',
  'Floorplan 5'
  // Add more floorplans as needed
];

const ScrollingBoard = () => {
  return (
    <div className="scrolling-board">
      {floorplans.map((floorplan, index) => (
        <div className="floorplan" key={index}>
          {floorplan}
        </div>
      ))}
    </div>
  );
};

export default ScrollingBoard;