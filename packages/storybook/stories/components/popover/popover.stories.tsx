import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { OdsButton } from '../../../../ods-react/src/components/button/src';
import { OdsPopoverArkUI, OdsPopoverContentArkUI, OdsPopoverTriggerArkUI } from '../../../../ods-react/src/components/popover-arkui/src';
import { OdsPopoverBaseUI, OdsPopoverContentBaseUI, OdsPopoverTriggerBaseUI } from '../../../../ods-react/src/components/popover-baseui/src';
import { OdsPopoverRadixUI, OdsPopoverContentRadixUI, OdsPopoverTriggerRadixUI } from '../../../../ods-react/src/components/popover-radixui/src';

const meta: Meta = {
  component: OdsPopoverArkUI,
  title: 'ODS Components/Popover',
};

export default meta;

export const CustomTriggerArkUI: StoryObj = {
  tags: ['isHidden'],
  render: ({}) => (
    <OdsPopoverArkUI>
      <OdsPopoverTriggerArkUI asChild>
        <OdsButton>
          Custom Trigger
        </OdsButton>
      </OdsPopoverTriggerArkUI>

      <OdsPopoverContentArkUI>
        This is the popover content
      </OdsPopoverContentArkUI>
    </OdsPopoverArkUI>
  ),
};

export const CustomTriggerBaseUI: StoryObj = {
  tags: ['isHidden'],
  render: ({}) => (
    <OdsPopoverBaseUI>
      <OdsPopoverTriggerBaseUI render={ <OdsButton /> }>
        Custom Trigger
      </OdsPopoverTriggerBaseUI>

      <OdsPopoverContentBaseUI>
        This is the popover content
      </OdsPopoverContentBaseUI>
    </OdsPopoverBaseUI>
  ),
};

export const CustomTriggerRadixUI: StoryObj = {
  tags: ['isHidden'],
  render: ({}) => (
    <OdsPopoverRadixUI>
      <OdsPopoverTriggerRadixUI asChild>
        <OdsButton>
          Custom Trigger
        </OdsButton>
      </OdsPopoverTriggerRadixUI>

      <OdsPopoverContentRadixUI>
        This is the popover content
      </OdsPopoverContentRadixUI>
    </OdsPopoverRadixUI>
  ),
};

export const DefaultArkUI: StoryObj = {
  tags: ['isHidden'],
  render: ({}) => (
    <OdsPopoverArkUI>
      <OdsPopoverTriggerArkUI>
        Show popover
      </OdsPopoverTriggerArkUI>

      <OdsPopoverContentArkUI>
        This is the popover content
      </OdsPopoverContentArkUI>
    </OdsPopoverArkUI>
  ),
};

export const DefaultBaseUI: StoryObj = {
  tags: ['isHidden'],
  render: ({}) => (
    <OdsPopoverBaseUI>
      <OdsPopoverTriggerBaseUI>
        Show popover
      </OdsPopoverTriggerBaseUI>

      <OdsPopoverContentBaseUI>
        This is the popover content
      </OdsPopoverContentBaseUI>
    </OdsPopoverBaseUI>
  ),
};

export const DefaultRadixUI: StoryObj = {
  tags: ['isHidden'],
  render: ({}) => (
    <OdsPopoverRadixUI>
      <OdsPopoverTriggerRadixUI>
        Show popover
      </OdsPopoverTriggerRadixUI>

      <OdsPopoverContentRadixUI>
        This is the popover content
      </OdsPopoverContentRadixUI>
    </OdsPopoverRadixUI>
  ),
};

