import type { OdsInputAttribute } from './interfaces/attributes';
import type { OdsInputEvent, OdsInputValueChangeEventDetail } from './interfaces/events';
import type { OdsInputMethod } from './interfaces/methods';
import type { OdsCommonFieldValidityState, OdsErrorStateControl, OdsFormControl, OdsFormForbiddenValues, OdsInputValue, ODS_COMMON_FIELD_SIZE, ODS_COMMON_INPUT_TYPE } from '@ovhcloud/ods-common-core';
import type { EventEmitter } from '@stencil/core';
import { OdsLogger, OdsCommonFieldMethodController } from '@ovhcloud/ods-common-core';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { ODS_ICON_NAME, ODS_ICON_SIZE } from '../../../../icon/src';
import { ODS_SPINNER_SIZE } from '../../../../spinner/src';
import { ODS_TEXT_SIZE } from '../../../../text/src';
import { AttachInternals, Component, Element, Event, Host, Listen, Method, Prop, State, Watch, h } from '@stencil/core';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsInputController } from './core/controller';

@Component({
  formAssociated: true,
  shadow: true,
  styleUrl: 'osds-input.scss',
  tag: 'osds-input',
})
export class OsdsInput implements OdsInputAttribute, OdsInputEvent, OdsInputMethod {
  private logger = new OdsLogger('OsdsInput');
  private static inputIds = 0;
  private inputId = `ods-input-${OsdsInput.inputIds++}`;
  controller: OdsInputController = new OdsInputController(this);
  commonFieldMethodController = new OdsCommonFieldMethodController(this);

  @Element() el!: HTMLElement;
  inputEl?: HTMLInputElement;

  @AttachInternals() internals!: ElementInternals;

  /**
   * The tabindex of the input.
   * @internal
   */
  @State() tabindex = 0;
  @State() hasFocus = false;
  @State() internalError = false;

  /** Props */

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

  @Prop({ reflect: true }) formControl?: OdsFormControl<OdsCommonFieldValidityState> = DEFAULT_ATTRIBUTE.formControl;

  @Prop({ reflect: true }) icon?: ODS_ICON_NAME = DEFAULT_ATTRIBUTE.icon;

  @Prop({ reflect: true }) inline?: boolean = DEFAULT_ATTRIBUTE.inline;

  @Prop({ reflect: true }) label?: string = DEFAULT_ATTRIBUTE.label;

  @Prop({ reflect: true }) loading?: boolean = DEFAULT_ATTRIBUTE.loading;

  @Prop({ mutable: true, reflect: true }) masked?: boolean = DEFAULT_ATTRIBUTE.masked;

  @Prop({ reflect: true }) max?: number = DEFAULT_ATTRIBUTE.max;

  @Prop({ reflect: true }) min?: number = DEFAULT_ATTRIBUTE.min;

  @Prop({ reflect: true }) name?: string = DEFAULT_ATTRIBUTE.name;

  @Prop({ reflect: true }) placeholder?: string = DEFAULT_ATTRIBUTE.placeholder;

  @Prop({ reflect: true }) prefixValue = DEFAULT_ATTRIBUTE.prefixValue;

  @Prop({ reflect: true }) readOnly?: boolean = DEFAULT_ATTRIBUTE.readOnly;

  @Prop({ reflect: true }) required?: boolean = DEFAULT_ATTRIBUTE.required;

  @Prop({ reflect: true }) size?: ODS_COMMON_FIELD_SIZE = DEFAULT_ATTRIBUTE.size;

  @Prop({ reflect: true }) step?: number = DEFAULT_ATTRIBUTE.step;

  @Prop({ reflect: true }) type: ODS_COMMON_INPUT_TYPE = DEFAULT_ATTRIBUTE.type;

  @Prop({ mutable: true, reflect: true }) value: OdsInputValue = DEFAULT_ATTRIBUTE.value;

  /** Events */

  @Event() odsValueChange!: EventEmitter<OdsInputValueChangeEventDetail>;

  @Event() odsInputBlur!: EventEmitter<void>;

  @Event() odsInputFocus!: EventEmitter<void>;

  /** Watch */

  @Watch('formControl')
  onFormControlChange(formControl?: OdsFormControl<OdsCommonFieldValidityState>): void {
    this.controller.onFormControlChange(formControl);
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

  beforeInit(): void {
    this.controller.beforeInit();
  }

  componentWillLoad(): void {
    this.beforeInit();
  }

  async componentWillUpdate(): Promise<void> {
    this.internalError = await this.controller.hasError();
  }

  formResetCallback(): void {
    this.value = this.defaultValue;
  }

  async emitChange(value: OdsInputValue, oldValue?: OdsInputValue): Promise<void> {
    this.logger.debug('emit', { oldValue, value });
    this.odsValueChange.emit({
      oldValue: oldValue == null ? oldValue : `${oldValue}`,
      validity: await this.getValidity(),
      value: value == null ? value : `${value}`,
    });
  }

  emitFocus(): void {
    this.odsInputFocus.emit();
  }

  emitBlur(): void {
    this.odsInputBlur.emit();
  }

  @Method()
  async setFocus(): Promise<void> {
    this.inputEl?.focus();
  }

  @Method()
  async getValidity(): Promise<OdsCommonFieldValidityState> {
    return this.commonFieldMethodController.getValidity();
  }

  @Method()
  async clear(): Promise<void> {
    this.commonFieldMethodController.clear();
  }

  @Method()
  async hide(): Promise<void> {
    this.commonFieldMethodController.hide();
  }

  @Method()
  async reset(): Promise<void> {
    this.commonFieldMethodController.reset();
  }

  @Method()
  async stepUp(): Promise<void> {
    this.controller.stepUp();
  }

  @Method()
  async stepDown(): Promise<void> {
    this.controller.stepDown();
  }

  @Method()
  async setTabindex(value: number): Promise<void> {
    this.commonFieldMethodController.setTabindex(value);
  }

  onBlur(): void {
    this.controller.onBlur();
  }

  onInput(event: Event): void {
    this.controller.onInput(event);
  }

  onFocus(): void {
    this.controller.onFocus();
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
      hasFocus,
      icon,
      inputId,
      tabindex,
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
          'ods-error': this.internalError,
        },
        hasFocus,
        tabindex: tabindex,
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
            contrasted,
            disabled,
            id: inputId,
            masked,
            max,
            min,
            name,
            onBlur: () => this.onBlur(),
            onFocus: () => this.setFocus(),
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

        {
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

        {
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
