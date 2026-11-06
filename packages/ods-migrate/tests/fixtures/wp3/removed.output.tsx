/* TODO(ods-v20): DIVIDER_COLOR, Switch, SwitchItem: removed in v20, delete them from this import once the places marked below no longer use them */ import { Divider, DIVIDER_COLOR, Switch, SwitchItem } from '@ovhcloud/ods-react';

export const A = () => <Divider />;
export const tone = /* TODO(ods-v20): DIVIDER_COLOR.neutral has no v20 equivalent: neutral is the default look in v20: delete it */ DIVIDER_COLOR.neutral;
export const B = () => (
  <div>
    {/* TODO(ods-v20): <Switch> has no v20 equivalent: use a Toggle or a RadioGroup */}
    <Switch>
      <SwitchItem value="a">A</SwitchItem>
    </Switch>
  </div>
);
export const C = () => /* TODO(ods-v20): <SwitchItem> has no v20 equivalent: use a Toggle or a RadioGroup */ <SwitchItem value="b" />;
