import type { OdsHTMLAnchorElementRel, OdsHTMLAnchorElementTarget } from '@ovhcloud/ods-common-core';
import type { ODS_LINK_REFERRER_POLICY } from './constants/referrer-policies';
import type { OdsLinkAttribute } from './interfaces/attributes';
import { Component, Element, Host, Prop, h } from '@stencil/core';
import { HTMLStencilElement } from '@stencil/core/internal';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsLinkController } from './core/controller';

/**
 * @slot start - Fixed start link content
 * @slot (unnamed) - Link content
 * @slot end - Fixed end link content
 */
@Component({
  tag: 'osds-link',
  styleUrl: 'osds-link.scss',
  shadow: true,
})
export class OsdsLink implements OdsLinkAttribute {
  controller: OdsLinkController = new OdsLinkController(this);
  @Element() host!: HTMLStencilElement;

  /** @see OdsLinkAttributes.color */
  @Prop({ reflect: true }) public color?: OdsThemeColorIntent = DEFAULT_ATTRIBUTE.color;

  /** @see OdsLinkAttributes.contrasted */
  @Prop({ reflect: true }) public contrasted?: boolean = DEFAULT_ATTRIBUTE.contrasted;

  /** @see OdsLinkAttributes.disabled */
  @Prop({ reflect: true }) disabled?: boolean = DEFAULT_ATTRIBUTE.disabled;

  /** @see OdsLinkAttributes.download */
  @Prop() public download?: HTMLAnchorElement['download'] = DEFAULT_ATTRIBUTE.download;

  /** @see OdsLinkAttributes.href */
  @Prop({ reflect: true }) public href?: string = DEFAULT_ATTRIBUTE.href;

  /** @see OdsLinkAttributes.referrerpolicy */
  @Prop({ reflect: true }) referrerpolicy?: ODS_LINK_REFERRER_POLICY = DEFAULT_ATTRIBUTE.referrerpolicy;

  /** @see OdsLinkAttributes.rel */
  @Prop({ reflect: true }) public rel?: OdsHTMLAnchorElementRel = DEFAULT_ATTRIBUTE.rel;

  /** @see OdsLinkAttributes.target */
  @Prop({ reflect: true, mutable: true }) public target?: OdsHTMLAnchorElementTarget = DEFAULT_ATTRIBUTE.target;

  /** @see OdsLinkAttributes.type */
  @Prop({ reflect: true }) public type?: string = DEFAULT_ATTRIBUTE.type;

  /**
   * @see OdsLinkBehavior.beforeRender
   */
  beforeRender(): void {
    this.controller.validateAttributes();
  }

  componentWillRender(): void {
    this.beforeRender();
  }

  render() {
    const { download, href, referrerpolicy, rel, target, type } = this;

    const content = (
      <span class={'link__text-container'}>
        <slot name={'start'}></slot>
        <span class={'link__centered-text'}>
          <slot></slot>
        </span>
        <slot name={'end'}></slot>
      </span>
    );

    let template: Element;
    if (href) {
      template = (
        <a {...{
          class: 'link',
          part: 'link',
          download,
          href,
          referrerpolicy,
          rel,
          tabindex: this.disabled ? -1 : 0,
          target,
          type,
        }}>
          {content}
        </a>
      );
    } else {
      template = (
        <button {...{
          class: 'link',
          disabled: this.disabled,
          part: 'link',
          tabindex: this.disabled ? -1 : 0,
        }}>
          {content}
        </button>
      );
    }

    return (
      <Host>
        {template}
      </Host>
    );
  }
}
