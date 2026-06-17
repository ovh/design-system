import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { FormField, FormFieldLabel } from '../../../../ods-react/src/components/form-field/src';
import { Radio, RadioControl, RadioGroup, type RadioGroupProp, RadioLabel } from '../../../../ods-react/src/components/radio-group/src';
import { excludeFromDemoControls } from '../../../src/helpers/controls';

type Story = StoryObj<RadioGroupProp>;

const meta: Meta<RadioGroupProp> = {
  argTypes: excludeFromDemoControls(['defaultValue', 'name', 'onValueChange', 'value']),
  component: RadioGroup,
  subcomponents: { Radio, RadioControl, RadioLabel },
  title: 'React Components/Radio Group',
};

export default meta;

export const AnatomyTech: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <RadioGroup>
      <Radio value="html">
        <RadioControl />

        <RadioLabel>HTML</RadioLabel>
      </Radio>

      <Radio value="css">
        <RadioControl />

        <RadioLabel>CSS</RadioLabel>
      </Radio>

      <Radio value="js">
        <RadioControl />

        <RadioLabel>JavaScript</RadioLabel>
      </Radio>
    </RadioGroup>
  ),
};

export const Default: Story = {
  globals: {
    imports: `import { Radio, RadioControl, RadioGroup, RadioLabel } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <RadioGroup>
      <Radio value="html">
        <RadioControl />

        <RadioLabel>HTML</RadioLabel>
      </Radio>

      <Radio value="css">
        <RadioControl />

        <RadioLabel>CSS</RadioLabel>
      </Radio>

      <Radio value="js">
        <RadioControl />

        <RadioLabel>JavaScript</RadioLabel>
      </Radio>
    </RadioGroup>
  ),
};

export const DisabledGroup: Story = {
  globals: {
    imports: `import { Radio, RadioControl, RadioGroup, RadioLabel } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <RadioGroup disabled>
      <Radio value="html">
        <RadioControl />

        <RadioLabel>HTML</RadioLabel>
      </Radio>

      <Radio value="css">
        <RadioControl />

        <RadioLabel>CSS</RadioLabel>
      </Radio>

      <Radio value="js">
        <RadioControl />

        <RadioLabel>JavaScript</RadioLabel>
      </Radio>
    </RadioGroup>
  ),
};

export const DisabledItem: Story = {
  globals: {
    imports: `import { Radio, RadioControl, RadioGroup, RadioLabel } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <RadioGroup>
      <Radio value="html">
        <RadioControl />

        <RadioLabel>HTML</RadioLabel>
      </Radio>

      <Radio
        disabled
        value="css">
        <RadioControl />

        <RadioLabel>CSS</RadioLabel>
      </Radio>

      <Radio value="js">
        <RadioControl />

        <RadioLabel>JavaScript</RadioLabel>
      </Radio>
    </RadioGroup>
  ),
};

export const InFormField: Story = {
  globals: {
    imports: `import { FormField, FormFieldLabel, Radio, RadioControl, RadioGroup, RadioLabel } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <FormField>
      <FormFieldLabel>
        Pick a language:
      </FormFieldLabel>

      <RadioGroup>
        <Radio value="html">
          <RadioControl />

          <RadioLabel>HTML</RadioLabel>
        </Radio>

        <Radio value="css">
          <RadioControl />

          <RadioLabel>CSS</RadioLabel>
        </Radio>

        <Radio value="js">
          <RadioControl />

          <RadioLabel>JavaScript</RadioLabel>
        </Radio>
      </RadioGroup>
    </FormField>
  ),
};

export const Invalid: Story = {
  globals: {
    imports: `import { Radio, RadioControl, RadioGroup, RadioLabel } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <RadioGroup
      defaultValue="html">
      <Radio value="html"
             invalid>
        <RadioControl />

        <RadioLabel>HTML</RadioLabel>
      </Radio>

      <Radio
        invalid
        value="css">
        <RadioControl />

        <RadioLabel>CSS</RadioLabel>
      </Radio>

      <Radio value="js">
        <RadioControl />

        <RadioLabel>JavaScript</RadioLabel>
      </Radio>
    </RadioGroup>
  ),
};

export const Orientation: Story = {
  globals: {
    imports: `import { Radio, RadioControl, RadioGroup, RadioLabel } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <RadioGroup orientation="horizontal">
      <Radio value="html">
        <RadioControl />

        <RadioLabel>HTML</RadioLabel>
      </Radio>

      <Radio value="css">
        <RadioControl />

        <RadioLabel>CSS</RadioLabel>
      </Radio>

      <Radio value="js">
        <RadioControl />

        <RadioLabel>JavaScript</RadioLabel>
      </Radio>
    </RadioGroup>
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <RadioGroup>
      <Radio value="html">
        <RadioControl />

        <RadioLabel>HTML</RadioLabel>
      </Radio>

      <Radio value="css">
        <RadioControl />

        <RadioLabel>CSS</RadioLabel>
      </Radio>

      <Radio value="js">
        <RadioControl />

        <RadioLabel>JavaScript</RadioLabel>
      </Radio>
    </RadioGroup>
  ),
};

export const ThemeGenerator: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['!dev'],
  render: ({}) => (
    <div style={{ display: 'flex', gap: '24px' }}>
      <RadioGroup>
        <Radio value="html"><RadioControl /><RadioLabel>HTML</RadioLabel></Radio>
        <Radio value="css"><RadioControl /><RadioLabel>CSS</RadioLabel></Radio>
        <Radio value="js"><RadioControl /><RadioLabel>JavaScript</RadioLabel></Radio>
      </RadioGroup>

      <RadioGroup disabled>
        <Radio value="html"><RadioControl /><RadioLabel>HTML</RadioLabel></Radio>
        <Radio value="css"><RadioControl /><RadioLabel>CSS</RadioLabel></Radio>
        <Radio value="js"><RadioControl /><RadioLabel>JavaScript</RadioLabel></Radio>
      </RadioGroup>

      <RadioGroup>
        <Radio disabled value="html"><RadioControl /><RadioLabel>HTML</RadioLabel></Radio>
        <Radio value="css"><RadioControl /><RadioLabel>CSS</RadioLabel></Radio>
        <Radio value="js"><RadioControl /><RadioLabel>JavaScript</RadioLabel></Radio>
      </RadioGroup>
    </div>
  ),
};
