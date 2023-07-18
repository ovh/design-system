import { Component, Element, Host, h, Prop } from '@stencil/core';
import {
  OdsPassword,
  OdsPasswordController,
  OdsPasswordEvents,
  OdsPasswordMethods,
  odsPasswordDefaultAttributes,
  OdsInputType,
  OdsFormForbiddenValues,
  OdsInputSize,
  OdsInputValue,
} from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

/**
 * @slot (unnamed) - Password content
 */
@Component({
  tag: 'osds-password',
  styleUrl: 'osds-password.scss',
  shadow: true
})
export class OsdsPassword implements OdsPassword<OdsStencilMethods<OdsPasswordMethods>, OdsStencilEvents<OdsPasswordEvents>> {
  controller: OdsPasswordController = new OdsPasswordController(this);
  @Element() el!: HTMLElement;

  /** @see OdsPasswordAttributes.ariaLabel */
  @Prop() ariaLabel: HTMLElement['ariaLabel'] = odsPasswordDefaultAttributes.ariaLabel;

  /** @see OdsPasswordAttributes.ariaLabelledby */
  @Prop() ariaLabelledby?: string = odsPasswordDefaultAttributes.ariaLabelledby;

  /** @see OdsPasswordAttributes.clearable */
  @Prop({ reflect: true }) clearable?: boolean = odsPasswordDefaultAttributes.clearable;

  /** @see OdsPasswordAttributes.color */
  @Prop({ reflect: true }) color?: OdsThemeColorIntent = odsPasswordDefaultAttributes.color;

  /** @see OdsPasswordAttributes.contrasted */
  @Prop({ reflect: true }) contrasted?: boolean = odsPasswordDefaultAttributes.contrasted;

  /** @see OdsPasswordAttributes.disabled */
  @Prop({ reflect: true }) disabled?: boolean = odsPasswordDefaultAttributes.disabled;

  /** @see OdsPasswordAttributes.error */
  @Prop({ reflect: true }) error?: boolean = odsPasswordDefaultAttributes.error;

  /** @see OdsPasswordAttributes.flex */
  @Prop({ reflect: true }) flex?: boolean = odsPasswordDefaultAttributes.flex;

  /** @see OdsPasswordAttributes.forbiddenValues */
  @Prop({ reflect: true }) forbiddenValues: OdsFormForbiddenValues<number> = odsPasswordDefaultAttributes.forbiddenValues;

  /** @see OdsPasswordAttributes.label */
  @Prop({ reflect: true }) label?: string = odsPasswordDefaultAttributes.label;

  /** @see OdsPasswordAttributes.loading */
  @Prop({ reflect: true }) loading?: boolean = odsPasswordDefaultAttributes.loading;

  /** @see OdsPasswordAttributes.masked */
  @Prop({ reflect: true, mutable: true }) masked?: boolean = odsPasswordDefaultAttributes.masked;

  /** @see OdsPasswordAttributes.name */
  @Prop({ reflect: true }) name?: string = odsPasswordDefaultAttributes.name;

  /** @see OdsPasswordAttributes.placeholder */
  @Prop({ reflect: true }) placeholder?: string = odsPasswordDefaultAttributes.placeholder;

  /** @see OdsPasswordAttributes.readOnly */
  @Prop({ reflect: true }) readOnly?: boolean = odsPasswordDefaultAttributes.readOnly;

  /** @see OdsPasswordAttributes.required */
  @Prop({ reflect: true }) required?: boolean = odsPasswordDefaultAttributes.required;

  /** @see OdsPasswordAttributes.size */
  @Prop({ reflect: true }) size?: OdsInputSize = odsPasswordDefaultAttributes.size;

  /** @see OdsInputAttributes.value */
  @Prop({ reflect: true, mutable: true }) value: OdsInputValue = odsPasswordDefaultAttributes.value;

  render() {

    return (
      <Host>
        <osds-input
          type={OdsInputType.password}
          ariaLabel={this.ariaLabel}
          ariaLabelledby={this.ariaLabelledby}
          clearable={this.clearable}
          color={this.color}
          contrasted={this.contrasted}
          disabled={this.disabled}
          error={this.error}
          flex={this.flex}
          forbiddenValues={this.forbiddenValues}
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
