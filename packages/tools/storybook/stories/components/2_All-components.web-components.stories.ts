import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';

import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { createTag } from '../../core/componentHTMLUtils';
import {
  ODS_COUNTRY_ISO_CODE,
  OdsCheckboxButtonSize,
  OdsDividerSize,
  OdsIconName,
  OdsRadioButtonSize,
  OdsTextLevel,
  OdsTextSize,
  olesIpsum,
  OlesIpsumGeneration,
} from '@ovhcloud/ods-core';

/* AllComponents story parameters  */
export default {
  title: 'UI Components/All Components',
};

const allComponents = [
  {
    tag: 'osds-accordion',
    url: '/?path=/story/ui-components-accordion-accordion-atom-web-component--web-component',
    attributes: {
      color: OdsThemeColorIntent.primary,
      style: `width: 100%`,
    },
    slots: {
      summary: `Accordion`,
      DEFAULT: olesIpsum(),
    },
  },
  {
    tag: 'osds-accordion-group',
    url: '/?path=/story/ui-components-accordion-accordion-group-molecule-web-component--web-component',
    slots: {
      DEFAULT: `
      <osds-accordion opened>
        <span slot="summary">Accordion Group</span>
        ${olesIpsum()}
      </osds-accordion>
      <osds-accordion>
        <span slot="summary">Accordion</span>
        ${olesIpsum()}
      </osds-accordion>`,
    },
  },
  {
    tag: 'osds-button',
    url: '/?path=/story/ui-components-button%EF%B8%8F-atom-web-component--default',
    attributes: {
      color: OdsThemeColorIntent.primary,
    },
    slots: {
      DEFAULT: `Button`,
    },
  },
  {
    tag: 'osds-breadcrumb',
    url: '/?path=/story/ui-components-breadcrumb-atom-web-component--default',
    attributes: {
      color: OdsThemeColorIntent.primary,
    },
    slots: {
      DEFAULT: `
      <osds-breadcrumb>
      <osds-breadcrumb-item>
        <osds-link color="primary" href="home"> Home </osds-link>
      </osds-breadcrumb-item>
      <osds-breadcrumb-item><osds-link color="primary" href="item1">Item 1</osds-link></osds-breadcrumb-item>
      <osds-breadcrumb-item><osds-text>Item active</osds-text></osds-breadcrumb-item>
    </osds-breadcrumb>`,
    },
  },
  {
    tag: 'osds-cart',
    url: '/?path=/story/ui-components-cart-organism-web-component--default',
    slots: {
      DEFAULT: `<osds-cart-header slot="header" class="hydrated"> Your selection </osds-cart-header> <osds-cart-section class="hydrated"> <osds-cart-item class="hydrated"> <span slot="subhead">Main product subhead</span> <span slot="title">Main product title</span> <span slot="price">3,000.00 ¤</span> <span slot="extra">ex.VAT / month</span> </osds-cart-item> <osds-divider color="primary" size="0" separator=""></osds-divider> <osds-cart-item-option class="hydrated"> <span slot="subhead">Another option subhead</span> <span slot="title">Another option title</span> <span slot="price">-450.00 ¤</span> <span slot="extra">ex.VAT / month</span> </osds-cart-item-option> </osds-cart-section> <osds-cart-footer slot="footer" class="hydrated"> <osds-cart-total class="hydrated"> <span slot="total">Total</span> <span slot="info">X products</span> <span slot="price">5,550.00 ¤</span> <span slot="extra">ex.VAT / month</span> </osds-cart-total></osds-cart-footer>`,
    },
  },
  {
    tag: 'osds-checkbox-button',
    url: '/?path=/story/ui-components-checkbox-checkbox-button-atom-web-component--default',
    attributes: {
      color: OdsThemeColorIntent.primary,
      checked: '',
      size: OdsCheckboxButtonSize.sm,
    },
    slots: {
      end: `Checkbox Button`,
    },
  },
  {
    tag: 'osds-chip',
    url: '/?path=/story/ui-components-chip-atom-web-component--default',
    attributes: {
      color: OdsThemeColorIntent.primary,
      selectable: '',
    },
    slots: {
      DEFAULT: `Chip`,
    },
  },
  {
    tag: 'osds-code',
    url: '/?path=/story/ui-components-code-atom-web-component--default',
    attributes: {
      style: `width: 100%`,
    },
    slots: {
      DEFAULT: `$ Code`,
    },
  },
  {
    tag: 'osds-content-addon',
    url: '/?path=/story/ui-components-content-addon-layout-web-component--default',
    slots: {
      start: `<osds-text color="default">start</osds-text>`,
      main: `<osds-text color="primary">Content Addon</osds-text>`,
      end: `<osds-text color="default">end</osds-text>`,
      top: `<osds-text color="default">top</osds-text>`,
      bottom: `<osds-text color="default">bottom</osds-text>`,
    },
  },
  {
    tag: 'osds-divider',
    url: '/?path=/story/ui-components-divider-quark-web-component--default',
    attributes: {
      color: OdsThemeColorIntent.primary,
      size: OdsDividerSize.ten,
      separator: '',
      style: `width: 100%;`,
    },
  },
  {
    tag: 'osds-flag',
    url: '/?path=/story/ui-components-flag-atom-web-component--default',
    attributes: {
      iso: ODS_COUNTRY_ISO_CODE.FR,
      style: `width: 3em`,
    },
  },
  {
    tag: 'osds-icon',
    url: '/?path=/story/ui-components-icon-atom-web-component--default',
    attributes: {
      color: OdsThemeColorIntent.primary,
      name: OdsIconName.HOME,
    },
  },
  {
    tag: 'osds-input',
    url: '/?path=/story/ui-components-input%EF%B8%8F-atom-web-component--default',
    attributes: {
      color: OdsThemeColorIntent.primary,
      flex: '',
      placeholder: `Input`,
    },
  },
  {
    tag: 'osds-link',
    url: '/?path=/story/ui-components-link-quark-web-component--default',
    attributes: {
      color: OdsThemeColorIntent.primary,
    },
    slots: {
      DEFAULT: `Link`,
    },
  },
  {
    tag: 'osds-tile',
    url: '/?path=/story/ui-components-tile-tile-atom-web-component--default',
    attributes: {
      color: OdsThemeColorIntent.primary,
      flex: '',
      interactive: '',
    },
    slots: {
      DEFAULT: `Tile<br>${olesIpsum(OlesIpsumGeneration.words, 5)}`,
    },
  },
  {
    tag: 'osds-message',
    url: '/?path=/story/ui-components-message-atom-web-component--default',
    attributes: {
      color: OdsThemeColorIntent.info,
      flex: '',
      removable: '',
    },
    slots: {
      DEFAULT: `Message<br>${olesIpsum(OlesIpsumGeneration.words, 5)}`,
    },
  },
  {
    tag: 'osds-quantity',
    url: '/?path=/story/ui-components-quantity-molecule-web-component--default',
    slots: {
      minus: `<osds-button size="sm" color="primary" tabindex="0" type="button" variant="flat"disabled="" > <osds-icon size="xxs" contrasted="" name="minus" aria-hidden="" alt="" style="--test: minus; --icon-mask-image: url(&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M20 11a1 1 0 010 2H4a1 1 0 010-2h16z'/%3E%3C/svg%3E&quot;);" aria-name="" color="default"></osds-icon> </osds-button>`,
      plus: `<osds-button size="sm" color="primary" tabindex="0" type="button" variant="flat"> <osds-icon size="xxs" contrasted="" name="plus" aria-hidden="" alt="" style="--test: plus; --icon-mask-image: url(&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M12 3a1 1 0 011 1v7h7a1 1 0 010 2h-7v7a1 1 0 01-2 0v-7H4a1 1 0 010-2h7V4a1 1 0 011-1z'/%3E%3C/svg%3E&quot;);" aria-name="" color="default"></osds-icon> </osds-button>`,
      DEFAULT: `<osds-input style="max-width: 40px" type="number" color="primary" min="1" max="10" step="1" value="1"tabindex="0" size="md" default-value="" ></osds-input>`,
    },
  },
  {
    tag: 'osds-radio-button',
    url: '/?path=/story/ui-components-radio-radio-button-atom-web-component--default',
    attributes: {
      color: OdsThemeColorIntent.primary,
      checked: '',
      size: OdsRadioButtonSize.sm,
    },
    slots: {
      end: `Radio Button`,
    },
  },
  {
    tag: 'osds-range',
    url: '/?path=/story/ui-components-range-atom-web-component--default',
    attributes: {
      color: OdsThemeColorIntent.primary,
      flex: '',
      max: 10,
      value: 5,
    },
  },
  {
    tag: 'osds-select',
    url: '/?path=/story/ui-components-select-atom-web-component--default',
    attributes: {
      color: OdsThemeColorIntent.primary,
      flex: '',
    },
    slots: {
      placeholder: `Select`,
    },
  },
  {
    tag: 'osds-skeleton',
    url: '/?path=/story/ui-components-skeleton-atom-web-component--default',
    attributes: {
      flex: '',
    },
  },
  {
    tag: 'osds-text',
    url: '/?path=/story/ui-components-text-quark-web-component--default',
    attributes: {
      color: OdsThemeColorIntent.text,
      level: OdsTextLevel.body,
      size: OdsTextSize._500,
    },
    slots: {
      DEFAULT: `Text`,
    },
  },
  {
    tag: 'osds-textarea',
    url: '/?path=/story/ui-components-textarea-atom-web-component--default',
    attributes: {
      color: OdsThemeColorIntent.primary,
      placeholder: 'Textarea',
      flex: '',
    },
  },
  {
    tag: 'osds-toggle',
    url: '/?path=/story/ui-components-%EF%B8%8Ftoggle-atom-web-component--default',
    attributes: {
      color: OdsThemeColorIntent.primary,
      interactive: '',
      checked: '',
    },
  },
];

const TemplateAllComponents = () => html`
  <style>
    .container {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 1em;
    }
    .item {
      color: inherit;
      align-items: center;
      display: flex;
      justify-content: center;
      margin: auto;
      min-height: 10em;
      text-decoration: inherit;
      width: 100%;
    }
  </style>
  <div class="container">
    ${allComponents.map(
      ({ tag, url, attributes, slots }) =>
        html` <a class="item" href="${url}"
          >${unsafeHTML(
            createTag({
              tag,
              attributes,
              slots,
            }),
          )}</a
        >`,
    )}
  </div>
`;
export const AllComponents = TemplateAllComponents.bind({});
AllComponents.parameters = {
  controls: { hideNoControlsWarning: true },
  options: { showPanel: false },
};
