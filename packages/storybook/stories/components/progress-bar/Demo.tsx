import { ProgressBar, type ProgressBarProp } from '@ovhcloud/ods-react';
import React from 'react';

export default (prop: ProgressBarProp) => (
  <ProgressBar { ...prop } />
);
