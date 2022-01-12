import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddProduct.css';
import { Form, Input, Button, Select, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../../Redux/productSlice';

const initialProduct = {
  name: '',
  category: '',
  count: 1,
  rating: '',
  price: '',
};

function AddProduct() {
  const [product, setProduct] = useState(initialProduct);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.category.categories);

  const handleSubmit = async (e) => {
    console.log(product);
    await axios
      .post('http://localhost:8000/products', {
        name: product.name,
        category: product.category,
        count: product.count,
        rating: product.rating,
        price: product.price,
      })
      .then(() => {
        dispatch(addProduct(product));
        navigate('/dashboard/products');
      });
  };

  return (
    <div>
      <Form layout="vertical">
        <Form.Item label="Name Product">
          <Input
            required
            placeholder="Nhập tên sản phẩm"
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
          />
        </Form.Item>
        <Form.Item
          label="Category"
          rules={[{ required: true, message: 'Please select category!' }]}
        >
          <Select
            required
            placeholder="Nhập loại sản phẩm"
            onChange={(e) => setProduct({ ...product, category: e })}
          >
            {categories.map((c) => {
              return (
                <Select.Option key={c.id} value={c.name}>
                  {c.category}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>

        <Form.Item
          label="Rating"
          rules={[{ required: true, message: 'Please select rating!' }]}
        >
          <Select
            placeholder="Đánh giá về sản phẩm"
            onChange={(e) => setProduct({ ...product, rating: +e })}
            required
          >
            <Select.Option value={5}>Rất tốt</Select.Option>
            <Select.Option value={4}>Tốt</Select.Option>
            <Select.Option value={3}>Bình thường</Select.Option>
            <Select.Option value={2}>Tệ</Select.Option>
            <Select.Option value={1}>Rất tệ</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Price">
          <Input
            required
            placeholder="Giá tiền của sản phẩm"
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: +e.target.value })}
          />
        </Form.Item>
        <Form.Item>
          <Upload listType="picture">
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={() => handleSubmit()}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default AddProduct;
