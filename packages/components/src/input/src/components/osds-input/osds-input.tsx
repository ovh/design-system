import type { OdsInputAttribute } from './interfaces/attributes';
import type { OdsInputEvent, OdsInputValueChangeEventDetail } from './interfaces/events';
import type { OdsInputMethod } from './interfaces/methods';
import { OdsInputValue, OdsCommonFieldValidityState, ODS_COMMON_FIELD_SIZE } from '@ovhcloud/ods-common-core';
import type { EventEmitter } from '@stencil/core';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { AttachInternals, Component, Element, Event, Host, Method, Prop, State, Watch, h } from '@stencil/core';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsInputController } from './core/controller';
import { ODS_ICON_NAME, ODS_ICON_SIZE } from '../../../../icon/src';
import { ODS_SPINNER_SIZE } from '../../../../spinner/src';
import { ODS_TEXT_SIZE } from '../../../../text/src';
import { ODS_INPUT_TYPE } from './constants/input-type';

@Component({
  formAssociated: true,
  shadow: true,
  styleUrl: 'osds-input.scss',
  tag: 'osds-input',
})
export class OsdsInput implements OdsInputAttribute, OdsInputEvent, OdsInputMethod {
  controller = new OdsInputController<OsdsInput>(this);
  private static inputIds = 0;
  private inputId = `ods-input-${OsdsInput.inputIds++}`;
  inputEl?: HTMLInputElement;

  @Element() el!: HTMLElement;

  @AttachInternals() internals!: ElementInternals;

  /**
   * The tabindex of the input.
   * @internal
   */
  @State() tabindex = 0;
  @State() internalError = false;
  @State() hasFocus = false;

  @Prop() ariaLabel: HTMLElement['ariaLabel'] = DEFAULT_ATTRIBUTE.ariaLabel;

  @Prop() ariaLabelledby?: string;

  @Prop({ reflect: true }) clearable?: boolean;

  @Prop({ reflect: true }) defaultValue: OdsInputValue = DEFAULT_ATTRIBUTE.defaultValue;

  @Prop({ reflect: true }) disabled: boolean = DEFAULT_ATTRIBUTE.disabled;

  @Prop({ reflect: true }) error: boolean = DEFAULT_ATTRIBUTE.error;

  @Prop({ reflect: true }) forbiddenValues?: OdsInputValue[];

  @Prop({ reflect: true }) icon?: ODS_ICON_NAME;

  @Prop({ reflect: true }) inline?: boolean = DEFAULT_ATTRIBUTE.inline;

  @Prop({ reflect: true }) label?: string;

  @Prop({ reflect: true }) loading?: boolean;

  @Prop({ mutable: true, reflect: true }) masked?: boolean;

  @Prop({ reflect: true }) max?: number;

  @Prop({ reflect: true }) min?: number;

  @Prop({ reflect: true }) name: string = DEFAULT_ATTRIBUTE.name;

  @Prop({ reflect: true }) placeholder?: string;

  @Prop({ reflect: true }) prefixValue? : string;

  @Prop({ reflect: true }) readOnly?: boolean;

  @Prop({ reflect: true }) required?: boolean;

  @Prop({ reflect: true }) step?: number;

  @Prop({ reflect: true }) type?: ODS_INPUT_TYPE = DEFAULT_ATTRIBUTE.type;

  @Prop({ mutable: true, reflect: true }) value: OdsInputValue = DEFAULT_ATTRIBUTE.value;

  @Event() odsBlur!: EventEmitter<void>;

  @Event() odsClear!: EventEmitter<void>;

  @Event() odsFocus!: EventEmitter<void>;

  @Event() odsHide!: EventEmitter<void>;

  @Event() odsReset!: EventEmitter<void>;

  @Event() odsValueChange!: EventEmitter<OdsInputValueChangeEventDetail>;

  @Method()
  async clear(): Promise<void> {
    this.controller.clear();
  }

  @Method()
  async hide(): Promise<void> {
    this.controller.hide();
  }

  @Watch('value')
  onValueChange(value: OdsInputValue, oldValue?: OdsInputValue): void {
    this.controller.onValueChange(value, oldValue);
  }

  @Method()
  async setFocus(): Promise<void> {
    if (this.inputEl) {
      this.controller?.setFocus(this.inputEl);
      this.hasFocus = true;
    }
  }

  @Method()
  async setTabindex(value: number): Promise<void> {
    this.controller.setTabindex(value);
  }
  
  @Method()
  async stepDown(): Promise<void> {
    this.controller.stepDown();
  }

  @Method()
  async stepUp(): Promise<void> {
    this.controller.stepUp();
  }

  @Method()
  async getValidity(): Promise<OdsCommonFieldValidityState | undefined> {
    return this.inputEl && this.controller.getValidity(this.inputEl) || undefined;
  }

  @Method()
  async reset(): Promise<void> {
    this.controller.reset();
  }

  componentWillLoad(): void {
    this.controller.beforeInit();
  }

  async componentWillUpdate(): Promise<void> {
    this.internalError = await this.controller.hasError();
  }

  formResetCallback(): void {
    this.reset();
  }

  async emitChange(value: OdsInputValue, oldValue?: OdsInputValue): Promise<void> {
    this.odsValueChange.emit({
      name: this.name,
      oldValue: oldValue === null ? oldValue : `${oldValue}`,
      validity: await this.getValidity(),
      value,
    });
  }

  private hasPlaceholder(): boolean {
    return !!this.placeholder && !this.value;
  }

  onBlur(): void {
    this.odsBlur.emit();
    this.hasFocus = false;
  }

  onInput(event: Event): void {
    this.controller.onInput(event);
  }

  render(): JSX.Element {
    const {
      ariaLabel,
      ariaLabelledby,
      clearable,
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
        onFocus: () => this.setFocus(),
        tabindex,
        color: ODS_THEME_COLOR_INTENT.primary,
        size: ODS_COMMON_FIELD_SIZE.md,
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
            id: inputId,
            masked,
            max,
            min,
            name,
            onBlur: () => this.onBlur(),
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
                color: ODS_THEME_COLOR_INTENT.primary,
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
                color: ODS_THEME_COLOR_INTENT.primary,
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
                color: ODS_THEME_COLOR_INTENT.primary,
                name: icon,
                size: ODS_ICON_SIZE.sm,
              }}></osds-icon>
          )
        }
      </Host>
    );
  }
}
