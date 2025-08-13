import { Toggle, ToggleControl, type ToggleProp } from '@ovhcloud/ods-react';
import React from 'react';

export default (prop: ToggleProp) => (
  <Toggle { ...prop }>
    <ToggleControl />
  </Toggle>
);
