import React, { useEffect, useState } from 'react';
import './Product.css';
import Picture from '../../Picture/Image.png';
import Add from '../../Picture/add.png';
import axios from 'axios';
import { Rate } from 'antd';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../Redux/cartSlice';

function Product() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.product.products);

  const handleAddToCart = (id) => {
    const result = products.find((item) => item.id === id);
    dispatch(addToCart(result));
  };

  return (
    <div className="row">
      {products.map((product) => {
        return (
          <div className="col-4 " key={product.id}>
            <div className="product-overview">
              <Link to={`/detail-product/${product.id}`}>
                <img className="imgProduct" src={Picture} alt="" />
              </Link>
              <div className="info-product">
                <span className="left">
                  <div className="name-product">{product.name}</div>
                  <div className="category">{product.category}</div>
                  <div className="rating">
                    <Rate value={product.rating} disabled />
                  </div>
                </span>
                <span className="right price-product">
                  <div className="price">${product.price}</div>
                  <div className="add-to-cart">
                    <button
                      className="add"
                      onClick={() => handleAddToCart(product.id)}
                    >
                      <img className="btn-add" src={Add} alt="" />
                    </button>
                  </div>
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Product;
