import { type Meta, type StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import {
  Combobox,
  ComboboxContent,
  ComboboxControl,
  ComboboxControlProp,
  type ComboboxItem,
  type ComboboxProp,
} from '../../../../ods-react/src/components/combobox/src';
import { FormField, FormFieldLabel } from '../../../../ods-react/src/components/form-field/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { excludeFromDemoControls, orderControls } from '../../../src/helpers/controls';

type Story = StoryObj<ComboboxProp>;
type DemoArg = Partial<ComboboxProp> & Partial<ComboboxControlProp> & {
};

const meta: Meta<ComboboxProp> = {
  argTypes: excludeFromDemoControls(['customOptionRenderer', 'defaultValue', 'items', 'name', 'onInputValueChange', 'onValueChange', 'required', 'value']),
  component: Combobox,
  subcomponents: { ComboboxContent, ComboboxControl },
  title: 'React Components/Combobox',
};

export default meta;

export const Demo: StoryObj = {
  render: (arg: DemoArg) => (
    <Combobox
      items={[
        { label: 'Dog', value: 'dog' },
        { label: 'Cat', value: 'cat' },
        { label: 'Hamster', value: 'hamster' },
        { label: 'Parrot', value: 'parrot' },
        { label: 'Spider', value: 'spider' },
        { label: 'Goldfish', value: 'goldfish' },
      ]}
      allowCustomValue={ arg.allowCustomValue }
      defaultValue={ arg.defaultValue }
      disabled={ arg.disabled }
      highlightResults={ arg.highlightResults }
      invalid={ arg.invalid }
      multiple={ arg.multiple }
      newElementLabel={ arg.newElementLabel }
      noResultLabel={ arg.noResultLabel }
      readOnly={ arg.readOnly }>
      <ComboboxControl clearable={ arg.clearable } placeholder={ arg.placeholder } loading={ arg.loading } />
      <ComboboxContent />
    </Combobox>
  ),
  argTypes: orderControls({
    allowCustomValue: {
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
    loading: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: { summary: 'boolean' },
      },
      control: 'boolean',
    },
    multiple: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'boolean',
    },
    newElementLabel: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'text',
    },
    noResultLabel: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'text',
    },
    placeholder: {
      table: {
        category: CONTROL_CATEGORY.general,
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
    placeholder: 'Start typing',
  },
};

export const Default: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Combobox
      items={[
        { label: 'Dog', value: 'dog' },
        { label: 'Cat', value: 'cat' },
        { label: 'Hamster', value: 'hamster' },
        { label: 'Parrot', value: 'parrot' },
        { label: 'Spider', value: 'spider' },
        { label: 'Goldfish', value: 'goldfish' },
      ]}>
      <ComboboxControl />
      <ComboboxContent />
    </Combobox>
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Combobox
      items={[
        { label: 'Dog', value: 'dog' },
        { label: 'Cat', value: 'cat' },
        { label: 'Hamster', value: 'hamster' },
        { label: 'Parrot', value: 'parrot' },
        { label: 'Spider', value: 'spider' },
        { label: 'Goldfish', value: 'goldfish' },
      ]}>
      <ComboboxControl placeholder="Combobox" />
      <ComboboxContent />
    </Combobox>
  ),
};

export const Clearable: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Combobox
      items={[
        { label: 'Dog', value: 'dog' },
        { label: 'Cat', value: 'cat' },
        { label: 'Hamster', value: 'hamster' },
        { label: 'Parrot', value: 'parrot' },
        { label: 'Spider', value: 'spider' },
        { label: 'Goldfish', value: 'goldfish' },
      ]}>
      <ComboboxControl clearable placeholder="Combobox" />
      <ComboboxContent />
    </Combobox>
  ),
};

export const Disabled: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Combobox
      disabled
      items={[
        { label: 'Dog', value: 'dog' },
        { label: 'Cat', value: 'cat' },
        { label: 'Hamster', value: 'hamster' },
        { label: 'Parrot', value: 'parrot' },
        { label: 'Spider', value: 'spider' },
        { label: 'Goldfish', value: 'goldfish' },
      ]}>
      <ComboboxControl placeholder="Combobox" />
      <ComboboxContent />
    </Combobox>
  ),
};

