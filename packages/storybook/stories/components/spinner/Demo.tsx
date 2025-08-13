import { Spinner, type SpinnerProp } from '@ovhcloud/ods-react';
import React from 'react';

export default (prop: SpinnerProp) => (
  <Spinner { ...prop } />
);
