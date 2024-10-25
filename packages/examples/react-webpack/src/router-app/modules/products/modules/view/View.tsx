import React, { type ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { ROUTE } from 'router-app/constants/navigation';

function View(): ReactElement {
  return (
    <div>
      <h1>
        Products View Page
      </h1>

      <Link to={ `${ROUTE.products}/list` }>
        Back
      </Link>
    </div>
  );
}

export { View };
