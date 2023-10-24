import type { OdsRadioButtonAttribute } from './interfaces/attributes';
import type { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import type { ODS_RADIO_BUTTON_SIZE } from './constants/radio-button-size';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { Component, Host, Prop, h } from '@stencil/core';

/**
 * @slot start - Fixed start radio button content
 * @slot end - Fixed end radio button content
 */
@Component({
  tag: 'osds-radio-button',
  styleUrl: 'osds-radio-button.scss',
  shadow: true,
})
export class OsdsRadioButton implements OdsRadioButtonAttribute {
  /** @see OdsRadioButtonAttributes.checked */
  @Prop({ reflect: true }) public checked? = DEFAULT_ATTRIBUTE.checked;

  /** @see OdsRadioButtonAttributes.checking */
  @Prop({ reflect: true }) public checking? = DEFAULT_ATTRIBUTE.checking;

  /** @see OdsRadioButtonAttributes.color */
  @Prop({ reflect: true }) public color?: ODS_THEME_COLOR_INTENT = DEFAULT_ATTRIBUTE.color;

  /** @see OdsRadioButtonAttributes.disabled */
  @Prop({ reflect: true }) public disabled? = DEFAULT_ATTRIBUTE.disabled;

  /** @see OdsRadioButtonAttributes.hasFocus */
  @Prop({ reflect: true }) public hasFocus? = DEFAULT_ATTRIBUTE.hasFocus;

  /** @see OdsRadioButtonAttributes.interactive */
  @Prop({ reflect: true }) public interactive? = DEFAULT_ATTRIBUTE.interactive;

  /** @see OdsRadioButtonAttributes.size */
  @Prop({ reflect: true }) public size?: ODS_RADIO_BUTTON_SIZE = DEFAULT_ATTRIBUTE.size;

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
