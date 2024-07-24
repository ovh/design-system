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
    this.emitChange({
      checked: false,
      name: this.name,
      validity:  this.inputEl?.validity,
      value: this.value ?? null,
    });
    this.inputEl?.focus();
  }

  @Method()
  async getValidity(): Promise<ValidityState | undefined> {
    return this.inputEl?.validity;
  }

  @Method()
  async reset(): Promise<void> {
    this.getOdsRadiosGroupByName().forEach((radio) => {
      const inputRadio = radio.querySelector<HTMLInputElement>('input[type="radio"]');
      if (!inputRadio) {
        return;
      }
      if (radio.getAttribute('is-checked') !== null && radio.getAttribute('is-checked') !== 'false') {
        inputRadio.checked = true;
      } else {
        inputRadio.checked = false;
      }
    });
    this.odsReset.emit();
    this.emitChange({
      checked: this.isChecked,
      name: this.name,
      validity:  this.inputEl?.validity,
      value: this.value ?? null,
    });
  }

  @Method()
  async select(): Promise<void> {
    this.inputEl?.click();
  }

  async formResetCallback(): Promise<void> {
    await this.reset();
  }

  private getOdsRadiosGroupByName(): NodeListOf<Element> {
    return document.querySelectorAll(`ods-radio[name="${this.name}"]`);
  }

  private onInput(event: Event): void {
    this.emitChange({
      checked: (event.target as HTMLInputElement)?.checked,
      name: this.name,
      validity:  this.inputEl?.validity,
      value: this.value ?? null,
    });
  }

  private emitChange(detail: OdsRadioValueChangeEventDetail): void {
    this.odsChange.emit({
      checked: detail.checked,
      name: detail.name,
      validity:  detail.validity,
      value: detail.value,
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
          onInput={ (event: InputEvent): void => this.onInput(event) }
          onFocus={ (): CustomEvent<void> => this.odsFocus.emit() }
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
