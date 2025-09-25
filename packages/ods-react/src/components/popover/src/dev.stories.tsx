import { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '.';
import { Button } from '../../button/src';
import { Modal, ModalBody, ModalContent, ModalTrigger } from '../../modal/src';
import style from './dev.module.css';

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

export const ControlledPlusModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  function onOpenModal() {
    setIsModalOpen(true);
    setIsPopoverOpen(false);
  }

  function togglePopover() {
    setIsPopoverOpen((isOpen) => !isOpen);
  }

  return (
    <>
      <Button
        id="trigger"
        onClick={ togglePopover }>
        Toggle popover
      </Button>

      <Popover
        onOpenChange={ ({ open }) => setIsPopoverOpen(open) }
        open={ isPopoverOpen }
        triggerId="trigger">
        <span>
          ...
        </span>

        <PopoverContent>
          <p>
            Some popover content
          </p>

          <Button onClick={ onOpenModal }>
            Open modal
          </Button>
        </PopoverContent>
      </Popover>

      <Modal
        onOpenChange={ ({ open }) => setIsModalOpen(open) }
        open={ isModalOpen }>
        <ModalTrigger>
          Trigger
        </ModalTrigger>

        <ModalContent>
          <ModalBody>
            Content
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export const CustomId = () => {
  const [triggerId, setTriggerId] = useState<string>();

  return (
    <>
      <p>Custom ID + no asChild</p>
      <Popover>
        <PopoverTrigger id="my-id1">
          Trigger
        </PopoverTrigger>

        <PopoverContent>
          Popover content
        </PopoverContent>
      </Popover>

      <p>Custom ID + asChild</p>
      <Popover>
        <PopoverTrigger asChild>
          <Button id="my-id2">
            Trigger
          </Button>
        </PopoverTrigger>

        <PopoverContent>
          Popover content
        </PopoverContent>
      </Popover>

      <p>Dynamic ID</p>
      <Popover>
        <PopoverTrigger asChild>
          <Button id={ triggerId }>
            Trigger
          </Button>
        </PopoverTrigger>

        <PopoverContent>
          Popover content
        </PopoverContent>
      </Popover>
      <button type="button" onClick={ () => setTriggerId(Date.now().toString()) }>Set trigger ID</button>
    </>
  );
};

export const CustomStyle = () => (
  <Popover>
    <PopoverTrigger className={ style[ 'custom-popover-trigger' ] }>
      Show custom popover
    </PopoverTrigger>
    <PopoverContent className={ style[ 'custom-popover-content' ] }>
      <div>
        This is the popover custom styled content
      </div>
    </PopoverContent>
  </Popover>
);

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
  <>
    <p>With auto focus</p>
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

    <p>Without auto focus</p>
    <Popover autoFocus={ false }>
      <PopoverTrigger>
        Show popover
      </PopoverTrigger>

      <PopoverContent>
        <Button onClick={ () => console.log('focus 1') }>Focus 1</Button>
        <Button onClick={ () => console.log('focus 2') }>Focus 2</Button>
        <Button onClick={ () => console.log('focus 3') }>Focus 3</Button>
      </PopoverContent>
    </Popover>
  </>
);

export const Grid = () => (
  <div style={ {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'repeat(3, 1fr)',
    gap: '20px',
    padding: '200px',
  } }>
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

export const OnPositionChange = () => {
  const [currentPosition, setCurrentPosition] = useState('');

  return (
    <>
      <p>
        Current position: { currentPosition }
      </p>

      <Popover
        onPositionChange={ ({ position }) => setCurrentPosition(position) }
        open
        position='bottom'>
        <PopoverTrigger>
          Show popover
        </PopoverTrigger>
        <PopoverContent>
          Popover content
        </PopoverContent>
      </Popover>
    </>
  );
}

export const SameWidth = () => (
  <Popover sameWidth>
    <PopoverTrigger>
      Show popover with this width
    </PopoverTrigger>
    <PopoverContent>
      Popover
    </PopoverContent>
  </Popover>
);
