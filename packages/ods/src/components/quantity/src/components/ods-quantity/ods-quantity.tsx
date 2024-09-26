import { AttachInternals, Component, Event, type EventEmitter, type FunctionalComponent, Host, Listen, Method, Prop, State, h } from '@stencil/core';
import { submitFormOnEnter } from '../../../../../utils/dom';
import { ODS_BUTTON_COLOR, ODS_BUTTON_SIZE, ODS_BUTTON_VARIANT } from '../../../../button/src';
import { ODS_ICON_NAME } from '../../../../icon/src';
import { ODS_INPUT_TYPE, type OdsInput, type OdsInputChangeEvent } from '../../../../input/src';
import { isMinusButtonDisabled, isPlusButtonDisabled, updateInternals } from '../../controller/ods-quantity';
import { type OdsQuantityChangeEventDetail } from '../../interfaces/events';

const VALUE_DEFAULT_VALUE = null;

@Component({
  formAssociated: true,
  shadow: {
    delegatesFocus: true,
  },
  styleUrl: 'ods-quantity.scss',
  tag: 'ods-quantity',
})
export class OdsQuantity {
  private odsInput?: HTMLElement & OdsInput;

  @AttachInternals() internals!: ElementInternals;

  @State() isInvalid: boolean = false;

  @Prop({ reflect: true }) public ariaLabel: HTMLElement['ariaLabel'] = null;
  @Prop({ reflect: true }) public ariaLabelledby?: string;
  @Prop({ reflect: true }) public defaultValue?: number;
  @Prop({ reflect: true }) public hasError: boolean = false;
  @Prop({ reflect: true }) public isDisabled: boolean = false;
  @Prop({ reflect: true }) public isReadonly: boolean = false;
  @Prop({ reflect: true }) public isRequired: boolean = false;
  @Prop({ reflect: true }) public max?: number;
  @Prop({ reflect: true }) public min?: number;
  @Prop({ reflect: true }) public name!: string;
  @Prop({ reflect: true }) public placeholder?: string;
  @Prop({ reflect: true }) public step?: number;
  @Prop({ mutable: true, reflect: true }) public value: number | null = VALUE_DEFAULT_VALUE;

  @Event() odsBlur!: EventEmitter<void>;
  @Event() odsChange!: EventEmitter<OdsQuantityChangeEventDetail>;
  @Event() odsClear!: EventEmitter<void>;
  @Event() odsFocus!: EventEmitter<void>;
  @Event() odsReset!: EventEmitter<void>;

  @Listen('invalid')
  onInvalidEvent(event: Event): void {
    // Remove the native validation message popup
    event.preventDefault();

    // Enforce the state here as we may still be in pristine state (if the form is submitted before any changes occurs)
    this.isInvalid = true;
  }

  @Method()
  async checkValidity(): Promise<boolean> {
    return this.internals.checkValidity();
  }

  @Method()
  async clear(): Promise<void> {
    await this.odsInput?.clear();
    setTimeout(() => this.isInvalid = !this.internals.validity.valid, 0);
  }

  @Method()
  async getValidationMessage(): Promise<string> {
    return this.internals.validationMessage;
  }

  @Method()
  async getValidity(): Promise<ValidityState | undefined> {
    return this.internals.validity;
  }

  @Method()
  async reportValidity(): Promise<boolean> {
    return this.internals.reportValidity();
  }

  @Method()
  async reset(): Promise<void> {
    await this.odsInput?.reset();
    setTimeout(() => this.isInvalid = !this.internals.validity.valid, 0);
  }

  @Method()
  async willValidate(): Promise<boolean> {
    return this.internals.willValidate;
  }

  componentWillLoad(): void {
    if (!this.value && this.value !== 0 && (this.value !== VALUE_DEFAULT_VALUE || this.defaultValue !== undefined)) {
      this.value = this.defaultValue ?? null;
    }
  }

  async componentDidLoad(): Promise<void> {
    await updateInternals(this.internals, this.value, this.odsInput);
  }

  async formResetCallback(): Promise<void> {
    await this.reset();
  }

  private decrement(): void {
    if (this.isDisabled || this.isReadonly) {
      return;
    }
    const step = this.step || 1;
    this.value = this.value !== null ? Number(this.value) - step : 0;
  }

  private increment(): void {
    if (this.isDisabled || this.isReadonly) {
      return;
    }
    const step = this.step || 1;
    this.value = this.value !== null ? Number(this.value) + step : 0;
  }

  private async onOdsChange(event: OdsInputChangeEvent): Promise<void> {
    if (event.detail.value === null) {
      this.value = null;
    } else {
      this.value = Number(event.detail.value) ?? null;
    }

    await updateInternals(this.internals, this.value, this.odsInput);
  }

  private getHasError(): boolean {
    return this.hasError || this.isInvalid;
  }

  render(): FunctionalComponent {
    return (
      <Host class="ods-quantity"
        disabled={ this.isDisabled }
        readonly={ this.isReadonly }>
        <ods-button
          class="ods-quantity__button"
          color={ this.getHasError() ? ODS_BUTTON_COLOR.critical : ODS_BUTTON_COLOR.primary }
          exportparts="button:button-minus"
          isDisabled={ isMinusButtonDisabled(this.isDisabled, this.isReadonly, this.value, this.min) }
          icon={ ODS_ICON_NAME.minus }
          label=""
          onClick={ () => this.decrement() }
          size={ ODS_BUTTON_SIZE.sm }
          variant={ ODS_BUTTON_VARIANT.outline }>
        </ods-button>

        <ods-input
          ariaLabel={ this.ariaLabel }
          ariaLabelledby= { this.ariaLabelledby }
          class="ods-quantity__input"
          defaultValue={ this.defaultValue }
          exportparts="input"
          hasError={ this.getHasError() }
          isDisabled={ this.isDisabled }
          isReadonly={ this.isReadonly }
          isRequired={ this.isRequired }
          onKeyUp={ (event: KeyboardEvent): void => submitFormOnEnter(event, this.internals.form) }
          onOdsChange={ (event: OdsInputChangeEvent) => this.onOdsChange(event) }
          max={ this.max }
          min={ this.min }
          name={ this.name }
          placeholder={ this.placeholder }
          ref={ (el?: unknown) => this.odsInput = el as HTMLElement & OdsInput }
          step={ this.step }
          type={ ODS_INPUT_TYPE.number }
          value={ this.value }>
        </ods-input>

        <ods-button
          class="ods-quantity__button"
          color={ this.getHasError() ? ODS_BUTTON_COLOR.critical : ODS_BUTTON_COLOR.primary }
          exportparts="button:button-plus"
          isDisabled={ isPlusButtonDisabled(this.isDisabled, this.isReadonly, this.value, this.max) }
          icon={ ODS_ICON_NAME.plus }
          label=""
          onClick={ () => this.increment() }
          size={ ODS_BUTTON_SIZE.sm }
          variant={ ODS_BUTTON_VARIANT.outline }>
        </ods-button>
      </Host>
    );
  }
}
