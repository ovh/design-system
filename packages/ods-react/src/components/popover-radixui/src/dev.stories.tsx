import { OdsPopoverRadixUI as OdsPopover, OdsPopoverContentRadixUI as OdsPopoverContent, OdsPopoverTriggerRadixUI as OdsPopoverTrigger } from '.';
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
    <OdsPopover>
      <OdsPopoverTrigger>
        Top Left
      </OdsPopoverTrigger>
      <OdsPopoverContent position="top-start" withArrow>
        Top Left popover
      </OdsPopoverContent>
    </OdsPopover>

    <OdsPopover>
      <OdsPopoverTrigger>
        Top
      </OdsPopoverTrigger>
      <OdsPopoverContent position="top" withArrow>
        Top popover
      </OdsPopoverContent>
    </OdsPopover>

    <OdsPopover>
      <OdsPopoverTrigger>
        Top Right
      </OdsPopoverTrigger>
      <OdsPopoverContent position="top-end" withArrow>
        Top Right popover
      </OdsPopoverContent>
    </OdsPopover>

    <OdsPopover>
      <OdsPopoverTrigger>
        Middle Left
      </OdsPopoverTrigger>
      <OdsPopoverContent position="left" withArrow>
        Middle Left popover
      </OdsPopoverContent>
    </OdsPopover>

    <div />

    <OdsPopover>
      <OdsPopoverTrigger>
        Middle Right
      </OdsPopoverTrigger>
      <OdsPopoverContent position="right" withArrow>
        Middle Right popover
      </OdsPopoverContent>
    </OdsPopover>

    <OdsPopover>
      <OdsPopoverTrigger>
        Bottom Left
      </OdsPopoverTrigger>
      <OdsPopoverContent position="bottom-start" withArrow>
        Bottom Left popover
      </OdsPopoverContent>
    </OdsPopover>

    <OdsPopover>
      <OdsPopoverTrigger>
        Bottom
      </OdsPopoverTrigger>
      <OdsPopoverContent position="bottom" withArrow>
        Bottom popover
      </OdsPopoverContent>
    </OdsPopover>

    <OdsPopover>
      <OdsPopoverTrigger>
        Bottom Right
      </OdsPopoverTrigger>
      <OdsPopoverContent position="bottom-end" withArrow>
        Bottom Right popover
      </OdsPopoverContent>
    </OdsPopover>
  </div>
);
