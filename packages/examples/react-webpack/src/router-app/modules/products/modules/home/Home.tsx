import React, { type ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { ROUTE } from 'router-app/constants/navigation';

function Home(): ReactElement {
  return (
    <div>
      <h1>
        Products Home Page
      </h1>

      <Link to={ `${ROUTE.products}/list` }>
        Go to list page
      </Link>
    </div>
  );
}

export { Home };
