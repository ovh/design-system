import { Pagination, type PaginationProp } from '@ovhcloud/ods-react';
import React from 'react';

export default (prop: PaginationProp) => (
  <Pagination { ...prop } />
);
