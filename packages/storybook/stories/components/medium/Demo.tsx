import { Medium, type MediumProp } from '@ovhcloud/ods-react';
import React from 'react';

export default (prop: MediumProp) => (
  <Medium { ...prop } />
);
