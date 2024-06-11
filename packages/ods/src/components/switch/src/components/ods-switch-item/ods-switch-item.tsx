import type { OdsRadio } from '../../../../radio/src';
import type { ODS_SWITCH_SIZE } from '../../constant/switch-size';
import { Component, Element, Event, type EventEmitter, type FunctionalComponent, Host, Method, Prop, h } from '@stencil/core';

@Component({
  shadow: false,
  styleUrl: 'ods-switch-item.scss',
  tag: 'ods-switch-item',
})
export class OdsSwitchItem {
  private odsRadio?: OdsRadio;

  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) public ariaLabel: HTMLElement['ariaLabel'] = null;
  @Prop({ reflect: true }) public ariaLabelledby?: string;
  @Prop({ reflect: true }) public isChecked: boolean = false;
  @Prop({ reflect: true }) public isDisabled: boolean = false;
  @Prop({ reflect: true }) public isRequired: boolean = false;
  @Prop({ reflect: true }) public inputId!: string;
  @Prop({ reflect: true }) public name!: string;
  @Prop({ reflect: true }) public size?: ODS_SWITCH_SIZE;
  @Prop({ reflect: true }) public value: string | null = null;

  @Event() odsFocus!: EventEmitter<void>;

  /** @internal */
  @Method()
  async getRadio(): Promise<OdsRadio | undefined> {
    return this.odsRadio;
  }

  @Method()
  async getValidity(): Promise<ValidityState | undefined> {
    return this.odsRadio?.getValidity();
  }

  handleKeyDown(event: KeyboardEvent): void {
    if (this.isDisabled) {
      return;
    }
    if (event.key === 'Enter' || event.key === ' ') {
      this.odsRadio?.select();
    }
  }

  render(): FunctionalComponent {
    return (
      <Host class={ `ods-switch-item ods-switch-item--${this.size}` }>
        <ods-radio
          ariaLabel={ this.ariaLabel }
          ariaLabelledby={ this.ariaLabelledby }
          class="ods-switch-item__radio"
          isChecked={ this.isChecked }
          isDisabled={ this.isDisabled }
          isRequired={ this.isRequired }
          inputId={ this.inputId }
          onOdsClear={ (event: CustomEvent<void>) => event.stopPropagation() }
          onOdsReset={ (event: CustomEvent<void>) => event.stopPropagation() }
          name={ this.name }
          ref={ (el?: HTMLElement) => this.odsRadio = el as unknown as OdsRadio }
          value={ this.value }></ods-radio>
        <label
          class={{
            'ods-switch-item__label': true,
            'ods-switch-item__label--disabled': this.isDisabled,
          }}
          htmlFor={ this.inputId }
          onFocus={ () => this.odsFocus.emit() }
          tabindex={ !this.isDisabled ? 0 : -1 }
          onKeyDown={ (event: KeyboardEvent) => this.handleKeyDown(event) }>
          <slot></slot>
        </label>
      </Host>
    );
  }
}
