import { Form, Input, Button } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory } from '../../../Redux/categorySlice';
import './AddCategory.css';

const AddCategory = () => {
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.category.categories);

  useEffect(() => {}, [categories]);
  const handleSubmit = () => {
    if (category) {
      axios.post('http://localhost:8000/categories', { name: category });
      dispatch(addCategory(category));
      setCategory('');
    } else {
      alert('Hãy nhập loại sản phẩm');
    }
  };

  return (
    <div>
      <Form>
        <Form.Item label="Create Category">
          <Input
            required
            placeholder="Nhập loại sản phẩm"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <Button type="primary" onClick={() => handleSubmit()}>
            Submit
          </Button>
        </Form.Item>
        <Form.Item></Form.Item>
      </Form>
      <ul className="row list-categories">
        {categories.map((c, index) => {
          return (
            <div className="col-4" key={index}>
              <li className=" list-categories-item">{c.name}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default AddCategory;
