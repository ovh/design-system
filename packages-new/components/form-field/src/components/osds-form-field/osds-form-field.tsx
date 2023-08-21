import type { OdsFormFieldAttribute } from './interfaces/attributes';
import { Component, Host, h, Prop } from '@stencil/core';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';

/**
 * @slot (unnamed) - FormField content
 */
@Component({
  tag: 'osds-form-field',
  styleUrl: 'osds-form-field.scss',
  shadow: true
})
export class OsdsFormField implements OdsFormFieldAttribute {
  /** @see OdsFormFieldAttributes.error */
  @Prop({ reflect: true }) error?: string = DEFAULT_ATTRIBUTE.error;

  /** @see OdsFormFieldAttributes.inline */
  @Prop({ reflect: true }) inline?: boolean = DEFAULT_ATTRIBUTE.inline;

  render() {
    const {
      error
    } = this;

    return (
      <Host>
        <div class="top-bar">
          <slot name="label"></slot>
          <slot name="visual-hint"></slot>
        </div>
        <slot></slot>
        {
          error
          && error.length > 0
          ? <osds-text color={OdsThemeColorIntent.error}>{error}</osds-text>
          : <slot name="helper"></slot>
        }
      </Host>
    );
  }
}
