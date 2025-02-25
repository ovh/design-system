import { Component, type FunctionalComponent, Host, Prop, h } from '@stencil/core';
import { ODS_SPINNER_COLOR, type OdsSpinnerColor } from '../../constants/spinner-color';
import { ODS_SPINNER_SIZE, type OdsSpinnerSize } from '../../constants/spinner-size';

@Component({
  shadow: true,
  styleUrl: 'ods-spinner.scss',
  tag: 'ods-spinner',
})
export class OdsSpinner {
  @Prop({ reflect: true }) public color: OdsSpinnerColor = ODS_SPINNER_COLOR.primary;
  @Prop({ reflect: true }) public size: OdsSpinnerSize = ODS_SPINNER_SIZE.md;

  render(): FunctionalComponent {
    return (
      <Host
        class="ods-spinner"
        role="progressbar">
        <div
          aria-hidden="true"
          class={{
            'ods-spinner__container': true,
            [`ods-spinner__container--${this.color}`]: !!this.color,
            [`ods-spinner__container--${this.size}`]: !!this.size,
          }}
          part="spinner">
          <svg id="Spinner" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <rect id="Zone" width="24" height="24" fill="none"/>
            <g id="dot" transform="translate(-237.694 -93.932)">
              <path id="Soustraction_2" data-name="Soustraction 2" d="M-5236.305-4108.069h0v-2a9.011,9.011,0,0,0,9-9,9.01,9.01,0,0,0-9-9,9.01,9.01,0,0,0-9,9h-2a10.928,10.928,0,0,1,3.222-7.779,10.928,10.928,0,0,1,7.778-3.221,10.929,10.929,0,0,1,7.779,3.221,10.932,10.932,0,0,1,3.221,7.777,10.928,10.928,0,0,1-3.221,7.778A10.931,10.931,0,0,1-5236.305-4108.069Z" transform="translate(5486 4225)" />
              <circle id="dot-2" data-name="dot" cx="1" cy="1" r="1" transform="translate(248.694 114.932)" />
              <circle id="dot-3" data-name="dot" cx="1" cy="1" r="1" transform="translate(238.694 104.932)" />
            </g>
          </svg>
        </div>
      </Host>
    );
  }
}
