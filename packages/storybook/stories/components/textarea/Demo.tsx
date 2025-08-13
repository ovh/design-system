import { Textarea, type TextareaProp } from '@ovhcloud/ods-react';
import React from 'react';

export default (prop: TextareaProp) => (
  <Textarea { ...prop } />
);
