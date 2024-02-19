import type { ODS_SPINNER_SIZE } from '../../constants/spinner-size';
import type { FunctionalComponent } from '@stencil/core';
import { Component, Host, Prop, h } from '@stencil/core';
import SpinnerSVG from '../../assets/default.svg';
import { ODS_SPINNER_COLOR } from '../../constants/spinner-color';

@Component({
  shadow: true,
  styleUrl: 'ods-spinner.scss',
  tag: 'ods-spinner',
})
export class OdsSpinner {
  @Prop({ reflect: true }) color: ODS_SPINNER_COLOR = ODS_SPINNER_COLOR.primary;
  @Prop({ reflect: true }) inline?: boolean; // TODO remove / replace with custom class?
  @Prop({ reflect: true }) size?: ODS_SPINNER_SIZE;

  render(): FunctionalComponent {
    return (
      <Host
        class={{
          'ods-spinner': true,
          'ods-spinner--inline': !!this.inline,
        }}
        role="progressbar">
        <div
          class={{
            'ods-spinner__container': true,
            [`ods-spinner__container--${this.color}`]: !!this.color,
            [`ods-spinner__container--${this.size}`]: !!this.size,
          }}
          innerHTML={ SpinnerSVG }>
        </div>
      </Host>
    );
  }
}
