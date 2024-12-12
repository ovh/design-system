import type { EventEmitter, FunctionalComponent } from '@stencil/core';
import { AttachInternals, Component, Element, Event, Host, Listen, Method, Prop, State, Watch, h } from '@stencil/core';
import { type OdsFormElement } from '../../../../../types';
import { getRandomHTMLId } from '../../../../../utils/dom';
import { type OdsTooltip } from '../../../../tooltip/src';
import { VALUE_DEFAULT_VALUE, getInitialValue, getTicks, isDualRange, toPercentage, updateInternals } from '../../controller/ods-range';
import { type OdsRangeChangeEventDetail } from '../../interfaces/event';

@Component({
  formAssociated: true,
  shadow: {
    delegatesFocus: true,
  },
  styleUrl: 'ods-range.scss',
  tag: 'ods-range',
})
export class OdsRange implements OdsFormElement {
  private hostId: string = '';
  private inputEl?: HTMLInputElement;
  private inputElDual?: HTMLInputElement;
  private inputRangeId = 'input-range';
  private inputRangeDualId = 'input-range-dual';
  private observable?: MutationObserver;
  private shouldUpdateIsInvalidState: boolean = false;
  private tooltip?: OdsTooltip;
  private tooltipDual?: OdsTooltip;
  private listId = getRandomHTMLId();

  @State() private activatedTicks: number[] = [];
  @State() private dualValue?: number;
  @State() private currentValue?: number;
  @State() private isDualRange: boolean = false;
  @State() private isInvalid: boolean | undefined;
  @State() private parsedTicks: number[] = [];

  @Element() el!: HTMLElement;

  @AttachInternals() private internals!: ElementInternals;

  @Prop({ reflect: true }) public defaultValue?: number | [number, number];
  @Prop({ reflect: true }) public hasError: boolean = false;
  @Prop({ reflect: true }) public isDisabled: boolean = false;
  @Prop({ reflect: true }) public isRequired: boolean = false;
  @Prop({ reflect: true }) public max: number = 100;
  @Prop({ reflect: true }) public min: number = 0;
  @Prop({ reflect: true }) public name!: string;
  @Prop({ reflect: true }) public step?: number;
  @Prop({ reflect: true }) public ticks?: string | number[];
  @Prop({ mutable: true, reflect: true }) public value: number | [number, number] | null | [null, null] = VALUE_DEFAULT_VALUE;

  @Event() odsBlur!: EventEmitter<void>;
  @Event() odsChange!: EventEmitter<OdsRangeChangeEventDetail>;
  @Event() odsClear!: EventEmitter<void>;
  @Event() odsFocus!: EventEmitter<void>;
  @Event() odsInvalid!: EventEmitter<{ isInvalid: boolean }>;
  @Event() odsReset!: EventEmitter<void>;

  @Listen('invalid')
  onInvalidEvent(event: Event): void {
    // Remove the native validation message popup
    event.preventDefault();

    // Enforce the state here as we may still be in pristine state (if the form is submitted before any changes occurs)
    this.isInvalid = true;
  }

  @Method()
  public async clear(): Promise<void> {
    // Element internal validityState is not yet updated, so we set the flag
    // to update our internal state when it will be up-to-date
    this.shouldUpdateIsInvalidState = true;

    if (this.isDualRange) {
      this.value = [null, null];
    } else {
      this.value = null;
    }
    this.odsClear.emit();
    this.emitOdsChange();
  }

  @Method()
  public async checkValidity(): Promise<boolean> {
    this.isInvalid = !this.internals.validity.valid;
    return this.internals.checkValidity();
  }

  @Method()
  public async getValidationMessage(): Promise<string> {
    return this.internals.validationMessage;
  }

  @Method()
  public async getValidity(): Promise<ValidityState> {
    return this.internals.validity;
  }

  @Method()
  public async reset(): Promise<void> {
    // Element internal validityState is not yet updated, so we set the flag
    // to update our internal state when it will be up-to-date
    this.shouldUpdateIsInvalidState = true;

    if (this.isDualRange) {
      this.value = this.defaultValue ?? [null, null];
    } else {
      this.value = this.defaultValue ?? null;
    }
    this.odsReset.emit();
    this.emitOdsChange();
  }

  @Method()
  public async reportValidity(): Promise<boolean> {
    this.isInvalid = !this.internals.validity.valid;
    return this.internals.reportValidity();
  }

  @Method()
  public async willValidate(): Promise<boolean> {
    return this.internals.willValidate;
  }

  @Watch('isInvalid')
  onIsInvalidChange(): void {
    this.odsInvalid.emit({ isInvalid: !!this.isInvalid });
  }

