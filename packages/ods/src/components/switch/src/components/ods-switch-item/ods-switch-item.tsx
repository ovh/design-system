import { Component, Element, Event, type EventEmitter, type FunctionalComponent, Host, Method, Prop, State, h } from '@stencil/core';
import { type OdsRadio } from '../../../../radio/src';

@Component({
  shadow: false,
  styleUrl: 'ods-switch-item.scss',
  tag: 'ods-switch-item',
})
export class OdsSwitchItem {
  private isInvalid: boolean = false;
  private observer?: MutationObserver;
  private odsRadio?: OdsRadio & HTMLElement;

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
  @Event() odsInvalid!: EventEmitter<boolean>;

  @Method()
  public async checkValidity(): Promise<boolean | undefined> {
    const validity = await this.odsRadio?.getValidity();
    this.isInvalid = !validity?.valid;
    return this.odsRadio?.checkValidity();
  }

  @Method()
  public async clear(): Promise<void> {
    return this.odsRadio?.clear();
  }

  @Method()
  public async getValidationMessage(): Promise<string | undefined> {
    return this.odsRadio?.getValidationMessage();
  }

  @Method()
  public async getValidity(): Promise<ValidityState | undefined> {
    return this.odsRadio?.getValidity();
  }

  @Method()
  public async reset(): Promise<void> {
    return this.odsRadio?.reset();
  }

  @Method()
  public async reportValidity(): Promise<boolean | undefined> {
    const validity = await this.odsRadio?.getValidity();
    this.isInvalid = !validity?.valid;
    return this.odsRadio?.reportValidity();
  }

  @Method()
  public async willValidate(): Promise<boolean | undefined> {
    return this.odsRadio?.willValidate();
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

  private async onBlur(): Promise<void> {
    this.isInvalid = !(await this.odsRadio?.getValidity())?.valid;
    this.odsInvalid.emit(this.isInvalid);
    this.odsBlur.emit();
  }

  private onOdsInvalid(event: CustomEvent<boolean>): void {
    this.isInvalid = event.detail;
  }

  render(): FunctionalComponent {
    return (
      <Host class="ods-switch-item"
        disabled={ this.isDisabled }>
        <ods-radio
          ariaLabel={ this.ariaLabel }
          ariaLabelledby={ this.ariaLabelledby }
          class="ods-switch-item__radio"
          isChecked={ this.isChecked }
          isDisabled={ this.isDisabled }
          isRequired={ this.isRequired }
          inputId={ this.inputId }
          onOdsClear={ (event: CustomEvent<void>) => event.stopPropagation() }
          onOdsInvalid={ (event: CustomEvent<boolean>) => this.onOdsInvalid(event) }
          onOdsReset={ (event: CustomEvent<void>) => event.stopPropagation() }
          name={ this.el.getAttribute('name') ?? '' }
          ref={ (el?: HTMLElement) => this.odsRadio = el as unknown as OdsRadio & HTMLElement }
          value={ this.value }>
        </ods-radio>

        <label
          class={{
            'ods-switch-item__label': true,
            'ods-switch-item__label--disabled': this.isDisabled,
          }}
          htmlFor={ this.inputId }
          tabindex={ !this.isDisabled ? 0 : -1 }
          onBlur={ (): Promise<void> => this.onBlur() }
          onFocus={ () => this.odsFocus.emit() }
          onKeyDown={ (e: KeyboardEvent) => this.handleKeyDown(e) }
          onKeyUp={ (event: KeyboardEvent) => this.handleKeyUp(event) }>
          <slot></slot>
        </label>
      </Host>
    );
  }
}
