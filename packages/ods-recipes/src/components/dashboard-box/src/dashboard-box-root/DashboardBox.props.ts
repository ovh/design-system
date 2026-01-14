import type { CARD_COLOR, Card } from '@ovhcloud/ods-react';
import type { ComponentProps } from 'react';

export interface DashboardBoxRootProps extends ComponentProps<typeof Card> {
  className?: string;
  title: string;
  color?: CARD_COLOR;
}

