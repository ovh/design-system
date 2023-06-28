import { html } from 'lit-html';
import { iframe } from '../../../.storybook/iframe';

// import { config } from 'storybook-addon-xd-designs';
// import { XDConfig } from 'storybook-addon-xd-designs/lib/config';


import { defineCustomElements } from '@ovhcloud/ods-stencil-cart/loader';
import changelog from '@ovhcloud/ods-stencil-cart/CHANGELOG.md';
import page from './cart.web-component.stories.page.mdx';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';
import { OdsCartRounded } from '@ovhcloud/ods-core';
import { OdsCartRoundedList } from '@ovhcloud/ods-core/src/components/cart/ods-cart-rounded';
import { CartManagerPlay } from './cart.web-components.manager.stories';

defineCustomElements();

/* Default story parameters  */
const storyParams = {
  inmine: {
    category: 'General',
    defaultValue: false,
    control: { type: 'boolean' },
  },
  rounded: {
    category: 'General',
    defaultValue: OdsCartRounded.all,
    options: OdsCartRoundedList,
    control: { type: 'select' },
  }
}

export default {
  title: 'UI Components/Cart [organism]/Web Component',
  parameters: {
    notes: {
      API: iframe('/stencil-components-cart/modules/index.html'),
      changelog,
    },
    docs: { page },
    /* design: config({
      artboardUrl: 'https://xd.adobe.com/view/9bb1ccc1-e850-428c-9fd2-d4a60718a440-cee2/screen/c9b3d278-50d0-4e22-ba16-8951422cf7d1/Desktop',
    {  as XDConfig), */
    layout: 'fullscreen',
    actions: {
      handles: ['click'],
    },
  },
  argTypes: extractArgTypes(storyParams),
};

const parametersSmallCartViewport = {
  viewport: {
    viewports: {
      smallCart: {
        name: 'Small Cart',
        styles: {
          width: '100%',
          height: '100%',
        },
        type: 'desktop'
      },
    },
    defaultViewport: 'smallCart',
  }
};

const parametersResponsiveCartViewport = {
  viewport: {
    viewports: {
      smallMobile: {
        name: 'Small mobile',
        styles: {
          width: '360px',
          height: '600px',
        },
        type: 'mobile'
      },
      largeMobile: {
        name: 'Large mobile',
        styles: {
          width: '414px',
          height: '100%',
        },
        type: 'mobile'
      },
      tablet: {
        name: 'Tablet',
        styles: {
          width: '834px',
          height: '100%',
        },
        type: 'tablet'
      },
    },
    defaultViewport: 'smallMobile',
  }
};

const TemplateDefault = (args) => html`
  <style>
    .cart-option-divider {
      padding: 0 1rem;
      background-color: hsla(186, 100%, 98%, 1);
    }

    .cart-footer-divider {
      padding: 0 1rem;
    }
  </style>
    <osds-cart ...=${getTagAttributes(args)}>
      <osds-cart-header slot="header">
       Your selection
      </osds-cart-header>

      <osds-cart-section>
        <osds-cart-item>
          <span slot="subhead">Main product subhead</span>
          <span slot="title">Main product title</span>
          <span slot="price">3,000.00 ¤</span>
          <span slot="extra">ex.VAT / month</span>
        </osds-cart-item>

        <osds-divider color="primary" size="0" separator="true"></osds-divider>

        <osds-cart-item-option>
          <span slot="subhead">Option subhead</span>
          <span slot="title">Option title</span>
        </osds-cart-item-option>

        <div class="cart-option-divider">
          <osds-divider color="primary" size="0" separator="true"></osds-divider>
        </div>

        <osds-cart-item-option>
          <span slot="subhead">Another option subhead</span>
          <span slot="title">Another option title</span>
          <span slot="price">-450.00 ¤</span>
          <span slot="extra">ex.VAT / month</span>
        </osds-cart-item-option>
      </osds-cart-section>

      <osds-cart-section>
        <osds-cart-item>
          <span slot="subhead">Another product subhead</span>
          <span slot="title">Another product title</span>
          <span slot="price">3,000.00 ¤</span>
          <span slot="extra">ex.VAT / month</span>
        </osds-cart-item>

        <osds-divider color="primary" size="0" separator="true"></osds-divider>

        <osds-cart-item-option>
          <span slot="subhead">Another option subhead</span>
          <span slot="title">Another option title</span>
        </osds-cart-item-option>
      </osds-cart-section>

      <osds-cart-footer slot="footer">
        <osds-cart-total>
          <span slot="total">Total</span>
          <span slot="info">X products</span>
          <span slot="price">5,550.00 ¤</span>
          <span slot="extra">ex.VAT / month</span>
        </osds-cart-total>

        <div class="cart-footer-divider">
          <osds-divider color="primary" size="6" separator="true" contrasted="true"></osds-divider>
        </div>

        <osds-cart-footer-item>
          <span slot="title">Some information title</span>
          <span slot="price">3,000.00 ¤</span>
        </osds-cart-footer-item>

        <osds-divider color="primary" size="6"></osds-divider>

        ${unsafeHTML(args.button)}
      </osds-cart-footer>
    </osds-cart>
`;

