import React, { useEffect } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './Pages/Home/Home';
import Login from './Pages/Auth/Login';
import Dashboard from './Pages/Dashboard/Dashboard';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from './Redux/productSlice';
import { getListUser } from './Redux/userSlice';

function App() {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.users.userLogin);
  console.log(userLogin);

  useEffect(() => {
    axios.get('http://localhost:8000/products').then((res) => {
      dispatch(getProducts(res.data));
    });

    axios.get('http://localhost:8000/listuser').then((res) => {
      dispatch(getListUser(res.data));
    });
  });
  return (
    <BrowserRouter>
      <ToastContainer />
      <div className="App">
        <div className="overview">
          <Routes>
            {userLogin && userLogin.role === 'admin' ? (
              <>
                <Route
                  exact
                  strict
                  path="/dashboard/*"
                  element={<Dashboard />}
                />
                <Route exact strict path="/*" element={<Home />} />
                <Route exact strict path="/login" element={<Login />} />
              </>
            ) : (
              <>
                <Route exact strict path="/*" element={<Home />} />
                <Route exact strict path="/login" element={<Login />} />
              </>
            )}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
