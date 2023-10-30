import type { ODS_TIMEZONE } from './constants/timezones';
import type { OdsTimepickerAttribute } from './interfaces/attributes';
import { Component, Host, Prop, h, Watch, Element } from '@stencil/core';
import { OsdsInput, ODS_INPUT_TYPE } from '@ovhcloud/ods-component-input';
import { OdsTimepickerController } from './core/controller';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { ODS_TIMEZONES_PRESET } from './constants/timezones-preset';

@Component({
  tag: 'osds-timepicker',
  // styleUrl: 'osds-timepicker.scss',
  shadow: true,
})
export class OsdsTimepicker implements OdsTimepickerAttribute {
  @Element() el!: HTMLElement;
  input: OsdsInput | HTMLInputElement | null = null;
  timezonesList: ODS_TIMEZONE[] = [];
  controller = new OdsTimepickerController(this);

  /** @see OdsTimepickerAttribute.clearable */
  @Prop({ reflect: true }) public clearable? = DEFAULT_ATTRIBUTE.clearable;

  /** @see OdsTimepickerAttribute.currentTimezone */
  @Prop({ reflect: true, mutable: true }) public currentTimezone?: ODS_TIMEZONE = DEFAULT_ATTRIBUTE.currentTimezone;

  /** @see OdsTimepickerAttribute.disabled */
  @Prop({ reflect: true }) public disabled? = DEFAULT_ATTRIBUTE.disabled;

  /** @see OdsTimepickerAttribute.error */
  @Prop({ reflect: true }) public error? = DEFAULT_ATTRIBUTE.error;

  /** @see OdsTimepickerAttribute.inline */
  @Prop({ reflect: true }) public inline? = DEFAULT_ATTRIBUTE.inline;

  /** @see OdsTimepickerAttribute.timezones */
  @Prop({ reflect: true, mutable: true }) public timezones?: ODS_TIMEZONE[] | ODS_TIMEZONES_PRESET = DEFAULT_ATTRIBUTE.timezones;

  /** @see OdsTimepickerAttribute.value */
  @Prop({ reflect: true, mutable: true }) public value? = DEFAULT_ATTRIBUTE.value;

  /** @see OdsTimepickerAttribute.withSeconds */
  @Prop({ reflect: true, mutable: true }) public withSeconds? = DEFAULT_ATTRIBUTE.withSeconds;

  @Watch('timezones')
  @Watch('currentTimezone')
  handleTimezones(): void {
    this.initTimezones()
  }

  @Watch('withSeconds')
  @Watch('value')
  onSecondsChange(withSeconds: boolean) {
    const value = this.controller.formatValue((this.input as HTMLInputElement).value, withSeconds);

    if (value) {
      (this.input as HTMLInputElement).value = value;
    }
  }

  componentWillLoad(): void {
    this.initTimezones();
  }

  initTimezones(): void {
    if (this.currentTimezone || this.timezones) {
      this.controller.handleCurrentTimezone();
      this.controller.handleTimezones();
    }
  }

  render() {
    const {
      clearable,
      currentTimezone,
      disabled,
      error,
      value,
      inline,
      timezones,
      withSeconds,
    } = this;

    return (
      <Host>
        <osds-input clearable={ clearable }
                    disabled={ disabled }
                    error={ error }
                    inline={ inline }
                    step={ withSeconds ? 1 : "" }
                    type={ ODS_INPUT_TYPE.time }
                    value={ value }
                    ref={(el: HTMLElement) => this.input = el as HTMLInputElement}
        >
        </osds-input>
        {
          (currentTimezone || timezones) && <osds-select
            disabled={ disabled }
            error={ error }
            inline={ inline }
            value={ currentTimezone }
            tabindex="0">
            { this.timezonesList.map((timezone) => {
              return <osds-select-option value={ timezone }>{ timezone }</osds-select-option>
            }) }
          </osds-select>
        }
      </Host>
    );
  }
}
