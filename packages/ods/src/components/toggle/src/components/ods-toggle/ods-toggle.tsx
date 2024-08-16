import { AttachInternals, Component, Event, type EventEmitter, type FunctionalComponent, Host, Method, Prop, h } from '@stencil/core';
import { setFormValue } from '../../controller/ods-toggle';
import { type OdsToggleChangeEventDetail } from '../../interfaces/event';

@Component({
  formAssociated: true,
  shadow: {
    delegatesFocus: true,
  },
  styleUrl: 'ods-toggle.scss',
  tag: 'ods-toggle',
})
export class OdsToggle {
  private inputEl?: HTMLInputElement;

  @AttachInternals() private internals!: ElementInternals;

  @Prop({ reflect: true }) public defaultValue?: boolean;
  // @Prop({ reflect: true }) public hasError: boolean = false; // Necessary ?
  @Prop({ reflect: true }) public isDisabled: boolean = false;
  @Prop({ reflect: true }) public isRequired: boolean = false;
  @Prop({ reflect: true }) public name!: string;
  @Prop({ mutable: true, reflect: true }) public value: boolean | null = null;
  @Prop({ reflect: true }) public withLabel: boolean = false;

  @Event() odsBlur!: EventEmitter<void>;
  @Event() odsChange!: EventEmitter<OdsToggleChangeEventDetail>;
  @Event() odsClear!: EventEmitter<void>;
  @Event() odsFocus!: EventEmitter<void>;
  @Event() odsReset!: EventEmitter<void>;

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
  async reset(): Promise<void> {
    this.value = this.defaultValue ?? null;
    this.odsReset.emit();
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

  private onInput(): void {
    if (this.isDisabled) {
      return;
    }
    this.value = !this.value;
    setFormValue(this.internals, this.value);
    this.odsChange.emit({
      name: this.name,
      previousValue: !this.value,
      value: this.value,
    });
  }

  render(): FunctionalComponent {
    return (
      <Host class='ods-toggle'>
        <label class="ods-toggle__container">
          <input
            checked={ this.value ?? false }
            class="ods-toggle__container__input"
            disabled={ this.isDisabled }
            name={ this.name }
            onBlur={ () => this.odsBlur.emit() }
            onFocus={ () => this.odsFocus.emit() }
            onInput={ this.onInput.bind(this) }
            required={ this.isRequired }
            ref={ (el): HTMLInputElement => this.inputEl = el as HTMLInputElement }
            role="switch"
            type="checkbox"
          />

          <span class={{
            'ods-toggle__container__slider': true,
            'ods-toggle__container__slider--checked': this.value ?? false,
            'ods-toggle__container__slider--disabled': this.isDisabled,
          }}
          part={ `slider ${this.value ? 'checked' : ''}` }>
            {
              this.withLabel && <span class="ods-toggle__container__slider__label" part={ `label ${this.value ? 'checked' : ''}` }>{ this.value ? 'ON' : 'OFF' }</span>
            }
          </span>
        </label>
      </Host>
    );
  }
}
