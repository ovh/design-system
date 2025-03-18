import { OdsPopoverArkUI as OdsPopover, OdsPopoverContentArkUI as OdsPopoverContent, OdsPopoverTriggerArkUI as OdsPopoverTrigger } from '.';
import { OdsButton } from '../../button/src';

export default {
  component: OdsPopover,
  title: 'OdsPopover dev',
};

export const CustomTrigger = () => (
  <OdsPopover>
    <OdsPopoverTrigger asChild>
      <OdsButton>
        Custom Trigger
      </OdsButton>
    </OdsPopoverTrigger>
    <OdsPopoverContent>
      This is the popover content
    </OdsPopoverContent>
  </OdsPopover>
);

export const Default = () => (
  <OdsPopover>
    <OdsPopoverTrigger>
      Show popover
    </OdsPopoverTrigger>
    <OdsPopoverContent>
      This is the popover content
    </OdsPopoverContent>
  </OdsPopover>
);

export const Grid = () => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'repeat(3, 1fr)',
    gap: '20px',
    padding: '200px',
  }}>
    <OdsPopover position="top-start">
      <OdsPopoverTrigger>
        Top Left
      </OdsPopoverTrigger>
      <OdsPopoverContent withArrow>
        Top Left popover
      </OdsPopoverContent>
    </OdsPopover>

    <OdsPopover position="top">
      <OdsPopoverTrigger>
        Top
      </OdsPopoverTrigger>
      <OdsPopoverContent withArrow>
        Top popover
      </OdsPopoverContent>
    </OdsPopover>

    <OdsPopover position="top-end">
      <OdsPopoverTrigger>
        Top Right
      </OdsPopoverTrigger>
      <OdsPopoverContent withArrow>
        Top Right popover
      </OdsPopoverContent>
    </OdsPopover>

    <OdsPopover position="left">
      <OdsPopoverTrigger>
        Middle Left
      </OdsPopoverTrigger>
      <OdsPopoverContent withArrow>
        Middle Left popover
      </OdsPopoverContent>
    </OdsPopover>

    <div />

    <OdsPopover position="right">
      <OdsPopoverTrigger>
        Middle Right
      </OdsPopoverTrigger>
      <OdsPopoverContent withArrow>
        Middle Right popover
      </OdsPopoverContent>
    </OdsPopover>

    <OdsPopover position="bottom-start">
      <OdsPopoverTrigger>
        Bottom Left
      </OdsPopoverTrigger>
      <OdsPopoverContent withArrow>
        Bottom Left popover
      </OdsPopoverContent>
    </OdsPopover>

    <OdsPopover position="bottom">
      <OdsPopoverTrigger>
        Bottom
      </OdsPopoverTrigger>
      <OdsPopoverContent withArrow>
        Bottom popover
      </OdsPopoverContent>
    </OdsPopover>

    <OdsPopover position="bottom-end">
      <OdsPopoverTrigger>
        Bottom Right
      </OdsPopoverTrigger>
      <OdsPopoverContent withArrow>
        Bottom Right popover
      </OdsPopoverContent>
    </OdsPopover>
  </div>
);