export const Default = TemplateDefault.bind({});
Default.parameters = parametersSmallCartViewport;
Default.args = {
  ...extractStoryParams(storyParams),
  button: '<osds-button \n' +
    '         inline \n' +
    '         color="primary"\n' +
    '         contrasted="true"\n' +
    '         variant="stroked">\n' +
    '         Continue order' +
    '         <osds-icon size="sm" name="arrow-right" contrasted="" color="default" aria-hidden="true" alt="" aria-name=""></osds-icon>' +
    '      </osds-button>'
};

const TemplateEmpty = (args) => html`
        <osds-cart ...=${getTagAttributes(args)}>
          <osds-cart-header slot="header">
            Your selection
          </osds-cart-header>

          <osds-cart-footer slot="empty">
            <span>Your order summary is empty</span>
          </osds-cart-footer>
        </osds-cart>
`;
export const CartEmpty = TemplateEmpty.bind({});
CartEmpty.args = {
  ...extractStoryParams(storyParams),
};

const OsdsCartManager = (args) => html`
  <osds-cart-manager id="cart-manager-a" ...=${getTagAttributes(args)}>

    <osds-cart-header slot="header">
      Your selection
    </osds-cart-header>

    <span slot="footer-content">${unsafeHTML(args.button)}</span>

    <osds-cart-footer slot="empty">
      Your order summary is empty
    </osds-cart-footer>

  </osds-cart-manager>
`;

const TemplateManager = (args) => OsdsCartManager(args);
export const CartManager = TemplateManager.bind({});
CartManager.args = {
  ...extractStoryParams(storyParams),
  vatMode: false,
  button: '<osds-button \n' +
    '         color="primary"\n' +
    '         contrasted="true"\n' +
    '         variant="stroked">\n' +
    '         Continue order' +
    '         <osds-icon size="sm" name="arrow-right" contrasted="" color="default" aria-hidden="true" alt="" aria-name=""></osds-icon>' +
    '      </osds-button>',
};
CartManager.play = CartManagerPlay;

