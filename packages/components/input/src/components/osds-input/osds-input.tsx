import type { OdsInputAttribute } from './interfaces/attributes';
import type { OdsInputEvent, OdsInputValueChangeEventDetail } from './interfaces/events';
import type { OdsInputMethod } from './interfaces/methods';
import type { OdsCommonFieldValidityState, OdsErrorStateControl, OdsFormControl, OdsFormForbiddenValues, OdsInputValue, ODS_COMMON_FIELD_SIZE, ODS_INPUT_TYPE } from '@ovhcloud/ods-common-core';
import type { EventEmitter } from '@stencil/core';
import { OdsLogger } from '@ovhcloud/ods-common-core';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { ODS_ICON_NAME, ODS_ICON_SIZE } from '@ovhcloud/ods-component-icon';
import { ODS_SPINNER_SIZE } from '@ovhcloud/ods-component-spinner';
import { ODS_TEXT_SIZE } from '@ovhcloud/ods-component-text';
import { Component, Element, Event, Host, Listen, Method, Prop, State, Watch, h } from '@stencil/core';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsInputController } from './core/controller';

/**
 *
 */
@Component({
  shadow: true,
  styleUrl: 'osds-input.scss',
  tag: 'osds-input',
})
export class OsdsInput implements OdsInputAttribute, OdsInputEvent, OdsInputMethod {
  private logger = new OdsLogger('OsdsInput');
  private static inputIds = 0;
  private inputId = `ods-input-${OsdsInput.inputIds++}`;
  controller: OdsInputController = new OdsInputController(this);

  @Element() el!: HTMLElement;
  inputEl?: HTMLInputElement;

  /**
   * The tabindex of the input.
   * @internal
   */
  @State() inputTabindex = 0;
  @State() hasFocus = false;

  /** Props */

  /** @see OdsCommonFieldAttribute.ariaLabel */
  @Prop() ariaLabel: HTMLElement['ariaLabel'] = DEFAULT_ATTRIBUTE.ariaLabel;

  /** @see OdsCommonFieldAttribute.ariaLabelledby */
  @Prop() ariaLabelledby?: string = DEFAULT_ATTRIBUTE.ariaLabelledby;

  /** @see OdsCommonFieldAttribute.clearable */
  @Prop({ reflect: true }) clearable?: boolean = DEFAULT_ATTRIBUTE.clearable;

  /** @see OdsCommonFieldAttribute.color */
  @Prop({ reflect: true }) color?: ODS_THEME_COLOR_INTENT = DEFAULT_ATTRIBUTE.color;

  /** @see OdsInputAttribute.contrasted */
  @Prop({ reflect: true }) contrasted?: boolean = DEFAULT_ATTRIBUTE.contrasted;

  /** @see OdsInputAttribute.defaultValue */
  @Prop({ reflect: true }) defaultValue: OdsInputValue = DEFAULT_ATTRIBUTE.defaultValue;

  /** @see OdsCommonFieldAttribute.disabled */
  @Prop({ reflect: true }) disabled?: boolean = DEFAULT_ATTRIBUTE.disabled;

  /** @see OdsCommonFieldAttribute.error */
  @Prop({ reflect: true }) error?: boolean = DEFAULT_ATTRIBUTE.error;

  /** @see OdsCommonFieldAttribute.errorStateControl */
  @Prop({ reflect: true }) errorStateControl?: OdsErrorStateControl = DEFAULT_ATTRIBUTE.errorStateControl;

  /** @see OdsCommonFieldAttribute.forbiddenValues */
  @Prop({ reflect: true }) forbiddenValues: OdsFormForbiddenValues<number> = DEFAULT_ATTRIBUTE.forbiddenValues;

  /** @see OdsCommonFieldAttribute.formControl */
  @Prop({ reflect: true }) formControl?: OdsFormControl<OdsCommonFieldValidityState> = DEFAULT_ATTRIBUTE.formControl;

  /** @see OdsInputAttribute.icon */
  @Prop({ reflect: true }) icon?: ODS_ICON_NAME = DEFAULT_ATTRIBUTE.icon;

  /** @see OdsInputAttribute.inline */
  @Prop({ reflect: true }) inline?: boolean = DEFAULT_ATTRIBUTE.inline;

  /** @see OdsCommonFieldAttribute.label */
  @Prop({ reflect: true }) label?: string = DEFAULT_ATTRIBUTE.label;

