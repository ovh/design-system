import { Badge, type BadgeProp } from '@ovhcloud/ods-react';
import React from 'react';

export default ({ children, ...prop }: BadgeProp) => (
  <Badge { ...prop }>
    { children }
  </Badge>
);
