import type { OdsSelect } from '../../../../select/src';
import type { OdsTimepickerValueChangeEventDetail } from '../../interfaces/event';
import type { EventEmitter, FunctionalComponent } from '@stencil/core';
import { AttachInternals, Component, Element, Event, Host, Method, Prop, Watch, h } from '@stencil/core';
import { ODS_INPUT_TYPE, type OdsInput, type OdsInputValueChangeEvent } from '../../../../input/src';
import { type OdsSelectEventChange } from '../../../../select/src';
import { type OdsTimezonePreset } from '../../constant/timezone-preset';
import { type OdsTimezone } from '../../constant/timezones';
import { formatValue, getCurrentTimezone, parseTimezones, setFormValue } from '../../controller/ods-timepicker';

@Component({
  formAssociated: true,
  shadow: true,
  styleUrl: 'ods-timepicker.scss',
  tag: 'ods-timepicker',
})
export class OdsTimepicker {
  private defaultCurrentTimezone?: OdsTimezone;
  private odsInput?: OdsInput & HTMLElement;
  private odsSelect?: OdsSelect & HTMLElement;
  private timezonesList: OdsTimezone[] = [];

  @Element() el!: HTMLElement;

  @AttachInternals() private internals!: ElementInternals;

  @Prop({ reflect: true }) public ariaLabel: HTMLElement['ariaLabel'] = null;
  @Prop({ reflect: true }) public ariaLabelledby?: string;
  /** @docType OdsTimezone */
  @Prop({ mutable: true, reflect: true }) public currentTimezone?: OdsTimezone;
  @Prop({ reflect: true }) public defaultValue?: string;
  @Prop({ reflect: true }) public hasError: boolean = false;
  @Prop({ reflect: true }) public isDisabled: boolean = false;
  @Prop({ reflect: true }) public isReadonly: boolean = false;
  @Prop({ reflect: true }) public isRequired: boolean = false;
  @Prop({ reflect: true }) public name!: string;
  /** @docType  OdsTimezone[] | OdsTimezonePreset | string */
  @Prop({ reflect: true }) public timezones?: OdsTimezone[] | OdsTimezonePreset | string;
  @Prop({ mutable: true, reflect: true }) public value: string | null = null;
  @Prop({ reflect: true }) public withSeconds: boolean = false;

  @Event() odsBlur!: EventEmitter<void>;
  @Event() odsChange!: EventEmitter<OdsTimepickerValueChangeEventDetail>;
  @Event() odsClear!: EventEmitter<void>;
  @Event() odsFocus!: EventEmitter<void>;
  @Event() odsReset!: EventEmitter<void>;

  @Method()
  async clear(): Promise<void> {
    this.odsInput?.clear();
    this.odsSelect?.clear();
    this.odsClear.emit();
  }

  @Method()
  async getValidity(): Promise<ValidityState | undefined> {
    return this.odsInput?.getValidity();
  }

  @Method()
  async reset(): Promise<void> {
    this.odsInput?.reset();
    this.odsSelect?.reset();
    this.odsReset.emit();
  }

  @Watch('timezones')
  handleTimezones(): void {
    this.initTimezones();
  }

  @Watch('withSeconds')
  @Watch('value')
  onValueChange(): void {
    const value = formatValue(this.odsInput?.value as string, this.withSeconds);

    if (value) {
      this.value = value;
    }
    setFormValue(this.internals, this.value);
  }

  componentWillLoad(): void {
    if (!this.value) {
      this.value = this.defaultValue ?? null;
    }
    this.initTimezones();
    this.defaultCurrentTimezone = this.currentTimezone;
    setFormValue(this.internals, this.value);
  }

  async formResetCallback(): Promise<void> {
    await this.reset();
  }

  private hasTimezone(): boolean {
    return !!this.currentTimezone || !!this.timezones?.length;
  }

  private initTimezones(): void {
    if (this.hasTimezone()) {
      this.currentTimezone = getCurrentTimezone(this.currentTimezone);
      this.timezonesList = parseTimezones(this.timezones);
    }
  }

  private async onOdsChange(event: OdsInputValueChangeEvent | OdsSelectEventChange, isFromSelect: boolean): Promise<void> {
    event.preventDefault();
    event.stopPropagation();
    if (isFromSelect) {
      this.currentTimezone = event.detail.value as OdsTimezone;
    } else {
      this.value = event.detail.value as string;
    }
    this.odsChange.emit({
      currentTimezone: this.currentTimezone,
      name: this.name,
      oldValue: '',
      validity: await this.odsInput?.getValidity(),
      value: this.value ?? '',
    });
  }

  render(): FunctionalComponent {
    return (
      <Host class="ods-timepicker">
        <ods-input
          class="ods-timepicker__time"
          ariaLabel={ this.ariaLabel }
          ariaLabelledby={ this.ariaLabelledby }
          defaultValue={ this.defaultValue }
          exportparts="input"
          is-disabled={ this.isDisabled }
          is-readonly={ this.isReadonly }
          has-error={ this.hasError }
          onOdsChange={ (event: OdsInputValueChangeEvent) => this.onOdsChange(event, false) }
          onOdsClear={ (event: CustomEvent<void>) => event.stopPropagation() }
          onOdsReset={ (event: CustomEvent<void>) => event.stopPropagation() }
          name={ this.name }
          ref={ (el?: HTMLElement): OdsInput => this.odsInput = el as OdsInput & HTMLElement }
          step={ this.withSeconds ? 1 : undefined }
          type={ ODS_INPUT_TYPE.time }
          value={ this.value }
        >
        </ods-input>
        {
          this.hasTimezone() &&
          <ods-select
            class="ods-timepicker__timezones"
            default-value={ this.defaultCurrentTimezone }
            part="select"
            has-error={ this.hasError }
            is-disabled={ this.isDisabled }
            is-readonly={ this.isReadonly }
            onOdsChange={ (event: OdsSelectEventChange) => this.onOdsChange(event, true) }
            onOdsClear={ (event: CustomEvent<void>) => event.stopPropagation() }
            onOdsReset={ (event: CustomEvent<void>) => event.stopPropagation() }
            name={ this.name }
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
