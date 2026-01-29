import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { Cart, CartAction, CartEmpty, CartExtraContent, CartProductGroup, CartProductGroupItem, CartTotal, type CartProp } from '../../../../ods-react/src/components/cart/src';
import { Divider } from '../../../../ods-react/src/components/divider/src';
import { formatPrice } from '../../../../ods-react/src/utils/format';
import { excludeFromDemoControls } from '../../../src/helpers/controls';
import { staticSourceRenderConfig } from '../../../src/helpers/source';
import { Icon, ICON_NAME } from '@ovhcloud/ods-react-icon/src';

type Story = StoryObj<CartProp>;

const meta: Meta<CartProp> = {
  argTypes: excludeFromDemoControls(['i18n', 'locale', 'onOpenChange']),
  component: Cart,
  subcomponents: { CartAction, CartEmpty, CartExtraContent, CartProductGroup, CartProductGroupItem, CartTotal },
  tags: ['new'],
  title: 'React Components/Cart',
};

export default meta;

const FullExample = () => (
  <Cart style={{ width: '320px' }}>
    <CartProductGroup
      details="Domain"
      label="ods.fr"
      onRemove={ () => {} }
      open
      price={ formatPrice(32.38, 'en-GB', 'EUR') }>
      <CartProductGroupItem
        details="Duration"
        label="2 years"
        onRemove={ () => {} }
        price={ formatPrice(32.38, 'en-GB', 'EUR') } />

      <CartProductGroupItem
        details="DNSSEC"
        label="Secure DNS"
        onRemove={ () => {} }
        price="Included"
        quantity={ 1 } />

      <CartProductGroupItem
        details="E-mail account"
        label="Zimbra Starter"
        onRemove={ () => {} }
        price="Included"
        quantity={ 1 } />
    </CartProductGroup>

    <CartProductGroup
      details="Domain"
      label="ods-doc.fr"
      onRemove={ () => {} }
      price={ formatPrice(12.70, 'en-GB', 'EUR') }>
      <CartProductGroupItem
        details="Duration"
        label="2 years"
        onRemove={ () => {} }
        price={ formatPrice(12.70, 'en-GB', 'EUR') } />

      <CartProductGroupItem
        details="DNSSEC"
        label="Secure DNS"
        onRemove={ () => {} }
        price="Included"
        quantity={ 1 } />

      <CartProductGroupItem
        details="E-mail account"
        label="Zimbra Starter"
        onRemove={ () => {} }
        price="Included"
        quantity={ 1 } />
    </CartProductGroup>

    <CartExtraContent>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ods-theme-text-color)' }}>23% VAT / 2 years</span>
        <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--ods-theme-text-color)' }}>{ formatPrice(13.47, 'en-GB', 'EUR') }</span>
      </div>

      <Divider style={{ marginTop: 'calc(var(--ods-theme-row-gap) * 2)' }} />
    </CartExtraContent>

    <CartTotal
      label="Total"
      priceDetails={
        <div>
          <span>ex. VAT / year</span>
          <br />
          <span>i.e. €XX.XX incl. VAT / year</span>
        </div>
      }
      totalDetails="2 products"
      price={ formatPrice(58.55, 'en-GB', 'EUR') } />

    <CartAction>
      Continue my order <Icon name={ ICON_NAME.arrowRight } />
    </CartAction>
  </Cart>
);

export const Demo: Story = {
  render: () => (
    <FullExample />
  ),
};

export const Default: Story = {
  globals: {
    imports: `import { Cart, CartAction, CartProductGroup, CartProductGroupItem, CartTotal, ICON_NAME, Icon, formatPrice } from '@ovhcloud/ods-react';`,
  },
  parameters: {
    docs: {
      source: { ...staticSourceRenderConfig() },
    },
  },
  tags: ['!dev'],
  render: ({}) => (
    <Cart>
      <CartProductGroup
        label="Product"
        price={ formatPrice(13.24) }>
        <CartProductGroupItem
          label="Lorem ipsum dolor"
          price={ formatPrice(3.24) } />

        <CartProductGroupItem
          label="Lorem ipsum dolor"
          price={ formatPrice(13) } />
      </CartProductGroup>

      <CartTotal
        label="Total"
        price={ formatPrice(16.24) } />

      <CartAction>
        Continue my order <Icon name={ ICON_NAME.arrowRight } />
      </CartAction>
    </Cart>
  ),
};

