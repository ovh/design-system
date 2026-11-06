import { Divider, DIVIDER_COLOR, Switch, SwitchItem } from '@ovhcloud/ods-react';

export const A = () => <Divider color={ DIVIDER_COLOR.primary } />;
export const tone = DIVIDER_COLOR.neutral;
export const B = () => (
  <div>
    <Switch>
      <SwitchItem value="a">A</SwitchItem>
    </Switch>
  </div>
);
export const C = () => <SwitchItem value="b" />;
