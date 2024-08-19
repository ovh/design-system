import { Component, type FunctionalComponent, Host, Prop, h } from '@stencil/core';

@Component({
  shadow: true,
  styleUrl: 'ods-form-field.scss',
  tag: 'ods-form-field',
})
export class OdsFormField {
  @Prop({ reflect: true }) public error: string = '';

  render(): FunctionalComponent {
    return (
      <Host class="ods-form-field">
        <div class="ods-form-field__label">
          <slot name="label"></slot>
        </div>

        <slot></slot>

        <div class="ods-form-field__bottom-bar">
          <div class="ods-form-field__bottom-bar__messages">
            <slot name="helper"></slot>

            {
              !!this.error &&
              <span class="ods-form-field__bottom-bar__messages__error">
                { this.error }
              </span>
            }
          </div>

          <slot name="visual-hint"></slot>
        </div>
      </Host>
    );
  }
}