  /** @see OdsCommonFieldAttribute.loading */
  @Prop({ reflect: true }) loading?: boolean = DEFAULT_ATTRIBUTE.loading;

  /** @see OdsCommonFieldAttribute.masked */
  @Prop({ mutable: true, reflect: true }) masked?: boolean = DEFAULT_ATTRIBUTE.masked;

  /** @see OdsInputAttribute.max */
  @Prop({ reflect: true }) max?: number = DEFAULT_ATTRIBUTE.max;

  /** @see OdsInputAttribute.min */
  @Prop({ reflect: true }) min?: number = DEFAULT_ATTRIBUTE.min;

  /** @see OdsCommonFieldAttribute.name */
  @Prop({ reflect: true }) name?: string = DEFAULT_ATTRIBUTE.name;

  /** @see OdsCommonFieldAttribute.placeholder */
  @Prop({ reflect: true }) placeholder?: string = DEFAULT_ATTRIBUTE.placeholder;

  /** @see OdsCommonFieldAttribute.prefixValue */
  @Prop({ reflect: true }) prefixValue = DEFAULT_ATTRIBUTE.prefixValue;

  /** @see OdsCommonFieldAttribute.readOnly */
  @Prop({ reflect: true }) readOnly?: boolean = DEFAULT_ATTRIBUTE.readOnly;

  /** @see OdsCommonFieldAttribute.required */
  @Prop({ reflect: true }) required?: boolean = DEFAULT_ATTRIBUTE.required;

  /** @see OdsCommonFieldAttribute.size */
  @Prop({ reflect: true }) size?: ODS_COMMON_FIELD_SIZE = DEFAULT_ATTRIBUTE.size;

  /** @see OdsCommonFieldAttribute.step */
  @Prop({ reflect: true }) step?: number = DEFAULT_ATTRIBUTE.step;

  /** @see OdsCommonFieldAttribute.type */
  @Prop({ reflect: true }) type: ODS_INPUT_TYPE = DEFAULT_ATTRIBUTE.type;

  /** @see OdsCommonFieldAttribute.value */
  @Prop({ mutable: true, reflect: true }) value: OdsInputValue = DEFAULT_ATTRIBUTE.value;

  /** Events */

  /** @see OdsInputEvents.odsValueChange */
  @Event() odsValueChange!: EventEmitter<OdsInputValueChangeEventDetail>;

  /** @see OdsInputEvents.odsInputBlur */
  @Event() odsInputBlur!: EventEmitter<void>;

  /** @see OdsInputEvents.odsInputFocus */
  @Event() odsInputFocus!: EventEmitter<void>;

  /** Watch */

  @Watch('formControl')
  onFormControlChange(formControl?: OdsFormControl<OdsCommonFieldValidityState>): void {
    this.controller.onFormControlChange(formControl);
  }

  @Watch('defaultValue')
  onDefaultValueChange(defaultValue?: OdsInputValue): void {
    this.controller.onDefaultValueChange(defaultValue);
  }

  @Watch('value')
  onValueChange(value: OdsInputValue, oldValue?: OdsInputValue): void {
    this.controller.onValueChange(value, oldValue);
  }

  /** Listen */

  @Listen('focus')
  focus(): void {
    this.setFocus.bind(this)();
  }

  /**
   * @see OdsInputBehavior.beforeInit
   */
  beforeInit(): void {
    this.controller.beforeInit();
  }

  componentWillLoad(): void {
    this.beforeInit();
  }

  /**
   * @see OdsInputBehavior.emitChange
   */
  emitChange(value: OdsInputValue, oldValue?: OdsInputValue): void {
    this.logger.debug('emit', { oldValue, value });
    this.odsValueChange.emit({
      oldValue: oldValue == null ? oldValue : `${oldValue}`,
      validity: this.controller.getInputValidity(),
      value: value == null ? value : `${value}`,
    });
  }

  /**
   * @see OdsInputBehavior.emitFocus
   */
  emitFocus(): void {
    this.odsInputFocus.emit();
  }

  /**
   * @see OdsInputBehavior.emitBlur
   */
  emitBlur(): void {
    this.odsInputBlur.emit();
  }

  /**
   * @see OdsInputMethods.setFocus
   */
  @Method()
  async setFocus(): Promise<void> {
    this.inputEl?.focus();
  }

  /**
   * @see OdsInputMethods.getValidity
   */
  @Method()
  async getValidity(): Promise<OdsCommonFieldValidityState> {
    return this.controller.getInputValidity(this.inputEl);
  }

