import { Code, type CodeProp } from '@ovhcloud/ods-react';
import React from 'react';

export default ({ children, ...prop }: CodeProp) => (
  <Code { ...prop }>
    { children }
  </Code>
);
