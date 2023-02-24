import { Component, Element, Host, Prop, h } from '@stencil/core';
import {
  OdsLink, OdsLinkController,
  odsLinkDefaultAttributes, OdsLinkEvents, OdsLinkMethods,
  OdsLinkReferrerpolicy,
  OdsHTMLAnchorElementRel,
  OdsHTMLAnchorElementTarget,
} from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';

import { HTMLStencilElement } from '@stencil/core/internal';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

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
export class OsdsLink implements OdsLink<OdsStencilMethods<OdsLinkMethods>, OdsStencilEvents<OdsLinkEvents>> {
  controller: OdsLinkController = new OdsLinkController(this);
  @Element() host!: HTMLStencilElement;

  /** @see OdsLinkAttributes.color */
  @Prop({ reflect: true }) public color?: OdsThemeColorIntent = odsLinkDefaultAttributes.color;

  /** @see OdsLinkAttributes.contrasted */
  @Prop({ reflect: true }) public contrasted?: boolean = odsLinkDefaultAttributes.contrasted;

  /** @see OdsLinkAttributes.disabled */
  @Prop({ reflect: true }) disabled?: boolean = odsLinkDefaultAttributes.disabled;

  /** @see OdsLinkAttributes.download */
  @Prop() public download?: HTMLAnchorElement['download'] = odsLinkDefaultAttributes.download;

  /** @see OdsLinkAttributes.href */
  @Prop({ reflect: true }) public href: string = odsLinkDefaultAttributes.href;

  /** @see OdsLinkAttributes.referrerpolicy */
  @Prop({ reflect: true }) referrerpolicy?: OdsLinkReferrerpolicy = odsLinkDefaultAttributes.referrerpolicy;

  /** @see OdsLinkAttributes.rel */
  @Prop({ reflect: true }) public rel?: OdsHTMLAnchorElementRel = odsLinkDefaultAttributes.rel;

  /** @see OdsLinkAttributes.target */
  @Prop({ reflect: true }) public target?: OdsHTMLAnchorElementTarget = odsLinkDefaultAttributes.target;

  /** @see OdsLinkAttributes.type */
  @Prop({ reflect: true }) public type?: string = odsLinkDefaultAttributes.type;

  /**
   * @see OdsChipBehavior.beforeRender
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
