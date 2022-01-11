import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Content from '../../Components/Content/Content';
import Cart from '../../Pages/Cart/Cart';
import Shop from '../../Pages/Shop/Shop';
import Magazine from '../../Pages/Magazine/Magazine';

import DetailProduct from '../../Pages/DetailProduct/DetailProduct';

const RouteUser = () => {
  return (
    <Routes>
      <Route exact strict path="/*" element={<Content />} />
      <Route path="detail-product/:id" element={<DetailProduct />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/magazine" element={<Magazine />} />
    </Routes>
  );
};

export default RouteUser;
