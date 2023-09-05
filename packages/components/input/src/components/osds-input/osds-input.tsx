import type { EventEmitter } from '@stencil/core';
import type { OdsErrorStateControl, OdsFormControl, OdsFormForbiddenValues, OdsInputValue } from '@ovhcloud/ods-common-core';
import type { OdsInputAttribute, OdsInputValidityState } from './interfaces/attributes';
import type { OdsInputEvent, OdsInputValueChangeEventDetail } from './interfaces/events';
import type { OdsInputMethod } from './interfaces/methods';
import { Component, Element, Event, Host, Listen, Method, Prop, State, Watch, h } from '@stencil/core';
import { OdsLogger } from '@ovhcloud/ods-common-core';
import { ODS_ICON_NAME, ODS_ICON_SIZE } from '@ovhcloud/ods-component-icon';
import { ODS_SPINNER_SIZE } from '@ovhcloud/ods-component-spinner';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { ODS_INPUT_SIZE } from './constants/input-size';
import { ODS_INPUT_TYPE } from './constants/input-type';
import { OdsInputController } from './core/controller';

/**
 *
 */
@Component({
  tag: 'osds-input',
  styleUrl: 'osds-input.scss',
  shadow: true,
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

  /** @see OdsInputAttributes.ariaLabel */
  @Prop() ariaLabel: HTMLElement['ariaLabel'] = DEFAULT_ATTRIBUTE.ariaLabel;

  /** @see OdsInputAttributes.ariaLabelledby */
  @Prop() ariaLabelledby?: string = DEFAULT_ATTRIBUTE.ariaLabelledby;

  /** @see OdsInputAttributes.clearable */
  @Prop({ reflect: true }) clearable?: boolean = DEFAULT_ATTRIBUTE.clearable;

  /** @see OdsInputAttributes.color */
  @Prop({ reflect: true }) color?: ODS_THEME_COLOR_INTENT = DEFAULT_ATTRIBUTE.color;

  /** @see OdsInputAttributes.contrasted */
  @Prop({ reflect: true }) contrasted?: boolean = DEFAULT_ATTRIBUTE.contrasted;

  /** @see OdsInputAttributes.defaultValue */
  @Prop({ reflect: true }) defaultValue: OdsInputValue = DEFAULT_ATTRIBUTE.defaultValue;

  /** @see OdsInputAttributes.disabled */
  @Prop({ reflect: true }) disabled?: boolean = DEFAULT_ATTRIBUTE.disabled;

  /** @see OdsInputAttributes.error */
  @Prop({ reflect: true }) error?: boolean = DEFAULT_ATTRIBUTE.error;

  /** @see OdsInputAttributes.errorStateControl */
  @Prop({ reflect: true }) errorStateControl?: OdsErrorStateControl = DEFAULT_ATTRIBUTE.errorStateControl;

  /** @see OdsInputAttributes.forbiddenValues */
  @Prop({ reflect: true }) forbiddenValues: OdsFormForbiddenValues<number> = DEFAULT_ATTRIBUTE.forbiddenValues;

  /** @see OdsInputAttributes.formControl */
  @Prop({ reflect: true }) formControl?: OdsFormControl<OdsInputValidityState> = DEFAULT_ATTRIBUTE.formControl;

  /** @see OdsInputAttributes.icon */
  @Prop({ reflect: true }) icon?: ODS_ICON_NAME = DEFAULT_ATTRIBUTE.icon;

  /** @see OdsInputAttributes.inline */
  @Prop({ reflect: true }) inline?: boolean = DEFAULT_ATTRIBUTE.inline;

  /** @see OdsInputAttributes.label */
  @Prop({ reflect: true }) label?: string = DEFAULT_ATTRIBUTE.label;

  /** @see OdsInputAttributes.loading */
  @Prop({ reflect: true }) loading?: boolean = DEFAULT_ATTRIBUTE.loading;

  /** @see OdsInputAttributes.masked */
  @Prop({ reflect: true, mutable: true }) masked?: boolean = DEFAULT_ATTRIBUTE.masked;

  /** @see OdsInputAttributes.max */
  @Prop({ reflect: true }) max?: number = DEFAULT_ATTRIBUTE.max;

  /** @see OdsInputAttributes.min */
  @Prop({ reflect: true }) min?: number = DEFAULT_ATTRIBUTE.min;

  /** @see OdsInputAttributes.name */
  @Prop({ reflect: true }) name?: string = DEFAULT_ATTRIBUTE.name;

  /** @see OdsInputAttributes.placeholder */
  @Prop({ reflect: true }) placeholder?: string = DEFAULT_ATTRIBUTE.placeholder;

  /** @see OdsInputAttributes.readOnly */
  @Prop({ reflect: true }) readOnly?: boolean = DEFAULT_ATTRIBUTE.readOnly;

  /** @see OdsInputAttributes.required */
  @Prop({ reflect: true }) required?: boolean = DEFAULT_ATTRIBUTE.required;

  /** @see OdsInputAttributes.size */
  @Prop({ reflect: true }) size?: ODS_INPUT_SIZE = DEFAULT_ATTRIBUTE.size;

  /** @see OdsInputAttributes.step */
  @Prop({ reflect: true }) step?: number = DEFAULT_ATTRIBUTE.step;

  /** @see OdsInputAttributes.type */
  @Prop({ reflect: true }) type: ODS_INPUT_TYPE = DEFAULT_ATTRIBUTE.type;

  /** @see OdsInputAttributes.value */
  @Prop({ reflect: true, mutable: true }) value: OdsInputValue = DEFAULT_ATTRIBUTE.value;

  /** Events */

  /** @see OdsInputEvents.odsValueChange */
  @Event() odsValueChange!: EventEmitter<OdsInputValueChangeEventDetail>;

  /** @see OdsInputEvents.odsInputBlur */
  @Event() odsInputBlur!: EventEmitter<void>;

  /** @see OdsInputEvents.odsInputFocus */
  @Event() odsInputFocus!: EventEmitter<void>;

  /** Watch */

  @Watch('formControl')
  onFormControlChange(formControl?: OdsFormControl<OdsInputValidityState>) {
    this.controller.onFormControlChange(formControl);
  }

  @Watch('defaultValue')
  onDefaultValueChange(defaultValue?: OdsInputValue) {
    this.controller.onDefaultValueChange(defaultValue);
  }

  @Watch('value')
  onValueChange(value: OdsInputValue, oldValue?: OdsInputValue) {
    this.controller.onValueChange(value, oldValue);
  }

  /** Listen */

  @Listen('focus')
  focus() {
    this.setFocus.bind(this)();
  }

  /**
   * @see OdsInputBehavior.beforeInit
   */
  beforeInit() {
    this.controller.beforeInit();
  }

  componentWillLoad() {
    this.beforeInit();
  }

  /**
   * @see OdsInputBehavior.emitChange
   */
  emitChange(value: OdsInputValue, oldValue?: OdsInputValue) {
    this.logger.debug('emit', { value, oldValue });
    this.odsValueChange.emit({
      value: value == null ? value : `${value}`,
      oldValue: oldValue == null ? oldValue : `${oldValue}`,
      validity: this.controller.getInputValidity()
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
  async setFocus() {
    this.inputEl?.focus();
  }

  /**
   * @see OdsInputMethods.getValidity
   */
  @Method()
  async getValidity() {
    return this.controller.getInputValidity(this.inputEl);
  }

  /**
   * @see OdsInputMethods.clear
   */
  @Method()
  async clear() {
    this.controller.clear();
  }

  /**
   * @see OdsInputMethods.hide
   */
  @Method()
  async hide() {
    this.controller.hide();
  }

  /**
   * @see OdsInputMethods.reset
   */
  @Method()
  async reset() {
    this.controller.reset();
  }

  /**
   * @see OdsInputMethods.stepUp
   */
  @Method()
  async stepUp() {
    this.controller.stepUp();
  }

  /**
   * @see OdsInputMethods.stepDown
   */
  @Method()
  async stepDown() {
    this.controller.stepDown();
  }

  /**
   * @see OdsInputMethods.setInputTabindex
   */
  @Method()
  async setInputTabindex(value: number) {
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
  onInput(event: Event) {
    this.controller.onInput(event);
  }

  /**
   * @see OdsInputBehavior.onChange
   */
  onChange(/*event: Event*/) {
    this.controller.onChange();
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
        tabindex: inputTabindex,
        hasFocus,
      }}
      >
        {/** Input field with attributes */}
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
                name: masked ? ODS_ICON_NAME.EYE_OPEN : ODS_ICON_NAME.EYE_CLOSED,
                size: ODS_ICON_SIZE.sm,
                color,
                /** Toggles hide(), which will either hide or display the inputs content by switching masked attribute */
                onClick: () => this.hide(),
            }}></osds-icon>
          )
        }

        {/** If Component isn't loading & clearable, display clear icon to clear input content */
          clearable && !loading && (
            <osds-icon
              {...{
                ariaName: `${ODS_ICON_NAME.CLOSE} icon`,
                name: ODS_ICON_NAME.CLOSE,
                size: ODS_ICON_SIZE.sm,
                color,
                /** Toggles clear(), which will clear the inputs content */
                onClick: () => this.clear(),
            }}></osds-icon>
          )
        }

        {/** If Component isn't loading & icon, display desired icon */
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
