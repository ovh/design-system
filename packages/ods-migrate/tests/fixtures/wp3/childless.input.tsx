import { Pagination, Toggle } from '@ovhcloud/ods-react';

export const A = () => <Pagination totalItems={ 50 } />;
export const B = ({ show, render }) => (
  <div>
    <Pagination totalItems={ 50 } withPageSizeSelector={ show } renderTotalItemsLabel={ render }>
    </Pagination>
  </div>
);
export const C = () => <Pagination totalItems={ 50 } withPageSizeSelector />;
export const D = () => <Toggle className="t" />;
export const E = (props) => <Pagination { ...props } />;
export const F = () => <Pagination totalItems={ 50 } withPageSizeSelector={ false } renderTotalItemsLabel={ (n) => n }><span /></Pagination>;
