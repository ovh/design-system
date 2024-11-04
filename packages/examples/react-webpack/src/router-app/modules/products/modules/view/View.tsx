import { OdsModal } from '@ovhcloud/ods-components/react';
import React, { type ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { ROUTE } from 'router-app/constants/navigation';

function View(): ReactElement {
  return (
    <div>
      <h1>
        Products View Page
      </h1>

      <OdsModal isOpen={ true }
                onOdsClose={ () => console.log('Modal close event received') }>
        Go back to home: <Link to={ ROUTE.products }>Home</Link>
      </OdsModal>

      <Link to={ `${ROUTE.products}/list` }>
        Back
      </Link>
    </div>
  );
}

export { View };