  @Watch('min')
  @Watch('max')
  onMinOrMaxChange(): void {
    if (!this.value) {
      return;
    }

    if (!isDualRange(this.value)) {
      this.value = Math.min(Math.max(this.value, this.min), this.max);
    } else {
      const [valueMin, valueMax] = this.value;
      if (valueMax && valueMax > this.max) {
        this.value = [this.value[0], this.max];
      }

      if (valueMin && valueMin > this.max) {
        this.value = [this.max, this.value[1]];
      }

      if (valueMax && this.min > valueMax) {
        this.value = [this.value[0], this.min];
      }

      if (valueMin && this.min > valueMin) {
        this.value = [this.min, this.value[1]];
      }
    }
  }

  @Watch('ticks')
  onTicksChange(): void {
    this.parsedTicks = getTicks(this.ticks, this.min, this.max);
    this.setActivatedTicks();
  }

  @Watch('value')
  private onValueChange(value: number | [number, number] | [ null, null] | null = this.value): void {
    if (isDualRange(value)) {
      this.isDualRange = true;
      this.fillInputs(value[0], value[1]);
    } else {
      this.isDualRange = false;
      this.fillInputs(value);
    }

    this.setActivatedTicks();

    updateInternals(this.internals, value, this.isRequired);

    // In case the value gets updated from an other source than a blur event
    // we may have to perform an internal validity state update
    if (this.shouldUpdateIsInvalidState) {
      this.isInvalid = !this.internals.validity.valid;
      this.shouldUpdateIsInvalidState = false;
    }
  }

  componentWillLoad(): void {
    this.hostId = this.el.id || getRandomHTMLId();
    this.value = getInitialValue(this.value, this.min, this.max, this.defaultValue);

    this.onTicksChange();
    this.onMinOrMaxChange();
    this.onValueChange();
    this.emitOdsChange();

    this.observable = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.attributeName === 'required') {
          updateInternals(this.internals, this.value, this.isRequired);
          this.isInvalid = !this.internals.validity.valid;
        }

