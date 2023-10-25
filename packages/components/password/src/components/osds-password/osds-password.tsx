import type { OdsFormForbiddenValues } from '@ovhcloud/ods-common-core';
import type { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import type { ODS_INPUT_SIZE } from '@ovhcloud/ods-component-input';
import { ODS_INPUT_TYPE } from '@ovhcloud/ods-component-input';
import { Component, Element, Host, Prop, h } from '@stencil/core';

import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import type { OdsPasswordAttribute } from './interfaces/attributes';


/**
 * @slot (unnamed) - Password content
 */
@Component({
  tag: 'osds-password',
  styleUrl: 'osds-password.scss',
  shadow: true,
})
export class OsdsPassword implements OdsPasswordAttribute {
  @Element() el!: HTMLElement;

  /** @see OdsPasswordAttributes.ariaLabel */
  @Prop() ariaLabel: HTMLElement['ariaLabel'] = DEFAULT_ATTRIBUTE.ariaLabel;

  /** @see OdsPasswordAttributes.ariaLabelledby */
  @Prop() ariaLabelledby?: string = DEFAULT_ATTRIBUTE.ariaLabelledby;

  /** @see OdsPasswordAttributes.clearable */
  @Prop({ reflect: true }) clearable?: boolean = DEFAULT_ATTRIBUTE.clearable;

  /** @see OdsPasswordAttributes.color */
  @Prop({ reflect: true }) color?: ODS_THEME_COLOR_INTENT = DEFAULT_ATTRIBUTE.color;

  /** @see OdsPasswordAttributes.contrasted */
  @Prop({ reflect: true }) contrasted?: boolean = DEFAULT_ATTRIBUTE.contrasted;

  /** @see OdsPasswordAttributes.disabled */
  @Prop({ reflect: true }) disabled?: boolean = DEFAULT_ATTRIBUTE.disabled;

  /** @see OdsPasswordAttributes.error */
  @Prop({ reflect: true }) error?: boolean = DEFAULT_ATTRIBUTE.error;

  /** @see OdsPasswordAttributes.forbiddenValues */
  @Prop({ reflect: true }) forbiddenValues: OdsFormForbiddenValues<number> = DEFAULT_ATTRIBUTE.forbiddenValues;

  /** @see OdsPasswordAttributes.inline */
  @Prop({ reflect: true }) inline?: boolean = DEFAULT_ATTRIBUTE.inline;

  /** @see OdsPasswordAttributes.label */
  @Prop({ reflect: true }) label?: string = DEFAULT_ATTRIBUTE.label;

  /** @see OdsPasswordAttributes.loading */
  @Prop({ reflect: true }) loading?: boolean = DEFAULT_ATTRIBUTE.loading;

  /** @see OdsPasswordAttributes.masked */
  @Prop({ reflect: true, mutable: true }) masked?: boolean = DEFAULT_ATTRIBUTE.masked;

  /** @see OdsPasswordAttributes.name */
  @Prop({ reflect: true }) name?: string = DEFAULT_ATTRIBUTE.name;

  /** @see OdsPasswordAttributes.placeholder */
  @Prop({ reflect: true }) placeholder?: string = DEFAULT_ATTRIBUTE.placeholder;

  /** @see OdsPasswordAttributes.readOnly */
  @Prop({ reflect: true }) readOnly?: boolean = DEFAULT_ATTRIBUTE.readOnly;

  /** @see OdsPasswordAttributes.required */
  @Prop({ reflect: true }) required?: boolean = DEFAULT_ATTRIBUTE.required;

  /** @see OdsPasswordAttributes.size */
  @Prop({ reflect: true }) size?: ODS_INPUT_SIZE = DEFAULT_ATTRIBUTE.size;

  /** @see OdsInputAttributes.value */
  @Prop({ reflect: true, mutable: true }) value = DEFAULT_ATTRIBUTE.value;

  render() {
    return (
      <Host>
        <osds-input
          type={ODS_INPUT_TYPE.password}
          ariaLabel={this.ariaLabel}
          ariaLabelledby={this.ariaLabelledby}
          clearable={this.clearable}
          color={this.color}
          contrasted={this.contrasted}
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
