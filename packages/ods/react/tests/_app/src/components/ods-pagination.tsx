import React from 'react-dom/client';
import OdsPagination from '@ovhcloud/ods-components-react/ods-pagination';

const Pagination = () => {
  return (
    <OdsPagination defaultCurrentPage={ 3 } totalPages={ 21 } />
  );
};

export default Pagination;