export const Readonly: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Combobox
      items={[
        { label: 'Dog', value: 'dog' },
        { label: 'Cat', value: 'cat' },
        { label: 'Hamster', value: 'hamster' },
        { label: 'Parrot', value: 'parrot' },
        { label: 'Spider', value: 'spider' },
        { label: 'Goldfish', value: 'goldfish' },
      ]}
      readOnly>
      <ComboboxControl placeholder="Combobox" />
      <ComboboxContent />
    </Combobox>
  ),
};

export const Group: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Combobox
      items={[
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
      ]}>
      <ComboboxControl placeholder="Combobox" />
      <ComboboxContent />
    </Combobox>
  ),
};

export const InFormField: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <FormField>
      <FormFieldLabel>Combobox</FormFieldLabel>
      <Combobox
        items={[
          { label: 'Dog', value: 'dog' },
          { label: 'Cat', value: 'cat' },
        ]}>
        <ComboboxControl />
        <ComboboxContent />
      </Combobox>
    </FormField>
  ),
}

export const Invalid: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Combobox
      invalid
      items={[
        { label: 'Dog', value: 'dog' },
        { label: 'Cat', value: 'cat' },
      ]}>
      <ComboboxControl />
      <ComboboxContent />
    </Combobox>
  )
}

export const Controlled: Story = {
  tags: ['!dev'],
  render: () => {
    const [value, setValue] = useState<string[]>(['dog']);
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
          onValueChange={ details => setValue(details.value) }
          value={ value }>
          <ComboboxControl placeholder="Select an animal" />
          <ComboboxContent />
        </Combobox>
        <div style={{ marginTop: 8 }}>
          <strong>Selected value:</strong> { value[0] ?? 'None' }
        </div>
      </>
    );
  },
};

export const Highlight: Story = {
  tags: ['!dev'],
  render: () => (
    <Combobox
      highlightResults
      items={[
        { label: 'Dog', value: 'dog' },
        { label: 'Cat', value: 'cat' },
        { label: 'Hamster', value: 'hamster' },
        { label: 'Parrot', value: 'parrot' },
        { label: 'Spider', value: 'spider' },
        { label: 'Goldfish', value: 'goldfish' },
      ]}>
      <ComboboxControl />
      <ComboboxContent />
    </Combobox>
  ),
};

export const CustomOptions: Story = {
  tags: ['!dev'],
  render: () => {
    type CustomData = {
      color: string;
      info: string;
    };

    const items = [
      { label: 'Apple', value: 'apple', customRendererData: { color: 'red', info: 'Fruit' }},
      { label: 'Banana', value: 'banana', customRendererData: { color: 'yellow', info: 'Fruit' }},
      { label: 'Carrot', value: 'carrot', customRendererData: { color: 'orange', info: 'Vegetable' }},
      { label: 'Broccoli', value: 'broccoli', customRendererData: { color: 'green', info: 'Vegetable' }},
      { label: 'Blueberry', value: 'blueberry', customRendererData: { color: 'blue', info: 'Fruit' }},
    ];

    function customOptionRenderer(item: ComboboxItem<CustomData>) {
      return (
        <span style={{ color: item.customRendererData?.color, fontWeight: 'bold' }}>
          { item.label } { item.customRendererData?.info && <span style={{ fontWeight: 'normal', fontSize: 12, color: '#888' }}>({ item.customRendererData.info })</span> }
        </span>
      );
    }

    return (
      <Combobox
        customOptionRenderer={ customOptionRenderer }
        highlightResults
        items={ items }>
        <ComboboxControl />
        <ComboboxContent />
      </Combobox>
    );
  },
};

export const Empty: Story = {
  tags: ['!dev'],
  render: () => (
    <Combobox items={ [] }>
      <ComboboxControl />
      <ComboboxContent />
    </Combobox>
  ),
};

export const Multiple: Story = {
  tags: ['!dev'],
  render: () => (
    <Combobox
      multiple
      items={[
        { label: 'Dog', value: 'dog' },
        { label: 'Cat', value: 'cat' },
        { label: 'Hamster', value: 'hamster' },
        { label: 'Parrot', value: 'parrot' },
        { label: 'Spider', value: 'spider' },
        { label: 'Goldfish', value: 'goldfish' },
      ]}>
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
      ]}>
      <ComboboxControl placeholder="Please select" />
      <ComboboxContent />
    </Combobox>
  ),
};
