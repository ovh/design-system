import { AttachInternals, Component, Event, type EventEmitter, type FunctionalComponent, Host, Method, Prop, Watch, h } from '@stencil/core';
import { setFormValue } from '../../controller/ods-textarea';
import { type OdsTextareaEventChangeDetail } from '../../interfaces/events';

@Component({
  formAssociated: true,
  shadow: true,
  styleUrl: 'ods-textarea.scss',
  tag: 'ods-textarea',
})
export class OdsTextarea {
  private textareaElement?: HTMLTextAreaElement;

  @AttachInternals() private internals!: ElementInternals;

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
  @Prop({ mutable: true, reflect: true }) public value: string | null = null;

  @Event() odsBlur!: EventEmitter<void>;
  @Event() odsChange!: EventEmitter<OdsTextareaEventChangeDetail>;
  @Event() odsClear!: EventEmitter<void>;
  @Event() odsFocus!: EventEmitter<void>;
  @Event() odsReset!: EventEmitter<void>;

  @Method()
  async clear(): Promise<void> {
    this.odsClear.emit();
    this.value = null;
    this.textareaElement?.focus();
  }

  @Method()
  async getValidity(): Promise<ValidityState | undefined> {
    return this.textareaElement?.validity;
  }

  @Method()
  async reset(): Promise<void> {
    this.odsReset.emit();
    this.value = this.defaultValue ?? null;
  }

  @Watch('value')
  onValueChange(value: string, previousValue?: string): void {
    setFormValue(this.internals, this.value);

    this.odsChange.emit({
      name: this.name,
      previousValue,
      validity:  this.textareaElement?.validity,
      value: value ?? null,
    });
  }

  componentWillLoad(): void {
    if (!this.value) {
      this.value = this.defaultValue ?? null;
    }
    setFormValue(this.internals, this.value);
  }

  async formResetCallback(): Promise<void> {
    await this.reset();
  }

  private onBlur(): void {
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

  render(): FunctionalComponent {
    return (
      <Host class="ods-textarea">
        <textarea
          aria-label={ this.ariaLabel }
          aria-labelledby={ this.ariaLabelledby }
          aria-multiline={ true }
          class={{
            'ods-textarea__textarea': true,
            'ods-textarea__textarea--error': this.hasError,
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
