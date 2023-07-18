import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';

import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { createTag } from '../../core/componentHTMLUtils';
import { ODS_COUNTRY_ISO_CODE, OdsCheckboxButtonSize, OdsDividerSize, OdsIconName, OdsRadioButtonSize, OdsTextLevel, OdsTextSize, olesIpsum, OlesIpsumGeneration } from '@ovhcloud/ods-core';

export default {
  title: 'UI Components/Introduction',
};

const uiComponents = {
  quarks: [
    {
        tag: 'osds-divider',
        name: 'Divider',
        url: '/?path=/story/ui-components-divider-quark-web-component--default',
        attributes: {
            color: OdsThemeColorIntent.primary,
            size: OdsDividerSize.ten,
            separator: '',
            style: `min-width: 12em;`,
        },
    },
    {
      name: "Link",
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
      name: "Text",
      tag: 'osds-text',
      url: '/?path=/story/ui-components-text-quark-web-component--default',
      attributes: {
        color: OdsThemeColorIntent.text,
        level: OdsTextLevel.heading,
        size: OdsTextSize._700,
      },
      slots: {
        DEFAULT: `Text`,
      },
    }
  ],
  atoms: [
    {
      name: "Accordion",
      tag: 'osds-accordion',
      url: '/?path=/story/ui-components-accordion-accordion-atom-web-component--web-component',
      attributes: {
        color: OdsThemeColorIntent.primary,
        style: `display: block; min-width: 12em`,
      },
      slots: {
        summary: `Accordion`,
        DEFAULT: olesIpsum(),
      },
    },
    {
      name: "Button",
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
      name: "Checkbox Button",
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
      name: "Chip",
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
      name: "Code",
      tag: 'osds-code',
      url: '/?path=/story/ui-components-code-atom-web-component--default',
      attributes: {
        style: `display: block; min-width: 12em`,
      },
      slots: {
        DEFAULT: `$ Code`,
      },
    },
    {
      name: "Flag",
      tag: 'osds-flag',
      url: '/?path=/story/ui-components-flag-atom-web-component--default',
      attributes: {
        iso: ODS_COUNTRY_ISO_CODE.FR,
        style: `width: 3em`,
      },
    },
    {
      name: "Icon",
      tag: 'osds-icon',
      url: '/?path=/story/ui-components-icon-atom-web-component--default',
      attributes: {
        color: OdsThemeColorIntent.primary,
        name: OdsIconName.HOME,
      },
    },
    {
      name: "Input",
      tag: 'osds-input',
      url: '/?path=/story/ui-components-input%EF%B8%8F-atom-web-component--default',
      attributes: {
        color: OdsThemeColorIntent.primary,
        flex: '',
        placeholder: `Input`,
      },
    },
    {
      name: "Message",
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
      name: "Radio Button",
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
      name: "Range",
      tag: 'osds-range',
      url: '/?path=/story/ui-components-range-atom-web-component--default',
      attributes: {
        color: OdsThemeColorIntent.primary,
        flex: '',
        max: 10,
        value: 5,
      },
      slots: {
        "start-bound": `0`,
        "end-bound": `100%`
      }
    },
    {
      name: "Select",
      tag: 'osds-select',
      url: '/?path=/story/ui-components-select-atom-web-component--default',
      attributes: {
        color: OdsThemeColorIntent.primary,
        flex: '',
        style: `max-width: 12em;`
      },
      slots: {
        placeholder: `Select`,
      },
    },
    {
      name: "Skeleton",
      tag: 'osds-skeleton',
      url: '/?path=/story/ui-components-skeleton-atom-web-component--default',
      attributes: {
        style: `max-width: 12em;`
      },
    },
    {
      name: "Spinner",
      tag: 'osds-spinner',
      url: '/?path=/story/ui-components-spinner-atom-web-component--default',
    },
    {
      name: "Textarea",
      tag: 'osds-textarea',
      url: '/?path=/story/ui-components-textarea-atom-web-component--default',
      attributes: {
        color: OdsThemeColorIntent.primary,
        placeholder: 'Textarea',
        flex: '',
      },
    },
    {
      name: "Tile",
      tag: 'osds-tile',
      url: '/?path=/story/ui-components-tile-tile-atom-web-component--default',
      attributes: {
        color: OdsThemeColorIntent.primary,
        flex: '',
        interactive: '',
      },
      slots: {
        DEFAULT: `${olesIpsum(OlesIpsumGeneration.words, 5)}`,
      },
    },
    {
      name: "Toggle",
      tag: 'osds-toggle',
      url: '/?path=/story/ui-components-%EF%B8%8Ftoggle-atom-web-component--default',
      attributes: {
        color: OdsThemeColorIntent.primary,
        interactive: '',
        checked: '',
      },
    }
  ],
  molecules: [
    {
      name: "Accordion Group",
      tag: 'osds-accordion-group',
      url: '/?path=/story/ui-components-accordion-accordion-group-molecule-web-component--web-component',
      slots: {
        DEFAULT: `
      <osds-accordion opened>
        <span slot="summary">Accordion Group</span>
        ${olesIpsum(OlesIpsumGeneration.sentences, 1)}
      </osds-accordion>
      <osds-accordion>
        <span slot="summary">Accordion</span>
        ${olesIpsum()}
      </osds-accordion>`,
      },
    },
    {
      name: '️Breadcrumb',
      tag: 'osds-breadcrumb',
      url: '/?path=/story/ui-components-breadcrumb-molecule-web-component--default',
      attributes: {
        items: [
          { href: "#home", label: "Home" },
          { href: "#services", label: "Services" },
          { href: "#products", label: "Products" },
          { href: "#web", label: "Web" },
        ],
      },
    },
    {
      name: "Pagination",
      tag: 'osds-pagination',
      url: '/?path=/story/ui-components-pagination-molecule-web-component--default',
      attributes: {
        current: 2,
        'total-pages': 2,
      },
    },
    {
      name: "Radio Group",
      tag: 'osds-radio-group',
      url: '/?path=/story/ui-components-radio-radio-group-molecule-web-component--default',
      attributes: {
        value: "val-tile-A"
      },
      slots: {
        DEFAULT: `
        <osds-radio
          id="radio-A"
          value="val-tile-A"
          name="ods-radio-group-0"
        >
          <osds-radio-button color="primary" size="sm">
            <span slot="end">Radio Button A</span>
          </osds-radio-button>
        </osds-radio>

        <osds-radio
          id="radio-B"
          value="val-tile-B"
          name="ods-radio-group-0"
        >
          <osds-radio-button color="primary" size="sm">
            <span slot="end">Radio Button B</span>
          </osds-radio-button>
        </osds-radio>`,
      },
    },
    {
      name: "Quantity",
      tag: 'osds-quantity',
      url: '/?path=/story/ui-components-quantity-molecule-web-component--default',
      slots: {
        minus: `<osds-button size="sm" color="primary" tabindex="0" type="button" variant="flat"disabled="" > <osds-icon size="xxs" contrasted="" name="minus" aria-hidden="" alt="" style="--test: minus; --icon-mask-image: url(&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M20 11a1 1 0 010 2H4a1 1 0 010-2h16z'/%3E%3C/svg%3E&quot;);" aria-name="" color="default"></osds-icon> </osds-button>`,
        plus: `<osds-button size="sm" color="primary" tabindex="0" type="button" variant="flat"> <osds-icon size="xxs" contrasted="" name="plus" aria-hidden="" alt="" style="--test: plus; --icon-mask-image: url(&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M12 3a1 1 0 011 1v7h7a1 1 0 010 2h-7v7a1 1 0 01-2 0v-7H4a1 1 0 010-2h7V4a1 1 0 011-1z'/%3E%3C/svg%3E&quot;);" aria-name="" color="default"></osds-icon> </osds-button>`,
        DEFAULT: `<osds-input style="max-width: 40px" type="number" color="primary" min="1" max="10" step="1" value="1"tabindex="0" size="md" default-value="" ></osds-input>`,
      },
    },
  ],
  organisms: [
    {
      name: "Cart",
      tag: 'osds-cart',
      url: '/?path=/story/ui-components-cart-organism-web-component--default',
      slots: {
        DEFAULT: `<osds-cart-header slot="header" class="hydrated"> Your selection </osds-cart-header> <osds-cart-section class="hydrated"> <osds-cart-item class="hydrated"> <span slot="subhead">Main product subhead</span> <span slot="title">Main product title</span> <span slot="price">3,000.00 ¤</span> <span slot="extra">ex.VAT / month</span> </osds-cart-item> <osds-divider color="primary" size="0" separator=""></osds-divider> <osds-cart-item-option class="hydrated"> <span slot="subhead">Another option subhead</span> <span slot="title">Another option title</span> <span slot="price">-450.00 ¤</span> <span slot="extra">ex.VAT / month</span> </osds-cart-item-option> </osds-cart-section> <osds-cart-footer slot="footer" class="hydrated"> <osds-cart-total class="hydrated"> <span slot="total">Total</span> <span slot="info">X products</span> <span slot="price">5,550.00 ¤</span> <span slot="extra">ex.VAT / month</span> </osds-cart-total></osds-cart-footer>`,
      },
    },
  ],
  layouts: [
    {
      name: "Content Addon",
      tag: 'osds-content-addon',
      url: '/?path=/story/ui-components-content-addon-layout-web-component--default',
      slots: {
        start: `<osds-text color="default">start</osds-text>`,
        main: `<osds-text color="primary" level="heading" size="500">Content</osds-text>`,
        end: `<osds-text color="default">end</osds-text>`,
        top: `<osds-text color="default">top</osds-text>`,
        bottom: `<osds-text color="default">bottom</osds-text>`,
      },
    },
  ],
  meta: [
    {
      name: "Checkbox",
      tag: 'osds-checkbox',
      url: 'http://localhost:6006/?path=/story/ui-components-radio-radio-meta-web-component--default'
    },
    {
      name: "Radio",
      tag: 'osds-radio',
      url: '/?path=/story/ui-components-radio-radio-meta-web-component--web-component'
    },
  ]
};

