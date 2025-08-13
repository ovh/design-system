import { Button, type ButtonProp } from '@ovhcloud/ods-react';
import React from 'react';

export default ({ children, ...prop }: ButtonProp) => (
  <Button { ...prop }>
    { children }
  </Button>
);
