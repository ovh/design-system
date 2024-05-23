import type { OdsRadioValueChangeEventDetail } from '../../interfaces/events';
import { Component, Element, Event, type EventEmitter, type FunctionalComponent, Host, Method, Prop, h } from '@stencil/core';

@Component({
  formAssociated: true,
  shadow: false,
  styleUrl: 'ods-radio.scss',
  tag: 'ods-radio',
})
export class OdsRadio {
  private inputEl?: HTMLInputElement;

  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) public ariaLabel: HTMLElement['ariaLabel'] = null;
  @Prop({ reflect: true }) public ariaLabelledby?: string;
  @Prop({ reflect: true }) public isChecked: boolean = false;
  @Prop({ reflect: true }) public isDisabled: boolean = false;
  @Prop({ reflect: true }) public isRequired: boolean = false;
  @Prop({ reflect: true }) public inputId?: string;
  @Prop({ reflect: true }) public name!: string;
  @Prop({ mutable: true, reflect: true }) public value: string | null = null;

  @Event() odsBlur!: EventEmitter<void>;
  @Event() odsChange!: EventEmitter<OdsRadioValueChangeEventDetail>;
  @Event() odsClear!: EventEmitter<void>;
  @Event() odsFocus!: EventEmitter<void>;
  @Event() odsReset!: EventEmitter<void>;

  @Method()
  async clear(): Promise<void> {
    if (this.inputEl) {
      this.inputEl.checked = false;
    }
    this.odsClear.emit();
  }

  @Method()
  async getValidity(): Promise<ValidityState | undefined> {
    return this.inputEl?.validity;
  }

  @Method()
  async reset(): Promise<void> {
    this.getOdsRadiosGroupByName().forEach((radio) => {
      const inputRadio = radio.querySelector<HTMLInputElement>('input[type="radio"]');
      if (inputRadio && radio.getAttribute('is-checked') === '') {
        inputRadio.checked = true;
      }
    });
    this.odsReset.emit();
  }

  private getOdsRadiosGroupByName(): NodeListOf<Element> {
    return document.querySelectorAll(`ods-radio[name="${this.name}"]`);
  }

  private onInput(): void {
    this.odsChange.emit({
      name: this.name,
      validity:  this.inputEl?.validity,
      value: this.value ?? null,
    });
  }

  render(): FunctionalComponent {
    return (
      <Host class="ods-radio">
        <input
          aria-label={ this.ariaLabel }
          aria-labelledby={ this.ariaLabelledby }
          class="ods-radio__radio"
          checked={ this.isChecked }
          disabled={ this.isDisabled }
          onBlur={ (): CustomEvent<void> => this.odsBlur.emit() }
          onFocus={ (): CustomEvent<void> => this.odsFocus.emit() }
          onInput={ (): void => this.onInput() }
          id={ this.inputId }
          name={ this.name }
          ref={ (el): HTMLInputElement => this.inputEl = el as HTMLInputElement }
          required={ this.isRequired }
          type="radio"
          value={ this.value?.toString() || '' } />
      </Host>
    );
  }
}
