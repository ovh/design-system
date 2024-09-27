import { AttachInternals, Component, Element, Event, type EventEmitter, type FunctionalComponent, Host, Listen, Method, Prop, State, Watch, h } from '@stencil/core';
import { submitFormOnEnter } from '../../../../../utils/dom';
import { ODS_ICON_NAME } from '../../../../icon/src';
import { ODS_SPINNER_COLOR } from '../../../../spinner/src';
import { ODS_INPUT_TYPE, type OdsInputType } from '../../constants/input-type';
import { handleKeySpace, isPassword, updateInternals } from '../../controller/ods-input';
import { type OdsInputChangeEventDetail } from '../../interfaces/events';

const VALUE_DEFAULT_VALUE = null;

@Component({
  formAssociated: true,
  shadow: {
    delegatesFocus: true,
  },
  styleUrl: 'ods-input.scss',
  tag: 'ods-input',
})
export class OdsInput {
  private observer?: MutationObserver;
  private inputEl?: HTMLInputElement;
  private updateIsInvalid: boolean = false;

  @Element() el!: HTMLElement;

  @AttachInternals() private internals!: ElementInternals;

  @State() private isInvalid: boolean = false;
  @State() private isPassword = false;

  @Prop({ reflect: true }) public ariaLabel: HTMLElement['ariaLabel'] = null;
  @Prop({ reflect: true }) public ariaLabelledby?: string;
  @Prop({ reflect: true }) public defaultValue?: string | number;
  @Prop({ reflect: true }) public hasError: boolean = false;
  @Prop({ reflect: true }) public isClearable: boolean = false;
  @Prop({ reflect: true }) public isDisabled: boolean = false;
  @Prop({ reflect: true }) public isLoading: boolean = false;
  @Prop({ mutable: true, reflect: true }) public isMasked?: boolean;
  @Prop({ reflect: true }) public isReadonly: boolean = false;
  @Prop({ reflect: true }) public isRequired: boolean = false;
  @Prop({ reflect: true }) public max?: number;
  @Prop({ reflect: true }) public maxlength?: number;
  @Prop({ reflect: true }) public min?: number;
  @Prop({ reflect: true }) public minlength?: number;
  @Prop({ reflect: true }) public name!: string;
  @Prop({ reflect: true }) public pattern?: string;
  @Prop({ reflect: true }) public placeholder?: string;
  @Prop({ reflect: true }) public step?: number;
  @Prop({ reflect: true }) public type: OdsInputType = ODS_INPUT_TYPE.text;
  @Prop({ mutable: true, reflect: true }) public value: string | number | null = VALUE_DEFAULT_VALUE;

  @Event() odsBlur!: EventEmitter<void>;
  @Event() odsChange!: EventEmitter<OdsInputChangeEventDetail>;
  @Event() odsClear!: EventEmitter<void>;
  @Event() odsFocus!: EventEmitter<void>;
  @Event() odsReset!: EventEmitter<void>;
  @Event() odsToggleMask!: EventEmitter<void>;

  @Listen('invalid')
  onInvalidEvent(event: Event): void {
    // Remove the native validation message popup
    event.preventDefault();

    // Enforce the state here as we may still be in pristine state (if the form is submitted before any changes occurs)
    this.isInvalid = true;
  }

  @Listen('updateIsInvalid')
  onUpdateIsInvalid(event: CustomEvent): void {
    event.stopPropagation();
    this.isInvalid = !this.internals.validity?.valid;
  }

  @Method()
  async checkValidity(): Promise<boolean> {
    return this.internals.checkValidity();
  }

  @Method()
  async clear(): Promise<void> {
    this.odsClear.emit();
    this.value = null;
    this.inputEl?.focus();
    this.updateIsInvalid = true;
  }

  @Method()
  async getValidationMessage(): Promise<string> {
    return this.internals.validationMessage;
  }

  @Method()
  async getValidity(): Promise<ValidityState> {
    return this.internals.validity;
  }

  /**
   * Also update error state
   */
  @Method()
  async reportValidity(): Promise<boolean> {
    this.isInvalid = !this.internals.validity.valid;
    return this.internals.reportValidity();
  }

  @Method()
  async reset(): Promise<void> {
    this.odsReset.emit();
    this.value = this.defaultValue ?? null;
    this.updateIsInvalid = true;
  }

  @Method()
  async toggleMask(): Promise<void> {
    this.isMasked = !this.isMasked;
    this.odsToggleMask.emit();
  }

  @Method()
  async willValidate(): Promise<boolean> {
    return this.internals.willValidate;
  }

