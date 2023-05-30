import { Component, Element, Host, h, Prop } from '@stencil/core';
import {
  OdsSpinner,
  OdsSpinnerController,
  OdsSpinnerEvents,
  OdsSpinnerMethods,
  OdsSpinnerMode,
  OdsSpinnerSize,
  odsSpinnerDefaultAttributes
} from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';
import SpinnerSVG from '../../assets/default.svg';

/**
 * @slot (unnamed) - Spinner content
 */
@Component({
  tag: 'osds-spinner',
  styleUrl: 'osds-spinner.scss',
  shadow: true
})
export class OsdsSpinner implements OdsSpinner<OdsStencilMethods<OdsSpinnerMethods>, OdsStencilEvents<OdsSpinnerEvents>> {
  controller: OdsSpinnerController = new OdsSpinnerController(this);
  @Element() hostElement!: HTMLElement;

  /** @see OdsSpinnerAttributes.contrasted */
  @Prop({ reflect: true }) public contrasted?: boolean = odsSpinnerDefaultAttributes.contrasted;

  /** @see OdsSpinnerAttributes.flex */
  @Prop({ reflect: true }) public flex?: boolean = odsSpinnerDefaultAttributes.flex;

  /** @see OdsSpinnerAttributes.mode */
  @Prop({ reflect: true }) public mode?: OdsSpinnerMode = odsSpinnerDefaultAttributes.mode;

  /** @see OdsSpinnerAttributes.size */
  @Prop({ reflect: true }) public size?: OdsSpinnerSize = odsSpinnerDefaultAttributes.size;

  render() {
    return (
      <Host role="progressbar">
        <div class="spinner"
             innerHTML={ SpinnerSVG }>
        </div>
      </Host>
    );
  }
}
