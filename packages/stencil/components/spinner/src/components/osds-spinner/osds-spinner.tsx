import { Component, Element, Host, h, Prop, State } from '@stencil/core';
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
import spinner from '@ovhcloud/ods-theming/assets/spinner.svg';

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
  @Element() el!: HTMLElement;

  // Component properties as @Prop
  // ex: @Prop({ reflect: true }) public color?: OdsThemeColorIntent = odsSpinnerDefaultAttributes.color;

  @Prop({ reflect: true }) public size?: OdsSpinnerSize = odsSpinnerDefaultAttributes.size;

  @Prop({ reflect: true }) public flex?: boolean = odsSpinnerDefaultAttributes.flex;

  @Prop({ reflect: true }) public contrasted?: boolean = odsSpinnerDefaultAttributes.contrasted;

  @Prop({ reflect: true }) public mode?: OdsSpinnerMode = odsSpinnerDefaultAttributes.mode;

  render() {

    return (
      <Host role="progressbar">
        <img src={spinner} alt="loading" class="spinner" />
      </Host>
    );
  }
}
