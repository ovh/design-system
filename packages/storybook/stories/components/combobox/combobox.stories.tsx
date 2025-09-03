import { type Meta, type StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Button } from '../../../../ods-react/src/components/button/src';
import { Combobox, type ComboboxItem, type ComboboxProp, } from '../../../../ods-react/src/components/combobox/src';
import { FormField, FormFieldLabel } from '../../../../ods-react/src/components/form-field/src';
import { INPUT_I18N } from '../../../../ods-react/src/components/input/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { excludeFromDemoControls, orderControls } from '../../../src/helpers/controls';
import { staticSourceRenderConfig } from '../../../src/helpers/source';

type Story = StoryObj<ComboboxProp>;

const meta: Meta<ComboboxProp> = {
  argTypes: excludeFromDemoControls(['createPortal', 'customFilter', 'customOptionRenderer', 'defaultValue', 'i18n', 'items', 'locale', 'name', 'onInputChange', 'onValueChange', 'ref', 'required', 'value']),
  component: Combobox,
  title: 'React Components/Combobox',
};

export default meta;

export const Demo: Story = {
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
    loadingLabel: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'text',
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
    items: [
      { label: 'Dog', value: 'dog' },
      { label: 'Cat', value: 'cat' },
      { label: 'Hamster', value: 'hamster' },
      { label: 'Parrot', value: 'parrot' },
      { label: 'Spider', value: 'spider' },
      { label: 'Goldfish', value: 'goldfish' },
    ],
    placeholder: 'Start typing',
  },
};

export const Async: Story = {
  decorators: [(story) => <div style={{ display: 'grid', gridTemplateColumns: 'max-content 1fr', gap: '8px', alignItems: 'center' }}>{ story() }</div>],
  globals: {
    imports: `import { Button, Combobox, type ComboboxItem } from '@ovhcloud/ods-react';
import { useState } from 'react';`,
  },
  parameters: {
    docs: {
      source: { ...staticSourceRenderConfig() },
    },
  },
  tags: ['!dev'],
  render: ({}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [asyncItems, setAsyncItems] = useState<ComboboxItem[]>([]);

    function onLoad() {
      setIsLoading(true);

      // Fake delay to simulate API call
      setTimeout(() => {
        requestAnimationFrame(() => {
          setAsyncItems([
            { label: 'Dog', value: 'dog' },
            { label: 'Cat', value: 'cat' },
            { label: 'Hamster', value: 'hamster' },
            { label: 'Parrot', value: 'parrot' },
            { label: 'Spider', value: 'spider' },
            { label: 'Goldfish', value: 'goldfish' },
          ]);
          setIsLoading(false);
        });
      }, 3000);
    }

    return (
      <>
        <Button onClick={ onLoad }>
          Load data
        </Button>

        <Combobox
          items={ asyncItems }
          loading={ isLoading }
          loadingLabel="Loading data ..." />
      </>
    );
  },
};

export const Default: Story = {
  globals: {
    imports: `import { Combobox } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Combobox items={[
      { label: 'Dog', value: 'dog' },
      { label: 'Cat', value: 'cat' },
      { label: 'Hamster', value: 'hamster' },
      { label: 'Parrot', value: 'parrot' },
      { label: 'Spider', value: 'spider' },
      { label: 'Goldfish', value: 'goldfish' },
    ]} />
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Combobox items={[
      { label: 'Dog', value: 'dog' },
      { label: 'Cat', value: 'cat' },
      { label: 'Hamster', value: 'hamster' },
      { label: 'Parrot', value: 'parrot' },
      { label: 'Spider', value: 'spider' },
      { label: 'Goldfish', value: 'goldfish' },
    ]} />
  ),
};

export const Clearable: Story = {
  globals: {
    imports: `import { Combobox } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Combobox
      clearable
      items={[
        { label: 'Dog', value: 'dog' },
        { label: 'Cat', value: 'cat' },
        { label: 'Hamster', value: 'hamster' },
        { label: 'Parrot', value: 'parrot' },
        { label: 'Spider', value: 'spider' },
        { label: 'Goldfish', value: 'goldfish' },
      ]} />
  ),
};

export const Disabled: Story = {
  globals: {
    imports: `import { Combobox } from '@ovhcloud/ods-react';`,
  },
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
      ]} />
  ),
};

export const Readonly: Story = {
  globals: {
    imports: `import { Combobox } from '@ovhcloud/ods-react';`,
  },
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
      readOnly />
  ),
};

export const Group: Story = {
  globals: {
    imports: `import { Combobox } from '@ovhcloud/ods-react';`,
  },
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
      ]} />
  ),
};

