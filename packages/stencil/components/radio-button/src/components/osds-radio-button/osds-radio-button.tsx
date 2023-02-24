import { Component, Element, h, Host, Prop } from '@stencil/core';
import {
  OdsRadioButton,
  OdsRadioButtonController,
  odsRadioButtonDefaultAttributes,
  OdsRadioButtonMethods,
  OdsRadioButtonSize,
} from '@ovhcloud/ods-core';
import { OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

/**
 * @slot start - Fixed start radio button content
 * @slot end - Fixed end radio button content
 */
@Component({
  tag: 'osds-radio-button',
  styleUrl: 'osds-radio-button.scss',
  shadow: true
})
export class OsdsRadioButton implements OdsRadioButton<OdsStencilMethods<OdsRadioButtonMethods>> {
  controller: OdsRadioButtonController = new OdsRadioButtonController(this);
  @Element() el!: HTMLElement;

  /** @see OdsRadioButtonAttributes.checked */
  @Prop({ reflect: true }) public checked? = odsRadioButtonDefaultAttributes.checked;

  /** @see OdsRadioButtonAttributes.checking */
  @Prop({ reflect: true }) public checking? = odsRadioButtonDefaultAttributes.checking;

  /** @see OdsRadioButtonAttributes.color */
  @Prop({ reflect: true }) public color?: OdsThemeColorIntent = odsRadioButtonDefaultAttributes.color;

  /** @see OdsRadioButtonAttributes.disabled */
  @Prop({ reflect: true }) public disabled? = odsRadioButtonDefaultAttributes.disabled;

  /** @see OdsRadioButtonAttributes.hasFocus */
  @Prop({ reflect: true }) public hasFocus? = odsRadioButtonDefaultAttributes.hasFocus;

  /** @see OdsRadioButtonAttributes.interactive */
  @Prop({ reflect: true }) public interactive? = odsRadioButtonDefaultAttributes.interactive;

  /** @see OdsRadioButtonAttributes.size */
  @Prop({ reflect: true }) public size?: OdsRadioButtonSize = odsRadioButtonDefaultAttributes.size;

  render() {
    return (
      <Host>
        <slot name={'start'}></slot>
        <div class={'radio-button'}></div>
        <slot name={'end'}></slot>
      </Host>
    );
  }
}
