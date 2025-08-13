import { Text, type TextProp } from '@ovhcloud/ods-react';
import React from 'react';

export default ({ children, ...prop }: TextProp) => (
  <Text { ...prop }>
    { children }
  </Text>
);
