import { AttachInternals, Component, Element, Event, type EventEmitter, type FunctionalComponent, Host, Listen, Method, Prop, State, Watch, h } from '@stencil/core';
import { submitFormOnEnter } from '../../../../../utils/dom';
import { ODS_BUTTON_COLOR, ODS_BUTTON_SIZE, ODS_BUTTON_VARIANT } from '../../../../button/src';
import { ODS_ICON_NAME } from '../../../../icon/src';
import { ODS_SPINNER_COLOR } from '../../../../spinner/src';
import { ODS_INPUT_TYPE, type OdsInputType } from '../../constants/input-type';
import { handleKeySpaceEnter, isPassword, updateInternals } from '../../controller/ods-input';
import { type OdsInputChangeEventDetail } from '../../interfaces/events';

const VALUE_DEFAULT_VALUE = null;

@Component({
  formAssociated: true,
  shadow: {
    delegatesFocus: true,
  },
  styleUrl: 'ods-input.scss',
  tag: 'ods-input',
})
export class OdsInput {
  private hasMovedNodes: boolean = false;
  private observer?: MutationObserver;
  private inputEl?: HTMLInputElement;
  private shouldUpdateIsInvalidState: boolean = false;

  @Element() el!: HTMLElement;

  @AttachInternals() private internals!: ElementInternals;

  @State() private isInvalid: boolean = false;
  @State() private isPassword = false;

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
  @Prop({ reflect: true }) public list?: string;
  @Prop({ reflect: true }) public max?: number;
  @Prop({ reflect: true }) public maxlength?: number;
  @Prop({ reflect: true }) public min?: number;
  @Prop({ reflect: true }) public minlength?: number;
  @Prop({ reflect: true }) public name!: string;
  @Prop({ reflect: true }) public pattern?: string;
  @Prop({ reflect: true }) public placeholder?: string;
  @Prop({ reflect: true }) public step?: number;
  @Prop({ reflect: true }) public type: OdsInputType = ODS_INPUT_TYPE.text;
  @Prop({ mutable: true, reflect: true }) public value: string | number | null = VALUE_DEFAULT_VALUE;

