import type { OdsPasswordAttribute } from './interfaces/attributes';
import type { OdsFormForbiddenValues, OdsInputValue, ODS_COMMON_FIELD_SIZE } from '@ovhcloud/ods-common-core';
import type { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import type { OdsPasswordMethod } from './interfaces/methods';
import { OdsCommonFieldValidityState, ODS_COMMON_INPUT_TYPE } from '@ovhcloud/ods-common-core';
import { Component, Element, Host, Prop, h, Method } from '@stencil/core';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OsdsInput } from '../../../../input/src';

/**
 * @slot (unnamed) - Password content
 */
@Component({
  tag: 'osds-password',
  styleUrl: 'osds-password.scss',
  shadow: true,
})
export class OsdsPassword implements OdsPasswordAttribute, OdsPasswordMethod  {
  private osdsInput?: OsdsInput & HTMLElement;

  @Element() el!: HTMLElement;

  @Prop() ariaLabel: HTMLElement['ariaLabel'] = DEFAULT_ATTRIBUTE.ariaLabel;

  @Prop() ariaLabelledby?: string = DEFAULT_ATTRIBUTE.ariaLabelledby;

  @Prop({ reflect: true }) clearable?: boolean = DEFAULT_ATTRIBUTE.clearable;

  @Prop({ reflect: true }) color?: ODS_THEME_COLOR_INTENT = DEFAULT_ATTRIBUTE.color;

  @Prop({ reflect: true }) defaultValue: OdsInputValue = DEFAULT_ATTRIBUTE.defaultValue;

  @Prop({ reflect: true }) disabled: boolean = DEFAULT_ATTRIBUTE.disabled;

  @Prop({ reflect: true }) error: boolean = DEFAULT_ATTRIBUTE.error;

  @Prop({ reflect: true }) forbiddenValues?: OdsFormForbiddenValues<number | string> = DEFAULT_ATTRIBUTE.forbiddenValues;

  @Prop({ reflect: true }) inline?: boolean = DEFAULT_ATTRIBUTE.inline;

  @Prop({ reflect: true }) label?: string = DEFAULT_ATTRIBUTE.label;

  @Prop({ reflect: true }) loading?: boolean = DEFAULT_ATTRIBUTE.loading;

  @Prop({ reflect: true, mutable: true }) masked?: boolean = DEFAULT_ATTRIBUTE.masked;

  @Prop({ reflect: true }) name: string = DEFAULT_ATTRIBUTE.name;

  @Prop({ reflect: true }) placeholder?: string = DEFAULT_ATTRIBUTE.placeholder;

  @Prop({ reflect: true }) readOnly?: boolean = DEFAULT_ATTRIBUTE.readOnly;

  @Prop({ reflect: true }) required?: boolean = DEFAULT_ATTRIBUTE.required;

  @Prop({ reflect: true }) size?: ODS_COMMON_FIELD_SIZE = DEFAULT_ATTRIBUTE.size;

  @Prop({ reflect: true, mutable: true }) value = DEFAULT_ATTRIBUTE.value;

  @Method()
  async getValidity(): Promise<OdsCommonFieldValidityState | undefined> {
    return this.osdsInput?.getValidity();
  }

  @Method()
  async clear(): Promise<void> {
    this.osdsInput?.clear();
  }

  @Method()
  async hide(): Promise<void> {
    this.osdsInput?.hide();
  }

  @Method()
  async reset(): Promise<void> {
    this.osdsInput?.reset();
  }

  @Method()
  async setFocus(): Promise<void> {
    this.osdsInput?.setFocus();
  }

  @Method()
  async setTabindex(value: number): Promise<void> {
    this.osdsInput?.setTabindex(value);
  }
  render() {
    return (
      <Host>
        <osds-input
          ref={ (el?: HTMLElement): OsdsInput => this.osdsInput = el as OsdsInput & HTMLElement }
          type={ODS_COMMON_INPUT_TYPE.password}
          ariaLabel={this.ariaLabel}
          ariaLabelledby={this.ariaLabelledby}
          clearable={this.clearable}
          color={this.color}
          disabled={this.disabled}
          error={this.error}
          forbiddenValues={this.forbiddenValues}
          inline={this.inline}
          label={this.label}
          loading={this.loading}
          masked={this.masked}
          name={this.name}
          placeholder={this.placeholder}
          readOnly={this.readOnly}
          required={this.required}
          size={this.size}
          value={this.value}
        ></osds-input>
      </Host>
    );
  }
}
