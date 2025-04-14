import { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '.';
import { Button } from '../../button/src';

export default {
  component: Popover,
  title: 'Popover dev',
};

export const Controlled = () => {
  const [isOpen, setIsOpen] = useState(false);

  function togglePopover() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <>
      <Button onClick={ togglePopover }>
        Toggle popover
      </Button>

      <Popover open={ isOpen }>
        <PopoverTrigger>
          Show popover
        </PopoverTrigger>

        <PopoverContent>
          This is the popover content
        </PopoverContent>
      </Popover>
    </>
  );
};

export const CustomTrigger = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button>
        Custom Trigger
      </Button>
    </PopoverTrigger>

    <PopoverContent>
      This is the popover content
    </PopoverContent>
  </Popover>
);

export const Default = () => (
  <Popover>
    <PopoverTrigger>
      Show popover
    </PopoverTrigger>

    <PopoverContent>
      This is the popover content
    </PopoverContent>
  </Popover>
);

export const Focus = () => (
  <Popover>
    <PopoverTrigger>
      Show popover
    </PopoverTrigger>

    <PopoverContent>
      <Button onClick={ () => console.log('focus 1') }>Focus 1</Button>
      <Button onClick={ () => console.log('focus 2') }>Focus 2</Button>
      <Button onClick={ () => console.log('focus 3') }>Focus 3</Button>
    </PopoverContent>
  </Popover>
);

export const Grid = () => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'repeat(3, 1fr)',
    gap: '20px',
    padding: '200px',
  }}>
    <Popover position="top-start">
      <PopoverTrigger>
        Top Left
      </PopoverTrigger>
      <PopoverContent withArrow>
        Top Left popover
      </PopoverContent>
    </Popover>

    <Popover position="top">
      <PopoverTrigger>
        Top
      </PopoverTrigger>
      <PopoverContent withArrow>
        Top popover
      </PopoverContent>
    </Popover>

    <Popover position="top-end">
      <PopoverTrigger>
        Top Right
      </PopoverTrigger>
      <PopoverContent withArrow>
        Top Right popover
      </PopoverContent>
    </Popover>

    <Popover position="left">
      <PopoverTrigger>
        Middle Left
      </PopoverTrigger>
      <PopoverContent withArrow>
        Middle Left popover
      </PopoverContent>
    </Popover>

    <div />

    <Popover position="right">
      <PopoverTrigger>
        Middle Right
      </PopoverTrigger>
      <PopoverContent withArrow>
        Middle Right popover
      </PopoverContent>
    </Popover>

    <Popover position="bottom-start">
      <PopoverTrigger>
        Bottom Left
      </PopoverTrigger>
      <PopoverContent withArrow>
        Bottom Left popover
      </PopoverContent>
    </Popover>

    <Popover position="bottom">
      <PopoverTrigger>
        Bottom
      </PopoverTrigger>
      <PopoverContent withArrow>
        Bottom popover
      </PopoverContent>
    </Popover>

    <Popover position="bottom-end">
      <PopoverTrigger>
        Bottom Right
      </PopoverTrigger>
      <PopoverContent withArrow>
        Bottom Right popover
      </PopoverContent>
    </Popover>
  </div>
);
