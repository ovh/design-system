import { useState } from 'react';
import { OdsTooltip, OdsTooltipContent, OdsTooltipTrigger } from '.';
import { OdsButton } from '../../button/src';

export default {
  component: OdsTooltip,
  title: 'OdsTooltip dev',
};

export const Controlled = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleTooltip() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <>
      <OdsButton onClick={ toggleTooltip }>
        Toggle tooltip
      </OdsButton>

      <OdsTooltip open={ isOpen }>
        <OdsTooltipTrigger>
          Show tooltip
        </OdsTooltipTrigger>

        <OdsTooltipContent withArrow>
          This is the tooltip content
        </OdsTooltipContent>
      </OdsTooltip>
    </>
  );
};

export const CustomTrigger = () => (
  <OdsTooltip>
    <OdsTooltipTrigger asChild>
      <OdsButton>
        Custom Trigger
      </OdsButton>
    </OdsTooltipTrigger>

    <OdsTooltipContent>
      This is the tooltip content
    </OdsTooltipContent>
  </OdsTooltip>
);

export const Default = () => (
  <OdsTooltip>
    <OdsTooltipTrigger>
      Show tooltip
    </OdsTooltipTrigger>

    <OdsTooltipContent>
      This is the tooltip content
    </OdsTooltipContent>
  </OdsTooltip>
);

export const Grid = () => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'repeat(3, 1fr)',
    gap: '20px',
    padding: '200px',
  }}>
    <OdsTooltip position="top-start">
      <OdsTooltipTrigger>
        Top Left
      </OdsTooltipTrigger>
      <OdsTooltipContent withArrow>
        Top Left popover
      </OdsTooltipContent>
    </OdsTooltip>

    <OdsTooltip position="top">
      <OdsTooltipTrigger>
        Top
      </OdsTooltipTrigger>
      <OdsTooltipContent withArrow>
        Top popover
      </OdsTooltipContent>
    </OdsTooltip>

    <OdsTooltip position="top-end">
      <OdsTooltipTrigger>
        Top Right
      </OdsTooltipTrigger>
      <OdsTooltipContent withArrow>
        Top Right popover
      </OdsTooltipContent>
    </OdsTooltip>

    <OdsTooltip position="left">
      <OdsTooltipTrigger>
        Middle Left
      </OdsTooltipTrigger>
      <OdsTooltipContent withArrow>
        Middle Left popover
      </OdsTooltipContent>
    </OdsTooltip>

    <div />

    <OdsTooltip position="right">
      <OdsTooltipTrigger>
        Middle Right
      </OdsTooltipTrigger>
      <OdsTooltipContent withArrow>
        Middle Right popover
      </OdsTooltipContent>
    </OdsTooltip>

    <OdsTooltip position="bottom-start">
      <OdsTooltipTrigger>
        Bottom Left
      </OdsTooltipTrigger>
      <OdsTooltipContent withArrow>
        Bottom Left popover
      </OdsTooltipContent>
    </OdsTooltip>

    <OdsTooltip position="bottom">
      <OdsTooltipTrigger>
        Bottom
      </OdsTooltipTrigger>
      <OdsTooltipContent withArrow>
        Bottom popover
      </OdsTooltipContent>
    </OdsTooltip>

    <OdsTooltip position="bottom-end">
      <OdsTooltipTrigger>
        Bottom Right
      </OdsTooltipTrigger>
      <OdsTooltipContent withArrow>
        Bottom Right popover
      </OdsTooltipContent>
    </OdsTooltip>
  </div>
);
