import type { EventEmitter, FunctionalComponent } from '@stencil/core';
import { AttachInternals, Component, Element, Event, Host, Method, Prop, State, Watch, h } from '@stencil/core';
import { getRandomHTMLId } from '../../../../../utils/dom';
import { ODS_INPUT_TYPE } from '../../../../input/src';
import { ODS_TEXT_PRESET } from '../../../../text/src';
import { type OdsTooltip } from '../../../../tooltip/src';
import { getDefaultValue, isDualRange, setFormValue, toPercentage } from '../../controller/ods-range';
import { type OdsRangeChangeEventDetail } from '../../interfaces/event';

@Component({
  formAssociated: true,
  shadow: true,
  styleUrl: 'ods-range.scss',
  tag: 'ods-range',
})
export class OdsRange {
  private hostId: string = '';
  private inputEl?: HTMLInputElement;
  private inputElDual?: HTMLInputElement;
  private inputObservable?: MutationObserver;
  private inputRangeId = 'input-range';
  private inputRangeDualId = 'input-range-dual';
  private tooltip?: OdsTooltip;
  private tooltipDual?: OdsTooltip;

  @State() dualValue?: number;
  @State() currentValue?: number;
  @State() isDualRange: boolean = false;

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
  @Prop({ mutable: true, reflect: true }) public value: number | [number, number] | null = 0;

  @Event() odsBlur!: EventEmitter<void>;
  @Event() odsChange!: EventEmitter<OdsRangeChangeEventDetail>;
  @Event() odsClear!: EventEmitter<void>;
  @Event() odsFocus!: EventEmitter<void>;
  @Event() odsReset!: EventEmitter<void>;

  @Method()
  async clear(): Promise<void> {
    this.value = null;
    this.odsClear.emit();
  }

  @Method()
  async getValidity(): Promise<ValidityState | undefined> {
    return this.inputEl?.validity;
  }

