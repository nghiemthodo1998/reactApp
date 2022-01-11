import React, { useState } from 'react';
import Search from '../../Picture/Search.png';
import Filter from '../Filter/Filter';

function SearchField() {
  const [textSearch, setTextSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(textSearch);
    setTextSearch('');
  };

  return (
    <>
      <div className="row search">
        <form className="col-9">
          <div className="row">
            <span className="col-1">
              <button
                className="search-button"
                type="submit"
                onClick={(e) => handleSubmit(e)}
              >
                <img className="search-btn" src={Search} alt="" />
              </button>
            </span>
            <input
              className="search-input col-11"
              placeholder="Search..."
              value={textSearch}
              onChange={(e) => setTextSearch(e.target.value)}
            />
          </div>
        </form>
        <div className="col-3">
          <Filter />
        </div>
      </div>
    </>
  );
}

export default SearchField;
