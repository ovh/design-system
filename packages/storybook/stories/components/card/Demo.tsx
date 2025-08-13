import { Card, type CardProp } from '@ovhcloud/ods-react';
import React from 'react';

export default ({ children, ...prop }: CardProp) => (
  <Card { ...prop }>
    { children }
  </Card>
);
