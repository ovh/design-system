import type { OdsSpinnerColor } from '../../constants/spinner-color';
import type { OdsSpinnerSize } from '../../constants/spinner-size';
import type { FunctionalComponent } from '@stencil/core';
import { Component, Host, Prop, h } from '@stencil/core';
import SpinnerSVG from '../../assets/default.svg';
import { ODS_SPINNER_COLOR } from '../../constants/spinner-color';
import { ODS_SPINNER_SIZE } from '../../constants/spinner-size';

@Component({
  shadow: true,
  styleUrl: 'ods-spinner.scss',
  tag: 'ods-spinner',
})
export class OdsSpinner {
  @Prop({ reflect: true }) color: OdsSpinnerColor = ODS_SPINNER_COLOR.primary;
  @Prop({ reflect: true }) size: OdsSpinnerSize = ODS_SPINNER_SIZE.md;

  render(): FunctionalComponent {
    return (
      <Host
        class="ods-spinner"
        role="progressbar">
        <div
          class={{
            'ods-spinner__container': true,
            [`ods-spinner__container--${this.color}`]: !!this.color,
            [`ods-spinner__container--${this.size}`]: !!this.size,
          }}
          innerHTML={ SpinnerSVG }
          part="spinner">
        </div>
      </Host>
    );
  }
}
