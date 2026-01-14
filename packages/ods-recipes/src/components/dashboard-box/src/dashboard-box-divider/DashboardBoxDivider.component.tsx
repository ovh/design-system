import type { DividerProp } from '@ovhcloud/ods-react';
import { DIVIDER_SPACING, Divider } from '@ovhcloud/ods-react';

export const DashboardBoxDivider = (props: DividerProp): JSX.Element => (
  <Divider {...props} spacing={DIVIDER_SPACING._24} />
);