export const Empty: Story = {
  globals: {
    imports: `import { Cart, CartAction, CartEmpty, ICON_NAME, Icon } from '@ovhcloud/ods-react';`,
  },
  parameters: {
    docs: {
      source: { ...staticSourceRenderConfig() },
    },
  },
  tags: ['!dev'],
  render: ({}) => (
    <Cart>
      <CartEmpty>
        Your cart is empty
      </CartEmpty>

      <CartAction>
        Continue my order <Icon name={ ICON_NAME.arrowRight } />
      </CartAction>
    </Cart>
  ),
};

export const Full: Story = {
  globals: {
    imports: `import { Cart, CartAction, CartExtraContent, CartProductGroup, CartProductGroupItem, CartTotal, Divider, ICON_NAME, Icon, formatPrice } from '@ovhcloud/ods-react';`,
  },
  parameters: {
    docs: {
      source: { ...staticSourceRenderConfig() },
    },
  },
  tags: ['!dev'],
  render: ({}) => (
    <Cart style={{ width: '320px' }}>
      <CartProductGroup
        details="Domain"
        label="ods.fr"
        onRemove={ () => {} }
        open
        price={ formatPrice(32.38, 'en-GB', 'EUR') }>
        <CartProductGroupItem
          details="Duration"
          label="2 years"
          onRemove={ () => {} }
          price={ formatPrice(32.38, 'en-GB', 'EUR') } />

        <CartProductGroupItem
          details="DNSSEC"
          label="Secure DNS"
          onRemove={ () => {} }
          price="Included"
          quantity={ 1 } />

        <CartProductGroupItem
          details="E-mail account"
          label="Zimbra Starter"
          onRemove={ () => {} }
          price="Included"
          quantity={ 1 } />
      </CartProductGroup>

      <CartProductGroup
        details="Domain"
        label="ods-doc.fr"
        onRemove={ () => {} }
        price={ formatPrice(12.70, 'en-GB', 'EUR') }>
        <CartProductGroupItem
          details="Duration"
          label="2 years"
          onRemove={ () => {} }
          price={ formatPrice(12.70, 'en-GB', 'EUR') } />

        <CartProductGroupItem
          details="DNSSEC"
          label="Secure DNS"
          onRemove={ () => {} }
          price="Included"
          quantity={ 1 } />

        <CartProductGroupItem
          details="E-mail account"
          label="Zimbra Starter"
          onRemove={ () => {} }
          price="Included"
          quantity={ 1 } />
      </CartProductGroup>

      <CartExtraContent>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ods-theme-text-color)' }}>23% VAT / 2 years</span>
          <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--ods-theme-text-color)' }}>{ formatPrice(13.47, 'en-GB', 'EUR') }</span>
        </div>

        <Divider style={{ marginTop: 'calc(var(--ods-theme-row-gap) * 2)' }} />
      </CartExtraContent>

      <CartTotal
        label="Total"
        priceDetails={
          <div>
            <span>ex. VAT / year</span>
            <br />
            <span>i.e. €XX.XX incl. VAT / year</span>
          </div>
        }
        totalDetails="2 products"
        price={ formatPrice(58.55, 'en-GB', 'EUR') } />

      <CartAction>
        Continue my order <Icon name={ ICON_NAME.arrowRight } />
      </CartAction>
    </Cart>
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <FullExample />
  ),
};

export const ThemeGenerator: Story = {
  name: 'ThemeGenerator',
  parameters: {
    docs: { disable: true },
    layout: 'fullscreen',
    options: { showPanel: false },
  },
  tags: ['!dev', 'hidden'],
  render: ({}) => (
    <FullExample />
  ),
};
