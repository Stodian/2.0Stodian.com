import React, { useState, useEffect, useRef, useCallback, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Items.css';

gsap.registerPlugin(ScrollTrigger);

const initialItems = [
  { partNumber: 'HVAC001', title: 'HVAC Unit', description: 'High-efficiency HVAC unit for climate control', category: 'HVAC', rating: 95, manufacturer: 'ACME Corp', image: require('../../../../client/src/assets/icons/electrical/switched_twin_outlet.png'), hoverImage: require('../../../../client/src/assets/icons/electrical/2d_outlet.png') },
  { partNumber: 'ELEC001', title: 'Lighting System', description: 'LED lighting system with automated controls', category: 'Electrical', rating: 88, manufacturer: 'Bright Lights Inc', image: require('../../../../client/src/assets/icons/electrical/switched_twin_outlet.png') },
  { partNumber: 'SAFE001', title: 'Fire Alarm', description: 'State-of-the-art fire detection and alarm system', category: 'Safety', rating: 92, manufacturer: 'Safety First', image: require('../../../../client/src/assets/icons/electrical/switched_twin_outlet.png') },
  { partNumber: 'PLMB001', title: 'Water Heater', description: 'Tankless water heater for instant hot water', category: 'Plumbing', rating: 90, manufacturer: 'Hot Water Solutions', image: require('../../../../client/src/assets/icons/electrical/switched_twin_outlet.png') },
  { partNumber: 'RENE001', title: 'Solar Panels', description: 'High-efficiency solar panels for renewable energy', category: 'Renewables', rating: 89, manufacturer: 'Green Energy', image: require('../../../../client/src/assets/icons/electrical/switched_twin_outlet.png') },
  { partNumber: 'SECU001', title: 'Security Cameras', description: 'Surveillance cameras with night vision', category: 'Security', rating: 85, manufacturer: 'Secure Vision', image: require('../../../../client/src/assets/icons/electrical/switched_twin_outlet.png') },
  { partNumber: 'SAFE002', title: 'Smoke Detectors', description: 'Advanced smoke detectors for early warning', category: 'Safety', rating: 86, manufacturer: 'Safety First', image: require('../../../../client/src/assets/icons/electrical/switched_twin_outlet.png') },
  { partNumber: 'HVAC002', title: 'Thermostat', description: 'Smart thermostat with remote control', category: 'HVAC', rating: 84, manufacturer: 'Comfort Control', image: require('../../../../client/src/assets/icons/electrical/switched_twin_outlet.png') },
  { partNumber: 'ELEC002', title: 'Power Backup', description: 'Uninterruptible power supply (UPS) system', category: 'Electrical', rating: 83, manufacturer: 'Reliable Power', image: require('../../../../client/src/assets/icons/electrical/switched_twin_outlet.png') },
  { partNumber: 'PLMB002', title: 'Water Pump', description: 'High-efficiency water pump for reliable water supply', category: 'Plumbing', rating: 82, manufacturer: 'AquaFlow', image: require('../../../../client/src/assets/icons/electrical/switched_twin_outlet.png') },
  { partNumber: 'HVAC001', title: 'HVAC Unit', description: 'High-efficiency HVAC unit for climate control', category: 'HVAC', rating: 95, manufacturer: 'ACME Corp', image: require('../../../../client/src/assets/icons/electrical/switched_twin_outlet.png') },
  { partNumber: 'ELEC001', title: 'Lighting System', description: 'LED lighting system with automated controls', category: 'Electrical', rating: 88, manufacturer: 'Bright Lights Inc', image: require('../../../../client/src/assets/icons/electrical/switched_twin_outlet.png') },
  { partNumber: 'SAFE001', title: 'Fire Alarm', description: 'State-of-the-art fire detection and alarm system', category: 'Safety', rating: 92, manufacturer: 'Safety First', image: require('../../../../client/src/assets/icons/electrical/switched_twin_outlet.png') },
  { partNumber: 'PLMB001', title: 'Water Heater', description: 'Tankless water heater for instant hot water', category: 'Plumbing', rating: 90, manufacturer: 'Hot Water Solutions', image: require('../../../../client/src/assets/icons/electrical/switched_twin_outlet.png') },
  { partNumber: 'RENE001', title: 'Solar Panels', description: 'High-efficiency solar panels for renewable energy', category: 'Renewables', rating: 89, manufacturer: 'Green Energy', image: require('../../../../client/src/assets/icons/electrical/switched_twin_outlet.png') },
  { partNumber: 'SECU001', title: 'Security Cameras', description: 'Surveillance cameras with night vision', category: 'Security', rating: 85, manufacturer: 'Secure Vision', image: require('../../../../client/src/assets/icons/electrical/switched_twin_outlet.png') },
  { partNumber: 'SAFE002', title: 'Smoke Detectors', description: 'Advanced smoke detectors for early warning', category: 'Safety', rating: 86, manufacturer: 'Safety First', image: require('../../../../client/src/assets/icons/electrical/switched_twin_outlet.png') },
  { partNumber: 'HVAC002', title: 'Thermostat', description: 'Smart thermostat with remote control', category: 'HVAC', rating: 84, manufacturer: 'Comfort Control', image: require('../../../../client/src/assets/icons/electrical/switched_twin_outlet.png') },
  { partNumber: 'ELEC002', title: 'Power Backup', description: 'Uninterruptible power supply (UPS) system', category: 'Electrical', rating: 83, manufacturer: 'Reliable Power', image: require('../../../../client/src/assets/icons/electrical/switched_twin_outlet.png') },
  { partNumber: 'PLMB002', title: 'Water Pump', description: 'High-efficiency water pump for reliable water supply', category: 'Plumbing', rating: 82, manufacturer: 'AquaFlow', image: require('../../../../client/src/assets/icons/electrical/switched_twin_outlet.png') },
  { partNumber: 'HVAC001', title: 'HVAC Unit', description: 'High-efficiency HVAC unit for climate control', category: 'HVAC', rating: 95, manufacturer: 'ACME Corp', image: require('../../../../client/src/assets/icons/electrical/switched_twin_outlet.png') },
  { partNumber: 'ELEC001', title: 'Lighting System', description: 'LED lighting system with automated controls', category: 'Electrical', rating: 88, manufacturer: 'Bright Lights Inc', image: require('../../../../client/src/assets/icons/electrical/switched_twin_outlet.png') },
  { partNumber: 'SAFE001', title: 'Fire Alarm', description: 'State-of-the-art fire detection and alarm system', category: 'Safety', rating: 92, manufacturer: 'Safety First', image: require('../../../../client/src/assets/icons/electrical/switched_twin_outlet.png') },
  { partNumber: 'PLMB001', title: 'Water Heater', description: 'Tankless water heater for instant hot water', category: 'Plumbing', rating: 90, manufacturer: 'Hot Water Solutions', image: 'https://via.placeholder.com/150' },
  { partNumber: 'RENE001', title: 'Solar Panels', description: 'High-efficiency solar panels for renewable energy', category: 'Renewables', rating: 89, manufacturer: 'Green Energy', image: 'https://via.placeholder.com/150' },
  { partNumber: 'SECU001', title: 'Security Cameras', description: 'Surveillance cameras with night vision', category: 'Security', rating: 85, manufacturer: 'Secure Vision', image: 'https://via.placeholder.com/150' },
  { partNumber: 'SAFE002', title: 'Smoke Detectors', description: 'Advanced smoke detectors for early warning', category: 'Safety', rating: 86, manufacturer: 'Safety First', image: 'https://via.placeholder.com/150' },
  { partNumber: 'HVAC002', title: 'Thermostat', description: 'Smart thermostat with remote control', category: 'HVAC', rating: 84, manufacturer: 'Comfort Control', image: 'https://via.placeholder.com/150' },
  { partNumber: 'ELEC002', title: 'Power Backup', description: 'Uninterruptible power supply (UPS) system', category: 'Electrical', rating: 83, manufacturer: 'Reliable Power', image: 'https://via.placeholder.com/150' },
  { partNumber: 'PLMB002', title: 'Water Pump', description: 'High-efficiency water pump for reliable water supply', category: 'Plumbing', rating: 82, manufacturer: 'AquaFlow', image: 'https://via.placeholder.com/150' },
  { partNumber: 'HVAC001', title: 'HVAC Unit', description: 'High-efficiency HVAC unit for climate control', category: 'HVAC', rating: 95, manufacturer: 'ACME Corp', image: 'https://via.placeholder.com/150' },
  { partNumber: 'ELEC001', title: 'Lighting System', description: 'LED lighting system with automated controls', category: 'Electrical', rating: 88, manufacturer: 'Bright Lights Inc', image: 'https://via.placeholder.com/150' },
  { partNumber: 'SAFE001', title: 'Fire Alarm', description: 'State-of-the-art fire detection and alarm system', category: 'Safety', rating: 92, manufacturer: 'Safety First', image: 'https://via.placeholder.com/150' },
  { partNumber: 'PLMB001', title: 'Water Heater', description: 'Tankless water heater for instant hot water', category: 'Plumbing', rating: 90, manufacturer: 'Hot Water Solutions', image: 'https://via.placeholder.com/150' },
  { partNumber: 'RENE001', title: 'Solar Panels', description: 'High-efficiency solar panels for renewable energy', category: 'Renewables', rating: 89, manufacturer: 'Green Energy', image: 'https://via.placeholder.com/150' },
  { partNumber: 'SECU001', title: 'Security Cameras', description: 'Surveillance cameras with night vision', category: 'Security', rating: 85, manufacturer: 'Secure Vision', image: 'https://via.placeholder.com/150' },
  { partNumber: 'SAFE002', title: 'Smoke Detectors', description: 'Advanced smoke detectors for early warning', category: 'Safety', rating: 86, manufacturer: 'Safety First', image: 'https://via.placeholder.com/150' },
  { partNumber: 'HVAC002', title: 'Thermostat', description: 'Smart thermostat with remote control', category: 'HVAC', rating: 84, manufacturer: 'Comfort Control', image: 'https://via.placeholder.com/150' },
  { partNumber: 'ELEC002', title: 'Power Backup', description: 'Uninterruptible power supply (UPS) system', category: 'Electrical', rating: 83, manufacturer: 'Reliable Power', image: 'https://via.placeholder.com/150' },
  { partNumber: 'PLMB002', title: 'Water Pump', description: 'High-efficiency water pump for reliable water supply', category: 'Plumbing', rating: 82, manufacturer: 'AquaFlow', image: 'https://via.placeholder.com/150' },
  { partNumber: 'HVAC001', title: 'HVAC Unit', description: 'High-efficiency HVAC unit for climate control', category: 'HVAC', rating: 95, manufacturer: 'ACME Corp', image: 'https://via.placeholder.com/150' },
  { partNumber: 'ELEC001', title: 'Lighting System', description: 'LED lighting system with automated controls', category: 'Electrical', rating: 88, manufacturer: 'Bright Lights Inc', image: 'https://via.placeholder.com/150' },
  { partNumber: 'SAFE001', title: 'Fire Alarm', description: 'State-of-the-art fire detection and alarm system', category: 'Safety', rating: 92, manufacturer: 'Safety First', image: 'https://via.placeholder.com/150' },
  { partNumber: 'PLMB001', title: 'Water Heater', description: 'Tankless water heater for instant hot water', category: 'Plumbing', rating: 90, manufacturer: 'Hot Water Solutions', image: 'https://via.placeholder.com/150' },
  { partNumber: 'RENE001', title: 'Solar Panels', description: 'High-efficiency solar panels for renewable energy', category: 'Renewables', rating: 89, manufacturer: 'Green Energy', image: 'https://via.placeholder.com/150' },
  { partNumber: 'SECU001', title: 'Security Cameras', description: 'Surveillance cameras with night vision', category: 'Security', rating: 85, manufacturer: 'Secure Vision', image: 'https://via.placeholder.com/150' },
  { partNumber: 'SAFE002', title: 'Smoke Detectors', description: 'Advanced smoke detectors for early warning', category: 'Safety', rating: 86, manufacturer: 'Safety First', image: 'https://via.placeholder.com/150' },
  { partNumber: 'HVAC002', title: 'Thermostat', description: 'Smart thermostat with remote control', category: 'HVAC', rating: 84, manufacturer: 'Comfort Control', image: 'https://via.placeholder.com/150' },
  { partNumber: 'ELEC002', title: 'Power Backup', description: 'Uninterruptible power supply (UPS) system', category: 'Electrical', rating: 83, manufacturer: 'Reliable Power', image: 'https://via.placeholder.com/150' },
  { partNumber: 'PLMB002', title: 'Water Pump', description: 'High-efficiency water pump for reliable water supply', category: 'Plumbing', rating: 82, manufacturer: 'AquaFlow', image: 'https://via.placeholder.com/150' },
  { partNumber: 'HVAC001', title: 'HVAC Unit', description: 'High-efficiency HVAC unit for climate control', category: 'HVAC', rating: 95, manufacturer: 'ACME Corp', image: 'https://via.placeholder.com/150' },
  { partNumber: 'ELEC001', title: 'Lighting System', description: 'LED lighting system with automated controls', category: 'Electrical', rating: 88, manufacturer: 'Bright Lights Inc', image: 'https://via.placeholder.com/150' },
  { partNumber: 'SAFE001', title: 'Fire Alarm', description: 'State-of-the-art fire detection and alarm system', category: 'Safety', rating: 92, manufacturer: 'Safety First', image: 'https://via.placeholder.com/150' },
  { partNumber: 'PLMB001', title: 'Water Heater', description: 'Tankless water heater for instant hot water', category: 'Plumbing', rating: 90, manufacturer: 'Hot Water Solutions', image: 'https://via.placeholder.com/150' },
  { partNumber: 'RENE001', title: 'Solar Panels', description: 'High-efficiency solar panels for renewable energy', category: 'Renewables', rating: 89, manufacturer: 'Green Energy', image: 'https://via.placeholder.com/150' },
  { partNumber: 'SECU001', title: 'Security Cameras', description: 'Surveillance cameras with night vision', category: 'Security', rating: 85, manufacturer: 'Secure Vision', image: 'https://via.placeholder.com/150' },
  { partNumber: 'SAFE002', title: 'Smoke Detectors', description: 'Advanced smoke detectors for early warning', category: 'Safety', rating: 86, manufacturer: 'Safety First', image: 'https://via.placeholder.com/150' },
  { partNumber: 'HVAC002', title: 'Thermostat', description: 'Smart thermostat with remote control', category: 'HVAC', rating: 84, manufacturer: 'Comfort Control', image: 'https://via.placeholder.com/150' },
  { partNumber: 'ELEC002', title: 'Power Backup', description: 'Uninterruptible power supply (UPS) system', category: 'Electrical', rating: 83, manufacturer: 'Reliable Power', image: 'https://via.placeholder.com/150' },
  { partNumber: 'PLMB002', title: 'Water Pump', description: 'High-efficiency water pump for reliable water supply', category: 'Plumbing', rating: 82, manufacturer: 'AquaFlow', image: 'https://via.placeholder.com/150' },
];

const Items = () => {
  const [filteredItems, setFilteredItems] = useState(initialItems);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const itemsPerPage = 21; // Number of items to load per scroll
  const observer = useRef();
  const [hoveredItem, setHoveredItem] = useState(null);
  const animationsInitialized = useRef(false);

  const [filters, setFilters] = useState({
    category: '',
    rating: '',
    manufacturer: '',
  });

  useEffect(() => {
    const loadItems = () => {
      const start = (page - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      const newItems = initialItems.slice(start, end);

      setFilteredItems((prevItems) => [...prevItems, ...newItems]);
      if (newItems.length < itemsPerPage) setHasMore(false);
    };

    loadItems();
  }, [page]);

  useLayoutEffect(() => {
    if (animationsInitialized.current) return;

    const animateItems = () => {
      const cards = document.querySelectorAll('.card');

      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              end: 'top 20%',
              scrub: true,
              toggleActions: 'play reverse play reverse',
              markers: false,
            },
          }
        );
      });
    };

    animateItems();
    animationsInitialized.current = true;

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      animationsInitialized.current = false;
    };
  }, [filteredItems]);

  const lastItemRef = useCallback((node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setPage((prevPage) => prevPage + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, [hasMore]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  useEffect(() => {
    const filtered = initialItems.filter((item) => {
      return (
        (filters.category === '' || item.category === filters.category) &&
        (filters.rating === '' || item.rating >= parseInt(filters.rating)) &&
        (filters.manufacturer === '' || item.manufacturer.toLowerCase().includes(filters.manufacturer.toLowerCase()))
      );
    });
    setFilteredItems(filtered);
  }, [filters]);

  return (
    <div>
      <div className="filter-container">
        <label>
          Category:
          <select name="category" onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="HVAC">HVAC</option>
            <option value="Electrical">Electrical</option>
            <option value="Safety">Safety</option>
            <option value="Plumbing">Plumbing</option>
            <option value="Renewables">Renewables</option>
            <option value="Security">Security</option>
          </select>
        </label>
        <label>
          Rating:
          <input
            type="number"
            name="rating"
            min="0"
            max="100"
            step="1"
            onChange={handleFilterChange}
            placeholder="Minimum Rating"
          />
        </label>
        <label>
          Manufacturer:
          <input
            type="text"
            name="manufacturer"
            onChange={handleFilterChange}
            placeholder="Manufacturer"
          />
        </label>
      </div>
      <div className="itinerary-container">
        {filteredItems.slice(0, page * itemsPerPage).map((item, index) => (
          <div
            key={index}
            ref={index === filteredItems.length - 1 ? lastItemRef : null}
            className="card"
            onMouseEnter={() => setHoveredItem(index)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className="card-image-container">
              <img src={item.image} alt={item.title} className={`card-image ${hoveredItem === index ? 'hidden' : ''}`} />
              {item.hoverImage && (
                <img src={item.hoverImage} alt={item.title} className={`card-image ${hoveredItem === index ? '' : 'hidden'}`} />
              )}
            </div>
            <div className="card-content">
              <h2 className="card-title">{item.title}</h2>
              <p><strong>Part Number:</strong> {item.partNumber}</p>
              <p className="card-description">{item.description}</p>
              <p><strong>Category:</strong> {item.category}</p>
              <p><strong>Rating:</strong> {item.rating}</p>
              <p><strong>Manufacturer:</strong> {item.manufacturer}</p>
            </div>
          </div>
        ))}
      </div>
      {hasMore && <p className="loading">Loading more items...</p>}
    </div>
  );
};

export default Items;