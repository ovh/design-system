import { type Meta, type StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { BUTTON_COLOR, BUTTON_VARIANT, Button } from '../../../../ods-react/src/components/button/src';
import { ICON_NAME, Icon } from '../../../../ods-react/src/components/icon/src';
import {
  MODAL_COLOR,
  MODAL_COLORS,
  Modal,
  ModalBody,
  ModalContent,
  type ModalContentProp,
  type ModalOpenChangeDetail,
  type ModalProp,
  ModalTrigger,
  ModalHeader,
} from '../../../../ods-react/src/components/modal/src';
import { Select, SelectContent, SelectControl } from '../../../../ods-react/src/components/select/src';
import { TEXT_PRESET, Text } from '../../../../ods-react/src/components/text/src';
import { Tooltip, TooltipContent, TooltipTrigger } from '../../../../ods-react/src/components/tooltip/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { excludeFromDemoControls, orderControls } from '../../../src/helpers/controls';
import { staticSourceRenderConfig } from '../../../src/helpers/source';

type Story = StoryObj<ModalProp>;
type DemoArg = Partial<ModalProp> & Partial<ModalContentProp> & {
  content?: string,
};

const meta: Meta<ModalProp> = {
  argTypes: excludeFromDemoControls(['defaultOpen', 'i18n', 'initialFocusedElement', 'locale', 'onOpenChange', 'open']),
  component: Modal,
  subcomponents: { ModalBody, ModalContent, ModalHeader, ModalTrigger },
  title: 'React Components/Modal',
};

export default meta;

export const Demo: StoryObj = {
  render: (arg: DemoArg) => (
    <Modal
      closeOnEscape={ arg.closeOnEscape }
      closeOnInteractOutside={ arg.closeOnInteractOutside }>
      <ModalTrigger asChild>
        <Button>
          Trigger Modal
        </Button>
      </ModalTrigger>

      <ModalContent
        color={ arg.color }
        dismissible={ arg.dismissible }>
        <ModalHeader>Modal header</ModalHeader>
        <ModalBody>
          { arg.content }
        </ModalBody>
      </ModalContent>
    </Modal>
  ),
  argTypes: orderControls({
    closeOnEscape: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: { type: 'boolean' },
    },
    closeOnInteractOutside: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: { type: 'boolean' },
    },
    color: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: MODAL_COLOR.information },
        type: { summary: 'MODAL_COLOR' },
      },
      control: { type: 'select' },
      options: MODAL_COLORS,
    },
    content: {
      table: {
        category: CONTROL_CATEGORY.slot,
      },
      control: 'text',
    },
    dismissible: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: true },
        type: { summary: 'boolean' },
      },
      control: { type: 'boolean' },
    },
  }),
  args: {
    content: 'My modal content',
  },
};

export const AccessibilityActions: Story = {
  globals: {
    imports: `import { BUTTON_COLOR, BUTTON_VARIANT, MODAL_COLOR, Button, Modal, ModalBody, ModalContent, ModalHeader, ModalTrigger } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Modal>
      <ModalTrigger asChild>
        <Button>
          Trigger Modal
        </Button>
      </ModalTrigger>

      <ModalContent color={ MODAL_COLOR.critical }>
        <ModalHeader><span id="modal-title">Delete item</span></ModalHeader>
        <ModalBody>
          <p id="modal-content">
            Are you sure you want to delete this item?
          </p>

          <div style={{ display: 'flex', gap: '8px', justifyContent: 'end' }}>
            <Button variant={ BUTTON_VARIANT.ghost }>
              Cancel
            </Button>

            <Button color={ BUTTON_COLOR.critical }>
              Delete
            </Button>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  ),
};

export const AccessibilityAriaLabelledBy: Story = {
  globals: {
    imports: `import { Button, Modal, ModalBody, ModalContent, ModalHeader, ModalTrigger } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Modal>
      <ModalTrigger asChild>
        <Button>
          Trigger Modal
        </Button>
      </ModalTrigger>

      <ModalContent
        aria-describedby="modal-content"
        aria-labelledby="modal-title">
        <ModalHeader><span id="modal-title">Delete item</span></ModalHeader>
        <ModalBody>
          <p id="modal-content">
            Are you sure you want to delete this item? This action cannot be undone.
          </p>
        </ModalBody>
      </ModalContent>
    </Modal>
  ),
};