export const GridArkUI: StoryObj = {
  decorators: [(story) => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridTemplateRows: 'repeat(3, 1fr)',
      gap: '20px',
      padding: '50px 150px',
    }}>
      { story() }
    </div>
  )],
  tags: ['isHidden'],
  render: ({}) => (
    <>
      <OdsPopoverArkUI position="top-start">
        <OdsPopoverTriggerArkUI>
          Top Left
        </OdsPopoverTriggerArkUI>
        <OdsPopoverContentArkUI withArrow>
          Top Left popover
        </OdsPopoverContentArkUI>
      </OdsPopoverArkUI>

      <OdsPopoverArkUI position="top">
        <OdsPopoverTriggerArkUI>
          Top
        </OdsPopoverTriggerArkUI>
        <OdsPopoverContentArkUI withArrow>
          Top popover
        </OdsPopoverContentArkUI>
      </OdsPopoverArkUI>

      <OdsPopoverArkUI position="top-end">
        <OdsPopoverTriggerArkUI>
          Top Right
        </OdsPopoverTriggerArkUI>
        <OdsPopoverContentArkUI withArrow>
          Top Right popover
        </OdsPopoverContentArkUI>
      </OdsPopoverArkUI>

      <OdsPopoverArkUI position="left">
        <OdsPopoverTriggerArkUI>
          Middle Left
        </OdsPopoverTriggerArkUI>
        <OdsPopoverContentArkUI withArrow>
          Middle Left popover
        </OdsPopoverContentArkUI>
      </OdsPopoverArkUI>

      <div />

      <OdsPopoverArkUI position="right">
        <OdsPopoverTriggerArkUI>
          Middle Right
        </OdsPopoverTriggerArkUI>
        <OdsPopoverContentArkUI withArrow>
          Middle Right popover
        </OdsPopoverContentArkUI>
      </OdsPopoverArkUI>

      <OdsPopoverArkUI position="bottom-start">
        <OdsPopoverTriggerArkUI>
          Bottom Left
        </OdsPopoverTriggerArkUI>
        <OdsPopoverContentArkUI withArrow>
          Bottom Left popover
        </OdsPopoverContentArkUI>
      </OdsPopoverArkUI>

      <OdsPopoverArkUI position="bottom">
        <OdsPopoverTriggerArkUI>
          Bottom
        </OdsPopoverTriggerArkUI>
        <OdsPopoverContentArkUI withArrow>
          Bottom popover
        </OdsPopoverContentArkUI>
      </OdsPopoverArkUI>

      <OdsPopoverArkUI position="bottom-end">
        <OdsPopoverTriggerArkUI>
          Bottom Right
        </OdsPopoverTriggerArkUI>
        <OdsPopoverContentArkUI withArrow>
          Bottom Right popover
        </OdsPopoverContentArkUI>
      </OdsPopoverArkUI>
    </>
  ),
};

export const GridBaseUI: StoryObj = {
  decorators: [(story) => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridTemplateRows: 'repeat(3, 1fr)',
      gap: '20px',
      padding: '50px 150px',
    }}>
      { story() }
    </div>
  )],
  tags: ['isHidden'],
  render: ({}) => (
    <>
      <OdsPopoverBaseUI>
        <OdsPopoverTriggerBaseUI>
          Top Left
        </OdsPopoverTriggerBaseUI>
        <OdsPopoverContentBaseUI position="top-start" withArrow>
          Top Left popover
        </OdsPopoverContentBaseUI>
      </OdsPopoverBaseUI>

      <OdsPopoverBaseUI>
        <OdsPopoverTriggerBaseUI>
          Top
        </OdsPopoverTriggerBaseUI>
        <OdsPopoverContentBaseUI position="top" withArrow>
          Top popover
        </OdsPopoverContentBaseUI>
      </OdsPopoverBaseUI>

      <OdsPopoverBaseUI>
        <OdsPopoverTriggerBaseUI>
          Top Right
        </OdsPopoverTriggerBaseUI>
        <OdsPopoverContentBaseUI position="top-end" withArrow>
          Top Right popover
        </OdsPopoverContentBaseUI>
      </OdsPopoverBaseUI>

      <OdsPopoverBaseUI>
        <OdsPopoverTriggerBaseUI>
          Middle Left
        </OdsPopoverTriggerBaseUI>
        <OdsPopoverContentBaseUI position="left" withArrow>
          Middle Left popover
        </OdsPopoverContentBaseUI>
      </OdsPopoverBaseUI>

      <div />

      <OdsPopoverBaseUI>
        <OdsPopoverTriggerBaseUI>
          Middle Right
        </OdsPopoverTriggerBaseUI>
        <OdsPopoverContentBaseUI position="right" withArrow>
          Middle Right popover
        </OdsPopoverContentBaseUI>
      </OdsPopoverBaseUI>

      <OdsPopoverBaseUI>
        <OdsPopoverTriggerBaseUI>
          Bottom Left
        </OdsPopoverTriggerBaseUI>
        <OdsPopoverContentBaseUI position="bottom-start" withArrow>
          Bottom Left popover
        </OdsPopoverContentBaseUI>
      </OdsPopoverBaseUI>

      <OdsPopoverBaseUI>
        <OdsPopoverTriggerBaseUI>
          Bottom
        </OdsPopoverTriggerBaseUI>
        <OdsPopoverContentBaseUI position="bottom" withArrow>
          Bottom popover
        </OdsPopoverContentBaseUI>
      </OdsPopoverBaseUI>

      <OdsPopoverBaseUI>
        <OdsPopoverTriggerBaseUI>
          Bottom Right
        </OdsPopoverTriggerBaseUI>
        <OdsPopoverContentBaseUI position="bottom-end" withArrow>
          Bottom Right popover
        </OdsPopoverContentBaseUI>
      </OdsPopoverBaseUI>
    </>
  ),
};

