import type { OdsToggleAttribute } from './interfaces/attributes';
import { Component, Element, Host, Prop, h } from '@stencil/core';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsToggleController } from './core/controller'

import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';

/**
 * @slot start - Fixed start toggle content
 * @slot end - Fixed end toggle content
 */
@Component({
  tag: 'osds-toggle',
  styleUrl: 'osds-toggle.scss',
  shadow: true
})
export class OsdsToggle implements OdsToggleAttribute {
  controller: OdsToggleController = new OdsToggleController(this);
  @Element() el!: HTMLElement;

  /** @see OdsToggleAttributes.contrasted */
  @Prop({ reflect: true }) public contrasted? = DEFAULT_ATTRIBUTE.contrasted;

  /** @see OdsToggleAttributes.checked */
  @Prop({ reflect: true }) public checked? = DEFAULT_ATTRIBUTE.checked;

  /** @see OdsToggleAttributes.checking */
  @Prop({ reflect: true }) public checking? = DEFAULT_ATTRIBUTE.checking;

  /** @see OdsToggleAttributes.color */
  @Prop({ reflect: true }) public color?: ODS_THEME_COLOR_INTENT = DEFAULT_ATTRIBUTE.color;

  /** @see OdsToggleAttributes.disabled */
  @Prop({ reflect: true }) public disabled? = DEFAULT_ATTRIBUTE.disabled;

  /** @see OdsToggleAttributes.interactive */
  @Prop({ reflect: true }) public interactive? = DEFAULT_ATTRIBUTE.interactive;

  /** @see OdsToggleBehavior.beforeRender */
  beforeRender(): void {
    this.controller.validateAttributes();
  }

  componentWillRender(): void {
    this.beforeRender();
  }

  render() {
    return (
      <Host>
        <span class={'toggle__wrapper'}>
          <slot name={'start'}></slot>
          <span class={'toggle__container'}>
            <span class={'toggle__slider'}></span>
          </span>
          <slot name={'end'}></slot>
        </span>
      </Host>
    );
  }
}
