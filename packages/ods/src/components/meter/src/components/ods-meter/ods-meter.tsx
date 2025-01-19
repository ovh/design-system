import { Component, type FunctionalComponent, Host, Prop, h } from '@stencil/core';

@Component({
  shadow: true,
  styleUrl: 'ods-meter.scss',
  tag: 'ods-meter',
})
export class OdsMeter {
  @Prop({ reflect: true }) public ariaLabel?: HTMLElement['ariaLabel'] = 'Meter showing progress';
  @Prop({ reflect: true }) public ariaLabelledby?: string;
  @Prop({ reflect: true }) public high: number = 70;
  @Prop({ reflect: true }) public low: number = 30;
  @Prop({ reflect: true }) public max: number = 100;
  @Prop({ reflect: true }) public min: number = 0;
  @Prop({ reflect: true }) public value: number = 0;

  private calculateFillWidth(): string {
    const clampedValue = Math.max(this.min, Math.min(this.value, this.max));
    return `${((clampedValue - this.min) / (this.max - this.min)) * 100}%`;
  }

  private getFillColor(): string {
    if (this.value < this.low) {
      return 'var(--ods-color-warning-500)';
    } else if (this.value > this.high) {
      return 'var(--ods-color-success-500)';
    }
    return 'var(--ods-color-primary-500)';
  }

  render(): FunctionalComponent {
    return (
      <Host
        aria-label={this.ariaLabel}
        aria-labelledby={this.ariaLabelledby}
        aria-valuemax={this.max}
        aria-valuemin={this.min}
        aria-valuenow={this.value}
        aria-valuetext={`Current value: ${this.value}`}
        class="ods-meter"
        role="meter"
      >
        <div class="ods-meter__track" part="track">
          <div
            class="ods-meter__fill"
            part="fill"
            style={{
              backgroundColor: this.getFillColor(),
              width: this.calculateFillWidth(),
            }}
          ></div>
        </div>
      </Host>
    );
  }
}