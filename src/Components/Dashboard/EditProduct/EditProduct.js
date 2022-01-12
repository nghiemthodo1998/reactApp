import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Select, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

function EditProduct() {
  const [dataEdit, setDataEdit] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  const categories = useSelector((state) => state.category.categories);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/products/${id}`)
      .then((res) => setDataEdit(res.data));
  }, [id]);

  const handleSubmit = () => {
    const editData = async () => {
      await axios.put(`http://localhost:8000/products/${id}`, {
        id: id,
        name: dataEdit.name,
        category: dataEdit.category,
        rating: dataEdit.rating,
        price: dataEdit.price,
      });
    };
    editData();
    navigate('/dashboard/products');
  };
  return (
    <div>
      <Form layout="vertical">
        <Form.Item label="Name Product">
          <Input
            required
            placeholder="Nhập tên sản phẩm"
            value={dataEdit.name}
            onChange={(e) => setDataEdit({ ...dataEdit, name: e.target.value })}
          />
        </Form.Item>
        <Form.Item
          label="Category"
          rules={[{ required: true, message: 'Please select category!' }]}
        >
          <Select
            required
            placeholder="Nhập loại sản phẩm"
            value={dataEdit.category}
            onChange={(e) => setDataEdit({ ...dataEdit, category: e })}
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
            value={dataEdit.rating}
            onChange={(e) => setDataEdit({ ...dataEdit, rating: e })}
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
            value={dataEdit.price}
            onChange={(e) =>
              setDataEdit({ ...dataEdit, price: +e.target.value })
            }
          />
        </Form.Item>
        <Form.Item>
          <Upload listType="picture">
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={handleSubmit}>
            Update
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default EditProduct;