const TemplateIntroduction = () => html`
<style>
.cardLink {
    display: flex;
    width: clamp(16em, 20%, 32em);
    text-decoration: none;
    color: inherit;
}

.cardSection {
    color: #333;
    display: flex;
    flex-flow: row wrap;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 2rem;
    margin-bottom: 1rem;
    text-transform: capitalize;
}

.cardGrid {
    display: flex;
    flex-flow: row wrap;
    gap: 2rem;
    justify-content: center;
    width: 100%
}

.card {
    padding: 2rem;
}

.cardInner {
    align-items: center;
    display: flex;
    flex-flow: column;
    gap: 2rem;
    width: 100%;
}

.cardTitle {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 1.3rem;
    font-weight: 600;
    line-height: 1.5rem;
    text-align: center;
}

.cardContent {
    display: block;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1rem;
    margin: auto;
    text-align: center;
    pointer-events: none;
}
</style>

<h1>Web Components</h1>

<span style="
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      ">
  <span style="
        background: var(--ods-color-primary-700);
        display: flex;
        flex-flow: column wrap;
        gap: 2rem;
        justify-content: center;
        padding: 2rem;
        place-items: center;
  ">
    <osds-text color="primary"
               size="800"
               level="heading"
               hue="500"
               contrasted
               style="
                  max-width: 50rem;
                  text-align: center;
               ">
        UI components
    </osds-text>
    <osds-text color="primary"
               size="600"
               level="heading"
               hue="500"
               contrasted
               style="
                  max-width: 50rem;
                  text-align: center;
               ">
        OVHcloud UI Components are grouped by type, and based on&nbsp;
        <osds-link href="https://bradfrost.com/blog/post/atomic-web-design/"
                   color="primary"
                   target="_blank"
                   contrasted>
            <osds-text color="primary"
                       size="600"
                       level="heading"
                       hue="200"
                       style="
                            max-width: 50rem;
                            text-align: center;
            ">
            Atomic Design paradigm
            </osds-text>
        </osds-link>.
    </osds-text>
  </span>
  ${
    Object.keys(uiComponents).map((section) =>
      html` <span key=${section}
            style="
              display: flex;
              flex-flow: column wrap;
              padding: 1rem 2rem;
            ">
        <h2 class="cardSection">
          ${section}
        </h2>
        <osds-divider separator></osds-divider>
        <osds-divider size="6"></osds-divider>
        <span class="cardGrid">
          ${
            uiComponents[section].map(
                ({ name, tag, url, attributes, slots }) =>
            html`<a class="cardLink"
                           href=${url}
                           key=${name}>
                <osds-tile color="primary"
                           interactive="true"
                           class="card"
                           flex>
                  <span class="cardInner">
                    <osds-text class="cardTitle"
                               color="primary">
                        ${name}
                    </osds-text>
                    <span class="cardContent">
                        ${unsafeHTML(
                            createTag({
                                tag,
                                attributes,
                                slots,
                            }),
                        )}
                    </span>
                  </span>
                </osds-tile>
              </a>`
            )}
        </span>
      </span>`
    )
  }
</span>
`;
export const Introduction = TemplateIntroduction.bind({});
Introduction.parameters = {
  controls: { hideNoControlsWarning: true },
  options: { showPanel: false },
};
