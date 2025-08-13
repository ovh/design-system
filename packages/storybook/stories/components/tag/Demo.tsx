import { Tag, type TagProp } from '@ovhcloud/ods-react';
import React from 'react';

export default ({ children, ...prop }: TagProp) => (
  <Tag { ...prop }>
    { children }
  </Tag>
);