  @Method()
  async reset(): Promise<void> {
    this.value = this.defaultValue ?? null;
    this.odsReset.emit();
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
      if (valueMax > this.max) {
        this.value = [this.value[0], this.max];
      }

      if (valueMin > this.max) {
        this.value = [this.max, this.value[1]];
      }

      if (this.min > valueMax) {
        this.value = [this.value[0], this.min];
      }

      if (this.min > valueMin) {
        this.value = [this.min, this.value[1]];
      }
    }
  }

  @Watch('value')
  private onValueChange(): void {
    if (isDualRange(this.value)) {
      this.isDualRange = true;
      this.changeValues(this.value[0], this.value[1]);
    } else {
      this.isDualRange = false;
      this.changeValues(this.value ?? undefined);
    }
    setFormValue(this.internals, this.value);
  }

  componentWillLoad(): void {
    this.hostId = this.el.id || getRandomHTMLId();

    if (!this.value) {
      this.value = getDefaultValue(this.min, this.max, this.defaultValue);
    }
    this.onMinOrMaxChange();
    this.onValueChange();
  }

  componentDidLoad(): void {
    this.inputObservable = new MutationObserver(this.onInputElChange.bind(this));

    if (this.inputEl) {
      this.inputObservable.observe(this.inputEl, { attributes: true });
    }
  }

  disconnectedCallback(): void {
    this.inputObservable?.disconnect();
  }

  async formResetCallback(): Promise<void> {
    await this.reset();
  }

  private changeValues(currentValue?: number, dualValue?: number): number | [number, number] | undefined {
    let value: number | [number, number] | undefined;

    if (this.isDualRange && currentValue !== undefined && dualValue !== undefined) {
      this.currentValue = currentValue;
      this.dualValue = dualValue;
      value = [currentValue, dualValue];
    } else {
      this.currentValue = currentValue;
      value = this.currentValue;
    }
    return value;
  }

  private onInput(isDualInput: boolean): void {
    const step = this.step ?? 1;
    const isInputsValuesEqual = Number(this.inputElDual?.value) - Number(this.inputEl?.value) < step;
    if (isInputsValuesEqual) {
      if (isDualInput) {
        this.onInputElDual(step);
      } else {
        this.onInputEl(step);
      }
    }

    this.isDualRange = isDualRange(this.value);
    this.value = this.changeValues(Number(this.inputEl?.value), Number(this.inputElDual?.value)) ?? null;
    this.odsChange.emit({
      name: this.name,
      validity: this.inputEl?.validity,
      value: this.value,
    });
  }

  private onInputEl(step : number): void {
    if (this.inputEl && this.inputElDual) {
      this.inputEl.value = `${(Number(this.inputElDual.value) ?? 0) - step}`;
    }
  }

  private onInputElChange(mutationList: MutationRecord[]): void {
    for (const mutation of mutationList) {
      if(mutation.attributeName && ['step', 'min', 'max'].includes(mutation.attributeName)) {
        this.onInput(false);
      }
    }
  }

  private onInputElDual(step : number): void {
    if (this.inputEl && this.inputElDual) {
      this.inputElDual.value = `${(Number(this.inputEl.value) ?? 0) + step}`;
    }
  }

  private hideTooltip(): void {
    this.tooltip?.hide();
  }

  private hideTooltipDual(): void {
    this.tooltipDual?.hide();
  }

  private showTooltip(): void {
    this.tooltip?.show();
  }

  private showTooltipDual(): void {
    this.tooltipDual?.show();
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
        id={ this.hostId }
        style={{
          '--ods-range-value-percentage': `${percentage}%`,
          '--ods-range-value-percentage-dual': `${percentageDual}%`,
        }}>
        <input
          class={{
            'ods-range__range': true,
            'ods-range__range--error': this.hasError,
          }}
          aria-valuemax={ this.max }
          aria-valuemin={ this.min }
          aria-valuenow={ this.value }
          disabled={ this.isDisabled }
          id={ this.inputRangeId }
          onBlur={ () => this.odsBlur.emit() }
          onFocus={ () => this.odsFocus.emit() }
          onFocusin={ () => this.showTooltip() }
          onFocusout={ () => this.hideTooltip() }
          onInput={ () => this.onInput(false) }
          onMouseOver={ () => this.showTooltip() }
          onMouseLeave={ () => this.hideTooltip() }
          part="range"
          max={ this.max }
          min={ this.min }
          ref={ (el?: HTMLInputElement) => this.inputEl = el }
          type={ ODS_INPUT_TYPE.range }
          step={ this.step }
          value={ this.currentValue?.toString() }
        />

        <div
          class="ods-range__shadow-thumb"
          id="ods-range-shadow-thumb"
          style={{
            left: `calc(${percentage}% - (${percentage * 0.15}px))`,
          }}>
        </div>

        {
          !this.isDisabled && this.currentValue &&
          <ods-tooltip
            position="top"
            ref={ (el: unknown) => this.tooltip = el as unknown as OdsTooltip }
            shadowDomTriggerId="ods-range-shadow-thumb"
            triggerId={ this.hostId }
            withArrow>
            { this.currentValue }
          </ods-tooltip>
        }

        {
          this.isDualRange &&
          <input
            class={{
              'ods-range__range-dual': true,
              'ods-range__range-dual--error': this.hasError,
            }}
            aria-valuemax={ this.max }
            aria-valuemin={ this.min }
            aria-valuenow={ this.value }
            disabled={ this.isDisabled }
            id={ this.inputRangeDualId }
            onFocusin={ () => this.showTooltipDual() }
            onFocusout={ () => this.hideTooltipDual() }
            onInput={ () => this.onInput(true) }
            onMouseOver={ () => this.showTooltipDual() }
            onMouseLeave={ () => this.hideTooltipDual() }
            part="range-dual"
            max={ this.max }
            min={ this.min }
            ref={ (el?: HTMLInputElement) => this.inputElDual = el }
            type={ ODS_INPUT_TYPE.range }
            step={ this.step }
            value={ this.dualValue?.toString() }
          />
        }

        {
          !this.isDisabled && this.isDualRange &&
          <div
            class="ods-range__shadow-thumb"
            id="ods-range-shadow-thumb-dual"
            style={{
              left: `calc(${percentageDual}% - (${percentageDual * 0.15}px))`,
            }}>
          </div>
        }
        { !this.isDisabled && this.isDualRange && this.dualValue &&
          <ods-tooltip
            position="top"
            ref={ (el: unknown) => this.tooltipDual = el as OdsTooltip }
            shadowDomTriggerId="ods-range-shadow-thumb-dual"
            triggerId={ this.hostId }
            withArrow>
            { this.dualValue }
          </ods-tooltip>
        }

        <ods-text preset={ODS_TEXT_PRESET.label} class="ods-range__min">{ this.min }</ods-text>
        <ods-text preset={ODS_TEXT_PRESET.label} class="ods-range__max">{ this.max }</ods-text>
      </Host>
    );
  }
}
