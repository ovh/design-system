import { Component, Event, type EventEmitter, type FunctionalComponent, Host, Method, Prop, State, Watch, h } from '@stencil/core';
import { type OdsFormElement } from '../../../../../types';
import { submitFormOnEnter } from '../../../../../utils/dom';
import { type OdsCheckboxChangeEventDetail } from '../../interfaces/event';

@Component({
  formAssociated: true,
  shadow: false,
  styleUrl: 'ods-checkbox.scss',
  tag: 'ods-checkbox',
})
export class OdsCheckbox implements OdsFormElement {
  private inputEl?: HTMLInputElement;
  private observer?: MutationObserver;

  @State() private isInvalid: boolean | undefined;

  @Prop({ reflect: true }) public ariaLabel: HTMLElement['ariaLabel'] = null;
  @Prop({ reflect: true }) public ariaLabelledby?: string;
  @Prop({ reflect: true }) public hasError: boolean = false;
  @Prop({ reflect: true }) public inputId?: string;
  @Prop({ reflect: true }) public isChecked: boolean = false;
  @Prop({ reflect: true }) public isDisabled: boolean = false;
  @Prop({ reflect: true }) public isIndeterminate : boolean = false;
  @Prop({ reflect: true }) public isRequired: boolean = false;
  @Prop({ reflect: true }) public name!: string;
  @Prop({ mutable: true, reflect: true }) public value: string | null = null;

  @Event() odsBlur!: EventEmitter<void>;
  @Event() odsChange!: EventEmitter<OdsCheckboxChangeEventDetail>;
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
    const defaultCheckedValues: string[] = [];

    this.getOdsCheckboxGroupByName().forEach((checkbox) => {
      const inputCheckbox = checkbox.querySelector<HTMLInputElement>('input[type="checkbox"]');
      if (!inputCheckbox) {
        return;
      }
      if (checkbox.getAttribute('is-checked') !== null && checkbox.getAttribute('is-checked') !== 'false') {
        inputCheckbox.checked = true;
        defaultCheckedValues.push(inputCheckbox.value);
      } else {
        inputCheckbox.checked = false;
      }
    });
    this.odsReset.emit();
    this.odsChange.emit({
      checked: !!defaultCheckedValues.length,
      name: this.name,
      validity: this.inputEl?.validity,
      value: defaultCheckedValues.length ? defaultCheckedValues.join(',') : (this.value ?? null),
    });
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

  private getOdsCheckboxGroupByName(): NodeListOf<Element> {
    return document.querySelectorAll(`ods-checkbox[name="${this.name}"]`);
  }

  private onBlur(): void {
    this.isInvalid = !this.inputEl?.validity.valid;
    this.odsBlur.emit();
  }

  private onInput(): void {
    const { checked, validity, values } = Array.from(this.getOdsCheckboxGroupByName())
      .reduce<{ checked: boolean, validity: ValidityState | undefined, values: string[] }>((res, odsCheckboxElement) => {
        const inputElement = odsCheckboxElement.querySelector<HTMLInputElement>('input[type="checkbox"]');

        if (inputElement && inputElement.checked) {
          res.checked = true;
          res.validity = inputElement.validity;
          res.values.push(inputElement.value);
        }

        return res;
      }, {
        checked: false,
        validity: this.inputEl?.validity,
        values: [],
      });

    this.odsChange.emit({
      checked,
      name: this.name,
      validity,
      value: values.length ? values.join(',') : (this.value ?? null),
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
        class="ods-checkbox"
        disabled={ this.isDisabled }>
        <input
          aria-label={ this.ariaLabel }
          aria-labelledby={ this.ariaLabelledby }
          class={{
            'ods-checkbox__checkbox': true,
            'ods-checkbox__checkbox--error': this.hasError || !!this.isInvalid,
          }}
          checked={ this.isChecked }
          disabled={ this.isDisabled }
          id={ this.inputId }
          indeterminate={ this.isIndeterminate }
          name={ this.name }
          onBlur={ (): void => this.onBlur() }
          onFocus={ (): CustomEvent<void> => this.odsFocus.emit() }
          onInput={ (): void => this.onInput() }
          onInvalid={ (e): void => this.onInvalidEvent(e) }
          onKeyUp={ (event: KeyboardEvent): void => this.inputEl && submitFormOnEnter(event, this.inputEl.form) }
          ref={ (el): HTMLInputElement => this.inputEl = el as HTMLInputElement }
          required={ this.isRequired }
          type="checkbox"
          value={ this.value?.toString() || '' } />
      </Host>
    );
  }
}
