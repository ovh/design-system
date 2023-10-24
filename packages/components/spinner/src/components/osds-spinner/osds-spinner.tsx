import type { ODS_SPINNER_MODE } from './constants/spinner-mode';
import type { ODS_SPINNER_SIZE } from './constants/spinner-size';
import type { OdsSpinnerAttribute } from './interfaces/attributes';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import SpinnerSVG from '../../assets/default.svg';
import { Component, Element, Host, Prop, h } from '@stencil/core';

/**
 * @slot (unnamed) - Spinner content
 */
@Component({
  tag: 'osds-spinner',
  styleUrl: 'osds-spinner.scss',
  shadow: true,
})
export class OsdsSpinner implements OdsSpinnerAttribute {
  @Element() hostElement!: HTMLElement;

  /** @see OdsSpinnerAttributes.contrasted */
  @Prop({ reflect: true }) public contrasted?: boolean = DEFAULT_ATTRIBUTE.contrasted;

  /** @see OdsSpinnerAttributes.inline */
  @Prop({ reflect: true }) public inline?: boolean = DEFAULT_ATTRIBUTE.inline;

  /** @see OdsSpinnerAttributes.mode */
  @Prop({ reflect: true }) public mode?: ODS_SPINNER_MODE = DEFAULT_ATTRIBUTE.mode;

  /** @see OdsSpinnerAttributes.size */
  @Prop({ reflect: true }) public size?: ODS_SPINNER_SIZE = DEFAULT_ATTRIBUTE.size;

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
