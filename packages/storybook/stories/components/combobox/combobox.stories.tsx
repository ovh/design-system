import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import {
  Combobox,
  ComboboxContent,
  ComboboxControl,
  ComboboxControlProp,
  type ComboboxItemOrGroup, ComboboxLabel,
  type ComboboxProp,
} from '../../../../ods-react/src/components/combobox/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { excludeFromDemoControls, orderControls } from '../../../src/helpers/controls';
import { FormField } from '../../../../ods-react/src/components/form-field/src';

type Story = StoryObj<ComboboxProp>;
type DemoArg = Partial<ComboboxProp> & Partial<ComboboxControlProp> & {
  label?: string,
};

const meta: Meta<ComboboxProp> = {
  argTypes: excludeFromDemoControls(['customOptionRenderer', 'defaultValue', 'items', 'invalid', 'name', 'onInputValueChange', 'onValueChange', 'required', 'value']),
  component: Combobox,
  subcomponents: { ComboboxContent, ComboboxControl },
  title: 'ODS Components/Form elements/Combobox',
};

export default meta;

export const Demo: StoryObj = {
  render: (arg: DemoArg) => (
    <Combobox
      items={ [
        { label: 'Dog', value: 'dog' },
        { label: 'Cat', value: 'cat' },
        { label: 'Hamster', value: 'hamster' },
        { label: 'Parrot', value: 'parrot' },
        { label: 'Spider', value: 'spider' },
        { label: 'Goldfish', value: 'goldfish' },
      ] }
      allowCustomValue={ arg.allowCustomValue }
      defaultValue={ arg.defaultValue }
      disabled={ arg.disabled }
      highlightResults={ arg.highlightResults }
      newElementLabel={ arg.newElementLabel }
      noResultLabel={ arg.noResultLabel }
      readOnly={ arg.readOnly }
    >
      <ComboboxControl clearable={ arg.clearable } placeholder={ arg.placeholder } loading={ arg.loading } />
      <ComboboxContent />
    </Combobox>
  ),
  argTypes: orderControls({
    addNewElementLabel: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'text',
    },
    allowNewElement: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'boolean',
    },
    clearable: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: { summary: 'boolean' },
      },
      control: 'boolean',
    },
    defaultValue: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'text',
    },
    disabled: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'boolean',
    },
    highlightResults: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'boolean',
    },
    invalid: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'boolean',
    },
    label: {
      table: {
        category: CONTROL_CATEGORY.slot,
      },
      control: 'text',
    },
    loading: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: { summary: 'boolean' },
      },
      control: 'boolean',
    },
    noResultLabel: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'text',
    },
    placeholder: {
      table: {
        category: CONTROL_CATEGORY.slot,
      },
      control: 'text',
    },
    readOnly: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'boolean',
    },
  }),
  args: {
    label: 'My combobox',
    placeholder: 'Start typing',
  },
};

export const Default: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Combobox
      items={ [
        { label: 'Dog', value: 'dog' },
        { label: 'Cat', value: 'cat' },
        { label: 'Hamster', value: 'hamster' },
        { label: 'Parrot', value: 'parrot' },
        { label: 'Spider', value: 'spider' },
        { label: 'Goldfish', value: 'goldfish' },
      ] }>
      <ComboboxControl />
      <ComboboxContent />
    </Combobox>
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Combobox
      items={ [
        { label: 'Dog', value: 'dog' },
        { label: 'Cat', value: 'cat' },
        { label: 'Hamster', value: 'hamster' },
        { label: 'Parrot', value: 'parrot' },
        { label: 'Spider', value: 'spider' },
        { label: 'Goldfish', value: 'goldfish' },
      ] }>
      <ComboboxControl placeholder={ 'Combobox' } />
      <ComboboxContent />
    </Combobox>
  ),
};

export const Clearable: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Combobox
      items={ [
        { label: 'Dog', value: 'dog' },
        { label: 'Cat', value: 'cat' },
        { label: 'Hamster', value: 'hamster' },
        { label: 'Parrot', value: 'parrot' },
        { label: 'Spider', value: 'spider' },
        { label: 'Goldfish', value: 'goldfish' },
      ] }>
      <ComboboxControl placeholder={ 'Combobox' } clearable />
      <ComboboxContent />
    </Combobox>
  ),
};

export const Disabled: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Combobox
      disabled
      items={ [
        { label: 'Dog', value: 'dog' },
        { label: 'Cat', value: 'cat' },
        { label: 'Hamster', value: 'hamster' },
        { label: 'Parrot', value: 'parrot' },
        { label: 'Spider', value: 'spider' },
        { label: 'Goldfish', value: 'goldfish' },
      ] }>
      <ComboboxControl placeholder={ 'Combobox' } />
      <ComboboxContent />
    </Combobox>
  ),
};

