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

export const defaultPosition = () => (
  <div style={{ paddingTop: '200px' }}>
    <Tooltip open>
      <TooltipTrigger>
        Show tooltip
      </TooltipTrigger>
      <TooltipContent
        createPortal={ false }
        data-testid="default-position">
        This is the tooltip content
      </TooltipContent>
    </Tooltip>
  </div>
);
