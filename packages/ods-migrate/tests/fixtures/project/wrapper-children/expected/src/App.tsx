import { FullPagination, Pagination, ShortPagination } from './ods';
import { PaginationPages } from '@ovhcloud/ods-react';

export const App = () => (
  <>
    <Pagination totalItems={ 500 }>
      <PaginationPages />
    </Pagination>
    <FullPagination totalItems={ 500 } />
    <ShortPagination totalItems={ 500 } />
  </>
);
