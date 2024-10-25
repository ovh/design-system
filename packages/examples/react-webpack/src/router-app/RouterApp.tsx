import React, { type ReactElement } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Breadcrumb } from 'router-app/components/breadcrumb/Breadcrumb';
import { ROUTE } from 'router-app/constants/navigation';
import { Products } from 'router-app/modules/products/Products';
import styles from './routerApp.scss';

function RouterApp(): ReactElement {
  return (
    <div className={ styles['router-app'] }>
      <Breadcrumb />

      <Routes>
        <Route path={ `${ROUTE.products}/*` } element={ <Products /> } />
        <Route path="*" element={ <Navigate to={ ROUTE.products } replace /> } />
      </Routes>
    </div>
  );
}

export { RouterApp };