  @Event() odsBlur!: EventEmitter<void>;
  @Event() odsChange!: EventEmitter<OdsInputChangeEventDetail>;
  @Event() odsClear!: EventEmitter<void>;
  @Event() odsFocus!: EventEmitter<void>;
  @Event() odsReset!: EventEmitter<void>;
  @Event() odsToggleMask!: EventEmitter<void>;

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
  async clear(): Promise<void> {
    this.odsClear.emit();
    this.value = null;
    this.inputEl?.focus();

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
    this.isInvalid = !this.internals.validity.valid;
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
  async toggleMask(): Promise<void> {
    this.isMasked = !this.isMasked;
    this.odsToggleMask.emit();
  }

  @Method()
  async willValidate(): Promise<boolean> {
    return this.internals.willValidate;
  }

  @Watch('isMasked')
  onMaskedChange(): void {
    this.isPassword = isPassword(this.isMasked);
  }

  componentWillLoad(): void {
    this.onMaskedChange();

    this.observer = new MutationObserver((mutations: MutationRecord[]) => {
      for (const mutation of mutations) {
        if (mutation.attributeName === 'value') {
          this.onValueChange(mutation.oldValue);
        }
      }
    });

    // We set the value before the observer starts to avoid calling the mutation callback twice
    // as it will be called on componentDidLoad (when native element validity is up-to-date)
    if (!this.value && this.value !== 0 && (this.value !== VALUE_DEFAULT_VALUE || this.defaultValue)) {
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

  private handleKeyDown(event: KeyboardEvent): void {
    // This prevents Enter key to submit form
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  }

  private onBlur(): void {
    this.isInvalid = !this.internals.validity.valid;
    this.odsBlur.emit();
  }

  private onInput(): void {
    if (this.isDisabled) {
      return;
    }
    this.value = this.inputEl?.value ?? null;
  }

  private onListSlotChange(event: Event): void {
    // The initial slot nodes move will trigger this callback again
    // but we want to avoid a second call
    if (this.hasMovedNodes) {
      this.hasMovedNodes = false;
      return;
    }

    if (this.list) {
      const assignedElements = (event.currentTarget as HTMLSlotElement).assignedElements();
      const datalistElement = assignedElements.find((el) => el.tagName === 'DATALIST');

      if (datalistElement) {
        // Clear previously moved datalist if any
        this.el.shadowRoot?.querySelector(`datalist#${this.list}`)?.remove();

        datalistElement.setAttribute('id', this.list);
        this.el.shadowRoot?.appendChild(datalistElement);
      } else {
        console.warn('[OdsInput] only datalist tag should be slotted on the "list" slot.');
      }
    } else {
      console.warn('[OdsInput] datalist detected but no "list" attribute on ods-input, did you forgot to set one?');
    }

    this.hasMovedNodes = true;
  }

  private onValueChange(previousValue?: string | number | null): void {
    updateInternals(this.internals, this.value, this.inputEl);

    // In case the value gets updated from an other source than a blur event
    // we may have to perform an internal validity state update
    if (this.shouldUpdateIsInvalidState) {
      this.isInvalid = !this.internals.validity.valid;
      this.shouldUpdateIsInvalidState = false;
    }

    this.odsChange.emit({
      name: this.name,
      previousValue: this.isNumeric(previousValue) ? Number(previousValue) : previousValue,
      validity: this.internals.validity,
      value: this.value,
    });
  }

  private isNumeric(n?: string | number | null): boolean {
    return !!n && !isNaN(parseFloat(n.toString())) && isFinite(n as number);
  }

  render(): FunctionalComponent {
    const hasClearableIcon = this.isClearable && !this.isLoading && !!this.value;
    const hasToggleMaskIcon = this.isPassword && !this.isLoading;

    return (
      <Host
        class="ods-input"
        disabled={ this.isDisabled }
        readonly={ this.isReadonly }>
        <input
          aria-label={ this.ariaLabel }
          aria-labelledby={ this.ariaLabelledby }
          class={{
            'ods-input__input': true,
            'ods-input__input--clearable': hasClearableIcon,
            'ods-input__input--error': this.hasError || this.isInvalid,
            'ods-input__input--loading': this.isLoading,
            'ods-input__input--toggle-mask': hasToggleMaskIcon,
          }}
          disabled={ this.isDisabled }
          list={ this.list }
          max={ this.max }
          maxlength={ this.maxlength }
          min={ this.min }
          minlength={ this.minlength }
          name={ this.name }
          onBlur={ (): void => this.onBlur() }
          onFocus={ (): CustomEvent<void> => this.odsFocus.emit() }
          onInput={ (): void => this.onInput() }
          onKeyUp={ (event: KeyboardEvent): void => submitFormOnEnter(event, this.internals.form) }
          pattern={ this.pattern }
          part="input"
          placeholder={ this.placeholder }
          readonly={ this.isReadonly }
          ref={ (el): HTMLInputElement => this.inputEl = el as HTMLInputElement }
          required={ this.isRequired }
          step={ this.step }
          type={ this.isPassword && this.isMasked ? ODS_INPUT_TYPE.password : this.type }
          value={ this.value?.toString() || '' } />

        <slot
          name="list"
          onSlotchange={ (e) => this.onListSlotChange(e) }>
        </slot>

        <div class="ods-input__actions">
          {
            this.isLoading && <ods-spinner class="ods-input__actions__spinner" color={ this.isDisabled ? ODS_SPINNER_COLOR.neutral : ODS_SPINNER_COLOR.primary }></ods-spinner>
          }
          {
            hasClearableIcon &&
            <ods-button
              color={ ODS_BUTTON_COLOR.neutral }
              icon={ ODS_ICON_NAME.xmark }
              isDisabled={ this.isDisabled || this.isReadonly }
              label=""
              onClick={ () => this.clear() }
              onKeyDown={ (event: KeyboardEvent) => this.handleKeyDown(event) }
              onKeyUp={ (event: KeyboardEvent): Promise<void> => handleKeySpaceEnter(event, this.isDisabled, this.clear.bind(this)) }
              size={ ODS_BUTTON_SIZE.xs }
              variant={ ODS_BUTTON_VARIANT.ghost }>
            </ods-button>
          }
          {
            hasToggleMaskIcon &&
            <ods-button
              icon={ this.isMasked ? ODS_ICON_NAME.eyeOff : ODS_ICON_NAME.eye }
              isDisabled={ this.isDisabled }
              label=""
              onClick={ () => this.toggleMask() }
              onKeyDown={ (event: KeyboardEvent) => this.handleKeyDown(event) }
              onKeyUp={ (event: KeyboardEvent): Promise<void> => handleKeySpaceEnter(event, this.isDisabled, this.toggleMask.bind(this)) }
              size={ ODS_BUTTON_SIZE.xs }
              variant={ ODS_BUTTON_VARIANT.ghost }>
            </ods-button>
          }
        </div>
      </Host>
    );
  }
}