const TemplateResponsive = (args) => html`
<style>
  .group {
    display: flex;
    justify-content: space-between;
  }
  osds-cart {
    position: sticky;
    top: 100%;
    bottom: 0;
  }
  .cart-container {
    height: 100vh;
    position: relative;
  }
  hr {
    border:none;
    border-radius: 2px;
    height: 4px;
    width: 66px;
    background-color: #FFF;
  }

  .cart-option-divider {
    padding: 0 1rem;
    background-color: hsla(186, 100%, 98%, 1);
  }

</style>

<div class="cart-container">
  <osds-cart ...=${getTagAttributes(args)}>
    <osds-cart-header slot="header">
      ${args.collapsed ? "" : "Your selection"}
    </osds-cart-header>

    <osds-cart-section>
      <osds-cart-item>
        <span slot="subhead">Main product subhead</span>
        <span slot="title">Main product title</span>
        <span slot="price">X XXX,XX ¤</span>
        <span slot="extra">ex.VAT / month</span>
      </osds-cart-item>

      <osds-divider color="primary" size="0" separator="true"></osds-divider>

      <osds-cart-item-option>
        <span slot="subhead">Option subhead</span>
        <span slot="title">Option title</span>
        <span slot="price">X XXX,XX ¤</span>
        <span slot="extra">ex.VAT / month</span>
      </osds-cart-item-option>

      <div class="cart-option-divider">
        <osds-divider color="primary" size="0" separator="true"></osds-divider>
      </div>

      <osds-cart-item-option>
        <span slot="subhead">Another option subhead</span>
        <span slot="title">Another option title</span>
        <span slot="price">X XXX,XX ¤</span>
        <span slot="extra">ex.VAT / month</span>
      </osds-cart-item-option>

      <div class="cart-option-divider">
        <osds-divider color="primary" size="0" separator="true"></osds-divider>
      </div>

      <osds-cart-item-option>
        <span slot="subhead">Another option subhead</span>
        <span slot="title">Another option title</span>
        <span slot="price">X XXX,XX ¤</span>
        <span slot="extra">ex.VAT / month</span>
      </osds-cart-item-option>

      <div class="cart-option-divider">
        <osds-divider color="primary" size="0" separator="true"></osds-divider>
      </div>

      <osds-cart-item-option>
        <span slot="subhead">Another option subhead</span>
        <span slot="title">Another option title</span>
        <span slot="price">X XXX,XX ¤</span>
        <span slot="extra">ex.VAT / month</span>
      </osds-cart-item-option>
    </osds-cart-section>

    <osds-cart-section>
      <osds-cart-item-option>
        <span slot="subhead">Option subhead</span>
        <span slot="title">Option title</span>
        <span slot="price">X XXX,XX ¤</span>
        <span slot="extra">ex.VAT / month</span>
      </osds-cart-item-option>

      <div class="cart-option-divider">
        <osds-divider color="primary" size="0" separator="true"></osds-divider>
      </div>

      <osds-cart-item-option>
        <span slot="subhead">Another option subhead</span>
        <span slot="title">Another option title</span>
        <span slot="price">X XXX,XX ¤</span>
        <span slot="extra">ex.VAT / month</span>
      </osds-cart-item-option>

      <div class="cart-option-divider">
        <osds-divider color="primary" size="0" separator="true"></osds-divider>
      </div>

      <osds-cart-item-option>
        <span slot="subhead">Another option subhead</span>
        <span slot="title">Another option title</span>
        <span slot="price">X XXX,XX ¤</span>
        <span slot="extra">ex.VAT / month</span>
      </osds-cart-item-option>
    </osds-cart-section>

    <osds-cart-footer slot="footer">
      <osds-cart-total>
        <span slot="total">Total</span>
        <span slot="info">X products</span>
        <span slot="price">X XXX,XX ¤</span>
        <span slot="extra">ex.VAT / month</span>
      </osds-cart-total>
      <span class="group">
          ${unsafeHTML(args.buttonBack)}
          ${unsafeHTML(args.buttonNext)}
        </span>
    </osds-cart-footer>
  </osds-cart>
</div>
`;

export const Responsive = TemplateResponsive.bind({});
Responsive.parameters = parametersResponsiveCartViewport;
Responsive.args = {
  rounded: 'top',
  collapsed: true,
  collapsible: true,
  buttonBack: '<osds-button ' +
    '         color="primary"\n' +
    '         contrasted="true"\n' +
    '         variant="ghost">\n' +
    '         Back \n' +
    '      </osds-button>',
  buttonNext: '<osds-button ' +
    '         color="primary"\n' +
    '         contrasted="false"\n' +
    '         variant="stroked">\n' +
    '         Next' +
    '         <osds-icon size="sm" name="arrow-right" contrasted="" color="default" aria-hidden="true" alt="" aria-name=""></osds-icon>' +
    '      </osds-button>'
};
