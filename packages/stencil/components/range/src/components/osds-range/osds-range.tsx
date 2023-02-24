import { Component, Element, Event, EventEmitter, Host, Method, Prop, Watch, h } from '@stencil/core';
import {
  OdsErrorStateControl,
  OdsFormControl,
  OdsFormForbiddenValues,
  OdsLogger,
  OdsRange,
  OdsRangeController,
  OdsRangeEvents,
  OdsRangeMethods,
  OdsRangeValidityState,
  OdsRangeValue,
  OdsRangeValueChangeEventDetail,
  odsRangeDefaultAttributes
} from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';

import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

/**
 * @slot start - Fixed start button content
 * @slot (unnamed) - Range content
 * @slot end - Fixed end button content
 */
@Component({
  tag: 'osds-range',
  styleUrl: 'osds-range.scss',
  shadow: true
})
export class OsdsRange implements OdsRange<OdsStencilMethods<OdsRangeMethods>, OdsStencilEvents<OdsRangeEvents>> {
  private logger = new OdsLogger('OsdsRange');
  private static inputIds = 0;
  private readonly inputIdNumber = OsdsRange.inputIds++;
  private readonly inputId = `ods-input-${this.inputIdNumber}`;
  private readonly secondaryInputIdNumber = OsdsRange.inputIds++;
  private readonly secondaryInputId = `ods-input-${this.secondaryInputIdNumber}`;
  controller: OdsRangeController = new OdsRangeController(this);

  @Element() el!: HTMLElement;
  inputEl?: HTMLInputElement;
  dualInputEl?: HTMLInputElement;

  /** @see OdsRangeAttributes.color */
  @Prop({ reflect: true }) public color?: OdsThemeColorIntent = odsRangeDefaultAttributes.color;

  /** @see OdsRangeAttributes.disabled */
  @Prop({ reflect: true }) public disabled?: boolean = odsRangeDefaultAttributes.disabled;

  /** @see OdsRangeAttributes.flex */
  @Prop({ reflect: true }) public flex?: boolean = odsRangeDefaultAttributes.flex;

  /** @see OdsRangeAttributes.max */
  @Prop({ reflect: true }) public max?: number = odsRangeDefaultAttributes.max;

  /** @see OdsRangeAttributes.min */
  @Prop({ reflect: true }) public min?: number = odsRangeDefaultAttributes.min;

  /** @see OdsRangeAttributes.step */
  @Prop({ reflect: true }) public step?: number = odsRangeDefaultAttributes.step;

  /** @see OdsRangeAttributes.value */
  @Prop({ reflect: true, mutable: true }) public value: OdsRangeValue = odsRangeDefaultAttributes.value;

  /** @see OdsRangeAttributes.formControl */
  @Prop({ reflect: true }) formControl?: OdsFormControl<OdsRangeValidityState> = odsRangeDefaultAttributes.formControl;

  /** @see OdsRangeAttributes.errorStateControl */
  @Prop({ reflect: true }) errorStateControl?: OdsErrorStateControl = odsRangeDefaultAttributes.errorStateControl;

  /** @see OdsRangeAttributes.error */
  @Prop({ reflect: true }) error?: boolean = odsRangeDefaultAttributes.error;

  /** @see OdsRangeAttributes.forbiddenValues */
  @Prop({ reflect: true }) forbiddenValues: OdsFormForbiddenValues<number> = odsRangeDefaultAttributes.forbiddenValues;

  /** @see OdsRangeEvents.odsValueChange */
  @Event() odsValueChange!: EventEmitter<OdsRangeValueChangeEventDetail>;

  @Watch('formControl')
  onFormControlChange(formControl?: OdsFormControl<OdsRangeValidityState>): void {
    this.controller.onFormControlChange(formControl);
  }

  @Watch('value')
  onValueChange(newValue: OdsRangeValue, oldValue?: OdsRangeValue): void {
    this.controller.onValueChange(newValue, oldValue);
  }

  /**
   * @see OdsRangeBehavior.beforeInit
   */
  beforeInit(): void {
    this.controller.beforeInit();
  }

  /**
   * @see OdsRangeBehavior.beforeRender
   */
  beforeRender(): void {
    this.controller.validateAttributes();
  }

  /**
   * @see OdsRangeBehavior.afterRender
   */
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

  /** @see OdsRangeMethods.getValidity */
  @Method()
  async getValidity(): Promise<OdsRangeValidityState> {
    return this.controller.getRangeValidity();
  }

  /**
   * @see OdsRangeBehavior.emitChange
   */
  emitChange(newValue: OdsRangeValue, oldValue?: OdsRangeValue): void {
    this.logger.log('emit', { newValue, oldValue });
    this.odsValueChange.emit({
      value: newValue,
      oldValue: oldValue,
      validity: this.controller.getRangeValidity()
    });
  }

  /**
   * @see OdsRangeBehavior.onInput
   */
  onInput(event: Event, inputEl: HTMLInputElement, dual = false): void {
    this.controller.onInput(event, inputEl, dual);
  }

  /**
   * @see OdsRangeBehavior.onKeyup
   */
  onKeyup(event: KeyboardEvent, inputEl: HTMLInputElement, dual = false): void {
    this.controller.onKeyup(event, inputEl, dual);
  }

  handleClick(): void {
    this.controller.handleClick();
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
      <Host {...{
        onclick: this.handleClick.bind(this),
      }}
        class={{
          'ods-error': this.hasError(),
          'dual-range': this.controller.isDualRange()
        }}
      >
        <span {...{
          class: 'range-bounds',
          'aria-hidden': 'true'
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
            '--ods-range-percent-value-secondary': `${percentageDual}%`
          },
          type: 'range',
          value: val as string
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
          value: dualValue
        }} /> : ''}
        </div>
      </Host>
    );
  }
}
