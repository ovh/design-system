import type { OdsSelect } from '../../../../select/src';
import type { OdsTimepickerChangeEventDetail } from '../../interfaces/event';
import type { EventEmitter, FunctionalComponent } from '@stencil/core';
import { AttachInternals, Component, Element, Event, Host, Listen, Method, Prop, State, Watch, h } from '@stencil/core';
import { submitFormOnEnter } from '../../../../../utils/dom';
import { ODS_INPUT_TYPE, type OdsInput, type OdsInputChangeEvent } from '../../../../input/src';
import { type OdsSelectChangeEvent } from '../../../../select/src';
import { type OdsTimezonePreset } from '../../constant/timezone-preset';
import { type OdsTimezone } from '../../constant/timezones';
import { formatValue, getCurrentTimezone, parseTimezones, updateInternals } from '../../controller/ods-timepicker';

const VALUE_DEFAULT_VALUE = null;

@Component({
  formAssociated: true,
  shadow: {
    delegatesFocus: true,
  },
  styleUrl: 'ods-timepicker.scss',
  tag: 'ods-timepicker',
})
export class OdsTimepicker {
  private defaultCurrentTimezone?: OdsTimezone;
  private hasTimezones: boolean = false;
  private odsInput?: OdsInput & HTMLElement;
  private odsSelect?: OdsSelect & HTMLElement;
  private previousValue?: string | null;
  private timezonesList: OdsTimezone[] = [];
  private shouldUpdateIsInvalidState: boolean = false;

  @Element() el!: HTMLElement;

  @AttachInternals() private internals!: ElementInternals;

  @State() isInvalid: boolean = false;

  @Prop({ reflect: true }) public ariaLabel: HTMLElement['ariaLabel'] = null;
  @Prop({ reflect: true }) public ariaLabelledby?: string;
  @Prop({ mutable: true, reflect: true }) public currentTimezone?: OdsTimezone;
  @Prop({ reflect: true }) public defaultValue?: string;
  @Prop({ reflect: true }) public hasError: boolean = false;
  @Prop({ reflect: true }) public isDisabled: boolean = false;
  @Prop({ reflect: true }) public isReadonly: boolean = false;
  @Prop({ reflect: true }) public isRequired: boolean = false;
  @Prop({ reflect: true }) public name!: string;
  @Prop({ reflect: true }) public timezones?: OdsTimezone[] | OdsTimezonePreset | string;
  @Prop({ mutable: true, reflect: true }) public value: string | null = VALUE_DEFAULT_VALUE;
  @Prop({ reflect: true }) public withSeconds: boolean = false;

  @Event() odsBlur!: EventEmitter<void>;
  @Event() odsChange!: EventEmitter<OdsTimepickerChangeEventDetail>;
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
    await this.odsSelect?.clear();
    this.odsClear.emit();
    this.shouldUpdateIsInvalidState = true;
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
    await this.odsSelect?.reset();
    this.odsReset.emit();
    this.shouldUpdateIsInvalidState = true;
  }

  @Method()
  async willValidate(): Promise<boolean> {
    return this.internals.willValidate;
  }

  @Watch('timezones')
  onTimezonesChange(): void {
    this.timezonesList = parseTimezones(this.timezones);
    this.currentTimezone = getCurrentTimezone(this.currentTimezone, this.timezonesList);
    this.hasTimezones = !!this.timezonesList.length;
  }

  @Watch('withSeconds')
  async formatValue(): Promise<void> {
    const value = formatValue(this.odsInput?.value as string, this.withSeconds);

    if (value) {
      this.previousValue = this.value ?? null;
      this.value = value;
    }
    await updateInternals(this.internals, this.value, this.odsInput);
  }

  componentWillLoad(): void {
    if (!this.value && (this.value !== VALUE_DEFAULT_VALUE || this.defaultValue)) {
      this.value = this.defaultValue ?? null;
    }
    this.onTimezonesChange();
    this.defaultCurrentTimezone = this.currentTimezone;
  }

  async componentDidLoad(): Promise<void> {
    this.formatValue();
  }

  async formResetCallback(): Promise<void> {
    await this.reset();
  }

  private onBlur(): void {
    this.isInvalid = !this.internals.validity.valid;
  }

  private async onOdsChange(event: OdsInputChangeEvent | OdsSelectChangeEvent, isFromSelect: boolean): Promise<void> {
    event.preventDefault();
    event.stopPropagation();

    if (isFromSelect) {
      this.currentTimezone = event.detail.value as OdsTimezone;
    } else {
      this.previousValue = event.detail.previousValue as string;
      this.value = event.detail.value as string;

      await updateInternals(this.internals, this.value, this.odsInput);
      // update here after update internals
      if (this.shouldUpdateIsInvalidState) {
        this.isInvalid = !this.internals.validity.valid;
        this.shouldUpdateIsInvalidState = false;
      }
    }

    this.odsChange.emit({
      currentTimezone: this.currentTimezone,
      name: this.name,
      previousValue: this.previousValue,
      validity: this.internals.validity,
      value: this.value,
    });
  }

  render(): FunctionalComponent {
    return (
      <Host class="ods-timepicker"
        disabled={ this.isDisabled }
        readonly={ this.isReadonly }>
        <ods-input
          ariaLabel={ this.ariaLabel }
          ariaLabelledby={ this.ariaLabelledby }
          defaultValue={ this.defaultValue }
          exportparts="input"
          hasError={ this.hasError || this.isInvalid }
          isDisabled={ this.isDisabled }
          isReadonly={ this.isReadonly }
          isRequired={ this.isRequired }
          name={ this.name }
          onKeyUp={ (event: KeyboardEvent): void => submitFormOnEnter(event, this.internals.form) }
          onOdsBlur={ () => this.onBlur() }
          onOdsChange={ (event: OdsInputChangeEvent) => this.onOdsChange(event, false) }
          onOdsClear={ (event: CustomEvent<void>) => event.stopPropagation() }
          onOdsReset={ (event: CustomEvent<void>) => event.stopPropagation() }
          ref={ (el?: HTMLElement): OdsInput => this.odsInput = el as OdsInput & HTMLElement }
          step={ this.withSeconds ? 1 : undefined }
          type={ ODS_INPUT_TYPE.time }
          value={ this.value }>
        </ods-input>

        {
          this.hasTimezones &&
          <ods-select
            class="ods-timepicker__timezones"
            defaultValue={ this.defaultCurrentTimezone }
            hasError={ this.hasError || this.isInvalid }
            isDisabled={ this.isDisabled }
            isReadonly={ this.isReadonly }
            isRequired={ this.isRequired }
            name={ this.name }
            onOdsBlur={ () => this.onBlur() }
            onOdsChange={ (event: OdsSelectChangeEvent) => this.onOdsChange(event, true) }
            onOdsClear={ (event: CustomEvent<void>) => event.stopPropagation() }
            onOdsReset={ (event: CustomEvent<void>) => event.stopPropagation() }
            part="select"
            ref={ (el?: HTMLElement): OdsSelect => this.odsSelect = el as OdsSelect & HTMLElement }
            value={ this.currentTimezone }>
            {
              this.timezonesList?.map((timezone) => {
                return <option value={ timezone }>{ timezone }</option>;
              })
            }
          </ods-select>
        }
      </Host>
    );
  }
}
