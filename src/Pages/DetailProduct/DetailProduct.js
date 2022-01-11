import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './DetailProduct.css';
import Picture from '../../Picture/Image.png';
import { Button, Rate } from 'antd';
import { useSelector } from 'react-redux';

const DetailProduct = () => {
  const { id } = useParams();
  const [detailProduct, setDetailProduct] = useState({});

  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    const getProductById = async () => {
      await products.forEach((product) => {
        if (product.id === +id) {
          setDetailProduct(product);
        }
      });
    };
    getProductById();
  }, [id, products]);

  const handleClick = () => {
    //
  };

  return (
    <div className="detailProduct-view row">
      <div className="col-8">
        <img src={Picture} alt="" />
      </div>
      <div className="col-4 detail-product">
        <h3>{detailProduct.name}</h3>
        <h5>{detailProduct.category}</h5>
        <Rate value={detailProduct.rating} disabled />
        <h5>${detailProduct.price}</h5>
        <Button type="primary" onClick={() => handleClick()}>
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default DetailProduct;
