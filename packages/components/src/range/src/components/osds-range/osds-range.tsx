import type { OdsRangeAttribute } from './interfaces/attributes';
import type { OdsRangeEvent, OdsRangeValueChangeEventDetail } from './interfaces/events';
import type { OdsRangeValue } from './interfaces/value';
import type { OdsErrorStateControl, OdsFormControl, OdsFormForbiddenValues, OdsValidityState } from '@ovhcloud/ods-common-core';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { Component, Element, Event, EventEmitter, Host, Method, Prop, Watch, h } from '@stencil/core';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsRangeController } from './core/controller';

@Component({
  tag: 'osds-range',
  styleUrl: 'osds-range.scss',
  shadow: true,
})
export class OsdsRange implements OdsRangeAttribute, OdsRangeEvent {
  private static inputIds = 0;
  private readonly inputIdNumber = OsdsRange.inputIds++;
  private readonly inputId = `ods-input-${this.inputIdNumber}`;
  private readonly secondaryInputIdNumber = OsdsRange.inputIds++;
  private readonly secondaryInputId = `ods-input-${this.secondaryInputIdNumber}`;
  controller: OdsRangeController = new OdsRangeController(this);
  inputEl?: HTMLInputElement;
  dualInputEl?: HTMLInputElement;

  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) public color?: ODS_THEME_COLOR_INTENT = DEFAULT_ATTRIBUTE.color;
  @Prop({ reflect: true }) public disabled?: boolean = DEFAULT_ATTRIBUTE.disabled;
  @Prop({ reflect: true }) public inline?: boolean = DEFAULT_ATTRIBUTE.inline;
  @Prop({ reflect: true }) public max?: number = DEFAULT_ATTRIBUTE.max;
  @Prop({ reflect: true }) public min?: number = DEFAULT_ATTRIBUTE.min;
  @Prop({ reflect: true }) public step?: number = DEFAULT_ATTRIBUTE.step;
  @Prop({ reflect: true, mutable: true }) public value: OdsRangeValue = DEFAULT_ATTRIBUTE.value;
  @Prop({ reflect: true }) formControl?: OdsFormControl<OdsValidityState> = DEFAULT_ATTRIBUTE.formControl;
  @Prop({ reflect: true }) errorStateControl?: OdsErrorStateControl = DEFAULT_ATTRIBUTE.errorStateControl;
  @Prop({ reflect: true }) error?: boolean = DEFAULT_ATTRIBUTE.error;
  @Prop({ reflect: true }) forbiddenValues: OdsFormForbiddenValues<number> = DEFAULT_ATTRIBUTE.forbiddenValues;

  @Event() odsValueChange!: EventEmitter<OdsRangeValueChangeEventDetail>;

  @Watch('formControl')
  onFormControlChange(formControl?: OdsFormControl<OdsValidityState>): void {
    this.controller.onFormControlChange(formControl);
  }

  @Watch('value')
  onValueChange(newValue: OdsRangeValue, oldValue?: OdsRangeValue): void {
    this.controller.onValueChange(newValue, oldValue);
  }

  beforeInit(): void {
    this.controller.beforeInit();
  }

  beforeRender(): void {
    this.controller.validateAttributes();
  }

  afterRender(): void {
    this.controller.initValue();
  }

  componentWillLoad(): void {
    this.beforeInit();
  }

  componentWillRender(): void {
    this.beforeRender();
  }

  componentDidRender(): void {
    this.afterRender();
  }

  @Method()
  async getValidity() {
    return this.controller.getRangeValidity();
  }

  emitChange(newValue: OdsRangeValue, oldValue?: OdsRangeValue): void {
    this.odsValueChange.emit({
      value: newValue,
      oldValue: oldValue,
      validity: this.controller.getRangeValidity(),
    });
  }

  onInput(event: Event, inputEl: HTMLInputElement, dual = false): void {
    this.controller.onInput(event, inputEl, dual);
  }

  onKeyup(event: KeyboardEvent, inputEl: HTMLInputElement, dual = false): void {
    this.controller.onKeyup(event, inputEl, dual);
  }

  hasError(): boolean {
    return this.controller.hasError();
  }

  render() {
    const { disabled, min, max, step, value } = this;
    const val = this.controller.isDualRange() ? this.controller.asDualValues()[0] : value;
    const dualValue = this.controller.isDualRange() ? this.controller.asDualValues()[1] : undefined;

    let percentage;
    let percentageDual;

    if (min !== undefined && max !== undefined) {
      percentage = (Number(val) - min) / (max - min) * 100 || 0;
      percentageDual = (Number(dualValue) - min) / (max - min) * 100 || 0;
    }

    return (
      <Host
        class={{
          'ods-error': this.hasError(),
          'dual-range': this.controller.isDualRange(),
        }}
      >
        <span {...{
          class: 'range-bounds',
          'aria-hidden': 'true',
        }}>
          <slot name={'start-bound'} />
          <slot name={'end-bound'} />
        </span>
        <div class={'input-container'}>
          <input {...{
            id: this.inputId,
            'aria-valuemin': min,
            'aria-valuemax': max,
            'aria-valuenow': val,
            class: 'range-input',
            disabled,
            max,
            min,
            oninput: (e: Event) => this.onInput(e, this.inputEl as HTMLInputElement),
            onkeyup: (e: KeyboardEvent) => this.onKeyup(e, this.inputEl as HTMLInputElement),
            ref: (el) => this.inputEl = el as HTMLInputElement,
            step,
            style: {
              '--ods-range-percent-value': `${percentage}%`,
              '--ods-range-percent-value-secondary': `${percentageDual}%`,
            },
            type: 'range',
            value: val as string,
          }} />
          {dualValue || dualValue === 0 ? <input {...{
            id: this.secondaryInputId,
            'aria-valuemin': min,
            'aria-valuemax': max,
            'aria-valuenow': dualValue,
            class: 'range-input_dual',
            disabled,
            max,
            min,
            oninput: (e: Event) => this.onInput(e, this.dualInputEl as HTMLInputElement, true),
            onkeyup: (e: KeyboardEvent) => this.onKeyup(e, this.dualInputEl as HTMLInputElement, true),
            ref: (el) => this.dualInputEl = el as HTMLInputElement,
            step,
            type: 'range',
            value: dualValue,
          }} /> : ''}
        </div>
      </Host>
    );
  }
}
