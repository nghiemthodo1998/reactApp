import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';

import AddCategory from '../../Components/Dashboard/AddCategory/AddCategory';
import AddProduct from '../../Components/Dashboard/AddProduct/AddProduct';
import ListProducts from '../../Components/Dashboard/ListProducts/ListProducts';
import EditProduct from '../../Components/Dashboard/EditProduct/EditProduct';
import { useSelector } from 'react-redux';

function RouteAdmin() {
  const [loading, setLoading] = useState(false);
  const [dataProducts, setDataProducts] = useState([]);
  const [dataCategories, setDataCategories] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/products').then((res) => {
      setDataProducts(res.data);
      setLoading(false);
    });

    axios.get('http://localhost:8000/categories').then((res) => {
      setDataCategories(res.data);
    });
  }, [loading]);

  const products = useSelector((state) => state.product.products);
  const categories = useSelector((state) => state.category.categories);

  return (
    <>
      <Routes>
        <Route
          exact
          strict
          path="/add-product"
          element={<AddProduct dataP={dataProducts} dataC={dataCategories} />}
        />
        <Route
          exact
          strict
          path="/add-category"
          element={<AddCategory loading={setLoading} />}
        />
        <Route
          exact
          strict
          path="/products"
          element={<ListProducts products={products} />}
        />
        <Route
          exact
          strict
          path="/products/edit-product/:id"
          element={<EditProduct dataC={dataCategories} />}
        />
      </Routes>
    </>
  );
}

export default RouteAdmin;
