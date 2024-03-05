import type { OdsInputAttribute, OdsInputValidityState } from './interfaces/attributes';
import type { OdsInputEvent, OdsInputValueChangeEventDetail } from './interfaces/events';
import type { OdsInputMethod } from './interfaces/methods';
import type { OdsErrorStateControl, OdsFormControl, OdsFormForbiddenValues, OdsInputValue } from '@ovhcloud/ods-common-core';
import type { EventEmitter } from '@stencil/core';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { ODS_ICON_NAME, ODS_ICON_SIZE } from '../../../../icon/src';
import { ODS_SPINNER_SIZE } from '../../../../spinner/src';
import { ODS_TEXT_SIZE } from '../../../../text/src';
import { AttachInternals, Component, Element, Event, Host, Method, Prop, State, Watch, h } from '@stencil/core';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { ODS_INPUT_SIZE } from './constants/input-size';
import { ODS_INPUT_TYPE } from './constants/input-type';
import { OdsInputController } from './core/controller';

@Component({
  formAssociated: true,
  shadow: true,
  styleUrl: 'osds-input.scss',
  tag: 'osds-input',
})
export class OsdsInput implements OdsInputAttribute, OdsInputEvent, OdsInputMethod {
  private static inputIds = 0;
  private inputId = `ods-input-${OsdsInput.inputIds++}`;
  controller: OdsInputController = new OdsInputController(this);
  inputEl?: HTMLInputElement;

  @Element() el!: HTMLElement;

  @AttachInternals() internals!: ElementInternals;

  @State() inputTabindex?: number;
  @State() hasFocus = false;

  @Prop() ariaLabel: HTMLElement['ariaLabel'] = DEFAULT_ATTRIBUTE.ariaLabel;
  @Prop() ariaLabelledby?: string = DEFAULT_ATTRIBUTE.ariaLabelledby;
  @Prop({ reflect: true }) clearable?: boolean = DEFAULT_ATTRIBUTE.clearable;
  @Prop({ reflect: true }) color?: ODS_THEME_COLOR_INTENT = DEFAULT_ATTRIBUTE.color;
  @Prop({ reflect: true }) contrasted?: boolean = DEFAULT_ATTRIBUTE.contrasted;
  @Prop({ reflect: true }) defaultValue: OdsInputValue = DEFAULT_ATTRIBUTE.defaultValue;
  @Prop({ reflect: true }) disabled?: boolean = DEFAULT_ATTRIBUTE.disabled;
  @Prop({ reflect: true }) error?: boolean = DEFAULT_ATTRIBUTE.error;
  @Prop({ reflect: true }) errorStateControl?: OdsErrorStateControl = DEFAULT_ATTRIBUTE.errorStateControl;
  @Prop({ reflect: true }) forbiddenValues: OdsFormForbiddenValues<number> = DEFAULT_ATTRIBUTE.forbiddenValues;
  @Prop({ reflect: true }) formControl?: OdsFormControl<OdsInputValidityState> = DEFAULT_ATTRIBUTE.formControl;
  @Prop({ reflect: true }) icon?: ODS_ICON_NAME = DEFAULT_ATTRIBUTE.icon;
  @Prop({ reflect: true }) inline?: boolean = DEFAULT_ATTRIBUTE.inline;
  @Prop({ reflect: true }) label?: string = DEFAULT_ATTRIBUTE.label;
  @Prop({ reflect: true }) loading?: boolean = DEFAULT_ATTRIBUTE.loading;
  @Prop({ reflect: true, mutable: true }) masked?: boolean = DEFAULT_ATTRIBUTE.masked;
  @Prop({ reflect: true }) max?: number = DEFAULT_ATTRIBUTE.max;
  @Prop({ reflect: true }) min?: number = DEFAULT_ATTRIBUTE.min;
  @Prop({ reflect: true }) name?: string = DEFAULT_ATTRIBUTE.name;
  @Prop({ reflect: true }) placeholder?: string = DEFAULT_ATTRIBUTE.placeholder;
  @Prop({ reflect: true }) prefixValue = DEFAULT_ATTRIBUTE.prefixValue;
  @Prop({ reflect: true }) readOnly?: boolean = DEFAULT_ATTRIBUTE.readOnly;
  @Prop({ reflect: true }) required?: boolean = DEFAULT_ATTRIBUTE.required;
  @Prop({ reflect: true }) size?: ODS_INPUT_SIZE = DEFAULT_ATTRIBUTE.size;
  @Prop({ reflect: true }) step?: number = DEFAULT_ATTRIBUTE.step;
  @Prop({ reflect: true }) type: ODS_INPUT_TYPE = DEFAULT_ATTRIBUTE.type;
  @Prop({ reflect: true, mutable: true }) value: OdsInputValue = DEFAULT_ATTRIBUTE.value;

  @Event() odsValueChange!: EventEmitter<OdsInputValueChangeEventDetail>;
  @Event() odsInputBlur!: EventEmitter<void>;
  @Event() odsInputFocus!: EventEmitter<void>;

  @Watch('formControl')
  onFormControlChange(formControl?: OdsFormControl<OdsInputValidityState>) {
    this.controller.onFormControlChange(formControl);
  }

