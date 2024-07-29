import { AttachInternals, Component, Element, type FunctionalComponent, Host, Listen, Prop, h } from '@stencil/core';
import { type HTMLStencilElement } from '@stencil/core/internal';
import { type OdsIconName } from '../../../../icon/src';
import { ODS_SPINNER_COLOR, ODS_SPINNER_SIZE } from '../../../../spinner/src';
import { ODS_BUTTON_COLOR, type OdsButtonColor } from '../../constants/button-color';
import { ODS_BUTTON_SIZE, type OdsButtonSize } from '../../constants/button-size';
import { ODS_BUTTON_VARIANT, type OdsButtonVariant } from '../../constants/button-variant';
import { handleClick } from '../../controller/ods-button';

@Component({
  formAssociated: true,
  shadow: true,
  styleUrl: 'ods-button.scss',
  tag: 'ods-button',
})
export class OdsButton {
  @AttachInternals() internals!: ElementInternals;

  @Element() el!: HTMLStencilElement;

  @Prop({ reflect: true }) public color: OdsButtonColor = ODS_BUTTON_COLOR.primary;
  @Prop({ reflect: true }) public icon?: OdsIconName;
  @Prop({ reflect: true }) public isDisabled: boolean = false;
  @Prop({ reflect: true }) public isLoading: boolean = false;
  @Prop({ reflect: true }) public label!: string;
  @Prop({ reflect: true }) public size: OdsButtonSize = ODS_BUTTON_SIZE.md;
  @Prop({ reflect: true }) public type: HTMLButtonElement['type'] = 'button';
  @Prop({ reflect: true }) public variant: OdsButtonVariant = ODS_BUTTON_VARIANT.default;

  @Listen('click')
  onClick(): void {
    handleClick(this.type, this.internals.form);
  }

  render(): FunctionalComponent {
    return (
      <Host disabled={ this.isDisabled || this.isLoading }>
        <button
          class={`
            ods-button__button
            ods-button__button--${this.color}
            ods-button__button--${this.size}
            ods-button__button--${this.variant}
          `}
          disabled={ this.isDisabled || this.isLoading }
          part="button"
          type={ this.type }>
          {
            this.isLoading &&
            <ods-spinner
              class="ods-button__button__spinner"
              color={ ODS_SPINNER_COLOR.neutral }
              size={ ODS_SPINNER_SIZE.sm }>
            </ods-spinner>
          }

          {
            !!this.icon &&
            <ods-icon
              class="ods-button__button__icon"
              name={ this.icon }>
            </ods-icon>
          }

          { this.label }
        </button>
      </Host>
    );
  }
}
