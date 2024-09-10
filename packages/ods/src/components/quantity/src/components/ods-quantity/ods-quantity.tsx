import { AttachInternals, Component, Event, type EventEmitter, type FunctionalComponent, Host, Method, Prop, h } from '@stencil/core';
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

  @Method()
  async checkValidity(): Promise<boolean> {
    return this.internals.checkValidity();
  }

  @Method()
  async clear(): Promise<void> {
    return this.odsInput?.clear();
  }

  @Method()
  async getValidity(): Promise<ValidityState | undefined> {
    return this.odsInput?.getValidity();
  }

  @Method()
  async reset(): Promise<void> {
    return this.odsInput?.reset();
  }

  componentWillLoad(): void {
    // if (!this.value && this.value !== 0) {
    //   this.value = this.defaultValue ?? null;
    // }
    // setFormValue(this.internals, this.value);

    if (!this.value && this.value !== 0 && (this.value !== VALUE_DEFAULT_VALUE || this.defaultValue)) {
      this.value = this.defaultValue ?? null;
    }
  }

  async componentDidLoad(): Promise<void> {
    // const validityState = await this.odsInput?.getValidity()
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
    // setFormValue(this.internals, this.value);
    await updateInternals(this.internals, this.value, this.odsInput);
  }

  render(): FunctionalComponent {
    return (
      <Host class="ods-quantity">
        <ods-button
          class="ods-quantity__button"
          color={ this.hasError ? ODS_BUTTON_COLOR.critical : ODS_BUTTON_COLOR.primary }
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
          hasError={ this.hasError }
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
          color={ this.hasError ? ODS_BUTTON_COLOR.critical : ODS_BUTTON_COLOR.primary }
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
