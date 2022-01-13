import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Search from '../../Picture/Search.png';
import { getSearchTerm } from '../../Redux/productSlice';
import Filter from '../Filter/Filter';

function SearchField(props) {
  const { setPriceRange } = props;
  const [searchTerm, setSearchTerm] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm('');
    setPriceRange(0);
    dispatch(getSearchTerm(searchTerm));
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
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
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
