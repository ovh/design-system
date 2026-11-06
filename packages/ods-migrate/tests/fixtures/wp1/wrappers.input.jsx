import { CartAction, QueryFilterClear } from '@ovhcloud/ods-react';

export const Wrappers = () => (
  <>
    <CartAction color="primary" variant="ghost">Order</CartAction>
    <QueryFilterClear variant="outline">Clear</QueryFilterClear>
  </>
);
