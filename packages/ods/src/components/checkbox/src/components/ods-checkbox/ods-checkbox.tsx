import { AttachInternals, Component, Event, type EventEmitter, type FunctionalComponent, Host, Method, Prop, h } from '@stencil/core';
import { submitFormOnEnter } from '../../../../../utils/dom';
import { type OdsCheckboxChangeEventDetail } from '../../interfaces/event';

@Component({
  formAssociated: true,
  shadow: false,
  styleUrl: 'ods-checkbox.scss',
  tag: 'ods-checkbox',
})
export class OdsCheckbox {
  private inputEl?: HTMLInputElement;

  @AttachInternals() private internals!: ElementInternals;

  @Prop({ reflect: true }) public ariaLabel: HTMLElement['ariaLabel'] = null;
  @Prop({ reflect: true }) public ariaLabelledby?: string;
  @Prop({ reflect: true }) public inputId?: string;
  @Prop({ reflect: true }) public isChecked: boolean = false;
  @Prop({ reflect: true }) public isDisabled: boolean = false;
  @Prop({ reflect: true }) public isIndeterminate : boolean = false;
  @Prop({ reflect: true }) public isRequired: boolean = false;
  @Prop({ reflect: true }) public name!: string;
  @Prop({ mutable: true, reflect: true }) public value: string | null = null;

  @Event() odsBlur!: EventEmitter<void>;
  @Event() odsChange!: EventEmitter<OdsCheckboxChangeEventDetail>;
  @Event() odsClear!: EventEmitter<void>;
  @Event() odsFocus!: EventEmitter<void>;
  @Event() odsReset!: EventEmitter<void>;

  @Method()
  public async clear(): Promise<void> {
    const hasChange = this.inputEl?.checked === true;
    if (this.inputEl) {
      this.inputEl.checked = false;
    }
    this.odsClear.emit();
    hasChange && this.onInput();
    this.inputEl?.focus();
  }

  @Method()
  public async getValidity(): Promise<ValidityState | undefined> {
    return this.inputEl?.validity;
  }

  @Method()
  public async reset(): Promise<void> {
    const hasChange = this.inputEl?.checked === true;
    this.getOdsCheckboxGroupByName().forEach((checkbox) => {
      const inputCheckbox = checkbox.querySelector<HTMLInputElement>('input[type="checkbox"]');
      if (!inputCheckbox) {
        return;
      }
      if (checkbox.getAttribute('is-checked') !== null && checkbox.getAttribute('is-checked') !== 'false') {
        inputCheckbox.checked = true;
      } else {
        inputCheckbox.checked = false;
      }
    });
    this.odsReset.emit();
    hasChange && this.onInput();
  }

  async formResetCallback(): Promise<void> {
    await this.reset();
  }

  private getOdsCheckboxGroupByName(): NodeListOf<Element> {
    return document.querySelectorAll(`ods-checkbox[name="${this.name}"]`);
  }

  private onInput(): void {
    this.odsChange.emit({
      checked: this.inputEl?.checked ?? false,
      name: this.name,
      validity:  this.inputEl?.validity,
      value: this.value ?? null,
    });
  }

  render(): FunctionalComponent {
    return (
      <Host class="ods-checkbox">
        <input
          aria-label={ this.ariaLabel }
          aria-labelledby={ this.ariaLabelledby }
          class="ods-checkbox__checkbox"
          checked={ this.isChecked }
          disabled={ this.isDisabled }
          id={ this.inputId }
          indeterminate={ this.isIndeterminate }
          name={ this.name }
          onBlur={ (): CustomEvent<void> => this.odsBlur.emit() }
          onFocus={ (): CustomEvent<void> => this.odsFocus.emit() }
          onInput={ (): void => this.onInput() }
          onKeyUp={ (event: KeyboardEvent): void => submitFormOnEnter(event, this.internals.form) }
          ref={ (el): HTMLInputElement => this.inputEl = el as HTMLInputElement }
          required={ this.isRequired }
          type="checkbox"
          value={ this.value?.toString() || '' } />
      </Host>
    );
  }
}
