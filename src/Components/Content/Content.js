import React, { useState, useEffect } from 'react';
import Search from '../../Picture/Search.png';
import Logo from '../../Picture/logo.png';
import axios from 'axios';
import '../SearchField/SearchField.css';
import { Pagination } from 'antd';
import Product from '../Product/Product';
import './Content.css';
import Filter from '../Filter/Filter';
import Slide from '../Slide/Slide';
import SearchField from '../SearchField/SearchField';

function Content() {
  const [priceRange, setPriceRange] = useState(0);
  const [category, setCategory] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('0');

  useEffect(() => {
    axios
      .get('http://localhost:8000/categories')
      .then((res) => setCategory(res.data));
  }, []);
  return (
    <>
      <SearchField />
      <div className="row">
        <div className="col-3">
          <h5>Filter By</h5>
          <div className="filter-overview">
            <Filter />
            <Filter />
            <Filter />
            <Slide />
          </div>
        </div>
        <div className="col-9">
          <Product />
          <Pagination
            defaultCurrent={6}
            total={500}
            style={{ textAlign: 'center', paddingBottom: '50px' }}
          />
        </div>
      </div>
    </>
  );
}

export default Content;