        if(mutation.attributeName && ['step', 'min', 'max'].includes(mutation.attributeName)) {
          this.onInput(false);
        }
      }
    });
  }

  componentDidLoad(): void {
    if (this.inputEl) {
      this.observable?.observe(this.inputEl, {
        attributeFilter: ['step', 'min', 'max', 'required'],
        attributeOldValue: true,
        attributes: true,
      });
    }
  }

  disconnectedCallback(): void {
    this.observable?.disconnect();
  }

  async formResetCallback(): Promise<void> {
    await this.reset();
  }

  private emitOdsChange(): void {
    this.odsChange.emit({
      name: this.name,
      validity: this.internals.validity,
      value: this.value,
    });
  }

  private fillInputs(currentValue: number | null, dualValue?: number | null): number | [number, number]| [null, null] | undefined {
    let value: number | [number, number] | [null, null] | undefined;

    if (this.isDualRange) {
      this.currentValue = currentValue ?? undefined;
      this.dualValue = dualValue ?? undefined;
      value = [currentValue!, dualValue!];
    } else {
      this.currentValue = currentValue ?? undefined;
      value = this.currentValue;
    }
    return value;
  }

  private hideTooltip(): void {
    this.tooltip?.hide();
  }

  private hideTooltipDual(): void {
    this.tooltipDual?.hide();
  }

  private onBlur(): void {
    this.isInvalid = !this.internals.validity.valid;
    this.odsBlur.emit();
  }

  private onInput(isDualInput: boolean): void {
    if (!this.inputEl || (isDualInput && !this.inputElDual)) {
      return;
    }
    const step = this.step ?? 1;
    const isInputsValuesEqual = (this.inputElDual?.valueAsNumber ?? 0) - this.inputEl?.valueAsNumber < step;
    if (isInputsValuesEqual) {
      if (isDualInput) {
        this.setInputElDualValue(step);
      } else {
        this.setInputElValue(step);
      }
    }

    this.isDualRange = isDualRange(this.value);
    if (this.isDualRange) {
      this.value = [this.inputEl.valueAsNumber, this.inputElDual?.valueAsNumber ?? 0];
    } else {
      this.value = this.inputEl.valueAsNumber;
    }
  }

  private setInputElDualValue(step : number): void {
    if (this.inputEl && this.inputElDual) {
      this.inputElDual.valueAsNumber = (this.inputEl?.valueAsNumber ?? 0) + step;
    }
  }

  private setInputElValue(step : number): void {
    if (this.inputEl && this.inputElDual) {
      this.inputEl.valueAsNumber = (this.inputElDual?.valueAsNumber ?? 0) - step;
    }
  }

  private setActivatedTicks(): void {
    this.activatedTicks = this.parsedTicks.filter((tick) => {
      if (isDualRange(this.value)) {
        const [first, second] = this.value as [number, number];
        return this.value && tick >= first && tick <= second;
      } else {
        return this.value && tick <= (this.value as number);
      }
    });
  }

  private showTooltip(): void {
    this.tooltip?.show();
  }

  private showTooltipDual(): void {
    this.tooltipDual?.show();
  }

  private renderTicks(): FunctionalComponent | undefined {
    if (!this.parsedTicks || this.parsedTicks.length === 0) {
      return;
    }

    return (<div>
      <datalist id={ this.listId }>
        {
          this.parsedTicks.map((tick) => (<option value={ tick }></option>))
        }
      </datalist>

      <div class="ods-range__ticks">
        {
          this.parsedTicks.map((tick) => (
            <div
              class={{
                'ods-range__ticks__tick': true,
                'ods-range__ticks__tick--activated': this.activatedTicks.indexOf(tick) > -1,
                'ods-range__ticks__tick--disabled': this.isDisabled,
              }}
              style={{ left: `calc(${toPercentage(this.max, this.min, tick)}% - calc(var(--ods-range-tick-width) / 2))` }}>
            </div>
          ))
        }
      </div>
    </div>);
  }

  private renderTooltip(percentage: number, value?: number, isDualRange: boolean = false): FunctionalComponent {
    const shadowThumbId = isDualRange ? 'ods-range-shadow-thumb-dual': 'ods-range-shadow-thumb';
    return (
      <div>
        <div
          class="ods-range__shadow-thumb"
          id={ shadowThumbId }
          style={{
            left: `calc(${percentage}% - (${percentage * 0.15}px))`,
          }}>
        </div>

        {
          !this.isDisabled && value !== undefined &&
          <ods-tooltip
            position="top"
            ref={ (el: unknown) => {
              if (isDualRange) {
                return this.tooltipDual = el as unknown as OdsTooltip;
              }
              return this.tooltip = el as unknown as OdsTooltip;
            } }
            shadowDomTriggerId={ shadowThumbId }
            triggerId={ this.hostId }
            withArrow>
            { value }
          </ods-tooltip>
        }
      </div>
    );
  }

  render(): FunctionalComponent {
    const percentage = toPercentage(this.max, this.min, this.currentValue);
    const percentageDual = toPercentage(this.max, this.min, this.dualValue);

    return (
      <Host
        class={{
          'ods-range': true,
          'ods-range-dual': this.isDualRange,
        }}
        disabled={ this.isDisabled }
        id={ this.hostId }
        style={{
          '--ods-range-value-percentage': `${percentage}%`,
          '--ods-range-value-percentage-dual': `${percentageDual}%`,
        }}>
        <input
          class={{
            'ods-range__range': true,
            'ods-range__range--error': this.hasError || !!this.isInvalid,
          }}
          aria-valuemax={ this.max }
          aria-valuemin={ this.min }
          aria-valuenow={ this.value }
          disabled={ this.isDisabled }
          id={ this.inputRangeId }
          list={ this.listId }
          max={ this.max }
          min={ this.min }
          onBlur={ () => this.onBlur() }
          onChange={ () => this.emitOdsChange() }
          onFocus={ () => this.odsFocus.emit() }
          onFocusin={ () => this.showTooltip() }
          onFocusout={ () => this.hideTooltip() }
          onInput={ () => this.onInput(false) }
          onMouseLeave={ () => this.hideTooltip() }
          onMouseOver={ () => this.showTooltip() }
          part="range"
          ref={ (el?: HTMLInputElement) => this.inputEl = el }
          required={ this.isRequired }
          step={ this.step }
          type="range"
          value={ this.currentValue?.toString() }
        />

        { this.renderTicks() }

        { this.renderTooltip(percentage, this.currentValue) }

        {
          this.isDualRange &&
          <input
            class={{
              'ods-range__range-dual': true,
              'ods-range__range-dual--error': this.hasError || !!this.isInvalid,
            }}
            aria-valuemax={ this.max }
            aria-valuemin={ this.min }
            aria-valuenow={ this.value }
            disabled={ this.isDisabled }
            id={ this.inputRangeDualId }
            list={ this.listId }
            max={ this.max }
            min={ this.min }
            onChange={ () => this.emitOdsChange() }
            onFocusin={ () => this.showTooltipDual() }
            onFocusout={ () => this.hideTooltipDual() }
            onInput={ () => this.onInput(true) }
            onMouseLeave={ () => this.hideTooltipDual() }
            onMouseOver={ () => this.showTooltipDual() }
            part="range-dual"
            ref={ (el?: HTMLInputElement) => this.inputElDual = el }
            required={ this.isRequired }
            step={ this.step }
            type="range"
            value={ this.dualValue?.toString() }
          />
        }

        { this.isDualRange && this.renderTooltip(percentageDual, this.dualValue, true) }

        <div class="ods-range__info">
          <span class="ods-range__info__min">{ this.min }</span>
          <span class="ods-range__info__max">{ this.max }</span>
        </div>
      </Host>
    );
  }
}
