import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Select, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { editProduct } from '../../../Redux/productSlice';

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [detailProduct, setDetailProduct] = useState({});

  const products = useSelector((state) => state.product.products);
  const categories = useSelector((state) => state.category.categories);

  useEffect(() => {
    const getProductById = async () => {
      await products.forEach((item) => {
        if (item.id === +id) {
          setDetailProduct(item);
        }
      });
    };
    getProductById();
  }, [id, products]);

  const handleSubmit = () => {
    axios
      .put(`http://localhost:8000/products/${id}`, {
        id: id,
        name: detailProduct.name,
        category: detailProduct.category,
        rating: detailProduct.rating,
        price: detailProduct.price,
        count: detailProduct.counts,
      })
      .then(() => {
        dispatch(editProduct(detailProduct));
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
            value={detailProduct.name}
            onChange={(e) =>
              setDetailProduct({ ...detailProduct, name: e.target.value })
            }
          />
        </Form.Item>
        <Form.Item
          label="Category"
          rules={[{ required: true, message: 'Please select category!' }]}
        >
          <Select
            required
            placeholder="Nhập loại sản phẩm"
            value={detailProduct.category}
            onChange={(e) =>
              setDetailProduct({ ...detailProduct, category: e })
            }
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
            value={detailProduct.rating}
            onChange={(e) => setDetailProduct({ ...detailProduct, rating: +e })}
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
            value={detailProduct.price}
            onChange={(e) =>
              setDetailProduct({ ...detailProduct, price: +e.target.value })
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
