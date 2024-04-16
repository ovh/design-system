import { AttachInternals, Component, Event, type EventEmitter, type FunctionalComponent, Host, Method, Prop, h } from '@stencil/core';
import { ODS_BUTTON_COLOR, ODS_BUTTON_SIZE } from '../../../../button/src';
import { ODS_ICON_NAME } from '../../../../icon/src';
import { ODS_INPUT_TYPE, type OdsInput, type OdsInputValueChangeEvent } from '../../../../input/src';
import { isAddButtonDisabled, isMinusButtonDisabled, setFormValue } from '../../controller/ods-quantity';
import { type OdsQuantityEventValueChangeDetail } from '../../interfaces/events';

@Component({
  formAssociated: true,
  shadow: true,
  styleUrl: 'ods-quantity.scss',
  tag: 'ods-quantity',
})
export class OdsQuantity {
  private odsInput?: OdsInput;

  @AttachInternals() internals!: ElementInternals;

  @Prop({ reflect: true }) public ariaLabel: HTMLElement['ariaLabel'] = null;
  @Prop({ reflect: true }) public ariaLabelledby?: string;
  @Prop({ reflect: true }) public defaultValue?: number;
  @Prop({ reflect: true }) public hasError: boolean = false;
  @Prop({ reflect: true }) public isDisabled: boolean = false;
  @Prop({ reflect: true }) public isReadonly?: boolean = false;
  @Prop({ reflect: true }) public isRequired?: boolean = false;
  @Prop({ reflect: true }) public max?: number;
  @Prop({ reflect: true }) public min?: number;
  @Prop({ reflect: true }) public name!: string;
  @Prop({ reflect: true }) public placeholder?: string;
  @Prop({ reflect: true }) public step?: number;
  @Prop({ mutable: true, reflect: true }) public value: number | null = null;

  @Event() odsBlur!: EventEmitter<void>;
  @Event() odsChange!: EventEmitter<OdsQuantityEventValueChangeDetail>;
  @Event() odsClear!: EventEmitter<void>;
  @Event() odsFocus!: EventEmitter<void>;
  @Event() odsReset!: EventEmitter<void>;

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
    if (!this.value && this.value !== 0) {
      this.value = this.defaultValue ?? null;
    }
    setFormValue(this.internals, this.value);
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

  private onOdsChange(event: OdsInputValueChangeEvent): void {
    if (event.detail.value === null) {
      this.value = null;
      return;
    }
    this.value = Number(event.detail.value) ?? null;
    setFormValue(this.internals, this.value);
  }

  render(): FunctionalComponent {
    return (
      <Host class="ods-quantity">
        <ods-button
          class={{
            'ods-quantity__button': true,
            'ods-quantity__button--disabled': isMinusButtonDisabled(this.isDisabled, this.value, this.min),
            'ods-quantity__button--error': this.hasError,
          }}
          color={ this.hasError ? ODS_BUTTON_COLOR.critical : ODS_BUTTON_COLOR.primary }
          exportparts="button:button_minus"
          isDisabled={ isMinusButtonDisabled(this.isDisabled, this.value, this.min) }
          icon={ ODS_ICON_NAME.minus }
          label=""
          onClick={ () => this.decrement() }
          onFocus={ () => this.odsFocus.emit() }
          size={ ODS_BUTTON_SIZE.sm }>
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
          onOdsChange={ (event: OdsInputValueChangeEvent) => this.onOdsChange(event) }
          max={ this.max }
          min={ this.min }
          name={ this.name }
          placeholder={ this.placeholder }
          ref={ (el?: unknown) => this.odsInput = el as OdsInput }
          step={ this.step }
          type={ ODS_INPUT_TYPE.number }
          value={ this.value }>
        </ods-input>
        <ods-button
          class={{
            'ods-quantity__button': true,
            'ods-quantity__button--disabled': isAddButtonDisabled(this.isDisabled, this.value, this.max),
            'ods-quantity__button--error': this.hasError,
          }}
          color={ this.hasError ? ODS_BUTTON_COLOR.critical : ODS_BUTTON_COLOR.primary }
          exportparts="button:button_add"
          isDisabled={ isAddButtonDisabled(this.isDisabled, this.value, this.max) }
          icon={ ODS_ICON_NAME.add }
          label=""
          onClick={ () => this.increment() }
          onFocus={ () => this.odsFocus.emit() }
          size={ ODS_BUTTON_SIZE.sm }>
        </ods-button>
      </Host>
    );
  }
}
