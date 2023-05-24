import { Component, Element, Event, EventEmitter, Host, Listen, Method, Prop, State, Watch, h } from '@stencil/core';
import {
  OdsInputValue,
  OdsLogger,
  OdsSelect,
  OdsSelectController,
  odsSelectDefaultAttributes,
  OdsSelectEvents,
  OdsSelectMethods,
  OdsSelectSize,
  OdsSelectValidityState,
  OdsSelectValueChangeEventDetail,
  OdsIconSize,
  OdsIconName,
  OdsSelectOption, OdsSelectCreateDefaultOdsValidityState
} from '@ovhcloud/ods-core';
import { HTMLStencilElement } from '@stencil/core/internal';
import { OsdsSelectOption } from '../osds-select-option/osds-select-option';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OdsSelectOptionClickEventDetail } from '@ovhcloud/ods-core/src/components/select/select-option/ods-select-option-click-event-detail';

/**
 * @slot (placeholder) - Select placeholder
 */
@Component({
  tag: 'osds-select',
  styleUrl: 'osds-select.scss',
  shadow: true,
})
export class OsdsSelect implements OdsSelect<OdsStencilMethods<OdsSelectMethods>, OdsStencilEvents<OdsSelectEvents>> {
  private logger = new OdsLogger('OsdsSelect');
  controller: OdsSelectController = new OdsSelectController(this);

  @Element() el!: HTMLStencilElement;

  /**
   * The tabindex of the input.
   * @internal
   */
  @State() tabindex = 0;

  /**
   * Whether or not the select is open
   */
  @Prop({ reflect: true, mutable: true }) opened = false;

  /** @see OdsSelectAttributes.ariaLabel */
  @Prop({ reflect: true }) ariaLabel = odsSelectDefaultAttributes.ariaLabel;

  /** @see OdsSelectAttributes.ariaLabelledby */
  @Prop() ariaLabelledby = odsSelectDefaultAttributes.ariaLabelledby;

  /** @see OdsSelectAttributes.color */
  @Prop({ reflect: true }) color: OdsThemeColorIntent.primary = odsSelectDefaultAttributes.color;

  /** @see OdsSelectAttributes.defaultValue */
  @Prop({ reflect: true }) defaultValue: OdsInputValue = odsSelectDefaultAttributes.defaultValue;

  /** @see OdsSelectAttributes.disabled */
  @Prop({ reflect: true, mutable: true }) disabled = odsSelectDefaultAttributes.disabled;

  /** @see OdsSelectAttributes.flex */
  @Prop({ reflect: true }) flex = odsSelectDefaultAttributes.flex;

  /** @see OdsSelectAttributes.required */
  @Prop({ reflect: true, mutable: true }) required = odsSelectDefaultAttributes.required;

  /** @see OdsSelectAttributes.size */
  @Prop({ reflect: true }) size: OdsSelectSize = odsSelectDefaultAttributes.size;

  /** @see OdsSelectAttributes.value */
  @Prop({ reflect: true, mutable: true }) value: OdsInputValue = odsSelectDefaultAttributes.value;

  /** @see OdsSelectEvents.odsValueChange */
  @Event() odsValueChange!: EventEmitter<OdsSelectValueChangeEventDetail>;

  optionSelected: OdsSelectOption | null = null;

  @State()
  selectedOptionLabel = '';

  /** is the select was touched by the user */
  dirty = false;

  @State()
  validityState: OdsSelectValidityState = OdsSelectCreateDefaultOdsValidityState();

  /** @see OdsSelectEvents.odsFocus */
  @Event() odsFocus!: EventEmitter<void>;
  private onFocus() {
    this.odsFocus.emit();
  }

  /** @see OdsSelectEvents.odsBlur */
  @Event() odsBlur!: EventEmitter<void>;

  onBlur() {
    this.odsBlur.emit();
  }

  @Watch('defaultValue')
  onDefaultValueChange(defaultValue?: OdsInputValue) {
    this.logger.debug(`[input=${this.value}]`, 'defaultValue', defaultValue);
  }

  componentWillLoad() {
    this.onDefaultValueChange();
    if (this.value === '' && this.defaultValue !== undefined) {
      this.value = this.defaultValue;
    }
  }

  /**
   * once the component did load, update the state depending the children,
   * in order to synchronize the already set value with the placeholder
   */
  async componentDidLoad() {
    await this.updateSelectOptionStates(this.value);
  }

  @Watch('value')
  async onValueChange(value: OdsInputValue, oldValue?: OdsInputValue) {
    this.logger.log(`[select=${this.value}]`, 'value changed. emit new value', { value });
    this.emitChange(value, oldValue);
    await this.updateSelectOptionStates(value);
  }