export const AccessibilityAriaLabel: Story = {
  globals: {
    imports: `import { Button, Modal, ModalBody, ModalContent, ModalHeader, ModalTrigger } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Modal>
      <ModalTrigger asChild>
        <Button>
          Trigger Modal
        </Button>
      </ModalTrigger>

      <ModalContent
        aria-describedby="modal-content"
        aria-label="Modal Content">
        <ModalHeader>Modal header</ModalHeader>
        <ModalBody id="modal-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </ModalBody>
      </ModalContent>
    </Modal>
  ),
};

export const AccessibilityBadPracticesAria: Story = {
  globals: {
    imports: `import { Button, Modal, ModalBody, ModalContent, ModalHeader, ModalTrigger } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Modal>
      <ModalTrigger asChild>
        <Button>
          Trigger Modal
        </Button>
      </ModalTrigger>

      <ModalContent>
        <ModalHeader><span id="modal-title">Delete item</span></ModalHeader>
        <ModalBody>
          <p id="modal-content">
            Are you sure you want to delete this item? This action cannot be undone.
          </p>
        </ModalBody>
      </ModalContent>
    </Modal>
  ),
};

export const Colors: Story = {
  decorators: [(story) => <div style={{ display: 'flex', flexFlow: 'row', gap: '8px' }}>{ story() }</div>],
  globals: {
    imports: `import { BUTTON_COLOR, MODAL_COLOR, Button, Modal, ModalBody, ModalContent, ModalHeader, ModalTrigger } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <>
      <Modal>
        <ModalTrigger asChild>
          <Button color={ BUTTON_COLOR.critical }>
            Critical
          </Button>
        </ModalTrigger>

        <ModalContent color={ MODAL_COLOR.critical }>
          <ModalHeader>Critical</ModalHeader>
          <ModalBody>
            Critical
          </ModalBody>
        </ModalContent>
      </Modal>

      <Modal>
        <ModalTrigger asChild>
          <Button color={ BUTTON_COLOR.information }>
            Information
          </Button>
        </ModalTrigger>

        <ModalContent color={ MODAL_COLOR.information }>
          <ModalHeader>Information</ModalHeader>
          <ModalBody>
            Information
          </ModalBody>
        </ModalContent>
      </Modal>

      <Modal>
        <ModalTrigger asChild>
          <Button color={ BUTTON_COLOR.neutral }>
            Neutral
          </Button>
        </ModalTrigger>

        <ModalContent color={ MODAL_COLOR.neutral }>
          <ModalHeader>Neutral</ModalHeader>
          <ModalBody>
            Neutral
          </ModalBody>
        </ModalContent>
      </Modal>

      <Modal>
        <ModalTrigger asChild>
          <Button color={ BUTTON_COLOR.primary }>
            Primary
          </Button>
        </ModalTrigger>

        <ModalContent color={ MODAL_COLOR.primary }>
          <ModalHeader>Primary</ModalHeader>
          <ModalBody>
            Primary
          </ModalBody>
        </ModalContent>
      </Modal>

      <Modal>
        <ModalTrigger asChild>
          <Button color={ BUTTON_COLOR.success }>
            Success
          </Button>
        </ModalTrigger>

        <ModalContent color={ MODAL_COLOR.success }>
          <ModalHeader>Success</ModalHeader>
          <ModalBody>
            Success
          </ModalBody>
        </ModalContent>
      </Modal>

      <Modal>
        <ModalTrigger asChild>
          <Button color={ BUTTON_COLOR.warning }>
            Warning
          </Button>
        </ModalTrigger>

        <ModalContent color={ MODAL_COLOR.warning }>
          <ModalHeader>Warning</ModalHeader>
          <ModalBody>
            Warning
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  ),
};

export const Controlled: Story = {
  globals: {
    imports: `import { Button, Modal, ModalBody, ModalContent, ModalHeader } from '@ovhcloud/ods-react';
import { useState } from 'react';`,
  },
  tags: ['!dev'],
  parameters: {
    docs: {
      source: { ...staticSourceRenderConfig() },
    },
  },
  render: ({}) => {
    const [isOpen, setIsOpen] = useState(false);

    function onOpenChange({ open }: ModalOpenChangeDetail) {
      setIsOpen(open);
    }

    function openModal() {
      setIsOpen(true);
    }

    return (
      <>
        <Button onClick={ openModal }>
          Trigger Modal
        </Button>

        <Modal
          onOpenChange={ onOpenChange }
          open={ isOpen }>
          <ModalContent>
            <ModalHeader>Controlled modal</ModalHeader>
            <ModalBody>
              Content
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    );
  },
};

export const Default: Story = {
  globals: {
    imports: `import { Modal, ModalBody, ModalContent, ModalHeader, ModalTrigger } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Modal>
      <ModalTrigger>
        Trigger Modal
      </ModalTrigger>
      <ModalContent>
        <ModalHeader>My modal header</ModalHeader>
        <ModalBody>
          My modal content
        </ModalBody>
      </ModalContent>
    </Modal>
  ),
};

