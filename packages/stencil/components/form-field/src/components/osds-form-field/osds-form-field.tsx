import { Component, Element, Host, h, Prop } from '@stencil/core';
import {
  OdsFormField,
  OdsFormFieldController,
  OdsFormFieldEvents,
  OdsFormFieldMethods,
  odsFormFieldDefaultAttributes
} from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

/**
 * @slot (unnamed) - FormField content
 */
@Component({
  tag: 'osds-form-field',
  styleUrl: 'osds-form-field.scss',
  shadow: true
})
export class OsdsFormField implements OdsFormField<OdsStencilMethods<OdsFormFieldMethods>, OdsStencilEvents<OdsFormFieldEvents>> {
  controller: OdsFormFieldController = new OdsFormFieldController(this);
  @Element() el!: HTMLElement;

  // Component properties as @Prop
  // ex: @Prop({ reflect: true }) public color?: OdsThemeColorIntent = odsFormFieldDefaultAttributes.color;

  /** @see OdsFormFieldAttributes.error */
  @Prop({ reflect: true }) error?: string = odsFormFieldDefaultAttributes.error;

  /** @see OdsFormFieldAttributes.flex */
  @Prop({ reflect: true }) flex?: boolean = odsFormFieldDefaultAttributes.flex;

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
