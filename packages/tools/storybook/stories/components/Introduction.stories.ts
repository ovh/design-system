import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';

import { OdsThemeColorIntent, OdsThemeTypographyLevel, OdsThemeTypographySize } from '@ovhcloud/ods-theming';
import { createTag } from '../../core/componentHTMLUtils';
import { ODS_COUNTRY_ISO_CODE, olesIpsum, OlesIpsumGeneration } from '@ovhcloud/ods-core';
import { ODS_ICON_NAME } from '@ovhcloud/ods-component-icon';
import { ODS_DIVIDER_SIZE } from '@ovhcloud/ods-component-divider';
import { ODS_CHECKBOX_BUTTON_SIZE } from '@ovhcloud/ods-component-checkbox-button';
import { ODS_RADIO_BUTTON_SIZE } from '@ovhcloud/ods-component-radio-button';

export default {
  title: 'UI Components/Introduction',
  id: 'ui-components',
};

const uiComponents = {
  quarks: [
    {
        tag: 'osds-divider',
        name: 'Divider',
        url: parent.location.href.replace(parent.location.search, "?path=/story/divider--default"),
        attributes: {
            color: OdsThemeColorIntent.primary,
            size: ODS_DIVIDER_SIZE.ten,
            separator: '',
            style: `min-width: 12em;`,
        },
    },
    {
      name: "Icon",
      tag: 'osds-icon',
      url: parent.location.href.replace(parent.location.search, "?path=/story/icon--default"),
      attributes: {
        color: OdsThemeColorIntent.primary,
        name: ODS_ICON_NAME.HOME,
      },
    },
    {
      name: "Text",
      tag: 'osds-text',
      url: parent.location.href.replace(parent.location.search, "?path=/story/text--default"),
      attributes: {
        color: OdsThemeColorIntent.text,
        level: OdsThemeTypographyLevel.heading,
        size: OdsThemeTypographySize._700,
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
      url: parent.location.href.replace(parent.location.search, "?path=/story/accordion--web-component"),
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
      url: parent.location.href.replace(parent.location.search, "?path=/story/button--default"),
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
      url: parent.location.href.replace(parent.location.search, "?path=/story/checkbox-button--default"),
      attributes: {
        color: OdsThemeColorIntent.primary,
        checked: '',
        size: ODS_CHECKBOX_BUTTON_SIZE.sm,
      },
      slots: {
        end: `Checkbox Button`,
      },
    },
    {
      name: "Chip",
      tag: 'osds-chip',
      url: parent.location.href.replace(parent.location.search, "?path=/story/chip--default"),
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
      url: parent.location.href.replace(parent.location.search, "?path=/story/code--default"),
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
      url: parent.location.href.replace(parent.location.search, "?path=/story/flag--default"),
      attributes: {
        iso: ODS_COUNTRY_ISO_CODE.FR,
        style: `width: 3em`,
      },
    },
    {
      name: "Input",
      tag: 'osds-input',
      url: parent.location.href.replace(parent.location.search, "?path=/story/input--default"),
      attributes: {
        color: OdsThemeColorIntent.primary,
        flex: '',
        placeholder: `Input`,
        name: ODS_ICON_NAME.HOME
      },
    },
    {
      name: "Link",
      tag: 'osds-link',
      url: parent.location.href.replace(parent.location.search, "?path=/story/ui-components-link-atom-web-component--default"),
      attributes: {
        color: OdsThemeColorIntent.primary,
      },
      slots: {
        DEFAULT: `Link`,
      },
    },
    {
      name: "Message",
      tag: 'osds-message',
      url: parent.location.href.replace(parent.location.search, "?path=/story/message--default"),
      attributes: {
        color: OdsThemeColorIntent.info,
        flex: '',
        removable: '',
      },
      slots: {
        DEFAULT: `${olesIpsum(OlesIpsumGeneration.words, 5)}`,
      },
    },
    {
      name: "Popover",
      url: parent.location.href.replace(parent.location.search, "?path=/story/ui-components-popover-atom-web-component--default"),
      template: `<img width="100%" src="data:image/png;base64,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"/>`
    },
    {
      name: "Progress Bar",
      tag: 'osds-progress-bar',
      url: parent.location.href.replace(parent.location.search, "?path=/story/ui-components-progress-bar-atom-web-component--default"),
      attributes: {
        value: 50,
      },
      slots: {
        end: `<osds-text color="text" level="body" size="500" style="margin-left: .5em;">100</osds-text>`,
      }
    },
    {
      name: "Radio Button",
      tag: 'osds-radio-button',
      url: parent.location.href.replace(parent.location.search, "?path=/story/radio-button--default"),
      attributes: {
        color: OdsThemeColorIntent.primary,
        checked: '',
        size: ODS_RADIO_BUTTON_SIZE.sm,
      },
      slots: {
        end: `Radio Button`,
      },
    },
    {
      name: "Range",
      tag: 'osds-range',
      url: parent.location.href.replace(parent.location.search, "?path=/story/range--default"),
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
      name: "Skeleton",
      tag: 'osds-skeleton',
      url: parent.location.href.replace(parent.location.search, "?path=/story/skeleton--default"),
      attributes: {
        style: `max-width: 12em;`
      },
    },
    {
      name: "Spinner",
      tag: 'osds-spinner',
      url: parent.location.href.replace(parent.location.search, "?path=/story/spinner--default"),
    },
    {
      name: "Switch",
      tag: 'osds-switch',
      url: parent.location.href.replace(parent.location.search, "?path=/story/switch--default"),
      attributes: {
        color: OdsThemeColorIntent.primary
      },
      slots: {
        DEFAULT: `<osds-switch-item value="1" id="1" checked="">Item 1</osds-switch-item>
        <osds-switch-item value="2" id="2">Item 2</osds-switch-item>`,
      },
    },
    {
      name: "Textarea",
      tag: 'osds-textarea',
      url: parent.location.href.replace(parent.location.search, "?path=/story/textarea--default"),
      attributes: {
        color: OdsThemeColorIntent.primary,
        placeholder: 'Textarea',
        flex: '',
      },
    },
    {
      name: "Tile",
      tag: 'osds-tile',
      url: parent.location.href.replace(parent.location.search, "?path=/story/tile--default"),
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
      url: parent.location.href.replace(parent.location.search, "?path=/story/toggle--default"),
      attributes: {
        color: OdsThemeColorIntent.primary,
        interactive: '',
        checked: '',
      },
    },
    {
      name: "Tooltip",
      url: parent.location.href.replace(parent.location.search, "?path=/story/tooltip--default"),
      template: `<img width="100%" src=" data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAAA4CAIAAACg+YcKAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAIyklEQVR4nO2cf1QU1xXH78wOsC4grlqEBBUQkWOoaA0c0SS0QjyoMUURUqMpiWKEVhMVFE6IJDTkCCoKJphEIsaaWjVJjQat1BJbqQY1mGgN/kTggFJQaQBdFhlm+sfgMLz3ZphdlvU0zPd4cOb9uPO4n733vV3eW4rnecBELFQo16ReFEVZVA4AFOJ3HINFFDXJicgALyQ3E92tQEslOU0KUuaB1KK3REh4oRxLTRZJ9L7CBRAhEWNI+hO/BY2WJcIBIGyQQqQXCgkhhAPTQsoKKSChKEqOk3jNEAkRL3qFpGETpDD9IGDwZjzPi1XiNSO2kAMjFchElSYFyUWPFJWABzBOgrogyRHiOI7ISUt6KiXFgBOiKIqmabEBzkm4QCMJHjIQ8eCclCENZGzKiQ4XTdMcx4mopGCkRhjA8EjFcZwASS6kREMDmQ0u4nIOwSOUC3ik3kNQ8Tzfne4QNiIhhmH0er0YlZpsIo7jzGYzy7IAIMQT4mEpZpqYr6SEDAaDRsjmomnaYDAwDCPmKoWJo0es4elOr9fbc+gDTXq9Xs1kT4tFPGnlrcVQv4qmaeJMj0RVDwb4zGTXIQ9IEVdkiLohIUs1uQ6abCvc1fg1OZKAFHSa+kP4RIO36Z6T8J4aJDuI6Gp0TiK20CDZTXLelpbQeGu7jlGTRHIICCtsnrRU19RPUuNt8tsgLaTsqV69rb1X/T+QlZCSM/ZSnnH4v+raO1ZYGzIu8ZN9pcSq7PcP+4QkNbe0WTfOn4aUICnEYNrKOVVncqrO5GSlxRoGOQrXVWdyvDyNfRzQ0eP/9gtdI95O+vno2RETDYMc+2jWCqW+uz8+qbC/LaiZVhjkXuVUZHRzNro5A8AwowtFUd4jh6vppUa377ZIb2eEBc4IC7SVcQtH0qqwq7Q/LMg53/Zz0qVrtyIXbDL4LHUPXL7qrT3m9g6xqujY9xMj1jmNXuIXuuaj3cfxvvFJhb9dsb2yupHyjHMZ8yoA5BYUewcnCbW5BcXT52et31o0dupaZ9+lkQs21Tf8iBu5UXN77uKtrn7LjAGJK9P/1GZ+oPDoqFfyst4rysj50mvSSmNA4oq03YKn/ELXFP75xI49/6Q84557aTMA8Dy/If/IyF+scvNPmPlizvWqBkstWC0bQ2ppbQuPyXZ10ZcdTv80P+HLv5b/LnWXUHX6XGXUK3nRs588X5KZsnz2qvQ9f/zsJNL9w+y4d1KifUe7t1V/fPfSNtz+P05dbm41nS/JvPl9nk5Hz1uyFWlw7755+vyse/fNJZ+lHNu31oHR6XS08qP/sPngMKNL9dmcot2r83eWHDvxAwBUnFj/bFjgyy883Vb98YHC1wFgy/bi3Z+f3L/995dLs0Im+T4fl8uynRZZsFpouuujNn90lKaoT/MTnByZCTByx+Yl4THZq5dFBgZ4pWTunztz8rpVvwaAAD/P2ptNa9/Ztyh6Kk13JwSG0TE6mqJA7+RAtD/q8WFZabEAYBjkuP6NmKDwNyuu3hzv/7jYIOfDo6a29gOFr7k46wHgySAfAFB+9LxZk5cvjgCAacFjx43xOHehekZYoKMDQ1OUTkcLIzG1PXhr44HjX6QKBt9OjvpgV8n5itrJE7xVWuiLbBxJZeWV00LGOjl2sX9myjiG0ZWVVwJAWfn16U+NF1uGPz2+4XbzjZpGq5/lP8YDAK5X9bDwzbfXn5kyTiAkGZXSoxlGJ1a5DTY0txJWkhcqau/dN8+Pf987OMk7OMknJLmzk2u806LeQl9k40jigUf2YFAU8MADAA8gnUS7dln04Vk/NpvwQo7ndTr0lWfRo4mzt/Cnta8/T/Ud/bNeB2bzzwHQ36eP65ngIN9TZ6896GCF29LTVzs6OoMn+gJAcJDP8ZOXxJZf/6timNHFdxT6Ozs46FhW1R8b/176A8PohPwjavIE79LTV4XFgmRUqh5NGknXrBMY4KV3cjhYfE7NwIgW1EjO+UrpzgpgSYmR7Q/YuNcKLl6uKymtiE/asXBe6MQnRgFA1puxXxz+dv3Woqs3/rNzb+nGbUey0mKFV72TI1NX/1/hBejv61F7625JacWVynrcfl1909ubDly8XHeo+LvkjL3LXvrVYx5DegwgIbK9vSP21fzvLtaUX6hemlxYU3dH4dEK8vf1OFF25Upl/Y2a24NdB6Wvjkrf8Jede0vr6ptOnb22If9Ir96QWpBro8bJNp6TjG7Op75a19xiCpmZsSBxW8yckB1b4oWqp0L8j+5J3nfodOAv33g379AH2S/HLwwTqn4TNSVzy8HaW00AMCs8aFH01LmL8yJiNtxpakXsj3xsKE1TsxbmxL2+fVH01C0ZLyINhg91/eZwOsty0+ZkRi7YNGSwYfhQV4VHK2h1QqSXp3FSRHpCyicAkLpi9sb0FzJzD40NXZuYuothencdYsFqUSzLCh/wcQ/VKdGIESP6Yt22yi0oziv4W9WZnEc9EFuqoaFBJxH9UD12UhJ7ym37f+T6SX4036u3CZCQcxqa+lVqvN2d7sSMJ0137u7u9hrtAFVjYyOe7tCN43isSasf1dAHjuS8LS3pPhxD7GmfgQ5kyRGS3qI7+cUOGiT7CHE40ee0tDXSU4NkB+Guxq/JkdQ1X2m79ftf+DKB0Eb4Dw86Qdqe/X6VcBYTIYSj6j6qCRghiqLMZrP9hz5wZDabcZ8LVVJONB5fYq6jaZplWZPJpMWTzcVxnMlkYllW+sYIadMNTDgfA4rHZnntYLOFwid/fL4XI0G8xfOeYIGBnt8ggJgWz0YLbfDd5TibgUxLKRpIwtng6Y6Sfo8Dgko4KSicisYDSNsvrlIIJJAJKbnZSBAjVvA9v4VDKCcSQn5qUpY0dxE5IfygJ1qQ7nGQ4yRNdKB9AZQKKSc9kPlkByckihGzHMh8+5C0CrSDMVYJhwQ9gSGFaC/83AUxoWnLub4Id70CNryX9vWedhVx8YZcAE5LzvvKQaOhslQKExVei9z+D08Gnt2uJB2pAAAAAElFTkSuQmCC" />`
    }
  ],
  molecules: [
    {
      name: "Accordion Group",
      tag: 'osds-accordion-group',
      url: parent.location.href.replace(parent.location.search, "?path=/story/accordion-group--web-component"),
      slots: {
        DEFAULT: `
      <osds-accordion opened>
        <span slot="summary">Accordion Group</span>
        ${olesIpsum(OlesIpsumGeneration.words, 5)}
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
      url: parent.location.href.replace(parent.location.search, "?path=/story/breadcrumb--default"),
      attributes: {
        items: JSON.stringify([
          { href: "#", label: "Home" },
          { href: "#", label: "Products" },
          { href: "#", label: "Web" },
        ]),
      },
    },
    {
      name: "Pagination",
      tag: 'osds-pagination',
      url: parent.location.href.replace(parent.location.search, "?path=/story/pagination--default"),
      attributes: {
        current: 2,
        'total-pages': 2,
      },
    },
    {
      name: "Password",
      tag: 'osds-password',
      url: parent.location.href.replace(parent.location.search, "?path=/story/password--default"),
      attributes: {
        color: OdsThemeColorIntent.primary,
        flex: '',
        value: 'Password',
        masked: ''
      }
    },
    {
      name: "Radio Group",
      tag: 'osds-radio-group',
      url: '/?path=/story/ui-components-radio-radio-group-molecule-web-component--default',
      attributes: {
        color: OdsThemeColorIntent.primary,
        flex: '',
        value: 'Password',
        masked: ''
      }
    },
    {
      name: "Quantity",
      tag: 'osds-quantity',
      url: parent.location.href.replace(parent.location.search, "?path=/story/quantity--default"),
      slots: {
        minus: `<osds-button size="sm" color="primary" tabindex="0" type="button" variant="flat"disabled="" > <osds-icon size="xxs" contrasted="" name="minus" aria-hidden="" alt="" style="--test: minus; --icon-mask-image: url(&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M20 11a1 1 0 010 2H4a1 1 0 010-2h16z'/%3E%3C/svg%3E&quot;);" aria-name="" color="default"></osds-icon> </osds-button>`,
        plus: `<osds-button size="sm" color="primary" tabindex="0" type="button" variant="flat"> <osds-icon size="xxs" contrasted="" name="plus" aria-hidden="" alt="" style="--test: plus; --icon-mask-image: url(&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M12 3a1 1 0 011 1v7h7a1 1 0 010 2h-7v7a1 1 0 01-2 0v-7H4a1 1 0 010-2h7V4a1 1 0 011-1z'/%3E%3C/svg%3E&quot;);" aria-name="" color="default"></osds-icon> </osds-button>`,
        DEFAULT: `<osds-input style="max-width: 40px" type="number" color="primary" min="1" max="10" step="1" value="1"tabindex="0" size="md" default-value="" ></osds-input>`,
      },
    },
    {
      name: "Select",
      tag: 'osds-select',
      url: parent.location.href.replace(parent.location.search, "?path=/story/select--default"),
      attributes: {
        color: OdsThemeColorIntent.primary,
        inline: true,
        style: `max-width: 12em;`
      },
      slots: {
        placeholder: `Select`,
      },
    },
    {
      name: "Tabs",
      tag: 'osds-tabs',
      url: parent.location.href.replace(parent.location.search, "?path=/story/tabs--web-component"),
      attributes: {
        panel: 'tab1'
      },
      slots: {
        top: `
        <osds-tab-bar>
          <osds-tab-bar-item
            panel="tab1"
            active>
            Tab 1
          </osds-tab-bar-item>
          <osds-tab-bar-item>
            Tab 2
          </osds-tab-bar-item>
        </osds-tab-bar>
        `
      },
    },
  ],
  organisms: [
    {
      name: "Cart",
      tag: 'osds-cart',
      url: parent.location.href.replace(parent.location.search, "?path=/story/cart--default"),
      slots: {
        DEFAULT: `<osds-cart-header slot="header"> Your selection </osds-cart-header> <osds-cart-section> <osds-cart-item> <span slot="subhead">Main product subhead</span> <span slot="title">Main product title</span> <span slot="price">3,000.00 ¤</span> <span slot="extra">ex.VAT / month</span> </osds-cart-item> <osds-divider color="primary" size="0" separator=""></osds-divider> <osds-cart-item-option> <span slot="subhead">Another option subhead</span> <span slot="title">Another option title</span> <span slot="price">-450.00 ¤</span> <span slot="extra">ex.VAT / month</span> </osds-cart-item-option> </osds-cart-section> <osds-cart-footer slot="footer"> <osds-cart-total> <span slot="total">Total</span> <span slot="info">X products</span> <span slot="price">5,550.00 ¤</span> <span slot="extra">ex.VAT / month</span> </osds-cart-total></osds-cart-footer>`,
      },
    },
    {
      name: "Form Field",
      tag: 'osds-form-field',
      url: parent.location.href.replace(parent.location.search, "?path=/story/form-field--default"),
      attributes: {
        flex: ''
      },
      slots: {
        label: `<osds-text level='heading' color="text">Label</osds-text>`,
        "visual-hint": `<osds-icon name="help-circle" size="xxs"></osds-icon>`,
        DEFAULT: `<osds-input placeholder="Input"></osds-input>`,
        helper: `<osds-text level='caption' style="margin-right: 100%">Helper text</osds-text>`,
      },
    },
  ],
  layouts: [
    {
      name: "Content Addon",
      tag: 'osds-content-addon',
      url: parent.location.href.replace(parent.location.search, "?path=/story/content--default"),
      slots: {
        start: `<osds-text color="default">start</osds-text>`,
        main: `<osds-text color="primary" level="heading" size="500">Content</osds-text>`,
        end: `<osds-text color="default">end</osds-text>`,
        top: `<osds-text color="default">top</osds-text>`,
        bottom: `<osds-text color="default">bottom</osds-text>`,
      },
    },
  ]
};

const TemplateIntroduction = () => html`
<style>
.cardLink {
    display: flex;
    width: clamp(16em, 23%, 32em);
    text-decoration: none;
    color: inherit;
}

.cardLink.wideCard {
    width: clamp(23em, 31%, 32em);
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
<span style="
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      ">
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
                ({ name, tag, url, attributes, slots, template }) =>
            html`<a class="${section.match(/quarks|organisms|layouts/g) ? "cardLink wideCard" : "cardLink"}"
                    href=${url}
                    key=${name}>
                <osds-tile class="card"
                           color="primary"
                           hoverable
                           flex>
                  <span class="cardInner">
                    <osds-text class="cardTitle"
                               color="primary">
                        ${name}
                    </osds-text>
                    <span class="cardContent">
                        ${tag ? unsafeHTML(
                            createTag({
                                tag,
                                attributes,
                                slots,
                            }),
                        ): template ? unsafeHTML(template) : ""}
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
