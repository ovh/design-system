import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, type BreadcrumbProp } from '../../../../ods-react/src/components/breadcrumb/src';
import { ICON_NAME, Icon } from '../../../../ods-react/src/components/icon/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { excludeFromDemoControls, orderControls } from '../../../src/helpers/controls';
import { addLiveEditorToStory } from '../../../src/helpers/liveCoding';
import demoCode from './Demo?raw';

type Story = StoryObj<BreadcrumbProp>;

const meta: Meta<BreadcrumbProp> = {
  argTypes: excludeFromDemoControls(['i18n', 'id', 'locale', 'noCollapse', 'onExpand']),
  component: Breadcrumb,
  subcomponents: { BreadcrumbItem, BreadcrumbLink },
  title: 'React Components/Breadcrumb',
};

export default meta;

export const Demo: Story = {
  argTypes: orderControls({
    collapseThreshold: {
      table: {
        category: CONTROL_CATEGORY.design,
      },
    },
    nbItemsAfterEllipsis: {
      table: {
        category: CONTROL_CATEGORY.design,
      },
    },
    nbItemsBeforeEllipsis: {
      table: {
        category: CONTROL_CATEGORY.design,
      },
    },
  }),
};

addLiveEditorToStory(Demo, demoCode);

export const Collapsed: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink aria-label="Homepage" href="#">
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Products
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Hosting
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Servers
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Dedicated
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Rise
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          RISE-2
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  ),
};

export const CustomAfterBeforeCollapse: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Breadcrumb
      nbItemsBeforeEllipsis={ 1 }
      nbItemsAfterEllipsis={ 4 }>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Products
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Hosting
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Servers
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Dedicated
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Rise
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          RISE-2
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  ),
};

export const CustomCollapseThreshold: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Breadcrumb collapseThreshold={ 7 }>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Products
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Hosting
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Servers
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Dedicated
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Rise
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          RISE-2
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  ),
};

export const Default: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink aria-label="Home" href="#">
          <Icon name={ ICON_NAME.home } />
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Parent
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Current
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  ),
};

export const NoCollapse: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Breadcrumb noCollapse>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Products
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Hosting
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Servers
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Dedicated
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Rise
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          RISE-2
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink aria-label="Home" href="#">
          <Icon name={ ICON_NAME.home } />
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Parent
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Current
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  ),
};


export const AccessibilityWithAriaLabel: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <Breadcrumb aria-label="Breadcrumb">
      <BreadcrumbItem>
        <BreadcrumbLink aria-label="Home" href="#">
          <Icon name={ ICON_NAME.home } />
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Category
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Subcategory
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Current page
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  ),
}
