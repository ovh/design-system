import { useRef, useState } from 'react';
import { Button } from '../../button/src';
import { ICON_NAME, Icon } from '../../icon/src';
import { Popover, PopoverContent, PopoverTrigger } from '../../popover/src';
import { Select, SelectContent, SelectControl } from '../../select/src';
import { Tooltip, TooltipContent, TooltipTrigger } from '../../tooltip/src';
import { Modal, ModalBody, ModalContent, ModalHeader, type ModalOpenChangeDetail, ModalTrigger } from '.';
import style from './dev.module.css';

export default {
  component: Modal,
  title: 'Modal dev',
};

const ModalCompound = Modal;

export const A11Y = () => (
  <Modal>
    <ModalTrigger>
      Trigger
    </ModalTrigger>

    <ModalContent
      aria-describedby="content"
      aria-labelledby="title">
      <ModalBody>
        <h2 id="title">The modal title</h2>

        <p id="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
      </ModalBody>
    </ModalContent>
  </Modal>
);

export const Controlled = () => {
  const [isOpen, setIsOpen] = useState(false);

  function onOpenChange({ open }: ModalOpenChangeDetail) {
    setIsOpen(open);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button onClick={ openModal }>
        Open modal
      </button>

      <Modal
        onOpenChange={ onOpenChange }
        open={ isOpen }>
        <ModalContent>
          <ModalBody>
            Content
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export const CustomStyle = () => (
  <Modal>
    <ModalTrigger>
      Open Custom Styled Modal
    </ModalTrigger>

    <ModalContent
      className={ style['custom-modal-content'] }
      style={{ borderRadius: '40px' }}>
      <ModalBody className={ style['custom-modal-body'] }>
        <h3>Custom Styled Modal</h3>
        <p>This modal has custom styling applied through CSS modules.</p>
        <p>The styling includes custom backgrounds, borders, shadows, and more.</p>
      </ModalBody>
      <div className={ style['custom-modal-footer'] }>
        <Button>
          Cancel
        </Button>
        <Button>
          Confirm
        </Button>
      </div>
    </ModalContent>
  </Modal>
);

export const Default = () => (
  <Modal>
    <ModalTrigger>
      Trigger
    </ModalTrigger>

    <ModalContent>
      <ModalBody>
        Content
      </ModalBody>
    </ModalContent>
  </Modal>
);

export const Focus = () => {
  const buttonRef = useRef(null);

  return (
    <Modal initialFocusedElement={ () => buttonRef.current }>
      <ModalTrigger>
        Trigger
      </ModalTrigger>

      <ModalContent>
        <ModalBody>
          <p>Non focusable</p>

          <input placeholder="focusable" />

          <button ref={ buttonRef } onClick={ () => console.log('click') }>focusable</button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export const LargeContent = () => (
  <Modal>
    <ModalTrigger>
      Trigger
    </ModalTrigger>

    <ModalContent>
      <ModalBody>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
      </ModalBody>
    </ModalContent>
  </Modal>
);

export const NonDismissible = () => (
  <Modal>
    <ModalTrigger>
      Trigger
    </ModalTrigger>

    <ModalContent dismissible={ false }>
      <ModalBody>
        Content
      </ModalBody>
    </ModalContent>
  </Modal>
);

export const NonEscapable = () => (
  <Modal
    closeOnEscape={ false }
    closeOnInteractOutside={ false }>
    <ModalTrigger>
      Trigger
    </ModalTrigger>

    <ModalContent>
      <ModalBody>
        Content
      </ModalBody>
    </ModalContent>
  </Modal>
);

export const OverlayElements = () => (
  <Modal>
    <ModalTrigger>
      Trigger Modal
    </ModalTrigger>

    <ModalContent>
      <ModalBody>
        <Select items={[
          { label: 'Dog', value:'dog' },
          { label: 'Cat', value:'cat' },
          { label: 'Hamster', value:'hamster' },
          { label: 'Parrot', value:'parrot' },
          { label: 'Spider', value:'spider' },
          { label: 'Goldfish', value:'goldfish' },
        ]}>
          <SelectControl />

          <SelectContent createPortal={ false } />
        </Select>

        <Popover>
          <PopoverTrigger asChild>
            <Icon name={ ICON_NAME.circleQuestion } />
          </PopoverTrigger>

          <PopoverContent createPortal={ false }>
            This is the popover content
          </PopoverContent>
        </Popover>
      </ModalBody>
    </ModalContent>
  </Modal>
);

export const WithHeaderDismissible = () => (
  <Modal>
    <ModalTrigger>
      Trigger
    </ModalTrigger>

    <ModalContent>
      <ModalHeader>
        My header
      </ModalHeader>
      <ModalBody>
        Content
      </ModalBody>
    </ModalContent>
  </Modal>
);

export const WithHeaderNonDismissible = () => (
  <Modal>
    <ModalTrigger>
      Trigger
    </ModalTrigger>

    <ModalContent dismissible={ false }>
      <ModalHeader>
        My header
      </ModalHeader>
      <ModalBody>
        Content
      </ModalBody>
    </ModalContent>
  </Modal>
);

export const WithoutHeaderDismissible = () => (
  <Modal>
    <ModalTrigger>
      Trigger
    </ModalTrigger>

    <ModalContent>
      <ModalBody>
        Content
      </ModalBody>
    </ModalContent>
  </Modal>
);

export const WithoutHeaderNonDismissible = () => (
  <Modal>
    <ModalTrigger>
      Trigger
    </ModalTrigger>

    <ModalContent dismissible={ false }>
      <ModalBody>
        Content
      </ModalBody>
    </ModalContent>
  </Modal>
);

export const WithHeaderMultilineTitle = () => (
  <Modal>
    <ModalTrigger>
      Trigger
    </ModalTrigger>

    <ModalContent>
      <ModalHeader>
        <h2>
          This is a very long title that will wrap on multiple lines to test the behavior of the header with multiline content
        </h2>
      </ModalHeader>
      <ModalBody>
        <p>
          This modal has a header with a multiline title to demonstrate how the layout behaves when the title wraps.
        </p>
        <p>
          The close button should remain aligned to the right even when the title takes multiple lines.
        </p>
      </ModalBody>
    </ModalContent>
  </Modal>
);

/**
 * Test case to verify that removing overflow:hidden from ModalHeader doesn't break anything.
 * Elements inside the header (like Tooltip, Popover) should be able to overflow
 * without being clipped.
 */
export const HeaderOverflowTest = () => (
  <Modal>
    <ModalTrigger>
      Test Header Overflow
    </ModalTrigger>

    <ModalContent>
      <ModalHeader>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100%' }}>
          <span>Header with Tooltip</span>

          <Tooltip>
            <TooltipTrigger asChild>
              <Icon
                name={ ICON_NAME.circleQuestion }
                style={{ fontSize: '20px', cursor: 'pointer' }} />
            </TooltipTrigger>
            <TooltipContent createPortal={ false }>
              This tooltip is inside the ModalHeader and should not be clipped
            </TooltipContent>
          </Tooltip>

          <Popover>
            <PopoverTrigger asChild>
              <Icon
                name={ ICON_NAME.ellipsisVertical }
                style={{ fontSize: '20px', cursor: 'pointer', marginLeft: 'auto' }} />
            </PopoverTrigger>
            <PopoverContent createPortal={ false }>
              <p>Popover menu in header</p>
              <p>Should not be clipped!</p>
            </PopoverContent>
          </Popover>
        </div>
      </ModalHeader>
      <ModalBody>
        <p>
          <strong>Test:</strong> Hover the question mark icon or click the menu icon in the header.
        </p>
        <p>
          <strong>Expected:</strong> The Tooltip and Popover should be fully visible,
          not clipped by the ModalHeader overflow.
        </p>
      </ModalBody>
    </ModalContent>
  </Modal>
);

export const CompoundBasic = () => (
  <ModalCompound>
    <ModalCompound.Trigger>
      Open Modal (Compound)
    </ModalCompound.Trigger>

    <ModalCompound.Content>
      <ModalCompound.Header>Compound Modal</ModalCompound.Header>
      <ModalCompound.Body>
        This modal uses the compound pattern via the standard export.
      </ModalCompound.Body>
    </ModalCompound.Content>
  </ModalCompound>
);

export const CompoundControlled = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={ () => setIsOpen(true) }>
        Open Controlled Modal
      </Button>

      <ModalCompound open={ isOpen } onOpenChange={ ({ open }) => setIsOpen(open) }>
        <ModalCompound.Content>
          <ModalCompound.Header>Controlled Modal</ModalCompound.Header>
          <ModalCompound.Body>
            <p>This is a controlled modal using compound pattern.</p>
            <Button onClick={ () => setIsOpen(false) }>Close</Button>
          </ModalCompound.Body>
        </ModalCompound.Content>
      </ModalCompound>
    </>
  );
};

export const CompoundComparison = () => (
  <div style={{ display: 'flex', gap: '20px' }}>
    <div>
      <p><strong>Barrel (classique)</strong></p>
      <code>{'import { Modal, ModalTrigger, ... }'}</code>
      <br /><br />
      <Modal>
        <ModalTrigger>Open (Barrel)</ModalTrigger>
        <ModalContent>
          <ModalHeader>Barrel Modal</ModalHeader>
          <ModalBody>Using individual imports</ModalBody>
        </ModalContent>
      </Modal>
    </div>

    <div>
      <p><strong>Compound (property)</strong></p>
      <code>{'import { Modal } from "@ovhcloud/ods-react"'}</code>
      <br /><br />
      <ModalCompound>
        <ModalCompound.Trigger>Open (Compound)</ModalCompound.Trigger>
        <ModalCompound.Content>
          <ModalCompound.Header>Compound Modal</ModalCompound.Header>
          <ModalCompound.Body>Using Modal, Modal.Trigger, etc.</ModalCompound.Body>
        </ModalCompound.Content>
      </ModalCompound>
    </div>
  </div>
);