import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { TEXT_PRESETS, Text, type TextProp }  from '../../../../ods-react/src/components/text/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

type Story = StoryObj<TextProp>;

const meta: Meta<TextProp> = {
  component: Text,
  title: 'ODS Components/Text',
};

export default meta;

export const Demo: Story = {
  argTypes: orderControls({
    children: {
      table: {
        category: CONTROL_CATEGORY.slot,
      },
      control: 'text',
    },
    preset: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: { summary: 'TEXT_PRESET' }
      },
      control: { type: 'select' },
      options: TEXT_PRESETS,
    }
  }),
  args: {
    children: 'Lorem ipsum dolor sit amet',
  },
};

export const Default: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
  ),
};

export const FigCaption: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <figure>
      <img alt="OVHcloud logo"
           src="https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/ayzwkdawmlyzvuummuf4"
           style={{ height: '100px' }} />
      <figcaption>
        <Text preset="caption">My picture title</Text>
      </figcaption>
    </figure>
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
  ),
};

export const Preset: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <>
      <Text preset="caption">Caption</Text><br />
      <Text preset="code">Code</Text><br />
      <Text preset="label">Label</Text>
      <Text preset="paragraph">Paragraph</Text>
      <Text preset="span">Span</Text><br />
      <Text preset="heading-1">Heading-1</Text>
      <Text preset="heading-2">Heading-2</Text>
      <Text preset="heading-3">Heading-3</Text>
      <Text preset="heading-4">Heading-4</Text>
      <Text preset="heading-5">Heading-5</Text>
      <Text preset="heading-6">Heading-6</Text>
    </>
  ),
};

export const TableCaption: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <table style={{
      border: '2px solid rgb(140 140 140)',
      borderCollapse: 'collapse',
    }}>
      <caption style={{ captionSide: 'bottom' }}>
        <Text preset="caption">My table title</Text>
      </caption>
      <thead>
      <tr>
        <th scope="col">Person</th>
        <th scope="col">Age</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <th scope="row">Chris</th>
        <td>22</td>
      </tr>
      </tbody>
    </table>
  ),
};
