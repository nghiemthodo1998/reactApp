import React, { useState } from 'react';
import './Slide.css';

const Slide = () => {
  const [priceRange, setPriceRange] = useState(0);

  return (
    <div>
      <h4>Price Range: ${priceRange}</h4>
      <input
        className="input-price"
        type="range"
        min="0"
        max="10000"
        value={priceRange}
        onChange={(e) => setPriceRange(e.target.value)}
      />
      <div className="range-price">
        <span className="left">$0</span>
        <span className="right">$10000+</span>
      </div>
    </div>
  );
};

export default Slide;
