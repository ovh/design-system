import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { ODS_TEXT_PRESET, ODS_TEXT_PRESETS, OdsText, type OdsTextProp }  from '../../../../ods-react/src/components/text/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

type Story = StoryObj<OdsTextProp>;

const meta: Meta<OdsTextProp> = {
  component: OdsText,
  title: 'ODS Components/Text',
};

export default meta;

export const Demo: Story = {
  argTypes: orderControls({
    children: {
      table: {
        category: CONTROL_CATEGORY.slot,
        defaultValue: { summary: 'ø' },
      },
      control: 'text',
    },
    preset: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: ODS_TEXT_PRESET.paragraph },
        type: { summary: 'string' }
      },
      control: { type: 'select' },
      options: ODS_TEXT_PRESETS,
    }
  }),
  args: {
    children: 'Lorem ipsum dolor sit amet',
  },
};

export const Default: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <OdsText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</OdsText>
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
        <OdsText preset="caption">My picture title</OdsText>
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
    <OdsText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</OdsText>
  ),
};

export const Preset: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <>
      <OdsText preset="caption">Caption</OdsText><br />
      <OdsText preset="code">Code</OdsText><br />
      <OdsText preset="label">Label</OdsText>
      <OdsText preset="paragraph">Paragraph</OdsText>
      <OdsText preset="span">Span</OdsText><br />
      <OdsText preset="heading-1">Heading-1</OdsText>
      <OdsText preset="heading-2">Heading-2</OdsText>
      <OdsText preset="heading-3">Heading-3</OdsText>
      <OdsText preset="heading-4">Heading-4</OdsText>
      <OdsText preset="heading-5">Heading-5</OdsText>
      <OdsText preset="heading-6">Heading-6</OdsText>
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
        <OdsText preset="caption">My table title</OdsText>
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