export const InFormField: Story = {
  globals: {
    imports: `import { Combobox, FormField, FormFieldLabel } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <FormField>
      <FormFieldLabel>
        Combobox
      </FormFieldLabel>

      <Combobox items={[
        { label: 'Dog', value: 'dog' },
        { label: 'Cat', value: 'cat' },
        { label: 'Hamster', value: 'hamster' },
        { label: 'Parrot', value: 'parrot' },
        { label: 'Spider', value: 'spider' },
        { label: 'Goldfish', value: 'goldfish' },
      ]} />
    </FormField>
  ),
}

export const Invalid: Story = {
  globals: {
    imports: `import { Combobox } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Combobox
      invalid
      items={[
        { label: 'Dog', value: 'dog' },
        { label: 'Cat', value: 'cat' },
        { label: 'Hamster', value: 'hamster' },
        { label: 'Parrot', value: 'parrot' },
        { label: 'Spider', value: 'spider' },
        { label: 'Goldfish', value: 'goldfish' },
      ]} />
  )
}

export const Controlled: Story = {
  globals: {
    imports: `import { Combobox } from '@ovhcloud/ods-react';
import { useState } from 'react';`,
  },
  tags: ['!dev'],
  parameters: {
    docs: {
      source: { ...staticSourceRenderConfig() },
    },
  },
  render: ({}) => {
    const items = [
      { label: 'Dog', value: 'dog' },
      { label: 'Cat', value: 'cat' },
      { label: 'Hamster', value: 'hamster' },
      { label: 'Parrot', value: 'parrot' },
      { label: 'Spider', value: 'spider' },
      { label: 'Goldfish', value: 'goldfish' },
    ];
    const [value, setValue] = useState<ComboboxItem[]>([items[0]]);

    return (
      <>
        <Combobox
          items={items }
          onValueChange={ (details) => setValue(details) }
          value={ value } />

        <div style={{ marginTop: 8 }}>
          <strong>Selected value:</strong> { value[0].label ?? 'None' }
        </div>
      </>
    );
  },
};

export const Highlight: Story = {
  globals: {
    imports: `import { Combobox } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Combobox
      highlightResults
      items={[
        { label: 'Dog', value: 'dog' },
        { label: 'Cat', value: 'cat' },
        { label: 'Hamster', value: 'hamster' },
        { label: 'Parrot', value: 'parrot' },
        { label: 'Spider', value: 'spider' },
        { label: 'Goldfish', value: 'goldfish' },
      ]} />
  ),
};

export const CustomOptions: Story = {
  globals: {
    imports: `import { Combobox } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  parameters: {
    docs: {
      source: { ...staticSourceRenderConfig() },
    },
  },
  render: ({}) => {
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
        items={ items } />
    );
  },
};

export const Empty: Story = {
  globals: {
    imports: `import { Combobox } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Combobox items={ [] } />
  ),
};

export const Multiple: Story = {
  globals: {
    imports: `import { Combobox } from '@ovhcloud/ods-react';`,
  },
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
      multiple />
  ),
};

export const Placeholder: Story = {
  globals: {
    imports: `import { Combobox } from '@ovhcloud/ods-react';`,
  },
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
      placeholder="Please select" />
  ),
};

export const AccessibilityFormField: Story = {
  globals: {
    imports: `import { Combobox, FormField, FormFieldLabel } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <FormField>
      <FormFieldLabel>
        Favorite pet:
      </FormFieldLabel>

      <Combobox
        items={[
          { label: 'Dog', value: 'dog' },
          { label: 'Cat', value: 'cat' },
          { label: 'Hamster', value: 'hamster' },
          { label: 'Parrot', value: 'parrot' },
          { label: 'Spider', value: 'spider' },
          { label: 'Goldfish', value: 'goldfish' },
        ]} />
    </FormField>
  ),
};

export const AccessibilityI18n: Story = {
  globals: {
    imports: `import { INPUT_I18N, Combobox, FormField, FormFieldLabel } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  parameters: {
    docs: {
      source: { ...staticSourceRenderConfig() },
    },
  },
  render: ({}) => (
    <FormField>
      <FormFieldLabel>
        Favorite pet:
      </FormFieldLabel>

      <Combobox
        clearable
        i18n={{
          [INPUT_I18N.clearButton]: 'Clear favorite pet selection'
        }}
        items={[
          { label: 'Dog', value: 'dog' },
          { label: 'Cat', value: 'cat' },
          { label: 'Hamster', value: 'hamster' },
          { label: 'Parrot', value: 'parrot' },
          { label: 'Spider', value: 'spider' },
          { label: 'Goldfish', value: 'goldfish' },
        ]} />
    </FormField>
  ),
};
