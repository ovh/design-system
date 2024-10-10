import { AttachInternals, Component, Element, Event, type EventEmitter, type FunctionalComponent, Host, Listen, Method, Prop, State, h } from '@stencil/core';
import { updateInternals } from '../../controller/ods-textarea';
import { type OdsTextareaChangeEventDetail } from '../../interfaces/events';

const VALUE_DEFAULT_VALUE = null;

@Component({
  formAssociated: true,
  shadow: {
    delegatesFocus: true,
  },
  styleUrl: 'ods-textarea.scss',
  tag: 'ods-textarea',
})
export class OdsTextarea {
  private observer?: MutationObserver;
  private shouldUpdateIsInvalidState: boolean = false;
  private textareaElement?: HTMLTextAreaElement;

  @Element() el!: HTMLElement;

  @AttachInternals() private internals!: ElementInternals;

  @State() isInvalid: boolean = false;

  @Prop({ reflect: true }) public ariaLabel: HTMLElement['ariaLabel'] = null;
  @Prop({ reflect: true }) public ariaLabelledby?: string;
  @Prop({ reflect: true }) public cols?: number;
  @Prop({ reflect: true }) public defaultValue?: string;
  @Prop({ reflect: true }) public hasError: boolean = false;
  @Prop({ reflect: true }) public hasSpellcheck: boolean = false;
  @Prop({ reflect: true }) public isDisabled: boolean = false;
  @Prop({ reflect: true }) public isReadonly: boolean = false;
  @Prop({ reflect: true }) public isRequired: boolean = false;
  @Prop({ reflect: true }) public isResizable: boolean = false;
  @Prop({ reflect: true }) public name!: string;
  @Prop({ reflect: true }) public placeholder?: string;
  @Prop({ reflect: true }) public rows?: number;
  @Prop({ mutable: true, reflect: true }) public value: string | null = VALUE_DEFAULT_VALUE;

  @Event() odsBlur!: EventEmitter<void>;
  @Event() odsChange!: EventEmitter<OdsTextareaChangeEventDetail>;
  @Event() odsClear!: EventEmitter<void>;
  @Event() odsFocus!: EventEmitter<void>;
  @Event() odsReset!: EventEmitter<void>;

  @Listen('invalid')
  onInvalidEvent(event: Event): void {
    // Remove the native validation message popup
    event.preventDefault();

    // Enforce the state here as we may still be in pristine state (if the form is submitted before any changes occurs)
    this.isInvalid = true;
  }

  @Method()
  async checkValidity(): Promise<boolean> {
    return this.internals.checkValidity();
  }

  @Method()
  public async clear(): Promise<void> {
    this.odsClear.emit();
    this.value = null;
    this.textareaElement?.focus();

    // Element internal validityState is not yet updated, so we set the flag
    // to update our internal state when it will be up-to-date
    this.shouldUpdateIsInvalidState = true;
  }

  @Method()
  async getValidationMessage(): Promise<string> {
    return this.internals.validationMessage;
  }

  @Method()
  async getValidity(): Promise<ValidityState> {
    return this.internals.validity;
  }

  @Method()
  async reportValidity(): Promise<boolean> {
    return this.internals.reportValidity();
  }

  @Method()
  async reset(): Promise<void> {
    this.odsReset.emit();
    this.value = this.defaultValue ?? null;

    // Element internal validityState is not yet updated, so we set the flag
    // to update our internal state when it will be up-to-date
    this.shouldUpdateIsInvalidState = true;
  }

  @Method()
  async willValidate(): Promise<boolean> {
    return this.internals.willValidate;
  }

  componentWillLoad(): void {
    this.observer = new MutationObserver((mutations: MutationRecord[]) => {
      for (const mutation of mutations) {
        if (mutation.attributeName === 'value') {
          this.onValueChange(mutation.oldValue);
        }
      }
    });

    // We set the value before the observer starts to avoid calling the mutation callback twice
    // as it will be called on componentDidLoad (when native element validity is up-to-date)
    if (!this.value && (this.value !== VALUE_DEFAULT_VALUE || this.defaultValue)) {
      this.value = this.defaultValue ?? null;
    }
  }

  componentDidLoad(): void {
    // Init the internals correctly as native element validity is now up-to-date
    this.onValueChange();

    this.observer?.observe(this.el, {
      attributeFilter: ['value'],
      attributeOldValue: true,
    });
  }

  disconnectedCallback(): void {
    this.observer?.disconnect();
  }

  async formResetCallback(): Promise<void> {
    await this.reset();
  }

  private onBlur(): void {
    this.isInvalid = !this.internals.validity.valid;
    this.odsBlur.emit();
  }

  private onFocus(): void {
    this.odsFocus.emit();
  }

  private onInput(): void {
    if (this.isDisabled) {
      return;
    }
    this.value = this.textareaElement?.value ?? null;
  }

  private onValueChange(previousValue?: string | null): void {
    updateInternals(this.internals, this.value, this.textareaElement);

    // In case the value gets updated from an other source than a blur event
    // we may have to perform an internal validity state update
    if (this.shouldUpdateIsInvalidState) {
      this.isInvalid = !this.internals.validity.valid;
      this.shouldUpdateIsInvalidState = false;
    }

    this.odsChange.emit({
      name: this.name,
      previousValue,
      validity: this.internals.validity,
      value: this.value,
    });
  }

  render(): FunctionalComponent {
    return (
      <Host
        class="ods-textarea"
        disabled={ this.isDisabled }
        readonly={ this.isReadonly }>
        <textarea
          aria-label={ this.ariaLabel }
          aria-labelledby={ this.ariaLabelledby }
          aria-multiline={ true }
          class={{
            'ods-textarea__textarea': true,
            'ods-textarea__textarea--error': this.hasError || this.isInvalid,
            'ods-textarea__textarea--resizable': this.isResizable,
          }}
          cols={ this.cols }
          disabled={ this.isDisabled }
          name={ this.name }
          onBlur={ (): void => this.onBlur() }
          onFocus={ (): void => this.onFocus() }
          onInput={ (): void => this.onInput() }
          part="textarea"
          placeholder={ this.placeholder }
          readonly={ this.isReadonly }
          ref={ (el): HTMLTextAreaElement => this.textareaElement = el as HTMLTextAreaElement }
          required={ this.isRequired }
          role="textbox"
          rows={ this.rows }
          spellcheck={ this.hasSpellcheck }
          value={ this.value || '' }>
        </textarea>
      </Host>
    );
  }
}
