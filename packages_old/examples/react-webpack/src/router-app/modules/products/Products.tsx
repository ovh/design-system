import React, { type ReactElement } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ROUTE } from 'router-app/constants/navigation';
import { Home } from 'router-app/modules/products/modules/home/Home';
import { List } from 'router-app/modules/products/modules/list/List';
import { View } from 'router-app/modules/products/modules/view/View';

function Products(): ReactElement {
  return (
    <Routes>
      <Route path="list" element={ <List /> } />
      <Route path="list/*" element={ <View /> } />
      <Route index element={ <Home /> } />
      <Route path="*" element={ <Navigate to={ ROUTE.products } replace /> } />
    </Routes>
  );
}

export { Products };
