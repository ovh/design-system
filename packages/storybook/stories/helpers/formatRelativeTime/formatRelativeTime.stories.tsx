import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { formatRelativeTime } from '../../../../ods-react/src/utils/format';
import { staticSourceRenderConfig } from '../../../src/helpers/source';

const meta: Meta = {
  title: 'Helpers/formatRelativeTime',
};

export default meta;

export const Default: StoryObj = {
  globals: {
    imports: `import { formatRelativeTime } from '@ovhcloud/ods-react';`,
  },
  parameters: {
    docs: {
      source: { ...staticSourceRenderConfig() },
    },
  },
  tags: ['!dev'],
  render: ({}) => (
    <>{ formatRelativeTime(new Date()) }</>
  ),
};

export const Locales: StoryObj = {
  globals: {
    imports: `import { formatRelativeTime } from '@ovhcloud/ods-react';`,
  },
  parameters: {
    docs: {
      source: { ...staticSourceRenderConfig() },
    },
  },
  tags: ['!dev'],
  render: ({}) => (
    <>
      <p>France: { formatRelativeTime(new Date(), 'fr-FR') }</p>
      <p>Germany: { formatRelativeTime(new Date(), 'de-DE') }</p>
      <p>Arabic: { formatRelativeTime(new Date(), 'ar-EG') }</p>
      <p>India: { formatRelativeTime(new Date(), 'en-IN') }</p>
    </>
  ),
};

export const Option: StoryObj = {
  globals: {
    imports: `import { formatRelativeTime } from '@ovhcloud/ods-react';`,
  },
  parameters: {
    docs: {
      source: { ...staticSourceRenderConfig() },
    },
  },
  tags: ['!dev'],
  render: ({}) => (
    <>
      <p>Long: { formatRelativeTime(new Date(), 'en-US', { style: 'long'}) }</p>
      <p>Short: { formatRelativeTime(new Date(), 'en-US', { style: 'short'}) }</p>
      <p>Narrow: { formatRelativeTime(new Date(), 'en-US', { style: 'narrow'}) }</p>
    </>
  ),
};
