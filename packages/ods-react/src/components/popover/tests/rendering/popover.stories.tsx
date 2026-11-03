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

export const defaultPosition = () => (
  <div style={{ paddingTop: '200px' }}>
    <Popover open>
      <PopoverTrigger>
        Show popover
      </PopoverTrigger>
      <PopoverContent
        createPortal={ false }
        data-testid="default-position">
        This is the popover content
      </PopoverContent>
    </Popover>
  </div>
);
