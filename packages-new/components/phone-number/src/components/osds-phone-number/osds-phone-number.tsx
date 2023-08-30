import { Component, Element, Host, h, Prop } from '@stencil/core';
import { ODS_INPUT_TYPE } from '@ovhcloud/ods-component-input';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsPhoneNumberAttribute } from './interfaces/attributes';

/**
 * @slot (unnamed) - Phone Number content
 */
@Component({
  tag: 'osds-phone-number',
  styleUrl: 'osds-phone-number.scss',
  shadow: true
})
export class OsdsPhoneNumber implements OdsPhoneNumberAttribute {
  @Element() el!: HTMLElement;

  /** @see OdsPhoneNumberAttribute.clearable */
  @Prop({ reflect: true }) clearable?: boolean = DEFAULT_ATTRIBUTE.clearable;

  /** @see OdsPhoneNumberAttribute.disabled */
  @Prop({ reflect: true }) disabled?: boolean = DEFAULT_ATTRIBUTE.disabled;

  /** @see OdsPhoneNumberAttribute.error */
  @Prop({ reflect: true }) error?: boolean = DEFAULT_ATTRIBUTE.error;

  /** @see OdsPhoneNumberAttribute.value */
  @Prop({ reflect: true, mutable: true }) value = DEFAULT_ATTRIBUTE.value;

  render() {
    return (
      <Host>
        <osds-input
          type={ODS_INPUT_TYPE.tel}
          clearable={this.clearable}
          disabled={this.disabled}
          error={this.error}
          value={this.value}
        ></osds-input>
      </Host>
    );
  }
}
