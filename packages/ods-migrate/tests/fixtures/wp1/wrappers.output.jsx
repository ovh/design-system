import { CartAction, QueryFilterClear } from '@ovhcloud/ods-react';

export const Wrappers = () => (
  <>
    <CartAction status="brand" emphasis="low">Order</CartAction>
    <QueryFilterClear emphasis="medium">Clear</QueryFilterClear>
  </>
);
