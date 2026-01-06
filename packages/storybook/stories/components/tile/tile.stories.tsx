import { type Meta, type StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Checkbox, CheckboxControl, CheckboxLabel } from '../../../../ods-react/src/components/checkbox/src';
import { Radio, RadioControl, RadioGroup, RadioLabel } from '../../../../ods-react/src/components/radio-group/src';
import { Tile, TileAltContainer, type TileProp } from '../../../../ods-react/src/components/tile/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

type Story = StoryObj<TileProp>;

const meta: Meta<TileProp> = {
  component: Tile,
  subcomponents: { TileAltContainer },
  tags: ['new'],
  title: 'React Components/Tile',
};

export default meta;

export const Demo: Story = {
  render: (args) => (
    <Tile
      disabled={ args.disabled }
      selected={ args.selected }
      style={{ padding: '16px', width: '300px' }}>
      This is a tile content.
    </Tile>
  ),
  argTypes: orderControls({
    disabled: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'boolean',
    },
    selected: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'boolean',
    },
  }),
};

export const Default: Story = {
  globals: {
    imports: `import { Tile } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Tile style={{ padding: '16px' }}>
      This is a tile content.
    </Tile>
  ),
};

export const Disabled: Story = {
  globals: {
    imports: `import { Tile } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Tile disabled style={{ padding: '16px' }}>
      This tile is disabled.
    </Tile>
  ),
};

export const Selected: Story = {
  globals: {
    imports: `import { Tile } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Tile selected style={{ padding: '16px' }}>
      This tile is selected.
    </Tile>
  ),
};

export const WithAltContainer: Story = {
  globals: {
    imports: `import { Tile, TileAltContainer } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Tile style={{ padding: '16px', width: '300px' }}>
      <p style={{ margin: 0 }}>Main tile content</p>

      <TileAltContainer style={{ marginTop: '8px', padding: '8px' }}>
        This is content inside TileAltContainer
      </TileAltContainer>
    </Tile>
  ),
};

export const WithCheckbox: Story = {
  globals: {
    imports: `import { Checkbox, CheckboxControl, CheckboxLabel, Tile, TileAltContainer } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: function Render() {
    const [selected, setSelected] = useState(false);

    return (
      <Checkbox
        checked={ selected }
        onCheckedChange={ (detail) => setSelected(detail.checked === true) }>
        <Tile selected={ selected } style={{ padding: '16px', width: '300px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <CheckboxControl />
            <CheckboxLabel>Checkbox tile</CheckboxLabel>
          </div>

          <TileAltContainer style={{ marginTop: '8px', padding: '8px' }}>
            Additional information
          </TileAltContainer>
        </Tile>
      </Checkbox>
    );
  },
};

export const WithRadio: Story = {
  globals: {
    imports: `import { Radio, RadioControl, RadioGroup, RadioLabel, Tile, TileAltContainer } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: function Render() {
    const [selected, setSelected] = useState('option-1');

    return (
      <RadioGroup
        value={ selected }
        onValueChange={ (detail) => setSelected(detail.value || '') }
        style={{ display: 'flex', gap: '16px' }}>
        <Radio value="option-1">
          <Tile selected={ selected === 'option-1' } style={{ padding: '16px', width: '200px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <RadioControl />
              <RadioLabel>Option 1</RadioLabel>
            </div>
          </Tile>
        </Radio>

        <Radio value="option-2">
          <Tile selected={ selected === 'option-2' } style={{ padding: '16px', width: '200px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <RadioControl />
              <RadioLabel>Option 2</RadioLabel>
            </div>

            <TileAltContainer style={{ marginTop: '8px', padding: '8px' }}>
              With extra info
            </TileAltContainer>
          </Tile>
        </Radio>
      </RadioGroup>
    );
  },
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <Tile style={{ padding: '16px' }}>
      This is a tile.
    </Tile>
  ),
};

export const States: Story = {
  decorators: [(story) => <div style={{ display: 'flex', gap: '16px' }}>{ story() }</div>],
  globals: {
    imports: `import { Tile } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <>
      <Tile style={{ padding: '16px', width: '150px' }}>
        Default
      </Tile>

      <Tile selected style={{ padding: '16px', width: '150px' }}>
        Selected
      </Tile>

      <Tile disabled style={{ padding: '16px', width: '150px' }}>
        Disabled
      </Tile>
    </>
  ),
};
