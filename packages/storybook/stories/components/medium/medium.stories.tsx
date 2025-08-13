import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { Medium, type MediumProp } from '../../../../ods-react/src/components/medium/src';
import { TEXT_PRESET, Text } from '../../../../ods-react/src/components/text/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';
import { addLiveEditorToStory } from '../../../src/helpers/liveCoding';
import demoCode from './Demo?raw';

type Story = StoryObj<MediumProp>;

const meta: Meta<MediumProp> = {
  component: Medium,
  title: 'React Components/Medium',
};

const exampleAlt = 'OVHcloud logo';
const exampleSrc = 'https://images.crunchbase.com/image/upload/c_pad,w_256,f_auto,q_auto:eco,dpr_1/ayzwkdawmlyzvuummuf4';

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
    src: exampleSrc,
  },
};

addLiveEditorToStory(Demo, demoCode);

export const Caption: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <figure>
      <Medium alt={ exampleAlt } src={ exampleSrc } />

      <figcaption>
        <Text preset={ TEXT_PRESET.caption }>
          © Copyright 1999-2025 OVH SA
        </Text>
      </figcaption>
    </figure>
  ),
};

export const Default: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Medium alt={ exampleAlt } src={ exampleSrc } />
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <Medium alt={ exampleAlt } src={ exampleSrc } />
  ),
};

export const Height: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Medium alt={ exampleAlt } height={ 20 } src={ exampleSrc } />
  ),
};

export const Width: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Medium alt={ exampleAlt } src={ exampleSrc } width={300} />
  ),
};
