import React, { useEffect } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Auth/Login';
import Dashboard from './Pages/Dashboard/Dashboard';
import DetailProduct from './Pages/DetailProduct/DetailProduct';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getProducts } from './Redux/productSlice';
import { getCategories } from './Redux/categorySlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('http://localhost:8000/products').then((res) => {
      dispatch(getProducts(res.data));
    });

    axios.get('http://localhost:8000/categories').then((res) => {
      dispatch(getCategories(res.data));
    });
  });
  return (
    <BrowserRouter>
      <div className="App">
        <div className="overview">
          <Routes>
            <Route exact strict path="/dashboard/*" element={<Dashboard />} />
            <Route exact strict path="/*" element={<Home />} />
            <Route exact strict path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
