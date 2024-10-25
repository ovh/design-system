import React, { type ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { ROUTE } from 'router-app/constants/navigation';

function List(): ReactElement {
  return (
    <div>
      <h1>
        Products List Page
      </h1>

      <Link to={ ROUTE.products }>
        Back
      </Link>

      <br />

      <Link to={ `${ROUTE.products}/list/product1` }>
        View product 1
      </Link>

      <br />

      <Link to={ `${ROUTE.products}/list/product2` }>
        View product 2
      </Link>
    </div>
  );
}

export { List };
