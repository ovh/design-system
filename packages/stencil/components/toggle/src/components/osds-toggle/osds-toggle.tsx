import { Component, Element, Host, Prop, h } from '@stencil/core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';
import {
  OdsToggle,
  OdsToggleController,
  OdsToggleEvents,
  OdsToggleMethods,
  odsToggleDefaultAttributes
} from '@ovhcloud/ods-core';

import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

/**
 * @slot start - Fixed start toggle content
 * @slot end - Fixed end toggle content
 */
@Component({
  tag: 'osds-toggle',
  styleUrl: 'osds-toggle.scss',
  shadow: true
})
export class OsdsToggle implements OdsToggle<OdsStencilMethods<OdsToggleMethods>, OdsStencilEvents<OdsToggleEvents>> {
  controller: OdsToggleController = new OdsToggleController(this);
  @Element() el!: HTMLElement;

  /** @see OdsToggleAttributes.contrasted */
  @Prop({ reflect: true }) public contrasted? = odsToggleDefaultAttributes.contrasted;

  /** @see OdsToggleAttributes.checked */
  @Prop({ reflect: true }) public checked? = odsToggleDefaultAttributes.checked;

  /** @see OdsToggleAttributes.checking */
  @Prop({ reflect: true }) public checking? = odsToggleDefaultAttributes.checking;

  /** @see OdsToggleAttributes.color */
  @Prop({ reflect: true }) public color?: OdsThemeColorIntent = odsToggleDefaultAttributes.color;

  /** @see OdsToggleAttributes.disabled */
  @Prop({ reflect: true }) public disabled? = odsToggleDefaultAttributes.disabled;

  /** @see OdsToggleAttributes.interactive */
  @Prop({ reflect: true }) public interactive? = odsToggleDefaultAttributes.interactive;

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
