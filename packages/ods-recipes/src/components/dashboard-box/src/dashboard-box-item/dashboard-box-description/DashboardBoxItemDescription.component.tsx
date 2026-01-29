import type { DashboardBoxItemDescriptionProps } from './DashboardBoxItemDescription.props';
import { TEXT_PRESET, Text } from '@ovhcloud/ods-react';
import { DashboardBoxDivider } from '../../dashboard-box-divider/DashboardBoxDivider.component';

export const DashboardBoxItemDescription = ({
  label,
  children,
  divider = true,
  ...rest
}: DashboardBoxItemDescriptionProps): JSX.Element => {
  return (
    <dd className="dashboard-box-item-description" {...rest}>
      {label && <Text preset={TEXT_PRESET.span}>{label}</Text>}
      {children}
      {divider && <DashboardBoxDivider />}
    </dd>
  );
};
