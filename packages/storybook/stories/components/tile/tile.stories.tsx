import { type Meta, type StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Checkbox, CheckboxControl, CheckboxLabel } from '../../../../ods-react/src/components/checkbox/src';
import { Radio, RadioControl, RadioGroup, RadioLabel } from '../../../../ods-react/src/components/radio-group/src';
import { Tile, TileAltContainer, type TileProp } from '../../../../ods-react/src/components/tile/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';
import { staticSourceRenderConfig } from '../../../src/helpers/source';

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
    <Tile>
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
    <Tile disabled>
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
    <Tile selected>
      This tile is selected.
    </Tile>
  ),
};

export const WithCheckbox: Story = {
  globals: {
    imports: `import { Tile, Checkbox, CheckboxControl, CheckboxLabel } from '@ovhcloud/ods-react';
    import { useState } from 'react';`,
  },
  tags: ['!dev'],
  parameters: {
    docs: {
      source: { ...staticSourceRenderConfig() },
    },
  },
  render: ({}) => {
    const [selected, setSelected] = useState(false);

    return (
      <Tile selected={ selected }>
        <Checkbox
          checked={ selected }
          onCheckedChange={ (detail) => setSelected(detail.checked === true) }>
          <div style={ { display: 'flex', alignItems: 'center', gap: '8px', padding: '16px' } }>
            <CheckboxControl />
            <CheckboxLabel>Checkbox tile</CheckboxLabel>
          </div>
        </Checkbox>
      </Tile>
    );
  },
};

export const WithRadioGroup: Story = {
  globals: {
    imports: `import { Tile, Radio, RadioGroup, RadioControl, RadioLabel } from '@ovhcloud/ods-react';
    import { useState } from 'react';`,
  },
  tags: ['!dev'],
  parameters: {
    docs: {
      source: { ...staticSourceRenderConfig() },
    },
  },
  render: ({}) => {
    const [selected, setSelected] = useState('radio-1');

    return (
      <RadioGroup value={ selected } onValueChange={ (detail) => setSelected(detail.value || '') }>
        <div>
          <Tile selected={ selected === 'radio-1' }>
            <Radio value={ 'radio-1' }>
              <div style={ { display: 'flex', alignItems: 'center', gap: '8px', padding: '16px' } }>
                <RadioControl />
                <RadioLabel>
                  Radio 1
                </RadioLabel>
              </div>
            </Radio>
          </Tile>
        </div>
        <div>
          <Tile selected={ selected === 'radio-2' }>
            <Radio value={ 'radio-2' }>
              <div style={ { display: 'flex', alignItems: 'center', gap: '8px', padding: '16px' } }>
                <RadioControl />
                <RadioLabel>
                  Radio 2
                </RadioLabel>
              </div>
            </Radio>
          </Tile>
        </div>
      </RadioGroup>
    );
  },
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => {
    const [selected, setSelected] = useState(false);

    return (
      <Tile selected={ selected }>
        <Checkbox
          checked={ selected }
          onCheckedChange={ (detail) => setSelected(detail.checked === true) }>
          <div>
            <div style={ { display: 'flex', alignItems: 'center', gap: '8px', padding: '16px' } }>
              <CheckboxControl />
              <CheckboxLabel>Checkbox tile</CheckboxLabel>
            </div>

            <TileAltContainer style={ { padding: '16px' } }>
              Additional information
            </TileAltContainer>
          </div>
        </Checkbox>
      </Tile>
    );
  },
};

export const ThemeGenerator: Story = {
  name: 'ThemeGenerator',
  parameters: {
    docs: { disable: true },
    options: { showPanel: false },
  },
  tags: ['!dev', 'hidden'],
  render: ({}) => (
    <div style={ { display: 'flex', gap: '16px', padding: '16px' } }>
      <Tile style={ { padding: '16px', width: '200px' } }>
        Default tile
      </Tile>
      <Tile selected style={ { padding: '16px', width: '200px' } }>
        Selected tile
      </Tile>
      <Tile disabled style={ { padding: '16px', width: '200px' } }>
        Disabled tile
      </Tile>
    </div>
  ),
};
