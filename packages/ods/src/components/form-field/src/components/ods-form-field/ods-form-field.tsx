import type { FunctionalComponent } from '@stencil/core';
import { Component, Host, Prop, h } from '@stencil/core';
import { ODS_TEXT_PRESET } from '../../../../text/src';

@Component({
  shadow: true,
  styleUrl: 'ods-form-field.scss',
  tag: 'ods-form-field',
})
export class OdsFormField {
  @Prop({ reflect: true }) public error: string = '';

  render(): FunctionalComponent {
    return (
      <Host class='ods-form-field'>
        <div class='ods-form-field__top-bar'>
          <slot name='label'></slot>
          <slot name='visual-hint'></slot>
        </div>
        <slot></slot>
        <div class='ods-form-field__bottom-bar'>
          {
            this.error &&
            this.error.length > 0
              ? <ods-text
                class='ods-form-field__bottom-bar__error-message'
                preset={ ODS_TEXT_PRESET.span }
              >
                { this.error }
              </ods-text>
              : <slot name='helper'></slot>
          }
        </div>
      </Host>
    );
  }
}
