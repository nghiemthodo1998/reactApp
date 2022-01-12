import React from 'react';
import { Route, Routes } from 'react-router-dom';

import AddCategory from '../../Components/Dashboard/AddCategory/AddCategory';
import AddProduct from '../../Components/Dashboard/AddProduct/AddProduct';
import ListProducts from '../../Components/Dashboard/ListProducts/ListProducts';
import EditProduct from '../../Components/Dashboard/EditProduct/EditProduct';

function RouteAdmin() {
  return (
    <>
      <Routes>
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/add-category" element={<AddCategory />} />
        <Route path="/products" element={<ListProducts />} />
        <Route path="/products/edit-product/:id" element={<EditProduct />} />
      </Routes>
    </>
  );
}

export default RouteAdmin;
