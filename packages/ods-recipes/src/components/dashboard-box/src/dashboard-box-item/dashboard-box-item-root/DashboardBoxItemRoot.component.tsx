import type { ComponentProps } from 'react';

export const DashboardBoxItemRoot = ({ children, ...rest }: Omit<ComponentProps<'div'>, 'className'>): JSX.Element => {
  return (
    <div className="dashboard-box-item-root" {...rest}>
      {children}
    </div>
  );
};
