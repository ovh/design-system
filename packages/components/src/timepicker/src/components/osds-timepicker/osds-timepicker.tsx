import type { ODS_TIMEZONE } from './constants/timezones';
import type { ODS_TIMEZONES_PRESET } from './constants/timezones-preset';
import type { OdsTimepickerAttribute } from './interfaces/attributes';
import type { OdsTimepickerEvent, OdsTimepickerValueChangeEventDetail } from './interfaces/events';
import type { OdsTimepickerMethod } from './interfaces/methods';
import type { OdsInputValueChangeEvent, OsdsInput } from '../../../../input/src';
import type { OdsCommonFieldValidityState, OdsInputValue } from '@ovhcloud/ods-common-core';
import type { EventEmitter } from '@stencil/core';
import { OdsLogger } from '@ovhcloud/ods-common-core';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { AttachInternals, Component, Element, Event, Host, Listen, Method, Prop, Watch, h } from '@stencil/core';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsTimepickerController } from './core/controller';
import { ODS_INPUT_TYPE } from '../../../../input/src';

@Component({
  formAssociated: true,
  shadow: true,
  styleUrl: 'osds-timepicker.scss',
  tag: 'osds-timepicker',
})
export class OsdsTimepicker implements OdsTimepickerAttribute, OdsTimepickerEvent, OdsTimepickerMethod {
  logger = new OdsLogger('OsdsTimepicker');
  private osdsInput?: OsdsInput;
  timezonesList: ODS_TIMEZONE[] = [];
  controller = new OdsTimepickerController(this);

  @Element() el!: HTMLElement;

  @AttachInternals() internals!: ElementInternals;

  @Prop() ariaLabel: HTMLElement['ariaLabel'] = DEFAULT_ATTRIBUTE.ariaLabel;
  @Prop({ reflect: true }) public clearable? = DEFAULT_ATTRIBUTE.clearable;
  @Prop({ mutable: true, reflect: true }) public currentTimezone?: ODS_TIMEZONE = DEFAULT_ATTRIBUTE.currentTimezone;
  @Prop({ reflect: true }) defaultValue: string | null = DEFAULT_ATTRIBUTE.defaultValue;
  @Prop({ reflect: true }) public disabled = DEFAULT_ATTRIBUTE.disabled;
  @Prop({ reflect: true }) public error = DEFAULT_ATTRIBUTE.error;
  @Prop({ reflect: true }) public inline? = DEFAULT_ATTRIBUTE.inline;
  @Prop({ reflect: true }) name: string = DEFAULT_ATTRIBUTE.name;
  @Prop({ mutable: true, reflect: true }) public timezones?: ODS_TIMEZONE[] | ODS_TIMEZONES_PRESET | string = DEFAULT_ATTRIBUTE.timezones;
  @Prop({ mutable: true, reflect: true }) public value: OdsInputValue = DEFAULT_ATTRIBUTE.value;
  @Prop({ mutable: true, reflect: true }) public withSeconds? = DEFAULT_ATTRIBUTE.withSeconds;

  @Event() odsBlur!: EventEmitter<void>;
  @Event() odsClear!: EventEmitter<void>;
  @Event() odsFocus!: EventEmitter<void>;
  @Event() odsReset!: EventEmitter<void>;
  @Event() odsValueChange!: EventEmitter<OdsTimepickerValueChangeEventDetail>;

  @Method()
  async getValidity(): Promise<OdsCommonFieldValidityState | undefined> {
    const inputEl = await this.osdsInput?.getInputEl();
    if (inputEl) {
      return this.controller.getValidity(inputEl);
    }
    return undefined;
  }

  @Method()
  async clear(): Promise<void> {
    return this.controller.clear();
  }

  @Method()
  async reset(): Promise<void> {
    return this.controller.reset();
  }

  @Listen('odsValueChange')
  onValueChange(event: OdsInputValueChangeEvent): void {
    this.controller.onValueChange(event);
  }

  @Watch('timezones')
  @Watch('currentTimezone')
  handleTimezones(): void {
    this.initTimezones();
  }

  @Watch('withSeconds')
  @Watch('value')
  onSecondsChange(withSeconds: boolean): void {
    const value = this.controller.formatValue(this.osdsInput?.value as string, withSeconds);

    if (value) {
      this.osdsInput!.value = value;
    }
  }

  componentWillLoad(): void {
    this.initTimezones();
  }

  formResetCallback(): void {
    this.reset();
  }

  initTimezones(): void {
    if (this.currentTimezone || (this.timezones && this.timezones.length > 0 )) {
      this.controller.handleCurrentTimezone();
      this.controller.handleTimezones();
    }
  }

  render(): void {
    const {
      ariaLabel,
      clearable,
      currentTimezone,
      defaultValue,
      disabled,
      error,
      inline,
      name,
      timezones,
      value,
      withSeconds,
    } = this;

    return (
      <Host class={{
        'osds-timepicker': true,
        'osds-timepicker--inline': inline ?? false,
      }}>
        <osds-input class="osds-timepicker__time"
          ariaLabel={ ariaLabel }
          clearable={ clearable }
          color={ ODS_THEME_COLOR_INTENT.primary }
          defaultValue={ defaultValue }
          disabled={ disabled }
          error={ error }
          inline={ inline }
          name={ name }
          ref={ (el?: HTMLElement): OsdsInput => this.osdsInput = el as OsdsInput & HTMLElement }
          step={ withSeconds ? 1 : undefined }
          type={ ODS_INPUT_TYPE.time }
          value={ value }
        >
        </osds-input>
        {
          (currentTimezone || (timezones && timezones.length > 0)) && <osds-select
            class="osds-timepicker__timezones"
            disabled={ disabled }
            error={ error }
            inline={ inline }
            value={ this.timezonesList.length === 1 ? this.timezonesList[0] : currentTimezone }
            tabindex="0">
            { this.timezonesList.map((timezone) => {
              return <osds-select-option value={ timezone }>{ timezone }</osds-select-option>;
            }) }
          </osds-select>
        }
      </Host>
    );
  }
}
