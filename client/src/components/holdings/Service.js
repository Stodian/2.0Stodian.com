import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Service.css';

const initialItems = [
  { title: 'Item 1', description: 'Description for item 1', category: 'Category 1', rating: 95, image: 'https://via.placeholder.com/150' },
  { title: 'Item 2', description: 'Description for item 2', category: 'Category 2', rating: 88, image: 'https://via.placeholder.com/150' },
  { title: 'Item 3', description: 'Description for item 3', category: 'Category 3', rating: 72, image: 'https://via.placeholder.com/150' },
  { title: 'Item 4', description: 'Description for item 4', category: 'Category 1', rating: 81, image: 'https://via.placeholder.com/150' },
  { title: 'Item 5', description: 'Description for item 5', category: 'Category 2', rating: 67, image: 'https://via.placeholder.com/150' },
  { title: 'Item 6', description: 'Description for item 6', category: 'Category 3', rating: 90, image: 'https://via.placeholder.com/150' },
  { title: 'Item 7', description: 'Description for item 7', category: 'Category 1', rating: 76, image: 'https://via.placeholder.com/150' },
  { title: 'Item 8', description: 'Description for item 8', category: 'Category 2', rating: 85, image: 'https://via.placeholder.com/150' },
  { title: 'Item 9', description: 'Description for item 9', category: 'Category 3', rating: 73, image: 'https://via.placeholder.com/150' },
  { title: 'Item 10', description: 'Description for item 10', category: 'Category 1', rating: 92, image: 'https://via.placeholder.com/150' },
  // Add more items as needed
];

const ItineraryComponent = () => {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const itemsPerPage = 3; // Number of items to load per scroll
  const observer = useRef();

  useEffect(() => {
    const loadItems = () => {
      const start = (page - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      const newItems = initialItems.slice(start, end);

      setItems((prevItems) => [...prevItems, ...newItems]);
      if (newItems.length < itemsPerPage) setHasMore(false);
    };

    loadItems();
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
      <h1 className="title">Itinerary</h1>
      <div className="itinerary-container">
        {items.map((item, index) => (
          <div
            key={index}
            ref={index === items.length - 1 ? lastItemRef : null}
            className="card"
          >
            <img src={item.image} alt={item.title} className="card-image" />
            <div className="card-content">
              <h2 className="card-title">{item.title}</h2>
              <p className="card-description">{item.description}</p>
              <p><strong>Category:</strong> {item.category}</p>
              <p><strong>Rating:</strong> {item.rating}</p>
            </div>
          </div>
        ))}
      </div>
      {hasMore && <p className="loading">Loading more items...</p>}
    </div>
  );
};

export default ItineraryComponent;
