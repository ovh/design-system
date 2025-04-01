import { OdsTooltip, OdsTooltipContent, OdsTooltipTrigger } from '../../src';

export default {
  component: OdsTooltip,
  title: 'Tests rendering',
};

export const render = () => (
  <OdsTooltip>
    <OdsTooltipTrigger data-testid="render-trigger">
      Show tooltip
    </OdsTooltipTrigger>
    <OdsTooltipContent>
      This is the tooltip content
    </OdsTooltipContent>
  </OdsTooltip>
);