  /**
   * @see OdsInputMethods.clear
   */
  @Method()
  async clear(): Promise<void> {
    this.controller.clear();
  }

  /**
   * @see OdsInputMethods.hide
   */
  @Method()
  async hide(): Promise<void> {
    this.controller.hide();
  }

  /**
   * @see OdsInputMethods.reset
   */
  @Method()
  async reset(): Promise<void> {
    this.controller.reset();
  }

  /**
   * @see OdsInputMethods.stepUp
   */
  @Method()
  async stepUp(): Promise<void> {
    this.controller.stepUp();
  }

  /**
   * @see OdsInputMethods.stepDown
   */
  @Method()
  async stepDown(): Promise<void> {
    this.controller.stepDown();
  }

  /**
   * @see OdsInputMethods.setInputTabindex
   */
  @Method()
  async setInputTabindex(value: number): Promise<void> {
    this.controller.setInputTabindex(value);
  }

  hasError(): boolean {
    return this.controller.hasError();
  }

  /**
   * @see OdsInputBehavior.onBlur
   */
  onBlur(): void {
    this.controller.onBlur();
  }

  /**
   * @see OdsInputBehavior.onFocus
   */
  onFocus(): void {
    this.controller.onFocus();
  }

  /**
   * @see OdsInputBehavior.onInput
   */
  onInput(event: Event): void {
    this.controller.onInput(event);
  }

  /**
   * @see OdsInputBehavior.onChange
   */
  onChange(/*event: Event*/): void {
    this.controller.onChange();
  }

  private hasPlaceholder(): boolean {
    return !!this.placeholder && !this.value;
  }

  render(): JSX.Element {
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
      inputTabindex,
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
      /** Main styling is applied to Host, so that the icons are integrated inside the component */
      <Host {...{
        class: {
          'ods-error': Boolean(hasError.bind(this)()),
        },
        hasFocus,
        tabindex: inputTabindex,
      }}
      >
        <osds-text color={ODS_THEME_COLOR_INTENT.text}
          size={this.hasPlaceholder() ? ODS_TEXT_SIZE._300 : ODS_TEXT_SIZE._400}>
          { this.prefixValue }
        </osds-text>
        {/** Input field with attributes */}
        <input
          {...{
            ariaLabel,
            ariaLabelledby: labelId || null,
            contrasted,
            disabled,
            id: inputId,
            masked,
            max,
            min,
            name,
            onBlur: () => this.onBlur(),
            onChange: () => this.onChange(),
            onFocus: () => this.onFocus(),
            onInput: (e) => this.onInput(e),
            placeholder,
            readOnly,
            ref: (el) => this.inputEl = el as HTMLInputElement,
            required,
            step,
            tabindex: '-1',
            /** Handling password masking options */
            type: isPassword && !masked
              ? 'text'
              : type,
            value: value?.toString() || '',
          }}
        >
        </input>

        {/** Displaying Spinner if Loading is true */
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

        {/** If input type is password, display eye icon to hide input content */
          isPassword && !loading && (
            <osds-icon
              {...{
                ariaName: `${masked ? ODS_ICON_NAME.EYE_OPEN : ODS_ICON_NAME.EYE_CLOSED} icon`,
                color,
                name: masked ? ODS_ICON_NAME.EYE_OPEN : ODS_ICON_NAME.EYE_CLOSED,
                /** Toggles hide(), which will either hide or display the inputs content by switching masked attribute */
                onClick: () => this.hide(),
                size: ODS_ICON_SIZE.sm,
              }}></osds-icon>
          )
        }

        {/** If Component isn't loading & clearable, display clear icon to clear input content */
          clearable && !loading && (
            <osds-icon
              {...{
                ariaName: `${ODS_ICON_NAME.CLOSE} icon`,
                color,
                name: ODS_ICON_NAME.CLOSE,
                /** Toggles clear(), which will clear the inputs content */
                onClick: () => this.clear(),
                size: ODS_ICON_SIZE.sm,
              }}></osds-icon>
          )
        }

        {/** If Component isn't loading & icon, display desired icon */
          icon && !loading && (
            <osds-icon
              {...{
                ariaName: `${icon} icon`,
                color,
                name: icon,
                size: ODS_ICON_SIZE.sm,
              }}></osds-icon>
          )
        }
      </Host>
    );
  }
}