export const NonDismissible: Story = {
  globals: {
    imports: `import { Button, Modal, ModalBody, ModalContent, ModalHeader, ModalTrigger } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  parameters: {
    docs: {
      source: { ...staticSourceRenderConfig() },
    },
  },
  render: ({}) => (
    <Modal>
      <ModalTrigger asChild>
        <Button>
          Trigger Modal
        </Button>
      </ModalTrigger>

      <ModalContent dismissible={ false }>
        <ModalHeader>Non dismissible</ModalHeader>
        <ModalBody>
          My modal content
        </ModalBody>
      </ModalContent>
    </Modal>
  ),
};

export const NonEscapable: Story = {
  globals: {
    imports: `import { Button, Modal, ModalBody, ModalContent, ModalHeader, ModalTrigger } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  parameters: {
    docs: {
      source: { ...staticSourceRenderConfig() },
    },
  },
  render: ({}) => (
    <Modal
      closeOnEscape={ false }
      closeOnInteractOutside={ false }>
      <ModalTrigger asChild>
        <Button>
          Trigger Modal
        </Button>
      </ModalTrigger>

      <ModalContent>
        <ModalHeader>Non escapable</ModalHeader>
        <ModalBody>
          My modal content
        </ModalBody>
      </ModalContent>
    </Modal>
  ),
};

export const OverlayElements: Story = {
  globals: {
    imports: `import { ICON_NAME, Button, Icon, Modal, ModalBody, ModalContent, ModalHeader, ModalTrigger, Select, SelectContent, SelectControl, Tooltip, TooltipContent, TooltipTrigger } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Modal>
      <ModalTrigger asChild>
        <Button>
          Trigger Modal
        </Button>
      </ModalTrigger>

      <ModalContent>
        <ModalHeader>Overlay elements</ModalHeader>
        <ModalBody style={{ display: 'grid', columnGap: '8px', alignItems: 'center', gridTemplateColumns: '1fr max-content' }}>
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

          <Tooltip>
            <TooltipTrigger asChild>
              <Icon
                name={ ICON_NAME.circleQuestion }
                style={{ fontSize: '24px' }} />
            </TooltipTrigger>

            <TooltipContent createPortal={ false }>
              This is the tooltip content
            </TooltipContent>
          </Tooltip>
        </ModalBody>
      </ModalContent>
    </Modal>
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <Modal>
      <ModalTrigger asChild>
        <Button variant={ BUTTON_VARIANT.outline }>
          Trigger Modal
        </Button>
      </ModalTrigger>

      <ModalContent>
        <ModalHeader>
          <Text as={ 'span' } preset={ TEXT_PRESET.heading4 }>
            Overview
          </Text>
        </ModalHeader>
        <ModalBody>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  ),
};


export const ThemeGenerator: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['!dev'],
  render: ({}) => (
    <div style={{ display: 'flex', flexFlow: 'row', gap: '12px' }}>
      <Modal>
        <ModalTrigger asChild>
          <Button>Default</Button>
        </ModalTrigger>
        <ModalContent createPortal={ false }>
          <ModalHeader>Default</ModalHeader>
          <ModalBody>Default</ModalBody>
        </ModalContent>
      </Modal>

      <Modal>
        <ModalTrigger asChild>
          <Button>Non dismissible</Button>
        </ModalTrigger>
        <ModalContent createPortal={ false } dismissible={ false }>
          <ModalHeader>Non dismissible</ModalHeader>
          <ModalBody>Non dismissible</ModalBody>
        </ModalContent>
      </Modal>

      <Modal>
        <ModalTrigger asChild>
          <Button color={ BUTTON_COLOR.critical }>Critical</Button>
        </ModalTrigger>
        <ModalContent color={ MODAL_COLOR.critical } createPortal={ false }>
          <ModalHeader>Critical</ModalHeader>
          <ModalBody>Critical</ModalBody>
        </ModalContent>
      </Modal>
    </div>
  ),
};