  private emitChange(value: OdsInputValue, oldValue?: OdsInputValue) {
    this.logger.debug('emit', { value, oldValue });
    this.odsValueChange.emit({
      value: value,
      oldValue: oldValue,
      selection: this.optionSelected,
      validity: this.validityState,
    });
  }

  /**
   * @internal
   * @see OdsSelectMethods.clear
   */
  @Method()
  async clear() {
    this.optionSelected = null;
    this.validityState = OdsSelectCreateDefaultOdsValidityState();
    this.value = '';
  }

  /**
   * @internal
   * @see OdsSelectMethods.getValidity
   */
  @Method()
  async getValidity() {
    return this.validityState;
  }

  /**
   * @internal
   * @see OdsSelectMethods.reset
   */
  @Method()
  async reset() {
    this.optionSelected = null;
    this.value = this.defaultValue || '';
    this.validityState = OdsSelectCreateDefaultOdsValidityState();
  }

  /**
   * @internal
   * @see OdsSelectMethods.setFocus
   */
  @Method()
  async setFocus() {
    this.el.focus();
  }

  /**
   * @internal
   * @see OdsSelectMethods.setInputTabindex
   */
  @Method()
  async setInputTabindex(value: number) {
    this.tabindex = value;
  }

  /**
   * @see OdsSelectMethods.setInputTabindex
   */
  @Method()
  async validate() {
    this.validityState = this.controller.getValidity();
    return this.validityState;
  }

  private async updateSelectOptionStates(value?: OdsInputValue) {
    const selectOptions = this.getSelectOptionList();
    let nbSelected = 0;
    for (const selectOption of selectOptions) {
      selectOption.selected = (value === selectOption.value) && !nbSelected ;
      if (selectOption.selected) {
        this.optionSelected = selectOption;
        nbSelected++;
        this.selectedOptionLabel = await selectOption.getLabel();
      }
    }
  }

  private getSelectOptionList(): (HTMLElement & OsdsSelectOption)[] {
    return Array.from(this.el.querySelectorAll<OsdsSelectOption & HTMLElement>('osds-select-option'));
  }

  changeValue(value: OdsInputValue) {
    this.logger.log(`[select=${this.value}]`, 'value changed', { value });
    this.value = value;
  }

  // Toggle overlay when we click on the Select.
  private handleSelectClick() {
    this.logger.log('[handleSelectClick]', arguments, { validity: this.validityState });
    this.dirty = true;
    this.opened = !this.opened;
  }

  // Hide overlay when we click anywhere else in the window.
  @Listen('click', { target: 'window' })
  checkForClickOutside(ev: any) {
    // click on component, do nothing
    if (!this.dirty || this.el.contains(ev.target) || this.el.shadowRoot?.contains(ev.originalTarget)) {
      return;
    }
    this.logger.log('[checkForClickOutside]', arguments, { validity: this.validityState });
    this.opened = false;
    if (this.dirty) {
      this.validityState = this.controller.getValidity();
    }
  }

  @Listen('odsSelectOptionClick')
  handleValueChange(event: CustomEvent<OdsSelectOptionClickEventDetail>) {
    this.logger.log(`[select=${this.value}]`, 'received odsSelectOptionClick event', { detail: event.detail });
    if (event.detail.value !== this.value) {
      this.changeValue(event.detail.value);
    }
  }

  @Watch('disabled')
  closeWhenDisabled(disabled?: boolean) {
    if (disabled) {
      this.opened = false;
    }
  }

  private hasError(): boolean {
    return this.validityState.invalid;
  }

  render() {
    const {
      opened,
      ariaLabel,
      ariaLabelledby,
      disabled,
      flex,
      value,
      color
    } = this;

    return (
      <Host {...{
        class: `${disabled ? 'disabled' : ''}${opened ? ' opened' : ''}${this.hasError() ? ' ods-error' : ''}`,
        ariaLabel,
        'aria-labelledby': ariaLabelledby,
        flex,
        onFocus: this.onFocus.bind(this),
        onBlur: this.onBlur.bind(this),
        onClick: this.handleSelectClick.bind(this),
        tabindex: this.disabled ? -1 : this.tabindex,
      }}
      >
        <div {...{
          class: `select-trigger${opened ? ' opened' : ''}${this.hasError() ? ' error' : ''}`,
        }}>
          <div class={'label'}>
            { (!value) ?
            <slot name={'placeholder'}>&nbsp;</slot>
              : this.selectedOptionLabel }
          </div>
          <osds-icon size={OdsIconSize.sm} color={color} name={OdsIconName.CHEVRON_DOWN}></osds-icon>
        </div>

        <div {...{
          class: `overlay${opened ? ' opened' : ''}${this.hasError() ? ' error' : ''}`,
        }}>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
