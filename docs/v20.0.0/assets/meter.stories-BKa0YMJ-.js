var e=`import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { Meter, type MeterProp } from '../../../../ods-react/src/components/meter/src';
import { TEXT_PRESET, Text } from '../../../../ods-react/src/components/text/src';

type Story = StoryObj<MeterProp>;

const meta: Meta<MeterProp> = {
  component: Meter,
  title: 'React Components/Meter',
};

export default meta;

export const Default: Story = {
  globals: {
    imports: \`import { Meter } from '@ovhcloud/ods-react';\`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Meter aria-label="Gauge" />
  ),
};

export const Thresholds: Story = {
  globals: {
    imports: \`import { Meter } from '@ovhcloud/ods-react';\`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <>
      <p id="threshold-under">Value under low threshold:</p>
      <Meter
        aria-labelledby="threshold-under"
        low={ 40 }
        value={ 35 } />

      <p id="threshold-between">Value between both thresholds:</p>
      <Meter
        aria-labelledby="threshold-between"
        high={ 80 }
        low={ 40 }
        value={ 60 } />

      <p id="threshold-above">Value above high threshold:</p>
      <Meter
        aria-labelledby="threshold-above"
        high={ 80 }
        value={ 90 } />
    </>
  ),
};

export const Optimum: Story = {
  globals: {
    imports: \`import { Meter } from '@ovhcloud/ods-react';\`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <>
      <p id="optimum-low">Low optimum and low value:</p>
      <Meter
        aria-labelledby="optimum-low"
        high={ 80 }
        low={ 40 }
        optimum={ 30 }
        value={ 20 } />

      <p id="optimum-high">Low optimum and high value:</p>
      <Meter
        aria-labelledby="optimum-high"
        high={ 80 }
        low={ 40 }
        optimum={ 30 }
        value={ 60 } />

      <p id="optimum-very-high">Low optimum and very high value:</p>
      <Meter
        aria-labelledby="optimum-very-high"
        high={ 80 }
        low={ 40 }
        optimum={ 30 }
        value={ 90 } />
    </>
  ),
};

export const AnatomyTech: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <div style={{ width: '200px' }}>
      <Meter
        low={ 40 }
        value={ 35 } />
    </div>
  ),
};

export const AccessibilityAriaLabel: Story = {
  globals: {
    imports: \`import { Meter } from '@ovhcloud/ods-react';\`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Meter
      aria-label="Gauge"
      low={ 40 }
      value={ 35 } />
  ),
};

export const AccessibilityAriaLabelledby: Story = {
  globals: {
    imports: \`import { TEXT_PRESET, Meter, Text } from '@ovhcloud/ods-react';\`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <>
      <Text
        id="meter-label"
        preset={ TEXT_PRESET.label }>
        Gauge:
      </Text>

      <Meter
        aria-labelledby="meter-label"
        low={ 40 }
        value={ 35 } />
    </>
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Meter
      aria-label="Gauge"
      low={ 40 }
      value={ 35 } />
  ),
};

export const AccessibilityAriaValuetext: Story = {
  globals: {
    imports: \`import { Meter } from '@ovhcloud/ods-react';\`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Meter
      aria-label="Gauge"
      aria-valuetext="35 files uploaded"
      low={ 40 }
      value={ 35 } />
  ),
};

export const ThemeGenerator: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['!dev'],
  render: ({}) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Meter />
      <Meter low={ 40 } value={ 35 } />
      <Meter high={ 80 } low={ 40 } value={ 60 } />
      <Meter high={ 80 } value={ 90 } />
      <Meter optimum={ 30 } value={ 20 } />
    </div>
  ),
};
`;export{e as default};