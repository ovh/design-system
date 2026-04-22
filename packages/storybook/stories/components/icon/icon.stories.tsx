import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { ICON_NAME, ICON_NAMES, Icon, type IconProp } from '../../../../ods-react/src/components/icon/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

type Story = StoryObj<IconProp>;

const meta: Meta<IconProp> = {
  component: Icon,
  title: 'React Components/Icon',
};

export default meta;

export const Demo: Story = {
  argTypes: orderControls({
    name: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: { summary: 'ICON_NAME' },
      },
      control: { type: 'select' },
      options: ICON_NAMES,
    },
  }),
  args: {
    name: ICON_NAME.home,
  },
};

export const AccessibilityInformative: Story = {
  globals: {
    imports: `import { ICON_NAME, Icon } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Icon
      aria-label="home"
      name={ ICON_NAME.home }
      role="img" />
  ),
};

export const AnatomyTech: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Icon
      name="home"
      style={{ fontSize: '2rem', color: 'var(--ods-color-primary-500)' }} />
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <Icon
      name="home"
      style={{ fontSize: '2rem', color: 'var(--ods-color-primary-500)' }} />
  ),
};

export const Decorative: Story = {
  globals: {
    imports: `import { ICON_NAME, Icon } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Icon name={ ICON_NAME.home } />
  ),
};

export const Default: Story = {
  globals: {
    imports: `import { ICON_NAME, Icon } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Icon name={ ICON_NAME.home } />
  ),
};

export const Informative: Story = {
  globals: {
    imports: `import { ICON_NAME, Icon } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Icon
      aria-label="Help"
      name={ ICON_NAME.circleQuestion }
      role="img" />
  ),
};

export const AccessibilityBadPracticeDecorative: Story = {
  globals: {
    imports: `import { ICON_NAME, Icon } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Icon name={ ICON_NAME.home } />
  ),
};

export const AccessibilityBadPracticeRating: Story = {
  globals: {
    imports: `import { ICON_NAME, Icon } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <>
      <label htmlFor="rating">
        Rating
      </label>

      <div id="rating">
        <Icon name={ ICON_NAME.star } tabIndex={ 0 } aria-label="one star" role="img" />
        <Icon name={ ICON_NAME.star } tabIndex={ 0 } aria-label="two star" role="img" />
        <Icon name={ ICON_NAME.star } tabIndex={ 0 } aria-label="three star" role="img" />
        <Icon name={ ICON_NAME.star } tabIndex={ 0 } aria-label="four star" role="img" />
        <Icon name={ ICON_NAME.star } tabIndex={ 0 } aria-label="five star" role="img" />
      </div>
    </>
  ),
};

export const AccessibilityRating: Story = {
  globals: {
    imports: `import { ICON_NAME, Icon } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <>
      <label
        htmlFor="rating"
        id="rating-label">
        Rating
      </label>

      <div
        aria-labelledby="rating-label"
        id="rating"
        role="radiogroup">
        <Icon name={ ICON_NAME.star } role="radio" tabIndex={ -1 } aria-label="one star" aria-checked="false" />
        <Icon name={ ICON_NAME.star } role="radio" tabIndex={ 0 } aria-label="two star" aria-checked="true" />
        <Icon name={ ICON_NAME.star } role="radio" tabIndex={ -1 } aria-label="three star" aria-checked="false" />
        <Icon name={ ICON_NAME.star } role="radio" tabIndex={ -1 } aria-label="four star" aria-checked="false" />
        <Icon name={ ICON_NAME.star } role="radio" tabIndex={ -1 } aria-label="five star" aria-checked="false" />
      </div>
    </>
  ),
};


export const ThemeGenerator: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['!dev'],
  render: ({}) => (
    <div style={{ display: 'flex', flexFlow: 'row wrap', gap: '16px', alignItems: 'center' }}>
      <Icon name={ ICON_NAME.home } />
      <Icon name={ ICON_NAME.circleInfo } />
      <Icon name={ ICON_NAME.tag } />
      <Icon name={ ICON_NAME.check } />
      <Icon name={ ICON_NAME.triangleExclamation } />
    </div>
  ),
};
