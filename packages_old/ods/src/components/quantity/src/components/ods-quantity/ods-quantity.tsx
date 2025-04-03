import { AttachInternals, Component, Event, type EventEmitter, type FunctionalComponent, Host, Listen, Method, Prop, State, Watch, h } from '@stencil/core';
import { type OdsFormElement } from '../../../../../types';
import { submitFormOnEnter } from '../../../../../utils/dom';
import { isNumeric } from '../../../../../utils/type';
import { ODS_BUTTON_COLOR, ODS_BUTTON_SIZE, ODS_BUTTON_VARIANT } from '../../../../button/src';
import { ODS_ICON_NAME } from '../../../../icon/src';
import { ODS_INPUT_TYPE, type OdsInput, type OdsInputChangeEvent } from '../../../../input/src';
import { VALUE_DEFAULT_VALUE, getInitialValue, isMinusButtonDisabled, isPlusButtonDisabled, updateInternals } from '../../controller/ods-quantity';
import { type OdsQuantityChangeEventDetail } from '../../interfaces/events';

@Component({
  formAssociated: true,
  shadow: {
    delegatesFocus: true,
  },
  styleUrl: 'ods-quantity.scss',
  tag: 'ods-quantity',
})
export class OdsQuantity implements OdsFormElement {
  private odsInput?: HTMLElement & OdsInput;
  private shouldUpdateIsInvalidState: boolean = false;

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
    await this.odsInput?.clear();

    // Element internal validityState is not yet updated, so we set the flag
    // to update our internal state when it will be up-to-date
    this.shouldUpdateIsInvalidState = true;
  }

  @Method()
  public async getValidationMessage(): Promise<string> {
    return this.internals.validationMessage;
  }

  @Method()
  public async getValidity(): Promise<ValidityState | undefined> {
    return this.internals.validity;
  }

  @Method()
  public async reportValidity(): Promise<boolean> {
    this.isInvalid = !this.internals.validity.valid;
    return this.internals.reportValidity();
  }

  @Method()
  public async reset(): Promise<void> {
    await this.odsInput?.reset();

    // Element internal validityState is not yet updated, so we set the flag
    // to update our internal state when it will be up-to-date
    this.shouldUpdateIsInvalidState = true;
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
    this.value = getInitialValue(this.value, this.defaultValue);
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

  private async onOdsBlur(): Promise<void> {
    await this.odsInput?.checkValidity();
    this.isInvalid = !this.internals.validity.valid;
  }

  private async onOdsChange(event: OdsInputChangeEvent): Promise<void> {
    event.stopImmediatePropagation();

    if (event.detail.value === null || event.detail.value === '') {
      this.value = null;
    } else {
      this.value = Number(event.detail.value) ?? null;
    }

    await updateInternals(this.internals, this.value, this.odsInput);

    // In case the value gets updated from an other source than a blur event
    // we may have to perform an internal validity state update
    if (this.shouldUpdateIsInvalidState) {
      await this.odsInput?.checkValidity();
      this.isInvalid = !this.internals.validity.valid;
    }

    this.odsChange.emit({
      name: this.name,
      previousValue: typeof event.detail.previousValue === 'number'&& isNumeric(event.detail.previousValue) ? Number(event.detail.previousValue) : event.detail.previousValue as null | undefined,
      validity: this.internals.validity,
      value: this.value,
    });
  }

  private async onOdsInvalid(event: CustomEvent<{ isInvalid: boolean }>): Promise<void> {
    event.stopImmediatePropagation();
    await updateInternals(this.internals, this.value, this.odsInput);
    this.isInvalid = event.detail.isInvalid;
  }

  private getHasError(): boolean {
    return this.hasError || this.isInvalid;
  }

  render(): FunctionalComponent {
    return (
      <Host
        class="ods-quantity"
        disabled={ this.isDisabled }
        readonly={ this.isReadonly }>
        <ods-button
          class="ods-quantity__button"
          color={ this.getHasError() ? ODS_BUTTON_COLOR.critical : ODS_BUTTON_COLOR.primary }
          exportparts="button:button-minus"
          isDisabled={ isMinusButtonDisabled(this.isDisabled, this.isReadonly, this.value, this.min) }
          icon={ ODS_ICON_NAME.minus }
          label=""
          onBlur={ () => this.onOdsBlur() }
          onClick={ () => this.decrement() }
          size={ ODS_BUTTON_SIZE.sm }
          variant={ ODS_BUTTON_VARIANT.outline }>
        </ods-button>

        <ods-input
          ariaLabel={ this.ariaLabel }
          ariaLabelledby= { this.ariaLabelledby }
          class="ods-quantity__input"
          defaultValue={ isNumeric(this.defaultValue) ? this.defaultValue : undefined }
          exportparts="input"
          hasError={ this.getHasError() }
          isDisabled={ this.isDisabled }
          isReadonly={ this.isReadonly }
          isRequired={ this.isRequired }
          max={ this.max }
          min={ this.min }
          name={ this.name }
          onKeyUp={ (event: KeyboardEvent): void => submitFormOnEnter(event, this.internals.form) }
          onOdsBlur={ () => this.onOdsBlur() }
          onOdsChange={ (event: OdsInputChangeEvent) => this.onOdsChange(event) }
          onOdsInvalid={ (event: CustomEvent<{ isInvalid: boolean }>) => this.onOdsInvalid(event) }
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
          onBlur={ () => this.onOdsBlur() }
          onClick={ () => this.increment() }
          size={ ODS_BUTTON_SIZE.sm }
          variant={ ODS_BUTTON_VARIANT.outline }>
        </ods-button>
      </Host>
    );
  }
}
