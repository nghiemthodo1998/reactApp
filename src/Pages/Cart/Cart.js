import React, { useState } from 'react';
import { Table, Button, Rate } from 'antd';
import './Cart.css';
import Title from 'antd/lib/typography/Title';
import { useDispatch, useSelector } from 'react-redux';
import {
  deteleProductCart,
  decreaseCount,
  increaseCount,
} from '../../Redux/cartSlice';

const inititalPagination = {
  current: 2,
  pageSize: 2,
};

const Cart = () => {
  const [pagination, setPagination] = useState(inititalPagination);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Image',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      align: 'center',
    },
    {
      title: 'Rating',
      dataIndex: 'rating',
      key: 'rating',
      align: 'center',
      render: (rating) => <Rate value={rating} disabled />,
    },
    {
      title: 'Count',
      dataIndex: 'count',
      key: 'count',
      align: 'center',
      render: (text, record, index) => {
        return (
          <>
            <button
              disabled={record.count === 0}
              onClick={() => {
                dispatch(decreaseCount(record.id));
              }}
            >
              -
            </button>
            <span className="count">{record.count}</span>
            <button
              onClick={() => {
                dispatch(increaseCount(record.id));
              }}
            >
              +
            </button>
          </>
        );
      },
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      align: 'center',
      render: (text, record, index) => (
        <Title level={5}>${record.count * record.price}</Title>
      ),
    },

    {
      title: 'Action',
      dataIndex: 'id',
      key: 'id',
      align: 'center',
      render: (id) => {
        return (
          <>
            <Button
              type="primary"
              danger
              onClick={() => dispatch(deteleProductCart(id))}
            >
              Xóa
            </Button>
          </>
        );
      },
    },
  ];
  return (
    <div>
      Cart
      <Table
        className="table-overview"
        rowKey={'id'}
        dataSource={cart}
        columns={columns}
        // pagination={pagination}
        pagination={false}
      />
    </div>
  );
};

export default Cart;
