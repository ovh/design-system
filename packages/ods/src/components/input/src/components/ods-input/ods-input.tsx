import { AttachInternals, Component, Element, Event, type EventEmitter, type FunctionalComponent, Host, Method, Prop, State, Watch, h } from '@stencil/core';
import { ODS_ICON_NAME } from '../../../../icon/src';
import { ODS_SPINNER_COLOR } from '../../../../spinner/src';
import { ODS_INPUT_TYPE, type OdsInputType } from '../../constants/input-type';
import { handleKeySpace, isPassword, setFormValue } from '../../controller/ods-input';
import { type OdsInputValueChangeEventDetail } from '../../interfaces/events';

@Component({
  formAssociated: true,
  shadow: true,
  styleUrl: 'ods-input.scss',
  tag: 'ods-input',
})
export class OdsInput {
  private inputEl?: HTMLInputElement;

  @Element() el!: HTMLElement;

  @AttachInternals() private internals!: ElementInternals;

  @State() isPassword = false;

  @Prop({ reflect: true }) public ariaLabel: HTMLElement['ariaLabel'] = null;
  @Prop({ reflect: true }) public ariaLabelledby?: string;
  @Prop({ reflect: true }) public defaultValue?: string | number;
  @Prop({ reflect: true }) public hasError: boolean = false;
  @Prop({ reflect: true }) public isClearable: boolean = false;
  @Prop({ reflect: true }) public isDisabled: boolean = false;
  @Prop({ reflect: true }) public isLoading: boolean = false;
  @Prop({ mutable: true, reflect: true }) public isMasked?: boolean;
  @Prop({ reflect: true }) public isReadonly: boolean = false;
  @Prop({ reflect: true }) public isRequired: boolean = false;
  @Prop({ reflect: true }) public max?: number;
  @Prop({ reflect: true }) public maxlength?: number;
  @Prop({ reflect: true }) public min?: number;
  @Prop({ reflect: true }) public minlength?: number;
  @Prop({ reflect: true }) public name!: string;
  @Prop({ reflect: true }) public pattern?: string;
  @Prop({ reflect: true }) public placeholder?: string;
  @Prop({ reflect: true }) public step?: number;
  /** @docType OdsInputType */
  @Prop({ reflect: true }) public type: OdsInputType = ODS_INPUT_TYPE.text;
  @Prop({ mutable: true, reflect: true }) public value: string | number | null = null;

  @Event() odsBlur!: EventEmitter<void>;
  @Event() odsClear!: EventEmitter<void>;
  @Event() odsFocus!: EventEmitter<void>;
  @Event() odsToggleMask!: EventEmitter<void>;
  @Event() odsReset!: EventEmitter<void>;
  @Event() odsChange!: EventEmitter<OdsInputValueChangeEventDetail>;

  @Method()
  async clear(): Promise<void> {
    this.value = null;
    this.inputEl?.focus();
    this.odsClear.emit();
  }

  @Method()
  async getValidity(): Promise<ValidityState | undefined> {
    return this.inputEl?.validity;
  }

  @Method()
  async toggleMask(): Promise<void> {
    this.isMasked = !this.isMasked;
    this.odsToggleMask.emit();
  }

  @Method()
  async reset(): Promise<void> {
    this.value = this.defaultValue ?? null;
    this.odsReset.emit();
  }

  @Watch('isMasked')
  onMaskedChange(): void {
    this.isPassword = isPassword(this.isMasked);
  }

  @Watch('value')
  onValueChange(value: string | number, oldValue?: string | number): void {
    setFormValue(this.internals, this.value);
    this.odsChange.emit({
      name: this.name,
      oldValue: oldValue,
      validity:  this.inputEl?.validity,
      value: value ?? null,
    });
  }

  componentWillLoad(): void {
    this.onMaskedChange();
    if (!this.value && this.value !== 0) {
      this.value = this.defaultValue ?? null;
    }
    setFormValue(this.internals, this.value);
  }

  async formResetCallback(): Promise<void> {
    await this.reset();
  }

  private onInput(): void {
    if (this.isDisabled) {
      return;
    }
    this.value = this.inputEl?.value ?? null;
    return;
  }

  render(): FunctionalComponent {
    const hasClearableIcon = this.isClearable && !this.isLoading && !!this.value;
    const hasToggleMaskIcon = this.isPassword && !this.isLoading;

    return (
      <Host class="ods-input">
        <input
          aria-label={ this.ariaLabel }
          aria-labelledby={ this.ariaLabelledby }
          class={{
            'ods-input__input': true,
            'ods-input__input--clearable': hasClearableIcon,
            'ods-input__input--error': this.hasError,
            'ods-input__input--loading': this.isLoading,
            'ods-input__input--toggle-mask': hasToggleMaskIcon,
          }}
          disabled={ this.isDisabled }
          max={ this.max }
          maxlength={ this.maxlength }
          min={ this.min }
          minlength={ this.minlength }
          name={ this.name }
          onBlur={ (): CustomEvent<void> => this.odsBlur.emit() }
          onFocus={ (): CustomEvent<void> => this.odsFocus.emit() }
          onInput={ (): void => this.onInput() }
          pattern={ this.pattern }
          part="input"
          placeholder={ this.placeholder }
          readonly={ this.isReadonly }
          ref={ (el): HTMLInputElement => this.inputEl = el as HTMLInputElement }
          required={ this.isRequired }
          step={ this.step }
          type={ this.isPassword && this.isMasked ? ODS_INPUT_TYPE.password : this.type }
          value={ this.value?.toString() || '' } />

        <div class="ods-input__actions">
          {
            this.isLoading && <ods-spinner class="ods-input__actions__spinner" color={ this.isDisabled ? ODS_SPINNER_COLOR.neutral : ODS_SPINNER_COLOR.primary }></ods-spinner>
          }
          {
            hasClearableIcon &&
            <button
              class={{
                'ods-input__actions__clearable': true,
                'ods-input__actions__clearable--readonly': this.isReadonly,
              }}
              disabled={ this.isDisabled || this.isReadonly }
              onClick={ this.clear.bind(this) }
              onKeyUp={ (event: KeyboardEvent): Promise<void> => handleKeySpace(event, this.isDisabled, this.clear.bind(this)) }>
              <ods-icon name={ ODS_ICON_NAME.times }>
              </ods-icon>
            </button>
          }
          {
            hasToggleMaskIcon &&
            <button
              class={{
                'ods-input__actions__toggle-mask': true,
                'ods-input__actions__toggle-mask--readonly': this.isReadonly,
              }}
              disabled={ this.isDisabled }
              onClick={ this.toggleMask.bind(this) }
              onKeyUp={ (event: KeyboardEvent): Promise<void> => handleKeySpace(event, this.isDisabled, this.toggleMask.bind(this)) }>
              <ods-icon name={ this.isMasked ? ODS_ICON_NAME.eyeOff : ODS_ICON_NAME.eye }>
              </ods-icon>
            </button>
          }
        </div>
      </Host>
    );
  }
}
