import { Form, Input, Button } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './AddCategory.css';

const AddCategory = (props) => {
  const [category, setCategory] = useState('');
  const [dataCategories, setDataCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8000/categories').then((res) => {
      setDataCategories(res.data);
      setLoading(false);
    });
  }, [loading]);

  const handleSubmit = async (e) => {
    if (category) {
      await axios
        .post('http://localhost:8000/categories', { name: category })
        .then(() => {
          props.loading(true);
          setLoading(true);
          setCategory('');
        });
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
          <Button type="primary" onClick={(e) => handleSubmit(e)}>
            Submit
          </Button>
        </Form.Item>
        <Form.Item></Form.Item>
      </Form>
      <ul className="row list-categories">
        {dataCategories.map((c) => {
          return (
            <div className="col-4" key={c.id}>
              <li className=" list-categories-item">{c.name}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default AddCategory;
