import type { EventEmitter, FunctionalComponent } from '@stencil/core';
import { AttachInternals, Component, Element, Event, Host, Method, Prop, State, Watch, h } from '@stencil/core';
import { getRandomHTMLId } from '../../../../../utils/dom';
import { ODS_INPUT_TYPE } from '../../../../input/src';
import { ODS_TEXT_PRESET } from '../../../../text/src';
import { type OdsTooltip } from '../../../../tooltip/src';
import { isDualRange, setFormValue, toPercentage } from '../../controller/ods-range';
import { type OdsRangeValueChangeEventDetail } from '../../interfaces/event';

@Component({
  formAssociated: true,
  shadow: true,
  styleUrl: 'ods-range.scss',
  tag: 'ods-range',
})
export class OdsRange {
  private inputRangeId = 'input-range';
  private inputRangeDualId = 'input-range-dual';

  private hostId: string = '';
  private inputEl?: HTMLInputElement;
  private inputElDual?: HTMLInputElement;
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
  @Event() odsChange!: EventEmitter<OdsRangeValueChangeEventDetail>;
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
    this.value = this.defaultValue ?? this.min;
    this.odsReset.emit();
  }

  @Watch('value')
  private onValueChange(): void {
    this.isDualRange = isDualRange(this.value);
    isDualRange(this.value) ? this.changeValues(this.value[0], this.value[1]) : this.changeValues(this.value ?? undefined);
    setFormValue(this.internals, this.value);
  }

  componentWillLoad(): void {
    this.hostId = this.el.id || getRandomHTMLId();

    if (!this.value && this.defaultValue) {
      this.value = this.defaultValue;
    }
    setFormValue(this.internals, this.value);
    this.onValueChange();
  }

  async formResetCallback(): Promise<void> {
    await this.reset();
  }

  private onInput(): void {
    this.isDualRange = isDualRange(this.value);
    this.value = this.changeValues(Number(this.inputEl?.value), Number(this.inputElDual?.value)) ?? null;
    this.odsChange.emit({
      name: this.name,
      validity: this.inputEl?.validity,
      value: this.value,
    });
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

  private showTooltips(): void {
    this.tooltip?.show();
    this.tooltipDual?.show();
  }

  private hideTooltips(): void {
    this.tooltip?.hide();
    this.tooltipDual?.hide();
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
          onFocusin={ () => this.showTooltips() }
          onFocusout={ () => this.hideTooltips() }
          onInput={ () => this.onInput() }
          onMouseOver={ () => this.showTooltips() }
          onMouseLeave={ () => this.hideTooltips() }
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
          !this.isDisabled &&
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
          <div>
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
              onFocusin={ () => this.showTooltips() }
              onFocusout={ () => this.hideTooltips() }
              onInput={ () => this.onInput() }
              onMouseOver={ () => this.showTooltips() }
              onMouseLeave={ () => this.hideTooltips() }
              part="range-dual"
              max={ this.max }
              min={ this.min }
              ref={ (el?: HTMLInputElement) => this.inputElDual = el }
              type={ ODS_INPUT_TYPE.range }
              value={ this.dualValue?.toString() }
            />
            {
              !this.isDisabled &&
              <div>
                <div
                  class="ods-range__shadow-thumb"
                  id="ods-range-shadow-thumb-dual"
                  style={{
                    left: `calc(${percentageDual}% - (${percentageDual * 0.15}px))`,
                  }}>
                </div>
                <ods-tooltip
                  position="top"
                  ref={ (el: unknown) => this.tooltipDual = el as OdsTooltip }
                  shadowDomTriggerId="ods-range-shadow-thumb-dual"
                  triggerId={ this.hostId }
                  withArrow>
                  { this.dualValue }
                </ods-tooltip>
              </div>
            }
          </div>
        }

        <ods-text preset={ODS_TEXT_PRESET.label} class="ods-range__min">{ this.min }</ods-text>
        <ods-text preset={ODS_TEXT_PRESET.label} class="ods-range__max">{ this.max }</ods-text>
      </Host>
    );
  }
}
