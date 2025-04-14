import { Tooltip, TooltipContent, TooltipTrigger } from '../../src';

export default {
  component: Tooltip,
  title: 'Tests rendering',
};

export const render = () => (
  <Tooltip>
    <TooltipTrigger data-testid="render-trigger">
      Show tooltip
    </TooltipTrigger>
    <TooltipContent>
      This is the tooltip content
    </TooltipContent>
  </Tooltip>
);
