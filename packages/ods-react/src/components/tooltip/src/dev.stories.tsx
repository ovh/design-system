import { useState } from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from '.';
import { Button } from '../../button/src';

export default {
  component: Tooltip,
  title: 'Tooltip dev',
};

export const Controlled = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleTooltip() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <>
      <Button onClick={ toggleTooltip }>
        Toggle tooltip
      </Button>

      <Tooltip open={ isOpen }>
        <TooltipTrigger>
          Show tooltip
        </TooltipTrigger>

        <TooltipContent withArrow>
          This is the tooltip content
        </TooltipContent>
      </Tooltip>
    </>
  );
};

export const CustomTrigger = () => (
  <Tooltip>
    <TooltipTrigger asChild>
      <Button>
        Custom Trigger
      </Button>
    </TooltipTrigger>

    <TooltipContent>
      This is the tooltip content
    </TooltipContent>
  </Tooltip>
);

export const Default = () => (
  <Tooltip>
    <TooltipTrigger>
      Show tooltip
    </TooltipTrigger>

    <TooltipContent>
      This is the tooltip content
    </TooltipContent>
  </Tooltip>
);

export const Grid = () => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'repeat(3, 1fr)',
    gap: '20px',
    padding: '200px',
  }}>
    <Tooltip position="top-start">
      <TooltipTrigger>
        Top Left
      </TooltipTrigger>
      <TooltipContent withArrow>
        Top Left popover
      </TooltipContent>
    </Tooltip>

    <Tooltip position="top">
      <TooltipTrigger>
        Top
      </TooltipTrigger>
      <TooltipContent withArrow>
        Top popover
      </TooltipContent>
    </Tooltip>

    <Tooltip position="top-end">
      <TooltipTrigger>
        Top Right
      </TooltipTrigger>
      <TooltipContent withArrow>
        Top Right popover
      </TooltipContent>
    </Tooltip>

    <Tooltip position="left">
      <TooltipTrigger>
        Middle Left
      </TooltipTrigger>
      <TooltipContent withArrow>
        Middle Left popover
      </TooltipContent>
    </Tooltip>

    <div />

    <Tooltip position="right">
      <TooltipTrigger>
        Middle Right
      </TooltipTrigger>
      <TooltipContent withArrow>
        Middle Right popover
      </TooltipContent>
    </Tooltip>

    <Tooltip position="bottom-start">
      <TooltipTrigger>
        Bottom Left
      </TooltipTrigger>
      <TooltipContent withArrow>
        Bottom Left popover
      </TooltipContent>
    </Tooltip>

    <Tooltip position="bottom">
      <TooltipTrigger>
        Bottom
      </TooltipTrigger>
      <TooltipContent withArrow>
        Bottom popover
      </TooltipContent>
    </Tooltip>

    <Tooltip position="bottom-end">
      <TooltipTrigger>
        Bottom Right
      </TooltipTrigger>
      <TooltipContent withArrow>
        Bottom Right popover
      </TooltipContent>
    </Tooltip>
  </div>
);
