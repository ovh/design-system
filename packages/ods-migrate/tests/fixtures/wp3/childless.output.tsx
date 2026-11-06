import { Pagination, Toggle, PaginationPages, PaginationPageSizeSelector, ToggleControl } from '@ovhcloud/ods-react';

export const A = () => <Pagination totalItems={ 50 }>
  <PaginationPages />
</Pagination>;
export const B = ({ show, render }) => (
  <div>
    <Pagination totalItems={ 50 }>
      { show && <PaginationPageSizeSelector label={ (render)({ totalItems: 50 }) } /> }
      <PaginationPages />
    </Pagination>
  </div>
);
export const C = () => <Pagination totalItems={ 50 }>
  <PaginationPageSizeSelector />
  <PaginationPages />
</Pagination>;
export const D = () => <Toggle>
  <ToggleControl className="t" />
</Toggle>;
export const E = (props) => <Pagination { ...props } />;
export const F = () => <Pagination totalItems={ 50 }><span /></Pagination>;
