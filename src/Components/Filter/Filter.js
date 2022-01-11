import React from 'react';
import './Filter.css';

function Filter() {
  return (
    <span>
      <select className="select-filter" defaultValue="0">
        <option value="0">Best match</option>
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
    </span>
  );
}

export default Filter;
