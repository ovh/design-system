import type { OcdkSurface } from '@ovhcloud/ods-cdk';
import type { OdsInputValue, OdsValidityState } from '@ovhcloud/ods-common-core';
import type { HTMLStencilElement } from '@stencil/core/internal';
import type { OdsSelectAttribute } from './interfaces/attributes';
import type { OdsSelectEvent, OdsSelectValueChangeEventDetail } from './interfaces/events';
import type { OdsSelectMethod } from './interfaces/methods';
import type { ODS_SELECT_SIZE } from './constants/select-size';
import type { OsdsSelectOption } from '../osds-select-option/osds-select-option';
import type { OdsSelectOptionClickEventDetail } from '../osds-select-option/interfaces/events';
import { Component, Element, Event, EventEmitter, Host, Listen, Method, Prop, State, Watch, h } from '@stencil/core';
import { OdsLogger } from '@ovhcloud/ods-common-core';
import { ODS_ICON_NAME, ODS_ICON_SIZE } from '@ovhcloud/ods-component-icon';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { ocdkAssertEventTargetIsNode, ocdkDefineCustomElements, ocdkIsSurface } from '@ovhcloud/ods-cdk';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { DEFAULT_VALIDITY_STATE } from './constants/default-validity-state';
import { OdsSelectController } from './core/controller';

// define custom elements from CDK
ocdkDefineCustomElements()

/**
 * @slot (placeholder) - Select placeholder
 */
@Component({
  tag: 'osds-select',
  styleUrl: 'osds-select.scss',
  shadow: true,
})
export class OsdsSelect implements OdsSelectAttribute, OdsSelectEvent, OdsSelectMethod {
  private logger = new OdsLogger('OsdsSelect');
  controller: OdsSelectController = new OdsSelectController(this);
  anchor!: HTMLElement;
  surface: OcdkSurface | undefined = undefined;

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
  @Prop({ reflect: true }) ariaLabel = DEFAULT_ATTRIBUTE.ariaLabel;

  /** @see OdsSelectAttributes.ariaLabelledby */
  @Prop() ariaLabelledby = DEFAULT_ATTRIBUTE.ariaLabelledby;

  /** @see OdsSelectAttributes.color */
  @Prop({ reflect: true }) color: OdsThemeColorIntent = DEFAULT_ATTRIBUTE.color;

  /** @see OdsSelectAttributes.defaultValue */
  @Prop({ reflect: true }) defaultValue: OdsInputValue = DEFAULT_ATTRIBUTE.defaultValue;

  /** @see OdsSelectAttributes.disabled */
  @Prop({ reflect: true, mutable: true }) disabled = DEFAULT_ATTRIBUTE.disabled;

  /** @see OdsSelectAttributes.inline */
  @Prop({ reflect: true }) inline = DEFAULT_ATTRIBUTE.inline;

  /** @see OdsSelectAttributes.required */
  @Prop({ reflect: true, mutable: true }) required = DEFAULT_ATTRIBUTE.required;

  /** @see OdsSelectAttributes.size */
  @Prop({ reflect: true }) size: ODS_SELECT_SIZE = DEFAULT_ATTRIBUTE.size;

  /** @see OdsSelectAttributes.value */
  @Prop({ reflect: true, mutable: true }) value: OdsInputValue = DEFAULT_ATTRIBUTE.value;

  /** @see OdsSelectEvents.odsValueChange */
  @Event() odsValueChange!: EventEmitter<OdsSelectValueChangeEventDetail>;

  optionSelected: OsdsSelectOption | null = null;

  @State()
  selectedOptionLabel = '';

  /** is the select was touched by the user */
  dirty = false;

  @State()
  validityState: OdsValidityState = DEFAULT_VALIDITY_STATE;

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

  componentWillLoad() {
    this.onDefaultValueChange();
    if (this.value === '' && this.defaultValue !== undefined) {
      this.value = this.defaultValue;
    }
    this.openedChanged(this.opened);
  }

  /**
   * once the component did load, update the state depending the children,
   * in order to synchronize the already set value with the placeholder
   */
  async componentDidLoad() {
    this.setSelectOptions();
    await this.updateSelectOptionStates(this.value);
  }

  @Watch('defaultValue')
  onDefaultValueChange(defaultValue?: OdsInputValue) {
    this.logger.debug(`[input=${this.value}]`, 'defaultValue', defaultValue);
  }

  @Watch('opened')
  openedChanged(opened: boolean) {
    if (this.surface) {
      this.surface.opened = opened;
    }
  }

