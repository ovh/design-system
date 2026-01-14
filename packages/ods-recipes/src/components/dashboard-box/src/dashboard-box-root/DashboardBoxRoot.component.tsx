import type { DashboardBoxRootProps } from './DashboardBox.props';
import { CARD_COLOR, Card, TEXT_PRESET, Text } from '@ovhcloud/ods-react';
import { clsx } from 'clsx';
import { DashboardBoxDivider } from '../dashboard-box-divider/DashboardBoxDivider.component';

export const DashboardBoxRoot = ({
  className,
  title,
  color = CARD_COLOR.neutral,
  children,
  ...props
}: DashboardBoxRootProps): JSX.Element => {
  return (
    <Card
      className={clsx('dashboard-box-root', className)}
      color={color}
      {...props}
    >
      <section className="dashboard-box-root__section">
        <Text preset={TEXT_PRESET.heading4}>{title}</Text>
        <DashboardBoxDivider className="dashboard-box-root__divider" />
        <dl className="dashboard-box-root__list">{children}</dl>
      </section>
    </Card>
  );
};
