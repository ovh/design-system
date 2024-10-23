import type { OdsSelect } from '../../../../select/src';
import type { OdsTimepickerChangeEventDetail } from '../../interfaces/event';
import type { EventEmitter, FunctionalComponent } from '@stencil/core';
import { AttachInternals, Component, Element, Event, Host, Method, Prop, Watch, h } from '@stencil/core';
import { submitFormOnEnter } from '../../../../../utils/dom';
import { ODS_INPUT_TYPE, type OdsInput, type OdsInputChangeEvent } from '../../../../input/src';
import { type OdsSelectChangeEvent } from '../../../../select/src';
import { type OdsTimezonePreset } from '../../constant/timezone-preset';
import { type OdsTimezone } from '../../constant/timezones';
import { formatValue, getCurrentTimezone, parseTimezones, setFormValue } from '../../controller/ods-timepicker';

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

  @Element() el!: HTMLElement;

  @AttachInternals() private internals!: ElementInternals;

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
  @Prop({ mutable: true, reflect: true }) public value: string | null = null;
  @Prop({ reflect: true }) public withSeconds: boolean = false;

  @Event() odsBlur!: EventEmitter<void>;
  @Event() odsChange!: EventEmitter<OdsTimepickerChangeEventDetail>;
  @Event() odsClear!: EventEmitter<void>;
  @Event() odsFocus!: EventEmitter<void>;
  @Event() odsReset!: EventEmitter<void>;

  @Method()
  public async clear(): Promise<void> {
    this.odsInput?.clear();
    this.odsSelect?.clear();
    this.odsClear.emit();
  }

  @Method()
  public async getValidity(): Promise<ValidityState | undefined> {
    return this.odsInput?.getValidity();
  }

  @Method()
  public async reset(): Promise<void> {
    this.odsInput?.reset();
    this.odsSelect?.reset();
    this.odsReset.emit();
  }

  @Watch('timezones')
  onTimezonesChange(): void {
    this.timezonesList = parseTimezones(this.timezones);
    this.currentTimezone = getCurrentTimezone(this.currentTimezone, this.timezonesList);
    this.hasTimezones = !!this.timezonesList.length;
  }

  @Watch('withSeconds')
  formatValue(): void {
    const value = formatValue(this.odsInput?.value as string, this.withSeconds);

    if (value) {
      this.previousValue = this.value ?? null;
      this.value = value;
    }
    setFormValue(this.internals, this.value);
  }

  componentWillLoad(): void {
    if (!this.value) {
      this.value = this.defaultValue ?? null;
    }
    this.onTimezonesChange();
    this.formatValue();
    this.defaultCurrentTimezone = this.currentTimezone;
  }

  async formResetCallback(): Promise<void> {
    await this.reset();
  }

  private async onOdsChange(event: OdsInputChangeEvent | OdsSelectChangeEvent, isFromSelect: boolean): Promise<void> {
    event.preventDefault();
    event.stopPropagation();

    if (isFromSelect) {
      this.currentTimezone = event.detail.value as OdsTimezone;
    } else {
      this.previousValue = event.detail.previousValue as string;
      this.value = event.detail.value as string;
      setFormValue(this.internals, this.value);
    }

    this.odsChange.emit({
      currentTimezone: this.currentTimezone,
      name: this.name,
      previousValue: this.previousValue,
      validity: await this.odsInput?.getValidity(),
      value: this.value,
    });
  }

  render(): FunctionalComponent {
    return (
      <Host class="ods-timepicker">
        <ods-input
          ariaLabel={ this.ariaLabel }
          ariaLabelledby={ this.ariaLabelledby }
          class="ods-timepicker__input"
          defaultValue={ this.defaultValue }
          exportparts="input"
          hasError={ this.hasError }
          isDisabled={ this.isDisabled }
          isReadonly={ this.isReadonly }
          name={ this.name }
          onKeyUp={ (event: KeyboardEvent): void => submitFormOnEnter(event, this.internals.form) }
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
            hasError={ this.hasError }
            isDisabled={ this.isDisabled }
            isReadonly={ this.isReadonly }
            name={ this.name }
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
