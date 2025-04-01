import { useState } from 'react';
import { OdsPopover, OdsPopoverContent, OdsPopoverTrigger } from '.';
import { OdsButton } from '../../button/src';

export default {
  component: OdsPopover,
  title: 'OdsPopover dev',
};

export const Controlled = () => {
  const [isOpen, setIsOpen] = useState(false);

  function togglePopover() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <>
      <OdsButton onClick={ togglePopover }>
        Toggle popover
      </OdsButton>

      <OdsPopover isOpen={ isOpen }>
        <OdsPopoverTrigger>
          Show popover
        </OdsPopoverTrigger>
        <OdsPopoverContent>
          This is the popover content
        </OdsPopoverContent>
      </OdsPopover>
    </>
  );
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

export const Focus = () => (
  <OdsPopover>
    <OdsPopoverTrigger>
      Show popover
    </OdsPopoverTrigger>
    <OdsPopoverContent>
      <button onClick={ () => console.log('focus 1') }>Focus 1</button>
      <button onClick={ () => console.log('focus 2') }>Focus 2</button>
      <button onClick={ () => console.log('focus 3') }>Focus 3</button>
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
