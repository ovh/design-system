import { OdsPopoverArkUI as OdsPopover, OdsPopoverContentArkUI as OdsPopoverContent, OdsPopoverTriggerArkUI as OdsPopoverTrigger } from '../../src';

export default {
  component: OdsPopover,
  title: 'Tests rendering',
};

export const render = () => (
  <OdsPopover>
    <OdsPopoverTrigger data-testid="render-trigger">
      Show popover
    </OdsPopoverTrigger>
    <OdsPopoverContent>
      This is the popover content
    </OdsPopoverContent>
  </OdsPopover>
);
