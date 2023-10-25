import { ODS_PERIOD_ISO_CODE, OdsI18n, OdsI18nHook, OdsLogger } from '@ovhcloud/ods-common-core';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { ODS_DIVIDER_SIZE } from '@ovhcloud/ods-component-divider';
import { Component, Element, Host, Method, Prop, Watch, h } from '@stencil/core';
import type { HTMLStencilElement } from '@stencil/core/internal';

import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsCartManagerController } from './core/controller';
import { isOdsCartManagerFooter, isOdsCartManagerFooterItem } from './helpers/type';
import type {
  OdsCartManagerAttribute,
  OdsCartManagerFooter,
  OdsCartManagerFooterItem,
  OdsCartManagerItem,
  OdsCartManagerSection,
  OdsCartManagerTotal,
} from './interfaces/attributes';
import type { OdsCartManagerMethod } from './interfaces/methods';
import type { ODS_CART_SIZE } from '../osds-cart/constants/cart-size';

/**
 *
 */
@Component({
  tag: 'osds-cart-manager',
  styleUrl: 'osds-cart-manager.scss',
  shadow: true,
})
export class OsdsCartManager implements OdsCartManagerAttribute, OdsCartManagerMethod {
  private logger = new OdsLogger('OsdsCartManager');
  controller: OdsCartManagerController = new OdsCartManagerController(this);
  @Element() el!: HTMLStencilElement;
  odsI18n: OdsI18n;

  /** @see OdsCartManagerAttributes.size */
  @Prop({ reflect: true }) public size?: ODS_CART_SIZE = DEFAULT_ATTRIBUTE.size;

  /** @see OdsCartManagerAttributes.inline */
  @Prop({ reflect: true }) public inline?: boolean = DEFAULT_ATTRIBUTE.inline;

  /** @see OdsCartManagerAttributes.sections */
  @Prop({ reflect: true }) public sections: OdsCartManagerSection[] = DEFAULT_ATTRIBUTE.sections;

  /** @see OdsCartManagerAttributes.footer */
  @Prop({ reflect: true }) public footer?: OdsCartManagerFooter = DEFAULT_ATTRIBUTE.footer;

  /** @see OdsCartManagerAttributes.vatMode */
  @Prop({ reflect: true }) vatMode?: boolean = DEFAULT_ATTRIBUTE.vatMode;

  /** @see OdsCartManagerAttributes.period */
  @Prop({ reflect: true }) period?: ODS_PERIOD_ISO_CODE = DEFAULT_ATTRIBUTE.period;

  /** @see OdsCartManagerAttributes.i18n */
  @Prop({ reflect: true }) i18n?: OdsI18nHook = DEFAULT_ATTRIBUTE.i18n;

  constructor() {
    this.odsI18n = OdsI18n.get();
  }

  @Watch('footer')
  validateFooter(newValue?: OdsCartManagerFooter): void {
    this.controller.validateFooter(newValue);
  }

  /**
   * @see OdsCartManagerMethods.getTotalAmount
   */
  @Method()
  async getTotalAmount(): Promise<number> {
    return this.controller.getTotalAmount();
  }

  /**
   * @see OdsCartManagerMethods.getProductQuantity
   */
  @Method()
  async getProductQuantity(): Promise<number> {
    return this.controller.getProductQuantity();
  }

  /**
   * render a cart section
   * @param section
   */
  private renderOneSection(section: OdsCartManagerSection): JSX.Element {
    return (
      <osds-cart-section>
        <osds-cart-item>
          <span slot="subhead">{section.item.subhead}</span>
          <span slot="title">{section.item.title}</span>
          <span slot="price">{this.odsI18n.handle('cart.price', {
            price: section.item.price,
          }, this.i18n)}</span>
          <span slot="extra">{section.item.extra}</span>
        </osds-cart-item>
        {this.renderSectionOptions(section)}
      </osds-cart-section>
    );
  }

