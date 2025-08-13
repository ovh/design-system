import { Divider, type DividerProp } from '@ovhcloud/ods-react';
import React from 'react';

export default (prop: DividerProp) => (
  <Divider { ...prop } />
);
