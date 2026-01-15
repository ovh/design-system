import type { DashboardBoxItemTermProps } from './DashboardBoxItemTerm.props';
import { Icon, TEXT_PRESET, Text, Tooltip, TooltipContent, TooltipTrigger } from '@ovhcloud/ods-react';

export const DashboardBoxItemTerm = ({ label, tooltip, actions, ...rest }: DashboardBoxItemTermProps): JSX.Element => {
  return (
    <dt className="dashboard-box-item-term" {...rest}>
      <div className="dashboard-box-item-term__content">
        <Text preset={TEXT_PRESET.span} className="dashboard-box-item-term__label">
          {label}
        </Text>
        {tooltip && (
          <Tooltip>
            <TooltipTrigger asChild>
              <Icon name="circle-question" />
            </TooltipTrigger>
            <TooltipContent>
              <Text preset={TEXT_PRESET.paragraph}>{tooltip}</Text>
            </TooltipContent>
          </Tooltip>
        )}
      </div>
      {actions && actions}
    </dt>
  );
};
