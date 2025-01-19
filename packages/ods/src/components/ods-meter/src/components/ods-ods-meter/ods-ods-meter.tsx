import type { FunctionalComponent } from '@stencil/core';
import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  shadow: true,
  styleUrl: 'ods-ods-meter.scss',
  tag: 'ods-ods-meter',
})
export class OdsOdsMeter {
  @Prop({ reflect: true }) public min: number = 0;
  @Prop({ reflect: true }) public max: number = 100;
  @Prop({ reflect: true }) public low: number = 15;
  @Prop({ reflect: true }) public high: number = 85;
  @Prop({ reflect: true }) public value: number = 10;
  @Prop({ reflect: true }) public optimum: number = 85;
  @Prop({ reflect: true }) public label?: string = 'Label';

  public generateMeterBackgroundColor(): string {
    if (!this.value) {
      return '';
    } else if (this.value < this.low) {
      return 'ods-ods-meter__range--warning';
    } else if (this.value >= this.high) {
      return 'ods-ods-meter__range--success';
    }
    return 'ods-ods-meter__range--primary';
  }

  render(): FunctionalComponent {
    const bgColor = this.generateMeterBackgroundColor();
    return (
      <Host class="ods-ods-meter" role="article" aria-label={this.label}>
        <label htmlFor="meter" class="ods-ods-meter__label" id="ads-ods-meter-label">
          {this.label}:
        </label>
        <div class="ods-ods-meter__meter" aria-labelledby="ads-ods-meter-label" role="meter">
          <div
            title={this.label}
            class={`ods-ods-meter__range ${bgColor}`}
            style={{ width: `${this.value}%` }}
            aria-valuemin={this.min}
            aria-valuemax={this.max}
            aria-valuelow={this.low}
            aria-valuehigh={this.high}
            aria-valuenow={this.value}
            aria-valuetext={this.label}
            part="meter"
          ></div>
        </div>
      </Host>
    );
  }
}
