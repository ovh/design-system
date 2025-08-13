import { Switch, SwitchItem, type SwitchProp } from '@ovhcloud/ods-react';
import React from 'react';

export default (prop: SwitchProp) => (
  <Switch { ...prop }>
    <SwitchItem value="item-1">Item 1</SwitchItem>
    <SwitchItem value="item-2">Item 2</SwitchItem>
    <SwitchItem value="item-3">Item 3</SwitchItem>
  </Switch>
);
