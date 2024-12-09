import { AttachInternals, Component, Element, Event, type EventEmitter, type FunctionalComponent, Host, Listen, Method, Prop, State, Watch, h } from '@stencil/core';
import { type OdsFormElement } from '../../../../../types';
import { submitFormOnEnter } from '../../../../../utils/dom';
import { hasValueChanged, updateInternals } from '../../controller/ods-toggle';
import { type OdsToggleChangeEventDetail } from '../../interfaces/event';

@Component({
  formAssociated: true,
  shadow: {
    delegatesFocus: true,
  },
  styleUrl: 'ods-toggle.scss',
  tag: 'ods-toggle',
})
export class OdsToggle implements OdsFormElement {
  private inputEl?: HTMLInputElement;
  private observer?: MutationObserver;
  private shouldUpdateIsInvalidState: boolean = false;

  @Element() el!: HTMLElement;

  @AttachInternals() private internals!: ElementInternals;

  @State() private isInvalid: boolean | undefined;

  @Prop({ reflect: true }) public defaultValue?: boolean;
  @Prop({ reflect: true }) public hasError: boolean = false;
  @Prop({ reflect: true }) public isDisabled: boolean = false;
  @Prop({ reflect: true }) public isRequired: boolean = false;
  @Prop({ reflect: true }) public name!: string;
  @Prop({ mutable: true, reflect: true }) public value: boolean | null = null;
  @Prop({ reflect: true }) public withLabel: boolean = false;

  @Event() odsBlur!: EventEmitter<void>;
  @Event() odsChange!: EventEmitter<OdsToggleChangeEventDetail>;
  @Event() odsClear!: EventEmitter<void>;
  @Event() odsFocus!: EventEmitter<void>;
  @Event() odsInvalid!: EventEmitter<{ isInvalid: boolean }>;
  @Event() odsReset!: EventEmitter<void>;

  @Listen('invalid')
  onInvalidEvent(event: Event): void {
    // Remove the native validation message popup
    event.preventDefault();

    // Enforce the state here as we may still be in pristine state (if the form is submitted before any changes occurs)
    this.isInvalid = true;
  }

  @Method()
  public async checkValidity(): Promise<boolean> {
    this.isInvalid = !this.internals.validity.valid;
    return this.internals.checkValidity();
  }

  @Method()
  public async clear(): Promise<void> {
    this.value = null;
    this.inputEl?.focus();
    this.odsClear.emit();

    // Element internal validityState is not yet updated, so we set the flag
    // to update our internal state when it will be up-to-date
    this.shouldUpdateIsInvalidState = true;
  }

  @Method()
  public async getValidationMessage(): Promise<string> {
    return this.internals.validationMessage;
  }

  @Method()
  public async getValidity(): Promise<ValidityState> {
    return this.internals.validity;
  }

  @Method()
  public async reportValidity(): Promise<boolean> {
    this.isInvalid = !this.internals.validity.valid;
    return this.internals.reportValidity();
  }

  @Method()
  public async reset(): Promise<void> {
    this.value = this.defaultValue ?? null;
    this.odsReset.emit();

    // Element internal validityState is not yet updated, so we set the flag
    // to update our internal state when it will be up-to-date
    this.shouldUpdateIsInvalidState = true;
  }

  @Method()
  public async toggle(): Promise<void> {
    this.value = !this.value;
  }

  @Method()
  public async willValidate(): Promise<boolean> {
    return this.internals.willValidate;
  }

  @Watch('isInvalid')
  onIsInvalidChange(): void {
    this.odsInvalid.emit({ isInvalid: !!this.isInvalid });
  }

  componentWillLoad(): void {
    this.observer = new MutationObserver((mutations: MutationRecord[]) => {
      for (const mutation of mutations) {
        const hasChange = hasValueChanged(this.value, mutation.oldValue);

        if (mutation.attributeName === 'value' && hasChange) {
          this.onValueChange();
        }

        // When observing is-required, the inner element validity is not yet up-to-date
        // so we observe the element required attribute instead
        if (mutation.attributeName === 'required') {
          updateInternals(this.internals, this.value, this.inputEl);
          this.isInvalid = !this.internals.validity.valid;
        }
      }
    });

    if (!this.value) {
      this.value = this.defaultValue ?? null;
    }
  }

  componentDidLoad(): void {
    // Init the internals correctly as native element validity is now up-to-date
    this.onValueChange();

    this.observer?.observe(this.el, {
      attributeFilter: ['value'],
      attributeOldValue: true,
    });

    if (this.inputEl) {
      this.observer?.observe(this.inputEl, {
        attributeFilter: ['required'],
        attributeOldValue: false,
      });
    }
  }

  async formResetCallback(): Promise<void> {
    await this.reset();
  }

  private onBlur(): void {
    this.isInvalid = !this.internals.validity.valid;
    this.odsBlur.emit();
  }

  private onInput(): void {
    if (this.isDisabled) {
      return;
    }

    this.value = !this.value;
  }

  private onValueChange(): void {
    updateInternals(this.internals, this.value, this.inputEl);

    // In case the value gets updated from an other source than a blur event
    // we may have to perform an internal validity state update
    if (this.shouldUpdateIsInvalidState) {
      this.isInvalid = !this.internals.validity.valid;
      this.shouldUpdateIsInvalidState = false;
    }

    this.odsChange.emit({
      name: this.name,
      previousValue: !this.value,
      validity: this.internals.validity,
      value: this.value ?? false,
    });
  }

  render(): FunctionalComponent {
    return (
      <Host
        class='ods-toggle'
        disabled={ this.isDisabled }>
        <label class='ods-toggle__container'>
          <input
            checked={ this.value ?? false }
            class="ods-toggle__container__input"
            disabled={ this.isDisabled }
            name={ this.name }
            onBlur={ () => this.onBlur() }
            onFocus={ () => this.odsFocus.emit() }
            onInput={ () => this.onInput() }
            onKeyUp={ (event: KeyboardEvent): void => submitFormOnEnter(event, this.internals.form) }
            ref={ (el): HTMLInputElement => this.inputEl = el as HTMLInputElement }
            required={ this.isRequired }
            role="switch"
            type="checkbox"
          />

          <span
            class={{
              'ods-toggle__container__slider': true,
              'ods-toggle__container__slider--checked': this.value ?? false,
              'ods-toggle__container__slider--disabled': this.isDisabled,
              'ods-toggle__container__slider--error': this.hasError || !!this.isInvalid,
            }}
            part={ `slider ${this.value ? 'checked' : ''}` }>
            {
              this.withLabel && <span class="ods-toggle__container__slider__label" part={ `label ${this.value ? 'checked' : ''}` }>{ this.value ? 'ON' : 'OFF' }</span>
            }
          </span>
        </label>
      </Host>
    );
  }
}