export const GridRadixUI: StoryObj = {
  decorators: [(story) => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridTemplateRows: 'repeat(3, 1fr)',
      gap: '20px',
      padding: '50px 150px',
    }}>
      { story() }
    </div>
  )],
  tags: ['isHidden'],
  render: ({}) => (
    <>
      <OdsPopoverRadixUI>
        <OdsPopoverTriggerRadixUI>
          Top Left
        </OdsPopoverTriggerRadixUI>
        <OdsPopoverContentRadixUI position="top-start" withArrow>
          Top Left popover
        </OdsPopoverContentRadixUI>
      </OdsPopoverRadixUI>

      <OdsPopoverRadixUI>
        <OdsPopoverTriggerRadixUI>
          Top
        </OdsPopoverTriggerRadixUI>
        <OdsPopoverContentRadixUI position="top" withArrow>
          Top popover
        </OdsPopoverContentRadixUI>
      </OdsPopoverRadixUI>

      <OdsPopoverRadixUI>
        <OdsPopoverTriggerRadixUI>
          Top Right
        </OdsPopoverTriggerRadixUI>
        <OdsPopoverContentRadixUI position="top-end" withArrow>
          Top Right popover
        </OdsPopoverContentRadixUI>
      </OdsPopoverRadixUI>

      <OdsPopoverRadixUI>
        <OdsPopoverTriggerRadixUI>
          Middle Left
        </OdsPopoverTriggerRadixUI>
        <OdsPopoverContentRadixUI position="left" withArrow>
          Middle Left popover
        </OdsPopoverContentRadixUI>
      </OdsPopoverRadixUI>

      <div />

      <OdsPopoverRadixUI>
        <OdsPopoverTriggerRadixUI>
          Middle Right
        </OdsPopoverTriggerRadixUI>
        <OdsPopoverContentRadixUI position="right" withArrow>
          Middle Right popover
        </OdsPopoverContentRadixUI>
      </OdsPopoverRadixUI>

      <OdsPopoverRadixUI>
        <OdsPopoverTriggerRadixUI>
          Bottom Left
        </OdsPopoverTriggerRadixUI>
        <OdsPopoverContentRadixUI position="bottom-start" withArrow>
          Bottom Left popover
        </OdsPopoverContentRadixUI>
      </OdsPopoverRadixUI>

      <OdsPopoverRadixUI>
        <OdsPopoverTriggerRadixUI>
          Bottom
        </OdsPopoverTriggerRadixUI>
        <OdsPopoverContentRadixUI position="bottom" withArrow>
          Bottom popover
        </OdsPopoverContentRadixUI>
      </OdsPopoverRadixUI>

      <OdsPopoverRadixUI>
        <OdsPopoverTriggerRadixUI>
          Bottom Right
        </OdsPopoverTriggerRadixUI>
        <OdsPopoverContentRadixUI position="bottom-end" withArrow>
          Bottom Right popover
        </OdsPopoverContentRadixUI>
      </OdsPopoverRadixUI>
    </>
  ),
};
