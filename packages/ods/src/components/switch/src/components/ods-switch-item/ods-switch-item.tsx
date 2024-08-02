import { Component, Element, Event, type EventEmitter, type FunctionalComponent, Host, Method, Prop, State, h } from '@stencil/core';
import { type OdsRadio } from '../../../../radio/src';

@Component({
  shadow: false,
  styleUrl: 'ods-switch-item.scss',
  tag: 'ods-switch-item',
})
export class OdsSwitchItem {
  private observer?: MutationObserver;
  private odsRadio?: OdsRadio;

  @State() private inputId: string = '';
  @State() private isDisabled: boolean = false;
  @State() private isRequired: boolean = false;

  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) public ariaLabel: HTMLElement['ariaLabel'] = null;
  @Prop({ reflect: true }) public ariaLabelledby?: string;
  @Prop({ reflect: true }) public isChecked: boolean = false;
  @Prop({ reflect: true }) public value: string | null = null;

  @Event() odsBlur!: EventEmitter<void>;
  @Event() odsFocus!: EventEmitter<void>;

  @Method()
  async reset(): Promise<void> {
    return this.odsRadio?.reset();
  }

  @Method()
  async clear(): Promise<void> {
    return this.odsRadio?.clear();
  }

  @Method()
  async getValidity(): Promise<ValidityState | undefined> {
    return this.odsRadio?.getValidity();
  }

  componentWillLoad(): void {
    this.observer = new MutationObserver((mutations: MutationRecord[]) => {
      for (const mutation of mutations) {
        if (mutation.attributeName === 'input-id') {
          this.inputId = this.el.getAttribute('input-id') ?? '';
        }
        if (mutation.attributeName === 'is-disabled') {
          this.isDisabled = this.el.getAttribute('is-disabled') === '';
        }
        if (mutation.attributeName === 'is-required') {
          this.isRequired = this.el.getAttribute('is-required') === '';
        }
      }
    });
    this.observer.observe(this.el, { attributes: true });
  }

  disconnectedCallback(): void {
    this.observer?.disconnect();
  }

  private handleKeyDown(event: KeyboardEvent): void {
    // This prevents Space key to scroll the window down
    if (event.key === ' ') {
      event.preventDefault();
    }
  }

  private handleKeyUp(event: KeyboardEvent): void {
    if (this.isDisabled) {
      return;
    }
    if (event.key === 'Enter' || event.key === ' ') {
      this.odsRadio?.select();
    }
  }

  render(): FunctionalComponent {
    return (
      <Host class="ods-switch-item">
        <ods-radio
          ariaLabel={ this.ariaLabel }
          ariaLabelledby={ this.ariaLabelledby }
          class="ods-switch-item__radio"
          isChecked={ this.isChecked }
          isDisabled={ this.isDisabled }
          isRequired={ this.isRequired }
          inputId={ this.inputId }
          onOdsClear={ (event: CustomEvent<void>) => event.stopPropagation() }
          onOdsReset={ (event: CustomEvent<void>) => event.stopPropagation() }
          name={ this.el.getAttribute('name') ?? '' }
          ref={ (el?: HTMLElement) => this.odsRadio = el as unknown as OdsRadio }
          value={ this.value }>
        </ods-radio>

        <label
          class={{
            'ods-switch-item__label': true,
            'ods-switch-item__label--disabled': this.isDisabled,
          }}
          htmlFor={ this.inputId }
          tabindex={ !this.isDisabled ? 0 : -1 }
          onBlur={ () => this.odsBlur.emit() }
          onFocus={ () => this.odsFocus.emit() }
          onKeyDown={ (e: KeyboardEvent) => this.handleKeyDown(e) }
          onKeyUp={ (event: KeyboardEvent) => this.handleKeyUp(event) }>
          <slot></slot>
        </label>
      </Host>
    );
  }
}
