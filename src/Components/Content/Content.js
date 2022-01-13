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
import { useSelector } from 'react-redux';

function Content() {
  const [priceRange, setPriceRange] = useState(0);

  const products = useSelector((state) => state.product.products);
  return (
    <>
      <SearchField setPriceRange={setPriceRange} />
      <div className="row">
        <div className="col-3">
          <h5>Filter By</h5>
          <div className="filter-overview">
            <Filter />
            <Filter />
            <Filter />
            <Slide setPriceRange={setPriceRange} priceRange={priceRange} />
          </div>
        </div>
        <div className="col-9">
          <Product priceRange={priceRange} />
          <Pagination
            // defaultCurrent={1}
            total={products.length}
            defaultPageSize={3}
            style={{ textAlign: 'center', paddingBottom: '50px' }}
          />
        </div>
      </div>
    </>
  );
}

export default Content;
