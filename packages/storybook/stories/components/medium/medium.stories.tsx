import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { Medium, type MediumProp } from '../../../../ods-react/src/components/medium/src';
import { TEXT_PRESET, Text } from '../../../../ods-react/src/components/text/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

type Story = StoryObj<MediumProp>;

const meta: Meta<MediumProp> = {
  component: Medium,
  title: 'React Components/Medium',
};

export default meta;

export const Demo: Story = {
  argTypes: orderControls({
    height: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: { summary: 'number' }
      },
      control: 'number',
    },
    src: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: { summary: 'string' }
      },
      control: 'text',
    },
    width: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: { summary: 'number' }
      },
      control: 'number',
    },
  }),
  args: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/NASAComputerRoom7090.NARA.jpg',
  },
};

export const Caption: Story = {
  globals: {
    imports: `import { TEXT_PRESET, Medium, Text } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <figure>
      <Medium
        alt="NASA Computer room"
        src="https://upload.wikimedia.org/wikipedia/commons/b/b9/NASAComputerRoom7090.NARA.jpg" />

      <figcaption>
        <Text preset={ TEXT_PRESET.caption }>
          © Copyright National Aeronautics and Space Administration
        </Text>
      </figcaption>
    </figure>
  ),
};

export const Default: Story = {
  globals: {
    imports: `import { Medium } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Medium
      alt="NASA Computer room"
      src="https://upload.wikimedia.org/wikipedia/commons/b/b9/NASAComputerRoom7090.NARA.jpg" />
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <Medium
      alt="NASA Computer room"
      height={ 100 }
      src="https://upload.wikimedia.org/wikipedia/commons/b/b9/NASAComputerRoom7090.NARA.jpg" />
  ),
};

export const Height: Story = {
  globals: {
    imports: `import { Medium } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Medium
      alt="NASA Computer room"
      height={ 40 }
      src="https://upload.wikimedia.org/wikipedia/commons/b/b9/NASAComputerRoom7090.NARA.jpg" />
  ),
};

export const Width: Story = {
  globals: {
    imports: `import { Medium } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Medium
      alt="NASA Computer room"
      src="https://upload.wikimedia.org/wikipedia/commons/b/b9/NASAComputerRoom7090.NARA.jpg"
      width={ 300 } />
  ),
};

export const ThemeGenerator: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['!dev'],
  render: ({}) => (
    <Medium
      alt="NASA Computer room"
      height={ 40 }
      src="https://upload.wikimedia.org/wikipedia/commons/b/b9/NASAComputerRoom7090.NARA.jpg" />
  ),
};
