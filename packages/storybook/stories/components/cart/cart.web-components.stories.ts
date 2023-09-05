import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { ODS_CART_ROUNDED, ODS_CART_ROUNDEDS } from '@ovhcloud/ods-components/cart/';
import { defineCustomElements } from '@ovhcloud/ods-components/cart/loader';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';
import { CartManagerPlay } from './cart.web-components.manager.stories';
// @ts-ignore
import changelog from '@ovhcloud/ods-components/cart/CHANGELOG.md';
// @ts-ignore
import page from './cart.web-component.stories.page.mdx';

defineCustomElements();

/* Default story parameters  */
const storyParams = {
  flex: {
    category: 'General',
    defaultValue: false,
    control: { type: 'boolean' },
  },
  rounded: {
    category: 'General',
    defaultValue: ODS_CART_ROUNDED.all,
    options: ODS_CART_ROUNDEDS,
    control: { type: 'select' },
  }
}

export default {
  title: 'UI Components/Cart [organism]/Web Component',
  id: 'cart',
  parameters: {
    notes: {
      changelog,
    },
    docs: { page },
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

const TemplateDefault = (args: any) => html`
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
// @ts-ignore
Default.parameters = parametersSmallCartViewport;
// @ts-ignore
Default.args = {
  ...extractStoryParams(storyParams),
  button: '<osds-button \n' +
    '         flex \n' +
    '         color="primary"\n' +
    '         contrasted="true"\n' +
    '         variant="stroked">\n' +
    '         Continue order' +
    '         <osds-icon size="sm" name="arrow-right" contrasted="" color="default" aria-hidden="true" alt="" aria-name=""></osds-icon>' +
    '      </osds-button>'
};

const TemplateEmpty = (args: any) => html`
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
// @ts-ignore
CartEmpty.args = {
  ...extractStoryParams(storyParams),
};

const OsdsCartManager = (args: any) => html`
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

const TemplateManager = (args: any) => OsdsCartManager(args);
export const CartManager = TemplateManager.bind({});
// @ts-ignore
CartManager.args = {
  ...extractStoryParams(storyParams),
  vatMode: false,
  button: '<osds-button \n' +
    '         flex \n' +
    '         color="primary"\n' +
    '         contrasted="true"\n' +
    '         variant="stroked">\n' +
    '         Continue order' +
    '         <osds-icon size="sm" name="arrow-right" contrasted="" color="default" aria-hidden="true" alt="" aria-name=""></osds-icon>' +
    '      </osds-button>',
};
// @ts-ignore
CartManager.play = CartManagerPlay;

const TemplateResponsive = (args: any) => html`
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
// @ts-ignore
Responsive.parameters = parametersResponsiveCartViewport;
// @ts-ignore
Responsive.args = {
  flex: true,
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