  /**
   * render an OdsCartManagerSection
   * @param section
   */
  private renderSectionOptions(section: OdsCartManagerSection): JSX.Element[] {
    return section.options
      .map((option) => {
        return this.renderItemOption(option);
      })
      // add divider before the options, and between each of them
      .reduce(
        (r, a, i, array) =>
        // divider between each option
          (array.length - 1 !== i
            ? r.concat(a,
              (<osds-divider color={ODS_THEME_COLOR_INTENT.primary} size={ODS_DIVIDER_SIZE.zero}
                separator={true}></osds-divider>))
            : r.concat(a)),
        // first divider before options
        [(<osds-divider color={ODS_THEME_COLOR_INTENT.primary} size={ODS_DIVIDER_SIZE.zero}
          separator={true}></osds-divider>)],
      );
  }

  /**
   * render an OdsCartManagerItemOption
   * @param option
   */
  private renderItemOption(option: OdsCartManagerItem): JSX.Element {
    return (
      <osds-cart-item-option>
        <span slot="subhead">{option.subhead}</span>
        <span slot="title">{option.title}</span>
        <span slot="price">{this.odsI18n.handle('cart.price', { price: option.price }, this.i18n)}</span>
        <span slot="extra">{option.extra}</span>
      </osds-cart-item-option>
    );
  }

  /**
   * render an OdsCartManagerSection list
   */
  private renderSections(): JSX.Element[] {
    const sections = this.sections;
    this.logger.log('cart-manager render sections', sections);

    return sections.map((section) => {
      return this.renderOneSection(section);
    });
  }

  /**
   * render an OdsCartManagerTotal
   * @param item
   */
  private renderCartTotal(item: OdsCartManagerTotal): JSX.Element {
    const extra = `${item.extra}`;
    const price = item.price || this.controller.getTotalAmount();
    const products = this.controller.getProductQuantity();

    return (
      <osds-cart-total>
        <span slot="total">{item.total}</span>
        <span
          slot="info">{this.odsI18n.handle('cart.total.info', { products }, this.i18n)}</span>
        <span slot="price">{this.odsI18n.handle('cart.price', { price }, this.i18n)}</span>
        <span slot="extra">{this.odsI18n.handle('cart.extra', { extra }, this.i18n)}</span>
      </osds-cart-total>
    );
  }

  /**
   * render cart footer
   */
  private renderFooter(): JSX.Element {
    const footer = this.footer;

    return footer && isOdsCartManagerFooter(footer) ? (
      <osds-cart-footer slot={'footer'}>
        {this.renderFooterItems(footer)}
        <slot name={'footer-content'}></slot>
      </osds-cart-footer>
    ) : undefined;
  }

  /**
  * render an OdsCartManagerFooterItem
  * @param footerItem
  */
  private renderFooterItem(footerItem: OdsCartManagerFooterItem): JSX.Element {
    const price = `${footerItem.price}`;
    return (
      <osds-cart-footer-item>
        <span slot="subhead">{footerItem.subhead}</span>
        <span slot="title">{footerItem.title}</span>
        <span slot="price">{this.odsI18n.handle('footer.item.price', { price }, this.i18n)}</span>
        <span slot="extra">{footerItem.extra}</span>
      </osds-cart-footer-item>
    );
  }

  /**
   * Render cart footer items
   * An item could be OdsCartManagerFooterItem or OdsCartManagerTotal
   * @param footer
   */
  private renderFooterItems(footer: OdsCartManagerFooter): JSX.Element[] {
    return footer.items.map((item) => {
      return isOdsCartManagerFooterItem(item) ? this.renderFooterItem(item) : this.renderCartTotal(item);
    });
  }

  render() {
    const { inline } = this;

    return (
      <Host>
        <osds-cart inline={inline}>
          <slot name={'header'} slot={'header'}></slot>
          {this.renderSections()}
          <slot name={'empty'} slot={'empty'}></slot>
          {this.renderFooter()}
        </osds-cart>
      </Host>
    );
  }
}
