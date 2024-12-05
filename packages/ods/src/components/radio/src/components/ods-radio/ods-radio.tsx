import { Component, Event, type EventEmitter, type FunctionalComponent, Host, Method, Prop, State, Watch, h } from '@stencil/core';
import { type OdsFormElement } from '../../../../../types';
import { submitFormOnEnter } from '../../../../../utils/dom';
import { type OdsRadioChangeEventDetail } from '../../interfaces/events';

@Component({
  formAssociated: true,
  shadow: false,
  styleUrl: 'ods-radio.scss',
  tag: 'ods-radio',
})
export class OdsRadio implements OdsFormElement {
  private inputEl?: HTMLInputElement;
  private observer?: MutationObserver;

  @State() private isInvalid: boolean | undefined;

  @Prop({ reflect: true }) public ariaLabel: HTMLElement['ariaLabel'] = null;
  @Prop({ reflect: true }) public ariaLabelledby?: string;
  @Prop({ reflect: true }) public hasError: boolean = false;
  @Prop({ reflect: true }) public inputId?: string;
  @Prop({ reflect: true }) public isChecked: boolean = false;
  @Prop({ reflect: true }) public isDisabled: boolean = false;
  @Prop({ reflect: true }) public isRequired: boolean = false;
  @Prop({ reflect: true }) public name!: string;
  @Prop({ mutable: true, reflect: true }) public value: string | null = null;

  @Event() odsBlur!: EventEmitter<void>;
  @Event() odsChange!: EventEmitter<OdsRadioChangeEventDetail>;
  @Event() odsClear!: EventEmitter<void>;
  @Event() odsFocus!: EventEmitter<void>;
  @Event() odsInvalid!: EventEmitter<{ isInvalid: boolean }>;
  @Event() odsReset!: EventEmitter<void>;

  @Method()
  public async checkValidity(): Promise<boolean | undefined> {
    this.isInvalid = !this.inputEl?.validity.valid;
    return this.inputEl?.checkValidity();
  }

  @Method()
  public async clear(): Promise<void> {
    if (this.inputEl) {
      this.inputEl.checked = false;
    }
    this.odsClear.emit();
    this.odsChange.emit({
      checked: false,
      name: this.name,
      validity: this.inputEl?.validity,
      value: this.value ?? null,
    });
    this.inputEl?.focus();
  }

  @Method()
  public async getValidationMessage(): Promise<string | undefined> {
    return this.inputEl?.validationMessage;
  }

  @Method()
  public async getValidity(): Promise<ValidityState | undefined> {
    return this.inputEl?.validity;
  }

  @Method()
  public async reportValidity(): Promise<boolean | undefined> {
    this.isInvalid = !this.inputEl?.validity.valid;
    return this.inputEl?.reportValidity();
  }

  @Method()
  public async reset(): Promise<void> {
    let defaultCheckedRadioValue = null;

    this.getOdsRadiosGroupByName().forEach((radio) => {
      const inputRadio = radio.querySelector<HTMLInputElement>('input[type="radio"]');
      if (!inputRadio) {
        return;
      }
      if (radio.getAttribute('is-checked') !== null && radio.getAttribute('is-checked') !== 'false') {
        inputRadio.checked = true;
        defaultCheckedRadioValue = inputRadio.value;
      } else {
        inputRadio.checked = false;
      }
    });
    this.odsReset.emit();
    this.odsChange.emit({
      checked: !!defaultCheckedRadioValue,
      name: this.name,
      validity: this.inputEl?.validity,
      value: defaultCheckedRadioValue,
    });
  }

  @Method()
  public async select(): Promise<void> {
    this.inputEl?.click();
  }

  @Method()
  public async willValidate(): Promise<boolean | undefined> {
    return this.inputEl?.willValidate;
  }

  @Watch('isInvalid')
  onIsInvalidChange(): void {
    this.odsInvalid.emit({ isInvalid: !!this.isInvalid });
  }

  componentWillLoad(): void {
    this.observer = new MutationObserver((mutations: MutationRecord[]) => {
      for (const mutation of mutations) {
        if (mutation.attributeName === 'required') {
          this.isInvalid = !this.inputEl?.validity.valid;
        }
      }
    });
  }

  componentDidLoad(): void {
    if (this.inputEl) {
      this.observer?.observe(this.inputEl, {
        attributeFilter: ['required'],
        attributeOldValue: false,
      });
    }
  }

  disconnectedCallback(): void {
    this.observer?.disconnect();
  }

  async formResetCallback(): Promise<void> {
    await this.reset();
  }

  private getOdsRadiosGroupByName(): NodeListOf<Element & OdsRadio> {
    return document.querySelectorAll(`ods-radio[name="${this.name}"]`);
  }

  private onBlur(): void {
    this.isInvalid = !this.inputEl?.validity.valid;
    this.odsBlur.emit();

    this.getOdsRadiosGroupByName().forEach((radio: OdsRadio) => {
      // This will enforce error state to be updated on all radio when blurring
      radio.checkValidity();
    });
  }

  private onInput(event: Event): void {
    this.odsChange.emit({
      checked: (event.target as HTMLInputElement)?.checked,
      name: this.name,
      validity: this.inputEl?.validity,
      value: this.value ?? null,
    });
  }

  private onInvalidEvent(event: Event): void {
    // Remove the native validation message popup
    event.preventDefault();
    event.stopPropagation();

    // Enforce the state here as we may still be in pristine state (if the form is submitted before any changes occurs)
    this.isInvalid = true;
  }

  render(): FunctionalComponent {
    return (
      <Host
        class="ods-radio"
        disabled={ this.isDisabled }>
        <input
          aria-label={ this.ariaLabel }
          aria-labelledby={ this.ariaLabelledby }
          class={{
            'ods-radio__radio': true,
            'ods-radio__radio--error': this.hasError || !!this.isInvalid,
          }}
          checked={ this.isChecked }
          disabled={ this.isDisabled }
          id={ this.inputId }
          name={ this.name }
          onBlur={ (): void => this.onBlur() }
          onFocus={ (): CustomEvent<void> => this.odsFocus.emit() }
          onInput={ (event: InputEvent): void => this.onInput(event) }
          onInvalid={ (e): void => this.onInvalidEvent(e) }
          onKeyUp={ (event: KeyboardEvent): void => this.inputEl && submitFormOnEnter(event, this.inputEl.form) }
          ref={ (el): HTMLInputElement => this.inputEl = el as HTMLInputElement }
          required={ this.isRequired }
          type="radio"
          value={ this.value?.toString() || '' } />
      </Host>
    );
  }
}
