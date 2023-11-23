import type { OdsInputAttribute } from './interfaces/attributes';
import type { OdsInputEvent, OdsInputValueChangeEventDetail } from './interfaces/events';
import type { OdsInputMethod } from './interfaces/methods';
import type { OdsCommonFieldValidityState, OdsInputValue } from '@ovhcloud/ods-common-core';
import type { EventEmitter, FunctionalComponent } from '@stencil/core';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { AttachInternals, Component, Element, Event, Host, Method, Prop, State, Watch, h } from '@stencil/core';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { ODS_INPUT_SIZE } from './constants/input-size';
import { ODS_INPUT_TYPE } from './constants/input-type';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsInputController } from './core/controller';
import { ODS_ICON_NAME, ODS_ICON_SIZE } from '../../../../icon/src';
import { ODS_SPINNER_SIZE } from '../../../../spinner/src';
import { ODS_TEXT_SIZE } from '../../../../text/src';

// TODO when refactorig style
//  - hasFocus State could be removed to style from native foucs css attribute instead

@Component({
  formAssociated: true,
  shadow: true,
  styleUrl: 'osds-input.scss',
  tag: 'osds-input',
})
export class OsdsInput implements OdsInputAttribute, OdsInputEvent, OdsInputMethod {
  private static inputIds = 0;
  private inputId = `ods-input-${OsdsInput.inputIds++}`;
  controller = new OdsInputController<OsdsInput>(this);
  inputEl?: HTMLInputElement;

  @Element() el!: HTMLElement;

  @AttachInternals() internals!: ElementInternals;

  @Prop() ariaLabel = DEFAULT_ATTRIBUTE.ariaLabel;
  @Prop() ariaLabelledby?: string;
  @Prop({ reflect: true }) clearable?: boolean;
  @Prop({ reflect: true }) defaultValue = DEFAULT_ATTRIBUTE.defaultValue;
  @Prop({ reflect: true }) disabled = DEFAULT_ATTRIBUTE.disabled;
  @Prop({ reflect: true }) error = DEFAULT_ATTRIBUTE.error;
  @Prop({ reflect: true }) forbiddenValues?: OdsInputValue[];
  @Prop({ reflect: true }) icon?: ODS_ICON_NAME;
  @Prop({ reflect: true }) inline? = DEFAULT_ATTRIBUTE.inline;
  @Prop({ reflect: true }) label?: string;
  @Prop({ reflect: true }) loading?: boolean;
  @Prop({ mutable: true, reflect: true }) masked?: boolean = DEFAULT_ATTRIBUTE.masked;
  @Prop({ reflect: true }) max?: number;
  @Prop({ reflect: true }) min?: number;
  @Prop({ reflect: true }) name = DEFAULT_ATTRIBUTE.name;
  @Prop({ reflect: true }) pattern?: string;
  @Prop({ reflect: true }) placeholder?: string;
  @Prop({ reflect: true }) prefixValue? : string;
  @Prop({ reflect: true }) readOnly?: boolean;
  @Prop({ reflect: true }) required?: boolean;
  @Prop({ reflect: true }) step?: number;
  @Prop({ reflect: true }) type?: ODS_INPUT_TYPE = DEFAULT_ATTRIBUTE.type;
  @Prop({ mutable: true, reflect: true }) value = DEFAULT_ATTRIBUTE.value;

  @State() hasFocus = false;
  @State() internalError = false;

  @Event() odsBlur!: EventEmitter<void>;
  @Event() odsClear!: EventEmitter<void>;
  @Event() odsFocus!: EventEmitter<void>;
  @Event() odsHide!: EventEmitter<void>;
  @Event() odsReset!: EventEmitter<void>;
  @Event() odsValueChange!: EventEmitter<OdsInputValueChangeEventDetail>;

  @Method()
  async clear(): Promise<void> {
    return this.controller.clear();
  }

  @Method()
  async getInputEl(): Promise<HTMLInputElement | undefined> {
    return this.inputEl;
  }

  @Method()
  async getValidity(): Promise<OdsCommonFieldValidityState | undefined> {
    return this.inputEl && await this.controller.getValidity(this.inputEl) || undefined;
  }

  @Method()
  async hide(): Promise<void> {
    return this.controller.hide();
  }

  @Method()
  async reset(): Promise<void> {
    return this.controller.reset();
  }

