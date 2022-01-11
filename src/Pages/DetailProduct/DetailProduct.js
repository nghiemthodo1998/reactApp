import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TopNav from '../../Components/TopNav/TopNav';
import './DetailProduct.css';
import Picture from '../../Picture/Image.png';
import axios from 'axios';
import { Button, Rate } from 'antd';

const DetailProduct = () => {
  const { id } = useParams();

  const [detailProduct, setDetailProduct] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8000/products/${id}`).then((res) => {
      setDetailProduct(res.data);
    });
  }, [id]);

  return (
    <div className="detailProduct-view row">
      <div className="col-6">
        <img src={Picture} alt="" />
      </div>
      <div className="col-6 detail-product">
        <h3>{detailProduct.name}</h3>
        <h5>{detailProduct.category}</h5>
        <Rate value={detailProduct.rating} disabled />
        <h5>${detailProduct.price}</h5>
        <Button type="primary">Add to cart</Button>
      </div>
    </div>
  );
};

export default DetailProduct;
