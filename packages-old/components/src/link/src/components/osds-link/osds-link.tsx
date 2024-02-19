import type { ODS_LINK_REFERRER_POLICY } from './constants/referrer-policies';
import type { OdsLinkAttribute } from './interfaces/attributes';
import type { OdsHTMLAnchorElementRel, OdsHTMLAnchorElementTarget } from '@ovhcloud/ods-common-core';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { Component, Element, Host, Prop, h } from '@stencil/core';
import { HTMLStencilElement } from '@stencil/core/internal';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsLinkController } from './core/controller';

@Component({
  tag: 'osds-link',
  styleUrl: 'osds-link.scss',
  shadow: true,
})
export class OsdsLink implements OdsLinkAttribute {
  controller: OdsLinkController = new OdsLinkController(this);

  @Element() host!: HTMLStencilElement;

  @Prop({ reflect: true }) public color?: ODS_THEME_COLOR_INTENT = DEFAULT_ATTRIBUTE.color;
  @Prop({ reflect: true }) public contrasted?: boolean = DEFAULT_ATTRIBUTE.contrasted;
  @Prop({ reflect: true }) disabled?: boolean = DEFAULT_ATTRIBUTE.disabled;
  @Prop() public download?: HTMLAnchorElement['download'] = DEFAULT_ATTRIBUTE.download;
  @Prop({ reflect: true }) public href?: string = DEFAULT_ATTRIBUTE.href;
  @Prop({ reflect: true }) referrerpolicy?: ODS_LINK_REFERRER_POLICY = DEFAULT_ATTRIBUTE.referrerpolicy;
  @Prop({ reflect: true }) public rel?: OdsHTMLAnchorElementRel = DEFAULT_ATTRIBUTE.rel;
  @Prop({ reflect: true, mutable: true }) public target?: OdsHTMLAnchorElementTarget = DEFAULT_ATTRIBUTE.target;
  @Prop({ reflect: true }) public type?: string = DEFAULT_ATTRIBUTE.type;

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
