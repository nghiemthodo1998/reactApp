import React from 'react';
import { Table, Button, Rate } from 'antd';
import './Cart.css';
import Title from 'antd/lib/typography/Title';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deteleProductCart, decreaseCount } from '../../Redux/cartSlice';

const Cart = () => {
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
              onClick={() => {
                console.log(record);
                dispatch(decreaseCount(record));
              }}
            >
              -
            </button>
            <span className="count">{record.count}</span>
            <button>+</button>
          </>
        );
      },
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      align: 'center',
      render: (price) => <Title level={5}>${price}</Title>,
    },

    {
      title: 'Action',
      dataIndex: 'id',
      key: 'id',
      align: 'center',
      render: (id) => {
        return (
          <>
            <Button type="primary" className="mr-1">
              <NavLink end to={`edit-product/${id}`}>
                Sửa
              </NavLink>
            </Button>
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
        rowKey={'id'}
        dataSource={cart}
        columns={columns}
        footer={() => 'Footer'}
      />
      ;
    </div>
  );
};

export default Cart;
