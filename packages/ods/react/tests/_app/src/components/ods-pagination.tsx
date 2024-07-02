import React from 'react-dom/client';
import { OdsPagination } from 'ods-components-react';

const Pagination = () => {
  return (
    <OdsPagination defaultCurrentPage={3} totalPages={21} />
  );
};

export default Pagination;
