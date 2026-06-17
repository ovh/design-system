import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { FormField, FormFieldLabel } from '../../../../ods-react/src/components/form-field/src';
import { Quantity, QuantityControl, QuantityInput, type QuantityProp } from '../../../../ods-react/src/components/quantity/src';
import { excludeFromDemoControls } from '../../../src/helpers/controls';

type Story = StoryObj<QuantityProp>;

const meta: Meta<QuantityProp> = {
  argTypes: excludeFromDemoControls(['defaultValue', 'name', 'onValueChange', 'required', 'value']),
  component: Quantity,
  subcomponents: { QuantityControl, QuantityInput },
  title: 'React Components/Quantity',
};

export default meta;

export const AccessibilityLabel: Story = {
  globals: {
    imports: `import { FormField, FormFieldLabel, Quantity, QuantityControl, QuantityInput } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <FormField>
      <FormFieldLabel>
        Number of CPUs:
      </FormFieldLabel>

      <Quantity
        max={ 10 }
        min={ 0 }>
        <QuantityControl>
          <QuantityInput />
        </QuantityControl>
      </Quantity>
    </FormField>
  ),
};

export const AnatomyTech: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Quantity
      defaultValue="0"
      min={ 0 }>
      <QuantityControl>
        <QuantityInput />
      </QuantityControl>
    </Quantity>
  ),
};

export const Default: Story = {
  globals: {
    imports: `import { Quantity, QuantityControl, QuantityInput } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Quantity>
      <QuantityControl>
        <QuantityInput />
      </QuantityControl>
    </Quantity>
  ),
};

export const Disabled: Story = {
  globals: {
    imports: `import { Quantity, QuantityControl, QuantityInput } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Quantity disabled>
      <QuantityControl>
        <QuantityInput />
      </QuantityControl>
    </Quantity>
  ),
};

export const InFormField: Story = {
  globals: {
    imports: `import { FormField, FormFieldLabel, Quantity, QuantityControl, QuantityInput } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <FormField>
      <FormFieldLabel>
        Set a quantity:
      </FormFieldLabel>

      <Quantity>
        <QuantityControl>
          <QuantityInput />
        </QuantityControl>
      </Quantity>
    </FormField>
  ),
};

export const Max: Story = {
  globals: {
    imports: `import { Quantity, QuantityControl, QuantityInput } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Quantity max={ 10 }>
      <QuantityControl>
        <QuantityInput />
      </QuantityControl>
    </Quantity>
  ),
};

export const Min: Story = {
  globals: {
    imports: `import { Quantity, QuantityControl, QuantityInput } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Quantity min={ 0 }>
      <QuantityControl>
        <QuantityInput />
      </QuantityControl>
    </Quantity>
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <Quantity
      defaultValue="0"
      min={ 0 }>
      <QuantityControl>
        <QuantityInput />
      </QuantityControl>
    </Quantity>
  ),
};

export const Readonly: Story = {
  globals: {
    imports: `import { Quantity, QuantityControl, QuantityInput } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Quantity readOnly>
      <QuantityControl>
        <QuantityInput />
      </QuantityControl>
    </Quantity>
  ),
};

export const Step: Story = {
  globals: {
    imports: `import { Quantity, QuantityControl, QuantityInput } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Quantity step={ 10 }>
      <QuantityControl>
        <QuantityInput />
      </QuantityControl>
    </Quantity>
  ),
};


export const ThemeGenerator: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['!dev'],
  render: ({}) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
      <Quantity>
        <QuantityControl>
          <QuantityInput />
        </QuantityControl>
      </Quantity>

      <Quantity disabled>
        <QuantityControl>
          <QuantityInput />
        </QuantityControl>
      </Quantity>

      <Quantity readOnly>
        <QuantityControl>
          <QuantityInput defaultValue="3" />
        </QuantityControl>
      </Quantity>

      <Quantity invalid>
        <QuantityControl>
          <QuantityInput />
        </QuantityControl>
      </Quantity>
    </div>
  ),
};
