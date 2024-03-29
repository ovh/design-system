import { AttachInternals, Component, Element, Event, type EventEmitter, type FunctionalComponent, Host, Method, Prop, State, Watch, h } from '@stencil/core';
import { ODS_ICON_NAME } from '../../../../icon/src';
import { ODS_INPUT_TYPE, type OdsInputType } from '../../constants/input-type';
import { handleKeySpace, isPassword } from '../../controller/ods-input';
import { type OdsInputEventValueChange } from '../../interfaces/events';

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
  @State() internalError = false;

  @Prop({ reflect: true }) public ariaLabel: HTMLElement['ariaLabel'] = null;
  @Prop({ reflect: true }) public ariaLabelledby?: string;
  @Prop({ reflect: true }) public defaultValue?: string | number;
  @Prop({ reflect: true }) public hasError: boolean = false;
  @Prop({ reflect: true }) public isClearable?: boolean;
  @Prop({ reflect: true }) public isDisabled: boolean = false;
  @Prop({ reflect: true }) public isLoading?: boolean;
  @Prop({ mutable: true, reflect: true }) public isMasked?: boolean;
  @Prop({ reflect: true }) public isReadonly?: boolean;
  @Prop({ reflect: true }) public isRequired?: boolean;
  @Prop({ reflect: true }) public max?: number;
  @Prop({ reflect: true }) public maxlength?: number;
  @Prop({ reflect: true }) public min?: number;
  @Prop({ reflect: true }) public minlength?: number;
  @Prop({ reflect: true }) public name!: string;
  @Prop({ reflect: true }) public pattern?: string;
  @Prop({ reflect: true }) public placeholder?: string;
  @Prop({ reflect: true }) public step?: number;
  @Prop({ reflect: true }) public type: OdsInputType = ODS_INPUT_TYPE.text;
  @Prop({ mutable: true, reflect: true }) public value?: string | number = undefined;

  @Event() odsBlur!: EventEmitter<void>;
  @Event() odsClear!: EventEmitter<void>;
  @Event() odsToggleMask!: EventEmitter<void>;
  @Event() odsReset!: EventEmitter<void>;
  @Event() odsValueChange!: EventEmitter<OdsInputEventValueChange>;

  @Method()
  async clear(): Promise<void> {
    if (this.isDisabled) {
      return;
    }
    this.value = undefined;
    this.odsClear.emit();
    return;
  }

  @Method()
  async getValidity(): Promise<ValidityState | undefined> {
    return this.inputEl?.validity;
  }

  @Method()
  async toggleMask(): Promise<void> {
    if (this.isDisabled) {
      return;
    }
    this.isMasked = !this.isMasked;
    this.odsToggleMask.emit();
    return;
  }

  @Method()
  async reset(): Promise<void> {
    if (this.isDisabled) {
      return;
    }
    this.value = this.defaultValue ?? undefined;
    this.odsReset.emit();
    return;
  }

  @Watch('isMasked')
  onMaskedChange(): void {
    this.isPassword = isPassword(this.isMasked);
  }

  @Watch('error')
  onErrorChange(): void {
    this.internalError = !this.inputEl?.validity?.valid ?? this.hasError;
  }

  @Watch('value')
  onValueChange(value: string | number, oldValue?: string | number): void {
    this.internals?.setFormValue?.(this.value?.toString() ?? '');
    this.onErrorChange();
    this.odsValueChange.emit({
      name: this.name,
      oldValue: oldValue,
      validity:  this.inputEl?.validity,
      value: value ?? '',
    });
  }

  componentWillLoad(): void {
    this.onMaskedChange();
    if (!this.value) {
      this.value = this.defaultValue;
    }
    this.internals?.setFormValue?.(this.value?.toString() ?? '');
  }

  async formResetCallback(): Promise<void> {
    await this.reset();
  }

  private onInput(): void {
    if (this.isDisabled) {
      return;
    }
    this.value = this.inputEl?.value;
    return;
  }

  private renderButtonIcon(icon: ODS_ICON_NAME, callback: () => Promise<void>): FunctionalComponent {
    return (
      <button
        class="ods-input__button"
        disabled= { this.isDisabled }
        onClick={ (): Promise<void> => callback() }
        onKeyUp={ (event: KeyboardEvent): Promise<void> => handleKeySpace(event, this.isDisabled, callback) }>
        <ods-icon name={ icon }>
        </ods-icon>
      </button>
    );
  }

  render(): FunctionalComponent {
    return (
      <Host class="ods-input">
        <input
          aria-label={ this.ariaLabel }
          aria-labelledby={ this.ariaLabelledby }
          class={{
            'ods-input__input': true,
            'ods-input__input--disabled': this.isDisabled,
            'ods-input__input--error': this.internalError || this.hasError,
          }}
          disabled={ this.isDisabled }
          max={ this.max }
          maxlength={ this.maxlength }
          min={ this.min }
          minlength={ this.minlength }
          name={ this.name }
          onBlur={ (): CustomEvent<void> => this.odsBlur.emit() }
          onInput={ (): void => this.onInput() }
          pattern={ this.pattern }
          part="input"
          placeholder={ this.placeholder }
          readonly={ this.isReadonly }
          ref={ (el): HTMLInputElement => this.inputEl = el as HTMLInputElement }
          required={ this.isRequired }
          step={ this.step }
          type={ this.isPassword && this.isMasked ? 'password' : this.type }
          value={ this.value?.toString() || '' } />

        {
          this.isLoading && <ods-spinner class="ods-input__spinner"></ods-spinner>
        }

        {
          this.isPassword && !this.isLoading && this.renderButtonIcon(this.isMasked ? ODS_ICON_NAME.eyeClose : ODS_ICON_NAME.eyeOpen, this.toggleMask.bind(this))
        }

        {
          this.isClearable && !this.isLoading && this.renderButtonIcon(ODS_ICON_NAME.cross, this.clear.bind(this))
        }
      </Host>
    );
  }
}
