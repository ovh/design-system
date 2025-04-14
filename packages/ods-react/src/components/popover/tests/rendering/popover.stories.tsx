import { Popover, PopoverContent, PopoverTrigger } from '../../src';

export default {
  component: Popover,
  title: 'Tests rendering',
};

export const render = () => (
  <Popover>
    <PopoverTrigger data-testid="render-trigger">
      Show popover
    </PopoverTrigger>
    <PopoverContent>
      This is the popover content
    </PopoverContent>
  </Popover>
);
