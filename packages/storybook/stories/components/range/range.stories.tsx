import { type Meta, type StoryObj } from '@storybook/react';
import React, { useEffect, useState } from 'react';
import { FormField, FormFieldLabel } from '../../../../ods-react/src/components/form-field/src';
import { Range, type RangeProp, type RangeValueChangeDetail } from '../../../../ods-react/src/components/range/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { excludeFromDemoControls, orderControls } from '../../../src/helpers/controls';
import { staticSourceRenderConfig } from '../../../src/helpers/source';

type Story = StoryObj<RangeProp>;
type DemoArg = Partial<RangeProp> & {
  dualRange?: boolean,
};

const meta: Meta<RangeProp> = {
  argTypes: excludeFromDemoControls(['aria-label', 'aria-labelledby', 'defaultValue', 'max', 'min', 'name', 'onDragging', 'onValueChange', 'ticks', 'value']),
  component: Range,
  title: 'ODS Components/Form elements/Range',
};

export default meta;

export const Demo: StoryObj = {
  decorators: [(story) => <div style={{ display: 'flex', flexFlow: 'column', justifyContent: 'center', height: '80vh' }}>{ story() }</div>],
  render: ({ dualRange, ...arg }: DemoArg) => {
    const MAX_VALUE = 100;
    const [values, setValues] = useState([0]);

    useEffect(() => {
      if (dualRange) {
        const step = arg.step || 1;
        const newValue = values[0] === MAX_VALUE ? values[0] - step : values[0];
        setValues([newValue, newValue + step]);
      } else {
        setValues([values[0]]);
      }
    }, [dualRange]);

    return (
      <Range
        { ...arg }
        max={ MAX_VALUE }
        onDragging={ ({ value }) => setValues(value) }
        value={ values } />
    );
  },
  argTypes: orderControls({
    disabled: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: { type: 'boolean' },
    },
    dualRange: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: { summary: 'boolean' },
      },
      control: { type: 'boolean' },
    },
    invalid: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'boolean',
    },
    step: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'number',
    },
  }),
};

export const Controlled: Story = {
  tags: ['!dev'],
  parameters: {
    docs: {
      source: { ...staticSourceRenderConfig() },
    },
  },
  render: ({}) => {
    const [draggingValue, setDraggingValue] = useState<number>();
    const [value, setValue] = useState<number>();

    function onDragging(detail: RangeValueChangeDetail) {
      setDraggingValue(detail.value[0]);
    }

    function onValueChange(detail: RangeValueChangeDetail) {
      setValue(detail.value[0]);
    }

    return (
      <>
        <p>
          <span>Final value: { value }</span>
          <br />
          <span>Dragged value: { draggingValue }</span>
        </p>

        <Range
          onDragging={ onDragging }
          onValueChange={ onValueChange }
          value={ draggingValue ? [draggingValue] : undefined } />
      </>
    );
  },
};

export const Default: Story = {
  decorators: [(story) => <div style={{ display: 'flex', flexFlow: 'column', rowGap: '8px' }}>{ story() }</div>],
  tags: ['!dev'],
  render: ({}) => (
    <>
      <Range />

      <Range defaultValue={ [50, 75] } />
    </>
  ),
};

export const Disabled: Story = {
  decorators: [(story) => <div style={{ display: 'flex', flexFlow: 'column', rowGap: '8px' }}>{ story() }</div>],
  tags: ['!dev'],
  render: ({}) => (
    <>
      <Range
        defaultValue={ [20] }
        disabled />

      <Range
        defaultValue={ [50, 75] }
        disabled />
    </>
  ),
};

export const InFormField: Story = {
  decorators: [(story) => <div style={{ display: 'flex', flexFlow: 'column', rowGap: '8px' }}>{ story() }</div>],
  tags: ['!dev'],
  render: ({}) => (
    <FormField>
      <FormFieldLabel>
        Range:
      </FormFieldLabel>

      <Range />
    </FormField>
  ),
};

export const MaxMin: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <>
      <p>Max 500</p>
      <Range
        defaultValue={ [50] }
        max={ 500 } />
      <Range
        defaultValue={ [50, 75] }
        max={ 500 } />

      <p>Min 25</p>
      <Range
        defaultValue={ [50] }
        min={ 25 } />
      <Range
        defaultValue={ [50, 75] }
        min={ 25 } />

      <p>Max 75 & Min 25</p>
      <Range
        defaultValue={ [50] }
        max={ 75 }
        min={ 25 } />
      <Range
        defaultValue={ [50, 75] }
        max={ 75 }
        min={ 25 } />
    </>
  ),
};

export const Overview: Story = {
  decorators: [(story) => <div style={{ width: '160px' }}>{ story() }</div>],
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <Range defaultValue={ [50] } />
  ),
};

export const Step: Story = {
  decorators: [(story) => <div style={{ display: 'flex', flexFlow: 'column', rowGap: '8px' }}>{ story() }</div>],
  tags: ['!dev'],
  render: ({}) => (
    <>
      <Range
        defaultValue={ [20] }
        step={ 5 } />

      <Range
        defaultValue={ [50, 75] }
        step={ 5 } />
    </>
  ),
};

export const Ticks: Story = {
  decorators: [(story) => <div style={{ display: 'flex', flexFlow: 'column', rowGap: '8px' }}>{ story() }</div>],
  tags: ['!dev'],
  render: ({}) => (
    <>
      <Range
        defaultValue={ [20] }
        ticks={ [10, 20, 30, 40, 50, 60, 70, 80, 90] } />

      <Range
        defaultValue={ [50, 75] }
        ticks={ [10, 20, 30, 40, 50, 60, 70, 80, 90] } />
    </>
  ),
};