  @Watch('value')
  onValueChange(value: OdsInputValue, oldValue?: OdsInputValue) {
    this.controller.onValueChange(value, oldValue);
  }

  beforeInit() {
    this.controller.beforeInit();
  }

  componentWillLoad() {
    this.beforeInit();
  }

  formResetCallback(): void {
    this.value = this.defaultValue;
  }

  emitChange(value: OdsInputValue, oldValue?: OdsInputValue) {
    this.odsValueChange.emit({
      name: this.name,
      value: value == null ? value : `${value}`,
      oldValue: oldValue == null ? oldValue : `${oldValue}`,
      validity: this.controller.getInputValidity(),
    });
  }

  emitFocus(): void {
    this.odsInputFocus.emit();
  }

  emitBlur(): void {
    this.odsInputBlur.emit();
  }

  @Method()
  async setFocus() {
    this.inputEl?.focus();
  }

  @Method()
  async getValidity() {
    return this.controller.getInputValidity(this.inputEl);
  }

  @Method()
  async clear() {
    this.controller.clear();
    return this.setFocus();
  }

  @Method()
  async hide() {
    this.controller.hide();
  }

  @Method()
  async reset() {
    this.controller.reset();
  }

  @Method()
  async stepUp() {
    this.controller.stepUp();
  }

  @Method()
  async stepDown() {
    this.controller.stepDown();
  }

  @Method()
  async setInputTabindex(value: number) {
    this.controller.setInputTabindex(value);
  }

  hasError(): boolean {
    return this.controller.hasError();
  }

  onBlur(): void {
    this.controller.onBlur();
  }

  onFocus(): void {
    this.controller.onFocus();
  }

  onInput(event: Event) {
    this.controller.onInput(event);
  }

  private hasPlaceholder(): boolean {
    return !!this.placeholder && !this.value;
  }

  render() {
    const {
      ariaLabel,
      ariaLabelledby,
      clearable,
      color,
      contrasted,
      disabled,
      hasError,
      hasFocus,
      icon,
      inputId,
      loading,
      masked,
      max,
      min,
      name,
      placeholder,
      readOnly,
      required,
      step,
      type,
      value,
    } = this;

    /** Using `ariaLabelledby` if it's defined, else create a new ID based on `inputId` */
    const labelId = ariaLabelledby ? ariaLabelledby : `${inputId}-label`;

    const isPassword = type === 'password';

    return (
      <Host {...{
        class: {
          'ods-error': Boolean(hasError.bind(this)()),
        },
        hasFocus,
      }}
      >
        <osds-text color={ODS_THEME_COLOR_INTENT.text}
          size={this.hasPlaceholder() ? ODS_TEXT_SIZE._300 : ODS_TEXT_SIZE._400}>
          { this.prefixValue }
        </osds-text>

        <input
          {...{
            ariaLabel,
            ariaLabelledby: labelId || null,
            disabled,
            contrasted,
            id: inputId,
            masked,
            max,
            min,
            name,
            onBlur: () => this.onBlur(),
            onFocus: () => this.onFocus(),
            onInput: (e) => this.onInput(e),
            placeholder,
            readOnly,
            ref: (el) => this.inputEl = el as HTMLInputElement,
            required,
            step,
            type: isPassword && !masked
              ? 'text'
              : type,
            value: value?.toString() || '',
          }}
        >
        </input>

        {
          loading && (
            <osds-spinner
              {...{
                contrasted: false,
                inline: true,
                size: ODS_SPINNER_SIZE.sm,
              }}>
            </osds-spinner>
          )
        }

        {
          isPassword && !loading && (
            <button
              class="osds-input__icon-button"
              disabled={ this.disabled }
              onClick={ (): Promise<void> => this.hide() }
              onKeyUp={ (event: KeyboardEvent): Promise<void> => this.controller.handleKeySpace(event, this.hide) }>
              <osds-icon
                ariaName={ `${this.masked ? ODS_ICON_NAME.EYE_OPEN : ODS_ICON_NAME.EYE_CLOSED} icon` }
                color={ this.color }
                name={ this.masked ? ODS_ICON_NAME.EYE_OPEN : ODS_ICON_NAME.EYE_CLOSED }
                size={ ODS_ICON_SIZE.sm }
              ></osds-icon>
            </button>
          )
        }

        {
          clearable && !loading && (
            <button
              class="osds-input__icon-button"
              disabled={ this.disabled }
              onClick={ (): Promise<void> => this.clear() }
              onKeyUp={ (event: KeyboardEvent): Promise<void> => this.controller.handleKeySpace(event, this.clear) }>
              <osds-icon
                ariaName={ `${ODS_ICON_NAME.CLOSE} icon` }
                color={ this.color }
                name={ ODS_ICON_NAME.CLOSE }
                size={ ODS_ICON_SIZE.sm }>
              </osds-icon>
            </button>
          )
        }

        {
          icon && !loading && (
            <osds-icon
              {...{
                ariaName: `${icon} icon`,
                name: icon,
                size: ODS_ICON_SIZE.sm,
                color,
              }}></osds-icon>
          )
        }
      </Host>
    );
  }
}
