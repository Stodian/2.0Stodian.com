// ItineraryComponent.jsx
import React, { useState, useEffect, useRef, useCallback } from 'react';

const ItineraryComponent = () => {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const observer = useRef();

  useEffect(() => {
    const fetchData = async () => {
      // Simulate fetching data from an API
      const newItems = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(Array.from({ length: 10 }, (_, i) => `Item ${i + 1 + (page - 1) * 10}`));
        }, 1000);
      });
      
      setItems((prevItems) => [...prevItems, ...newItems]);
      if (newItems.length < 10) setHasMore(false);
    };

    fetchData();
  }, [page]);

  const lastItemRef = useCallback((node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setPage((prevPage) => prevPage + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, [hasMore]);

  return (
    <div>
      <h1>Itinerary</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index} ref={index === items.length - 1 ? lastItemRef : null}>
            {item}
          </li>
        ))}
      </ul>
      {hasMore && <p>Loading more items...</p>}
    </div>
  );
};

export default ItineraryComponent;
