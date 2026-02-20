import { useState } from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from '.';
import { Button } from '../../button/src';
import { Icon, ICON_NAME } from '../../icon/src';
import style from './dev.module.css';

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

export const CustomId = () => {
  const [triggerId, setTriggerId] = useState<string>();

  return (
    <>
      <p>Custom ID + no asChild</p>
      <Tooltip>
        <TooltipTrigger id="my-id1">
          Trigger
        </TooltipTrigger>

        <TooltipContent>
          Tooltip content
        </TooltipContent>
      </Tooltip>

      <p>Custom ID + asChild</p>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button id="my-id2">
            Trigger
          </Button>
        </TooltipTrigger>

        <TooltipContent>
          Tooltip content
        </TooltipContent>
      </Tooltip>

      <p>Dynamic ID</p>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button id={ triggerId }>
            Trigger
          </Button>
        </TooltipTrigger>

        <TooltipContent>
          Tooltip content
        </TooltipContent>
      </Tooltip>
      <button type="button" onClick={ () => setTriggerId(Date.now().toString()) }>Set trigger ID</button>
    </>
  );
};

export const CustomStyle = () => (
  <Tooltip>
    <TooltipTrigger className={ style['custom-tooltip-trigger'] }>
      Show custom tooltip
    </TooltipTrigger>
    <TooltipContent
      className={ style['custom-tooltip-content'] }
      withArrow>
      This is the tooltip custom content
    </TooltipContent>
  </Tooltip>
);

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

    <TooltipContent createPortal={false}>
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

export const Accessibility = () => (
  <Tooltip>
    <TooltipTrigger asChild>
      <Icon name={ ICON_NAME.circleQuestion } />
    </TooltipTrigger>

    <TooltipContent>
      This is the tooltip content
    </TooltipContent>
  </Tooltip>
);
