import { type Meta, type StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { BUTTON_GROUP_SIZE, BUTTON_GROUP_SIZES, ButtonGroup, ButtonGroupItem, type ButtonGroupProp } from '../../../../ods-react/src/components/button-group/src';
import { ICON_NAME, Icon } from '../../../../ods-react/src/components/icon/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { excludeFromDemoControls, orderControls } from '../../../src/helpers/controls';
import { staticSourceRenderConfig } from '../../../src/helpers/source';

type Story = StoryObj<ButtonGroupProp>;

const meta: Meta<ButtonGroupProp> = {
  argTypes: excludeFromDemoControls(['defaultValue', 'onValueChange', 'value']),
  component: ButtonGroup,
  subcomponents: { ButtonGroupItem },
  tags: ['new'],
  title: 'React Components/Button Group',
};

export default meta;

export const Demo: Story = {
  render: (arg) => (
    <ButtonGroup { ...arg }>
      <ButtonGroupItem value="1">Option 1</ButtonGroupItem>
      <ButtonGroupItem value="2">Option 2</ButtonGroupItem>
      <ButtonGroupItem value="3">Option 3</ButtonGroupItem>
    </ButtonGroup>
  ),
  argTypes: orderControls({
    disabled: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'boolean',
    },
    multiple: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'boolean',
    },
    size: {
      table: {
        category: CONTROL_CATEGORY.design,
        type: { summary: 'BUTTON_GROUP_SIZE' }
      },
      control: { type: 'select' },
      options: BUTTON_GROUP_SIZES,
    },
  }),
};

export const Controlled: Story = {
  globals: {
    imports: `import { ICON_NAME, ButtonGroup, ButtonGroupItem, Icon } from '@ovhcloud/ods-react';
import { useState } from 'react';`,
  },
  parameters: {
    docs: {
      source: { ...staticSourceRenderConfig() },
    },
  },
  tags: ['!dev'],
  render: ({}) => {
    const [values, setValues] = useState(['hourly']);

    return (
      <ButtonGroup
        onValueChange={ ({ value }) => setValues(value) }
        value={ values }>
        <ButtonGroupItem value="hourly">Hourly</ButtonGroupItem>
        <ButtonGroupItem value="daily">Daily</ButtonGroupItem>
        <ButtonGroupItem value="monthly">Monthly</ButtonGroupItem>
        <ButtonGroupItem value="custom">
          <Icon name={ ICON_NAME.calendar } /> Custom
        </ButtonGroupItem>
      </ButtonGroup>
    );
  },
};

export const Default: Story = {
  globals: {
    imports: `import { ICON_NAME, ButtonGroup, ButtonGroupItem, Icon } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <ButtonGroup>
      <ButtonGroupItem value="hourly">Hourly</ButtonGroupItem>
      <ButtonGroupItem value="daily">Daily</ButtonGroupItem>
      <ButtonGroupItem value="monthly">Monthly</ButtonGroupItem>
      <ButtonGroupItem value="custom">
        <Icon name={ ICON_NAME.calendar } /> Custom
      </ButtonGroupItem>
    </ButtonGroup>
  ),
};

export const Disabled: Story = {
  globals: {
    imports: `import { ICON_NAME, ButtonGroup, ButtonGroupItem, Icon } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <ButtonGroup disabled>
      <ButtonGroupItem value="hourly">Hourly</ButtonGroupItem>
      <ButtonGroupItem value="daily">Daily</ButtonGroupItem>
      <ButtonGroupItem value="monthly">Monthly</ButtonGroupItem>
      <ButtonGroupItem value="custom">
        <Icon name={ ICON_NAME.calendar } /> Custom
      </ButtonGroupItem>
    </ButtonGroup>
  ),
};

export const DisabledItem: Story = {
  globals: {
    imports: `import { ICON_NAME, ButtonGroup, ButtonGroupItem, Icon } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <ButtonGroup>
      <ButtonGroupItem value="hourly">Hourly</ButtonGroupItem>
      <ButtonGroupItem value="daily">Daily</ButtonGroupItem>
      <ButtonGroupItem value="monthly">Monthly</ButtonGroupItem>
      <ButtonGroupItem disabled value="custom">
        <Icon name={ ICON_NAME.calendar } /> Custom
      </ButtonGroupItem>
    </ButtonGroup>
  ),
};

export const Multiple: Story = {
  globals: {
    imports: `import { ButtonGroup, ButtonGroupItem } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <ButtonGroup multiple>
      <ButtonGroupItem value="option-1">Option 1</ButtonGroupItem>
      <ButtonGroupItem value="option-2">Option 2</ButtonGroupItem>
      <ButtonGroupItem value="option-3">Option 3</ButtonGroupItem>
      <ButtonGroupItem value="option-4">Option 4</ButtonGroupItem>
    </ButtonGroup>
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <ButtonGroup>
      <ButtonGroupItem value="hourly">Hourly</ButtonGroupItem>
      <ButtonGroupItem value="daily">Daily</ButtonGroupItem>
      <ButtonGroupItem value="monthly">Monthly</ButtonGroupItem>
      <ButtonGroupItem value="custom">
        <Icon name={ ICON_NAME.calendar } /> Custom
      </ButtonGroupItem>
    </ButtonGroup>
  ),
};

export const Size: Story = {
  globals: {
    imports: `import { BUTTON_GROUP_SIZE, ButtonGroup, ButtonGroupItem } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <>
      <p>MD</p>
      <ButtonGroup size={ BUTTON_GROUP_SIZE.md }>
        <ButtonGroupItem value="option-1">Option 1</ButtonGroupItem>
        <ButtonGroupItem value="option-2">Option 2</ButtonGroupItem>
        <ButtonGroupItem value="option-3">Option 3</ButtonGroupItem>
        <ButtonGroupItem value="option-4">Option 4</ButtonGroupItem>
      </ButtonGroup>

      <p>SM</p>
      <ButtonGroup size={ BUTTON_GROUP_SIZE.sm }>
        <ButtonGroupItem value="option-1">Option 1</ButtonGroupItem>
        <ButtonGroupItem value="option-2">Option 2</ButtonGroupItem>
        <ButtonGroupItem value="option-3">Option 3</ButtonGroupItem>
        <ButtonGroupItem value="option-4">Option 4</ButtonGroupItem>
      </ButtonGroup>

      <p>XS</p>
      <ButtonGroup size={ BUTTON_GROUP_SIZE.xs }>
        <ButtonGroupItem value="option-1">Option 1</ButtonGroupItem>
        <ButtonGroupItem value="option-2">Option 2</ButtonGroupItem>
        <ButtonGroupItem value="option-3">Option 3</ButtonGroupItem>
        <ButtonGroupItem value="option-4">Option 4</ButtonGroupItem>
      </ButtonGroup>
    </>
  ),
};

export const ThemeGenerator: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['!dev'],
  render: ({}) => (
    <ButtonGroup multiple>
      <ButtonGroupItem value="option-1">Option 1</ButtonGroupItem>
      <ButtonGroupItem value="option-2">Option 2</ButtonGroupItem>
      <ButtonGroupItem value="option-3">Option 3</ButtonGroupItem>
      <ButtonGroupItem value="option-4">Option 4</ButtonGroupItem>
    </ButtonGroup>
  ),
};
