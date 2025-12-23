import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { formatPrice } from '../../../../ods-react/src/utils/format';
import { staticSourceRenderConfig } from '../../../src/helpers/source';

const meta: Meta = {
  title: 'Helpers/formatPrice',
};

export default meta;

export const Currencies: StoryObj = {
  globals: {
    imports: `import { formatPrice } from '@ovhcloud/ods-react';`,
  },
  parameters: {
    docs: {
      source: { ...staticSourceRenderConfig() },
    },
  },
  tags: ['!dev'],
  render: ({}) => (
    <>
      <p>Euro: { formatPrice(123456.789, 'fr-FR', 'EUR') }</p>
      <p>Dollar: { formatPrice(123456.789, 'fr-FR', 'USD') }</p>
      <p>Yen: { formatPrice(123456.789, 'fr-FR', 'JPY') }</p>
    </>
  ),
};

export const Default: StoryObj = {
  globals: {
    imports: `import { formatPrice } from '@ovhcloud/ods-react';`,
  },
  parameters: {
    docs: {
      source: { ...staticSourceRenderConfig() },
    },
  },
  tags: ['!dev'],
  render: ({}) => (
    <>{ formatPrice(123456.789) }</>
  ),
};

export const Locales: StoryObj = {
  globals: {
    imports: `import { formatPrice } from '@ovhcloud/ods-react';`,
  },
  parameters: {
    docs: {
      source: { ...staticSourceRenderConfig() },
    },
  },
  tags: ['!dev'],
  render: ({}) => (
    <>
      <p>France: { formatPrice(123456.789, 'fr-FR') }</p>
      <p>Germany: { formatPrice(123456.789, 'de-DE') }</p>
      <p>Arabic: { formatPrice(123456.789, 'ar-EG') }</p>
      <p>India: { formatPrice(123456.789, 'en-IN') }</p>
    </>
  ),
};
