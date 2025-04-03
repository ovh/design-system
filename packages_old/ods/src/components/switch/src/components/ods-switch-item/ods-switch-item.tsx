import { Component, Element, Event, type EventEmitter, type FunctionalComponent, Host, Method, Prop, State, h } from '@stencil/core';
import { type OdsSwitchChangeEventDetail } from '../../interfaces/events';

@Component({
  shadow: false,
  styleUrl: 'ods-switch-item.scss',
  tag: 'ods-switch-item',
})
export class OdsSwitchItem {
  private inputEl?: HTMLInputElement;
  private labelEl?: HTMLLabelElement;
  private observer?: MutationObserver;

  @State() private inputId: string = '';
  @State() private isDisabled: boolean = false;
  @State() private isRequired: boolean = false;

  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) public ariaLabel: HTMLElement['ariaLabel'] = null;
  @Prop({ reflect: true }) public ariaLabelledby?: string;
  @Prop({ reflect: true }) public isChecked: boolean = false;
  @Prop({ reflect: true }) public value: string | null = null;

  /** @internal */
  @Event() odsSwitchItemBlur!: EventEmitter<void>;
  /** @internal */
  @Event() odsSwitchItemChange!: EventEmitter<OdsSwitchChangeEventDetail>;
  /** @internal */
  @Event() odsSwitchItemFocus!: EventEmitter<void>;
  /** @internal */
  @Event() odsSwitchItemInvalid!: EventEmitter<{ isInvalid: boolean }>;

  @Method()
  async clear(): Promise<void> {
    if (this.inputEl) {
      this.inputEl.checked = false;
    }
  }

  @Method()
  async focusItem(): Promise<void> {
    this.labelEl?.focus();
  }

  @Method()
  async getValidationMessage(): Promise<string | undefined> {
    return this.inputEl?.validationMessage;
  }

  @Method()
  async getValidity(): Promise<ValidityState | undefined> {
    return this.inputEl?.validity;
  }

  @Method()
  async reportValidity(): Promise<boolean | undefined> {
    return this.inputEl?.reportValidity();
  }

  @Method()
  async reset(): Promise<string | null> {
    if (this.inputEl) {
      const isCheckedAttribute = this.el.getAttribute('is-checked');

      if (isCheckedAttribute !== null && isCheckedAttribute !== 'false') {
        this.inputEl.checked = true;
        return this.value;
      }
      this.inputEl.checked = false;
    }

    return null;
  }

  @Method()
  async willValidate(): Promise<boolean | undefined> {
    return this.inputEl?.willValidate;
  }

  componentWillLoad(): void {
    this.observer = new MutationObserver((mutations: MutationRecord[]) => {
      for (const mutation of mutations) {
        switch (mutation.attributeName) {
          case 'input-id':
            this.inputId = this.el.getAttribute('input-id') ?? '';
            break;
          case 'is-disabled':
            this.isDisabled = this.el.getAttribute('is-disabled') === '';
            break;
          case 'is-required':
            this.isRequired = this.el.getAttribute('is-required') === '';
            break;
          case 'required':
            this.odsSwitchItemInvalid.emit({ isInvalid: !this.inputEl?.validity.valid });
            break;
          default:
            break;
        }
      }
    });
  }

  componentDidLoad(): void {
    this.observer?.observe(this.el, {
      attributeFilter: ['input-id', 'is-disabled', 'is-required'],
    });

    if (this.inputEl) {
      this.observer?.observe(this.inputEl, {
        attributeFilter: ['required'],
        attributeOldValue: false,
      });
    }
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
      this.inputEl?.click();
    }
  }

  private onBlur(): void {
    this.odsSwitchItemInvalid.emit({ isInvalid: !this.inputEl!.validity.valid });
    this.odsSwitchItemBlur.emit();
  }

  private onInput(event: Event): void {
    this.odsSwitchItemChange.emit({
      name: this.el.getAttribute('name') || '',
      validity:  this.inputEl?.validity,
      value: (event.target as HTMLInputElement)?.checked ? this.value : null,
    });
  }

  private onInvalidEvent(event: Event): void {
    // Remove the native validation message popup
    event.preventDefault();

    this.odsSwitchItemInvalid.emit({ isInvalid: true });
  }

  render(): FunctionalComponent {
    return (
      <Host
        class="ods-switch-item"
        disabled={ this.isDisabled }>
        <input
          aria-label={ this.ariaLabel }
          aria-labelledby={ this.ariaLabelledby }
          class="ods-switch-item__radio"
          checked={ this.isChecked }
          disabled={ this.isDisabled }
          id={ this.inputId }
          onInput={ (event: InputEvent): void => this.onInput(event) }
          onInvalid={ (event: Event) => this.onInvalidEvent(event) }
          name={ this.el.getAttribute('name') ?? '' }
          ref={ (el?: HTMLElement) => this.inputEl = el as HTMLInputElement }
          required={ this.isRequired }
          type="radio"
          value={ this.value?.toString() || '' }>
        </input>

        <label
          class={{
            'ods-switch-item__label': true,
            'ods-switch-item__label--disabled': this.isDisabled,
          }}
          htmlFor={ this.inputId }
          onBlur={ (): void => this.onBlur() }
          onFocus={ () => this.odsSwitchItemFocus.emit() }
          onKeyDown={ (e: KeyboardEvent) => this.handleKeyDown(e) }
          onKeyUp={ (event: KeyboardEvent) => this.handleKeyUp(event) }
          ref={ (el?: HTMLElement) => this.labelEl = el as HTMLLabelElement }
          tabindex={ !this.isDisabled ? 0 : -1 }>
          <slot></slot>
        </label>
      </Host>
    );
  }
}
