import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddProduct.css';
import { Form, Input, Button, Select, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';

function AddProduct(props) {
  const [nameProduct, setNameProduct] = useState('');
  const [categoryProduct, setCategoryProduct] = useState('');
  const [ratingProduct, setRatingProduct] = useState('');
  const [priceProduct, setPriceProduct] = useState('');
  const [imageProduct, setImageProduct] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async () => {
    await axios
      .post('http://localhost:8000/products', {
        name: nameProduct,
        category: categoryProduct,
        rating: +ratingProduct,
        price: +priceProduct,
      })
      .then(() => {
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
            value={nameProduct}
            onChange={(e) => setNameProduct(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          label="Category"
          rules={[{ required: true, message: 'Please select category!' }]}
        >
          <Select
            required
            placeholder="Nhập loại sản phẩm"
            onChange={(e) => setCategoryProduct(e)}
          >
            {props.dataC.map((c) => {
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
            onChange={(e) => setRatingProduct(e)}
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
            value={priceProduct}
            onChange={(e) => setPriceProduct(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Upload listType="picture">
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default AddProduct;