  @Watch('isMasked')
  onMaskedChange(): void {
    this.isPassword = isPassword(this.isMasked);
  }

  componentWillLoad(): void {
    this.onMaskedChange();

    this.observer = new MutationObserver((mutations: MutationRecord[]) => {
      for (const mutation of mutations) {
        if (mutation.attributeName === 'value') {
          this.onValueChange(mutation.oldValue);
        }
      }
    });

    // We set the value before the observer starts to avoid calling the mutation callback twice
    // as it will be called on componentDidLoad (when native element validity is up-to-date)
    if (!this.value && this.value !== 0 && (this.value !== VALUE_DEFAULT_VALUE || this.defaultValue)) {
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
  }

  disconnectedCallback(): void {
    this.observer?.disconnect();
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
    this.value = this.inputEl?.value ?? null;
  }

  private onValueChange(previousValue?: string | number | null): void {
    updateInternals(this.internals, this.value, this.inputEl);

    // update here after update internals
    if (this.updateIsInvalid) {
      this.isInvalid = !this.internals.validity.valid;
      this.updateIsInvalid = false;
    }

    this.odsChange.emit({
      name: this.name,
      previousValue: this.isNumeric(previousValue) ? Number(previousValue) : previousValue,
      validity: this.internals.validity,
      value: this.value,
    });
  }

  private isNumeric(n?: string | number | null): boolean {
    return !!n && !isNaN(parseFloat(n.toString())) && isFinite(n as number);
  }

  render(): FunctionalComponent {
    const hasClearableIcon = this.isClearable && !this.isLoading && !!this.value;
    const hasToggleMaskIcon = this.isPassword && !this.isLoading;

    return (
      <Host
        class="ods-input"
        disabled={ this.isDisabled }
        readonly={ this.isReadonly }>
        <input
          aria-label={ this.ariaLabel }
          aria-labelledby={ this.ariaLabelledby }
          class={{
            'ods-input__input': true,
            'ods-input__input--clearable': hasClearableIcon,
            'ods-input__input--error': this.hasError || this.isInvalid,
            'ods-input__input--loading': this.isLoading,
            'ods-input__input--toggle-mask': hasToggleMaskIcon,
          }}
          disabled={ this.isDisabled }
          max={ this.max }
          maxlength={ this.maxlength }
          min={ this.min }
          minlength={ this.minlength }
          name={ this.name }
          onBlur={ (): void => this.onBlur() }
          onFocus={ (): CustomEvent<void> => this.odsFocus.emit() }
          onInput={ (): void => this.onInput() }
          onKeyUp={ (event: KeyboardEvent): void => submitFormOnEnter(event, this.internals.form) }
          pattern={ this.pattern }
          part="input"
          placeholder={ this.placeholder }
          readonly={ this.isReadonly }
          ref={ (el): HTMLInputElement => this.inputEl = el as HTMLInputElement }
          required={ this.isRequired }
          step={ this.step }
          type={ this.isPassword && this.isMasked ? ODS_INPUT_TYPE.password : this.type }
          value={ this.value?.toString() || '' } />

        <div class="ods-input__actions">
          {
            this.isLoading && <ods-spinner class="ods-input__actions__spinner" color={ this.isDisabled ? ODS_SPINNER_COLOR.neutral : ODS_SPINNER_COLOR.primary }></ods-spinner>
          }
          {
            hasClearableIcon &&
            <button
              class={{
                'ods-input__actions__clearable': true,
                'ods-input__actions__clearable--readonly': this.isReadonly,
              }}
              disabled={ this.isDisabled || this.isReadonly }
              onClick={ this.clear.bind(this) }
              onKeyUp={ (event: KeyboardEvent): Promise<void> => handleKeySpace(event, this.isDisabled, this.clear.bind(this)) }>
              <ods-icon name={ ODS_ICON_NAME.xmark }>
              </ods-icon>
            </button>
          }
          {
            hasToggleMaskIcon &&
            <button
              class={{
                'ods-input__actions__toggle-mask': true,
                'ods-input__actions__toggle-mask--readonly': this.isReadonly,
              }}
              disabled={ this.isDisabled }
              onClick={ this.toggleMask.bind(this) }
              onKeyUp={ (event: KeyboardEvent): Promise<void> => handleKeySpace(event, this.isDisabled, this.toggleMask.bind(this)) }>
              <ods-icon name={ this.isMasked ? ODS_ICON_NAME.eyeOff : ODS_ICON_NAME.eye }>
              </ods-icon>
            </button>
          }
        </div>
      </Host>
    );
  }
}