  @Method()
  async setFocus(): Promise<void> {
    this.inputEl?.focus();
  }

  @Method()
  async stepDown(): Promise<void> {
    return this.controller.stepDown();
  }

  @Method()
  async stepUp(): Promise<void> {
    return this.controller.stepUp();
  }

  @Watch('value')
  async onValueChange(value: OdsInputValue, oldValue?: OdsInputValue): Promise<void> {
    this.controller.onValueChange(value, oldValue);
    await this.onErrorChange();
  }

  @Watch('error')
  async onErrorChange(): Promise<void> {
    this.internalError = await this.controller.hasError();
  }

  async componentWillLoad(): Promise<void> {
    this.controller.beforeInit();
    await this.onErrorChange();
  }

  formResetCallback(): Promise<void> {
    return this.reset();
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

  onFocus(): void {
    this.odsFocus.emit();
    this.hasFocus = true;
  }

  onInput(event: Event): void {
    this.controller.onInput(event);
  }

  render(): FunctionalComponent {
    const isPassword = this.type === ODS_INPUT_TYPE.password;

    return (
      <Host
        class={{ 'ods-error': this.internalError }}
        color={ ODS_THEME_COLOR_INTENT.primary }
        hasFocus={ this.hasFocus }
        size={ ODS_INPUT_SIZE.md }>
        <osds-text
          color={ ODS_THEME_COLOR_INTENT.text }
          size={ this.hasPlaceholder() ? ODS_TEXT_SIZE._300 : ODS_TEXT_SIZE._400 }>
          { this.prefixValue }
        </osds-text>

        <input
          aria-label={ this.ariaLabel }
          aria-labelledby={ this.ariaLabelledby || `${this.inputId}-label` }
          disabled={ this.disabled }
          id={ this.inputId }
          max={ this.max }
          min={ this.min }
          name={ this.name }
          onBlur={ (): void => this.onBlur() }
          onFocus={ (): void => this.onFocus() }
          onInput={ (e): void => this.onInput(e) }
          pattern={ this.pattern }
          placeholder={ this.placeholder }
          readOnly={ this.readOnly }
          ref={ (el): HTMLInputElement => this.inputEl = el as HTMLInputElement }
          required={ this.required }
          step={ this.step }
          type={ isPassword && !this.masked ? ODS_INPUT_TYPE.text : this.type }
          value={ this.value?.toString() || '' }>
        </input>

        {
          this.loading && (
            <osds-spinner
              contrasted={ false }
              inline={ true }
              size={ ODS_SPINNER_SIZE.sm } >
            </osds-spinner>
          )
        }

        {
          isPassword && !this.loading && (
            <button
              class="osds-input__icon-button"
              disabled= { this.disabled }
              onClick={ (): Promise<void> => this.hide() }
              onKeyUp={ (event: KeyboardEvent): Promise<void> => this.controller.handleKeySpace(event, this.hide) }>
              <osds-icon
                ariaName={ `${this.masked ? ODS_ICON_NAME.EYE_OPEN : ODS_ICON_NAME.EYE_CLOSED} icon` }
                color={ ODS_THEME_COLOR_INTENT.primary }
                name={ this.masked ? ODS_ICON_NAME.EYE_OPEN : ODS_ICON_NAME.EYE_CLOSED }
                size={ ODS_ICON_SIZE.sm }>
              </osds-icon>
            </button>
          )
        }

        {
          this.clearable && !this.loading && (
            <button
              class="osds-input__icon-button"
              disabled= { this.disabled }
              onClick={ (): Promise<void> => this.clear() }
              onKeyUp={ (event: KeyboardEvent): Promise<void> => this.controller.handleKeySpace(event, this.clear) }>
              <osds-icon
                ariaName={ `${ODS_ICON_NAME.CLOSE} icon` }
                color={ ODS_THEME_COLOR_INTENT.primary }
                name={ ODS_ICON_NAME.CLOSE }
                size={ ODS_ICON_SIZE.sm }>
              </osds-icon>
            </button>
          )
        }

        {
          this.icon && !this.loading && (
            <osds-icon
              ariaName={ `${this.icon} icon` }
              color={ ODS_THEME_COLOR_INTENT.primary }
              name={ this.icon }
              size={ ODS_ICON_SIZE.sm }>
            </osds-icon>
          )
        }
      </Host>
    );
  }
}