  @Watch('value')
  async onValueChange(value: OdsInputValue, oldValue?: OdsInputValue) {
    this.logger.log(`[onValueChange=${this.value}]`, 'value changed. emit new value', { value });
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

  handleKeyDown(event: KeyboardEvent): void {
    event.stopPropagation();
    this.controller.handlerKeyDown(event);
  }

  /**
   * @internal
   * @see OdsSelectMethods.clear
   */
  @Method()
  async clear() {
    this.optionSelected = null;
    this.validityState = DEFAULT_VALIDITY_STATE;
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
    this.validityState = DEFAULT_VALIDITY_STATE;
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

  private async updateSelectOptionStates(value?: OdsInputValue): Promise<void> {
    let nbSelected = 0;
    for (const selectOption of this.controller.selectOptions) {
      selectOption.selected = (value === selectOption.value) && !nbSelected ;
      if (selectOption.selected) {
        this.optionSelected = selectOption;
        nbSelected++;
        this.selectedOptionLabel = await selectOption.getLabel();
      }
    }
  }

  changeValue(value: OdsInputValue) {
    this.logger.log(`[changeValue=${this.value}]`, 'value changed', { value });
    this.value = value;
  }

  // Toggle overlay when we click on the Select.
  handleSelectClick(): void {
    this.logger.log('[handleSelectClick]', arguments, { validity: this.validityState });
    if (this.disabled) {
      return;
    }
    this.dirty = true;
    if (this.opened) {
      this.controller.closeSurface();
    } else {
      this.controller.openSurface();
    }
  }

  // Hide overlay when we click anywhere else in the window.
  @Listen('click', { target: 'window' })
  checkForClickOutside(ev: any) {
    ocdkAssertEventTargetIsNode(ev.target);
    if (!this.dirty || this.surface?.isClickOutsideSurface(ev)) {
      return;
    }
    this.logger.log('[checkForClickOutside]', arguments, { validity: this.validityState });
    this.controller.closeSurface();

    this.controller.selectOptions.forEach((option) => {
      if (this.value && option.getAttribute('value') === this.value) {
        option.setAttribute('selected', 'true');
      } else {
        option.removeAttribute('selected');
      }
    })

    if (this.dirty) {
      this.validityState = this.controller.getValidity();
    }
  }

  @Listen('odsSelectOptionClick')
  handleValueChange(event: CustomEvent<OdsSelectOptionClickEventDetail>): void {
    this.logger.log(`[odsSelectOptionClick=${this.value}]`, 'received odsSelectOptionClick event', { detail: event.detail });
    this.changeValue(event.detail.value);
    this.controller.closeSurface();
  }

  @Watch('disabled')
  closeWhenDisabled(disabled?: boolean) {
    if (disabled) {
      this.controller.closeSurface();
    }
  }

  syncReferences() {
    this.controller.syncReferences()
  }

  handleSlotChange() {
    this.setSelectOptions();
  }

  setSelectOptions() {
    this.controller.selectOptions = this.getSelectOptionList();
  }

  getSelectOptionList(): (HTMLElement & OsdsSelectOption)[] {
    return Array.from(this.el.querySelectorAll<OsdsSelectOption & HTMLElement>('osds-select-option'));
  }

  private hasError(): boolean {
    return this.validityState.invalid;
  }

  render() {
    const {
      ariaLabel,
      ariaLabelledby,
      disabled,
      inline,
      value,
      color
    } = this;

    return (
      <Host {...{
        class: `${disabled ? 'disabled' : ''}${this.opened ? ' opened' : ''}${this.hasError() ? ' ods-error' : ''}`,
        ariaLabel,
        'aria-labelledby': ariaLabelledby,
        inline,
        onFocus: this.onFocus.bind(this),
        onBlur: this.onBlur.bind(this),
        onClick: this.handleSelectClick.bind(this),
        onKeyDown: this.handleKeyDown.bind(this),
        tabindex: this.disabled ? -1 : this.tabindex,
        ref: (el?: HTMLElement | null) => {
          this.anchor = el as HTMLElement;
          this.syncReferences();
        },
      }}
      >
        <div {...{
          class: `select-trigger${this.opened ? ' opened' : ''}${this.hasError() ? ' error' : ''}`,
        }}>
          <div class={'label'}>
            { (!value) ?
              <slot name={'placeholder'}>&nbsp;</slot>
              : this.selectedOptionLabel
            }
          </div>
          <osds-icon size={ODS_ICON_SIZE.sm} color={color} name={ODS_ICON_NAME.CHEVRON_DOWN}></osds-icon>
        </div>
        <ocdk-surface
          class="overlay"
          ref={(el: HTMLElement) => {
            if (ocdkIsSurface(el)) {
              this.surface = el as OcdkSurface;
              this.syncReferences();
            }
          }}>
          <slot onSlotchange={() => this.handleSlotChange()}></slot>
        </ocdk-surface>
      </Host>
    );
  }
}
