import type { ODS_TIMEZONE } from './constants/timezones';
import type { ODS_TIMEZONES_PRESET } from './constants/timezones-preset';
import type { OdsTimepickerAttribute } from './interfaces/attributes';
import type { OsdsInput } from '../../../../input/src';
import { Component, Element, Host, Prop, Watch, h } from '@stencil/core';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsTimepickerController } from './core/controller';
import { ODS_INPUT_TYPE } from '../../../../input/src';

@Component({
  shadow: true,
  styleUrl: 'osds-timepicker.scss',
  tag: 'osds-timepicker',
})
export class OsdsTimepicker implements OdsTimepickerAttribute {
  @Element() el!: HTMLElement;
  input: OsdsInput | HTMLInputElement | null = null;
  timezonesList: ODS_TIMEZONE[] = [];
  controller = new OdsTimepickerController(this);

  /** @see OdsTimepickerAttribute.clearable */
  @Prop({ reflect: true }) public clearable? = DEFAULT_ATTRIBUTE.clearable;

  /** @see OdsTimepickerAttribute.currentTimezone */
  @Prop({ mutable: true, reflect: true }) public currentTimezone?: ODS_TIMEZONE = DEFAULT_ATTRIBUTE.currentTimezone;

  /** @see OdsTimepickerAttribute.disabled */
  @Prop({ reflect: true }) public disabled? = DEFAULT_ATTRIBUTE.disabled;

  /** @see OdsTimepickerAttribute.error */
  @Prop({ reflect: true }) public error? = DEFAULT_ATTRIBUTE.error;

  /** @see OdsTimepickerAttribute.inline */
  @Prop({ reflect: true }) public inline? = DEFAULT_ATTRIBUTE.inline;

  /** @see OdsTimepickerAttribute.timezones */
  @Prop({ mutable: true, reflect: true }) public timezones?: ODS_TIMEZONE[] | ODS_TIMEZONES_PRESET = DEFAULT_ATTRIBUTE.timezones;

  /** @see OdsTimepickerAttribute.value */
  @Prop({ mutable: true, reflect: true }) public value? = DEFAULT_ATTRIBUTE.value;

  /** @see OdsTimepickerAttribute.withSeconds */
  @Prop({ mutable: true, reflect: true }) public withSeconds? = DEFAULT_ATTRIBUTE.withSeconds;

  @Watch('timezones')
  @Watch('currentTimezone')
  handleTimezones(): void {
    this.initTimezones();
  }

  @Watch('withSeconds')
  @Watch('value')
  onSecondsChange(withSeconds: boolean): void {
    const value = this.controller.formatValue((this.input as HTMLInputElement).value, withSeconds);

    if (value) {
      (this.input as HTMLInputElement).value = value;
    }
  }

  componentWillLoad(): void {
    this.initTimezones();
  }

  initTimezones(): void {
    if (this.currentTimezone || (this.timezones && this.timezones.length > 0 )) {
      this.controller.handleCurrentTimezone();
      this.controller.handleTimezones();
    }
  }

  render(): void {
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

    const hostClasses = `osds-timepicker ${ inline ? 'osds-timepicker--inline' : '' }`;

    return (
      <Host class={ hostClasses }>
        <osds-input class="osds-timepicker__time"
          clearable={ clearable }
          disabled={ disabled }
          error={ error }
          inline={ inline }
          step={ withSeconds ? 1 : undefined }
          type={ ODS_INPUT_TYPE.time }
          value={ value }
          ref={(el?: HTMLElement | null): void => {
            this.input = el as HTMLInputElement;
          }}
          color={ ODS_THEME_COLOR_INTENT.primary }
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