export const Readonly: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Combobox
      items={ [
        { label: 'Dog', value: 'dog' },
        { label: 'Cat', value: 'cat' },
        { label: 'Hamster', value: 'hamster' },
        { label: 'Parrot', value: 'parrot' },
        { label: 'Spider', value: 'spider' },
        { label: 'Goldfish', value: 'goldfish' },
      ] }
      readOnly>
      <ComboboxControl placeholder={ 'Combobox' } />
      <ComboboxContent />
    </Combobox>
  ),
};

export const Group: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Combobox
      items={ [
        {
          label: 'Europe',
          options: [
            { label: 'France', value: 'fr' },
            { label: 'Germany', value: 'de' },
            { label: 'Italy', value: 'it' },
          ],
        },
        {
          label: 'Asia',
          options: [
            { label: 'China', value: 'cn' },
            { label: 'Japan', value: 'jp' },
            { label: 'Russia', value: 'ru' },
          ],
        },
        { label: 'World', value: 'world' },
      ] }>
      <ComboboxControl placeholder={ 'Combobox' } />
      <ComboboxContent />
    </Combobox>
  ),
};

export const InFormField: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <FormField>
      <Combobox
        items={ [
          { label: 'Dog', value: 'dog' },
          { label: 'Cat', value: 'cat' },
        ] }>
        <ComboboxLabel>Combobox</ComboboxLabel>
        <ComboboxControl placeholder={ 'Combobox' } />
        <ComboboxContent />
      </Combobox>
    </FormField>
  ),
}

export const Controlled: Story = {
  tags: ['!dev'],
  render: () => {
    const [value, setValue] = React.useState<string[]>(['dog']);
    return (
      <>
        <Combobox
          items={[
            { label: 'Dog', value: 'dog' },
            { label: 'Cat', value: 'cat' },
            { label: 'Hamster', value: 'hamster' },
            { label: 'Parrot', value: 'parrot' },
            { label: 'Spider', value: 'spider' },
            { label: 'Goldfish', value: 'goldfish' },
          ]}
          value={value}
          onValueChange={details => setValue(details.value ?? [])}
        >
          <ComboboxControl placeholder="Select an animal" />
          <ComboboxContent />
        </Combobox>
        <div style={{ marginTop: 8 }}>
          <strong>Selected value:</strong> {value[0] ?? 'None'}
        </div>
      </>
    );
  },
};

export const Highlight: Story = {
  tags: ['!dev'],
  render: () => (
    <Combobox
      highlightResults={true}
      items={[
        { label: 'Dog', value: 'dog' },
        { label: 'Cat', value: 'cat' },
        { label: 'Hamster', value: 'hamster' },
        { label: 'Parrot', value: 'parrot' },
        { label: 'Spider', value: 'spider' },
        { label: 'Goldfish', value: 'goldfish' },
      ]}
    >
      <ComboboxControl />
      <ComboboxContent />
    </Combobox>
  ),
};

export const CustomOptions: Story = {
  tags: ['!dev'],
  render: () => {
    const items = [
      { label: 'Apple', value: 'apple', customRendererData: { color: 'red', info: 'Fruit' } },
      { label: 'Banana', value: 'banana', customRendererData: { color: 'yellow', info: 'Fruit' } },
      { label: 'Carrot', value: 'carrot', customRendererData: { color: 'orange', info: 'Vegetable' } },
      { label: 'Broccoli', value: 'broccoli', customRendererData: { color: 'green', info: 'Vegetable' } },
      { label: 'Blueberry', value: 'blueberry', customRendererData: { color: 'blue', info: 'Fruit' } },
    ];
    const customOptionRenderer = ({ label, highlightInfo }: ComboboxItemOrGroup) => {
      const data = (highlightInfo || {}) as Record<string, unknown>;
      const color = typeof data.color === 'string' ? data.color : undefined;
      const info = typeof data.info === 'string' ? data.info : '';
      return (
        <span style={{ color, fontWeight: 'bold' }}>
          {label} <span style={{ fontWeight: 'normal', fontSize: 12, color: '#888' }}>({info})</span>
        </span>
      );
    };
    return (
      <Combobox
        highlightResults={true}
        items={items}
        customOptionRenderer={customOptionRenderer}
      >
        <ComboboxControl />
        <ComboboxContent />
      </Combobox>
    );
  },
};

export const Empty: Story = {
  tags: ['!dev'],
  render: () => (
    <Combobox items={[]}>
      <ComboboxControl />
      <ComboboxContent />
    </Combobox>
  ),
};

export const Placeholder: Story = {
  tags: ['!dev'],
  render: () => (
    <Combobox
      items={[
        { label: 'Dog', value: 'dog' },
        { label: 'Cat', value: 'cat' },
        { label: 'Hamster', value: 'hamster', disabled: true },
        { label: 'Parrot', value: 'parrot' },
        { label: 'Spider', value: 'spider' },
        { label: 'Goldfish', value: 'goldfish' },
      ]}
    >
      <ComboboxControl placeholder="Please select" />
      <ComboboxContent />
    </Combobox>
  ),
};
