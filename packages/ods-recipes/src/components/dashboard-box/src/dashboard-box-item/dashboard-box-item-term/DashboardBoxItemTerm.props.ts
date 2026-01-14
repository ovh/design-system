import type { ComponentProps, JSX } from 'react';

export type DashboardBoxItemTermProps = Omit<
  ComponentProps<'dt'>,
  'className'
> & {
  actionPrimary?: JSX.Element;
  label?: string;
  tooltip?: string;
  actions?: JSX.Element;
};
