import React, { useEffect, useState } from 'react';
import { Table, Tag, Space, Button, Image, Rate } from 'antd';
import axios from 'axios';
import Title from 'antd/lib/typography/Title';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ListProducts() {
  const [loading, setLoading] = useState(false);
  const products = useSelector((state) => state.product.products);

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:8000/products/${id}`).then(() => {
      alert(`Đã xóa sản phẩm ${id}`);
      setLoading(!loading);
    });
  };

  const columns = [
    {
      title: 'STT',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Rating',
      dataIndex: 'rating',
      key: 'rating',
      render: (rating) => <Rate value={rating} disabled />,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (price) => <Title level={5}>${price}</Title>,
    },
    {
      title: 'Image',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Action',
      dataIndex: 'id',
      key: 'id',
      render: (id) => {
        return (
          <>
            <Button type="primary" className="mr-1">
              <NavLink end to={`edit-product/${id}`}>
                Sửa
              </NavLink>
            </Button>
            <Button type="primary" danger onClick={() => deleteProduct(id)}>
              Xóa
            </Button>
          </>
        );
      },
    },
  ];
  return (
    <div>
      List Products
      <Table rowKey={'id'} dataSource={products} columns={columns} />;
    </div>
  );
}

export default ListProducts;
