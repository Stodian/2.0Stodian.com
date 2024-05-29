import React, { useEffect, useRef, useState, useCallback } from 'react';
import './ScrollingBoard.css';

const floorplans = [
  { image: require("../../../../client/src/assets/icons/images/MEP1.webp") },
  { image: require("../../../../client/src/assets/icons/images/MEP1.webp") },
  { image: require("../../../../client/src/assets/icons/images/MEP1.webp") },
  { image: require("../../../../client/src/assets/icons/images/MEP1.webp") },
  { image: require("../../../../client/src/assets/icons/images/MEP1.webp") },
  { image: require("../../../../client/src/assets/icons/images/MEP1.webp") },
  { image: require("../../../../client/src/assets/icons/images/MEP1.webp") },
  { image: require("../../../../client/src/assets/icons/images/MEP1.webp") },
  { image: require("../../../../client/src/assets/icons/images/MEP1.webp") },
  { image: require("../../../../client/src/assets/icons/images/MEP1.webp") },
  { image: require("../../../../client/src/assets/icons/images/MEP1.webp") },
  { image: require("../../../../client/src/assets/icons/images/MEP1.webp") },
  { image: require("../../../../client/src/assets/icons/images/MEP1.webp") },
  { image: require("../../../../client/src/assets/icons/images/MEP1.webp") },
  { image: require("../../../../client/src/assets/icons/images/MEP1.webp") },
  { image: require("../../../../client/src/assets/icons/images/MEP1.webp") },
  { image: require("../../../../client/src/assets/icons/images/MEP1.webp") },
  { image: require("../../../../client/src/assets/icons/images/MEP1.webp") },
  { image: require("../../../../client/src/assets/icons/images/MEP1.webp") },
  { image: require("../../../../client/src/assets/icons/images/MEP1.webp") },
  { image: require("../../../../client/src/assets/icons/images/MEP1.webp") },
  { image: require("../../../../client/src/assets/icons/images/MEP1.webp") },
  { image: require("../../../../client/src/assets/icons/images/MEP1.webp") },
  { image: require("../../../../client/src/assets/icons/images/MEP1.webp") },
  { image: require("../../../../client/src/assets/icons/images/MEP1.webp") },
  { image: require("../../../../client/src/assets/icons/images/MEP1.webp") },
  { image: require("../../../../client/src/assets/icons/images/MEP1.webp") },
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
              <img src={floorplan.image} alt={`Floorplan ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <button className="nav-button right" onClick={nextSlide}>❯</button>
    </div>
  );
};

export default ScrollingBoard;
