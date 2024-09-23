import { AttachInternals, Component, Event, type EventEmitter, type FunctionalComponent, Host, Listen, Method, Prop, State, h } from '@stencil/core';
import { submitFormOnEnter } from '../../../../../utils/dom';
import { type OdsInput, type OdsInputChangeEvent } from '../../../../input/src';
import { updateInternals } from '../../controller/ods-password';
import { type OdsPasswordChangeEventDetail } from '../../interfaces/events';

const VALUE_DEFAULT_VALUE = null;

@Component({
  formAssociated: true,
  shadow: {
    delegatesFocus: true,
  },
  styleUrl: 'ods-password.scss',
  tag: 'ods-password',
})
export class OdsPassword {
  private odsInput?: HTMLElement & OdsInput;
  private updateIsInvalid: boolean = false;

  @AttachInternals() private internals!: ElementInternals;

  @State() isInvalid: boolean = false;

  @Prop({ reflect: true }) public ariaLabel: HTMLElement['ariaLabel'] = null;
  @Prop({ reflect: true }) public ariaLabelledby?: string;
  @Prop({ reflect: true }) public defaultValue?: string;
  @Prop({ reflect: true }) public hasError: boolean = false;
  @Prop({ reflect: true }) public isClearable: boolean = false;
  @Prop({ reflect: true }) public isDisabled: boolean = false;
  @Prop({ reflect: true }) public isLoading: boolean = false;
  @Prop({ mutable: true, reflect: true }) public isMasked: boolean = true;
  @Prop({ reflect: true }) public isReadonly: boolean = false;
  @Prop({ reflect: true }) public isRequired: boolean = false;
  @Prop({ reflect: true }) public name!: string;
  @Prop({ reflect: true }) public pattern?: string;
  @Prop({ reflect: true }) public placeholder?: string;
  @Prop({ mutable: true, reflect: true }) public value: string | null = VALUE_DEFAULT_VALUE;

  @Event() odsBlur!: EventEmitter<void>;
  @Event() odsClear!: EventEmitter<void>;
  @Event() odsFocus!: EventEmitter<void>;
  @Event() odsToggleMask!: EventEmitter<void>;
  @Event() odsReset!: EventEmitter<void>;
  @Event() odsChange!: EventEmitter<OdsPasswordChangeEventDetail>;

  @Listen('invalid')
  onInvalidEvent(event: Event): void {
    // Remove the native validation message popup
    event.preventDefault();

    // Enforce the state here as we may still be in pristine state (if the form is submitted before any changes occurs)
    this.isInvalid = true;
  }

  @Method()
  async checkValidity(): Promise<boolean> {
    return this.internals?.checkValidity();
  }

  @Method()
  async clear(): Promise<void> {
    await this.odsInput?.clear();
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

  @Method()
  async reportValidity(): Promise<boolean> {
    return this.internals.reportValidity();
  }

  @Method()
  async toggleMask(): Promise<void> {
    return this.odsInput?.toggleMask();
  }

  @Method()
  async reset(): Promise<void> {
    await this.odsInput?.reset();
    this.updateIsInvalid = true;

  }

  @Method()
  async willValidate(): Promise<boolean> {
    return this.internals.willValidate;
  }

  componentWillLoad(): void {
    if (!this.value && (this.value !== VALUE_DEFAULT_VALUE || this.defaultValue)) {
      this.value = this.defaultValue ?? null;
    }
  }

  async componentDidLoad(): Promise<void> {
    await updateInternals(this.internals, this.value, this.odsInput);
  }

  async formResetCallback(): Promise<void> {
    await this.reset();
  }

  private onBlur(): void {
    this.isInvalid = !this.internals.validity.valid;
  }

  private async onOdsChange(event: OdsInputChangeEvent): Promise<void> {
    this.value = event.detail.value?.toString() ?? null;
    await updateInternals(this.internals, this.value, this.odsInput);
     // update here after update internals
     if (this.updateIsInvalid) {
      this.isInvalid = !this.internals.validity.valid;
      this.updateIsInvalid = false;
    }
  }

  render(): FunctionalComponent {
    return (
      <Host class="ods-password"
        disabled={ this.isDisabled }
        readonly={ this.isReadonly }>
        <ods-input
          ariaLabel={ this.ariaLabel }
          ariaLabelledby={ this.ariaLabelledby }
          defaultValue={ this.defaultValue }
          exportparts="input"
          hasError={ this.hasError || this.isInvalid }
          isClearable={ this.isClearable }
          isDisabled={ this.isDisabled }
          isLoading={ this.isLoading }
          isMasked={ this.isMasked }
          isReadonly={ this.isReadonly }
          isRequired={ this.isRequired }
          name={ this.name }
          onOdsBlur={() => this.onBlur() }
          onKeyUp={ (event: KeyboardEvent): void => submitFormOnEnter(event, this.internals.form) }
          onOdsChange={ (event: OdsInputChangeEvent) => this.onOdsChange(event) }
          onOdsToggleMask={ () => this.isMasked = !this.isMasked }
          pattern={ this.pattern }
          placeholder={ this.placeholder }
          ref={ (el?: unknown): OdsInput => this.odsInput = el as HTMLElement & OdsInput }
          value={ this.value }
        >
        </ods-input>
      </Host>
    );
  }
}
