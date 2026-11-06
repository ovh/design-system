import { FullPagination, Pagination, ShortPagination } from './ods';

export const App = () => (
  <>
    <Pagination totalItems={ 500 } />
    <FullPagination totalItems={ 500 } />
    <ShortPagination totalItems={ 500 } />
  </>
);
