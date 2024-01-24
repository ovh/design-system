import type { OdsSelectAttribute } from './interfaces/attributes';
import type { OdsSelectEvent, OdsSelectValueChangeEventDetail } from './interfaces/events';
import type { OdsSelectMethod } from './interfaces/methods';
import type { OdsSelectOptionClickEventDetail } from '../osds-select-option/interfaces/events';
import type { OsdsSelectOption } from '../osds-select-option/osds-select-option';
import type { OcdkSurface } from '@ovhcloud/ods-cdk';
import type { HTMLStencilElement } from '@stencil/core/internal';
import { OdsCommonFieldValidityState, OdsInputValue } from '@ovhcloud/ods-common-core';
import { ocdkAssertEventTargetIsNode, ocdkDefineCustomElements, ocdkIsSurface } from '@ovhcloud/ods-cdk';
import { ODS_ICON_NAME, ODS_ICON_SIZE } from '../../../../icon/src';
import { AttachInternals, Component, Element, Event, EventEmitter, Host, Listen, Method, Prop, State, Watch, h } from '@stencil/core';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { DEFAULT_VALIDITY_STATE } from './constants/default-validity-state';
import { OdsSelectController } from './core/controller';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';

// define custom elements from CDK
ocdkDefineCustomElements();

/**
 * @slot (placeholder) - Select placeholder
 */
@Component({
  formAssociated: true,
  tag: 'osds-select',
  styleUrl: 'osds-select.scss',
  shadow: true,
})
export class OsdsSelect implements OdsSelectAttribute, OdsSelectEvent, OdsSelectMethod {
  controller = new OdsSelectController<OsdsSelect>(this);
  anchor!: HTMLElement;
  surface: OcdkSurface | undefined = undefined;
  /** is the select was touched by the user */
  dirty = false;
  selectedLabelSlot: HTMLElement | null = null;
  observer?: MutationObserver;
  optionSelected: OsdsSelectOption | null = null;

  @State() selectedOptionLabel = '';
  @State() validityState: OdsCommonFieldValidityState = DEFAULT_VALIDITY_STATE;
  @State() tabindex = 0;

  @Element() el!: HTMLStencilElement;

  @AttachInternals() internals!: ElementInternals;

  @Prop({ reflect: true }) ariaLabel = DEFAULT_ATTRIBUTE.ariaLabel;

  @Prop() ariaLabelledby = DEFAULT_ATTRIBUTE.ariaLabelledby;

  @Prop({ reflect: true }) defaultValue: OdsInputValue = DEFAULT_ATTRIBUTE.defaultValue;

  @Prop({ reflect: true, mutable: true }) disabled = DEFAULT_ATTRIBUTE.disabled;

  @Prop({ reflect: true }) error = DEFAULT_ATTRIBUTE.error;

  @Prop({ reflect: true }) inline = DEFAULT_ATTRIBUTE.inline;

  @Prop({ reflect: true }) name = DEFAULT_ATTRIBUTE.name;

  @Prop({ reflect: true, mutable: true }) opened = false;

  @Prop({ reflect: true, mutable: true }) required = DEFAULT_ATTRIBUTE.required;

  @Prop({ reflect: true, mutable: true }) value: OdsInputValue = DEFAULT_ATTRIBUTE.value;

  @Event() odsValueChange!: EventEmitter<OdsSelectValueChangeEventDetail>;

  @Event() odsFocus!: EventEmitter<void>;

  @Event() odsClear!: EventEmitter<void>;

  @Event() odsReset!: EventEmitter<void>;

  @Event() odsBlur!: EventEmitter<void>;

  @Watch('disabled')
  closeWhenDisabled(disabled?: boolean): void {
    if (disabled) {
      this.controller.closeSurface();
    }
  }

  @Watch('value')
  async onValueChange(value: OdsInputValue, oldValue?: OdsInputValue) {
    this.controller.onValueChange(value, oldValue);
  }

  @Watch('opened')
  openedChanged(opened: boolean) {
    if (this.surface) {
      this.surface.opened = opened;
    }
  }

  // Hide overlay when we click anywhere else in the window.
  @Listen('click', { target: 'window' })
  async checkForClickOutside(ev: any): Promise<void> {
    ocdkAssertEventTargetIsNode(ev.target);
    if (!this.dirty || this.surface?.isClickOutsideSurface(ev)) {
      return;
    }
    this.controller.closeSurface();

    this.controller.selectOptions.forEach((option) => {
      if (this.value && option.getAttribute('value') === this.value) {
        option.setAttribute('selected', 'true');
      } else {
        option.removeAttribute('selected');
      }
    });

    if (this.dirty) {
      this.validityState = await this.controller.getValidity();
    }
  }

  @Listen('odsSelectOptionClick')
  handleValueChange(event: CustomEvent<OdsSelectOptionClickEventDetail>): void {
    this.changeValue(event.detail.value);
    this.controller.closeSurface();
  }

  @Method()
  async clear(): Promise<void> {
    this.controller.clear();
    this.optionSelected = null;
    this.validityState = DEFAULT_VALIDITY_STATE;
  }

  @Method()
  async getValidity(): Promise<OdsCommonFieldValidityState> {
    return this.controller.getValidity()
  }

  @Method()
  async reset(): Promise<void> {
    console.log('this.defaultValue', this.defaultValue?.toString())
    this.controller.reset();
    console.log('value', `${this.value}`)
    await this.updateSelectOptionStates();
    this.validityState = DEFAULT_VALIDITY_STATE;
  }

  @Method()
  async setFocus(): Promise<void> {
    this.controller.setFocus(this.el);
  }

  @Method()
  async setTabindex(value: number): Promise<void> {
    this.controller.setTabindex(value);
  }

  componentWillLoad(): void {
    this.controller.beforeInit();
  }

  /**
   * once the component did load, update the state depending the children,
   * in order to synchronize the already set value with the placeholder
   */
  async componentDidLoad(): Promise<void> {
    this.observer = new MutationObserver(async() => this.selectedOptionLabel = await this.optionSelected?.getLabel() || '');
    this.setSelectOptions();
    await this.updateSelectOptionStates(this.value);
  }

  disconnectedCallback(): void {
    this.observer?.disconnect();
  }

  formResetCallback(): void {
    this.reset();
  }

  changeValue(value: OdsInputValue): void {
    this.value = value;
  }

  emitChange(value: OdsInputValue, oldValue?: OdsInputValue): void {
    this.odsValueChange.emit({
      value: value,
      oldValue: oldValue,
      name: this.name,
      selection: this.optionSelected,
      validity: this.validityState,
    });
  }

  getSelectOptionList(): (HTMLElement & OsdsSelectOption)[] {
    return Array.from(this.el.querySelectorAll<OsdsSelectOption & HTMLElement>('osds-select-option'));
  }

  handleKeyDown(event: KeyboardEvent): void {
    event.stopPropagation();
    this.controller.handlerKeyDown(event);
  }

  // Toggle overlay when we click on the Select.
  handleSelectClick(): void {
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

  async handleSlotChange(): Promise<void> {
    this.setSelectOptions();
    await this.updateSelectOptionStates();
  }

  private hasError(): boolean {
    return this.error || !this.validityState.valid;
  }

  onBlur(): void {
    this.odsBlur.emit();
  }

  private onFocus() {
    this.odsFocus.emit();
  }

  async updateSelectOptionStates(value?: OdsInputValue): Promise<void> {
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

  syncReferences(): void {
    this.controller.syncReferences();
  }

  setSelectOptions(): void {
    this.controller.selectOptions = this.getSelectOptionList();
    this.controller.selectOptions.forEach((option) => this.observer?.observe(option, { childList: true, attributes: true, subtree: true }));
  }

  private renderLabel(): JSX.Element {
    if (!this.value) {
      return (<slot name="placeholder" key="placeholder"></slot>);
    }
    if (this.selectedLabelSlot) {
      return (<slot name="selectedLabel" key="selectedLabel"></slot>);
    }
    return (<span key="default">{ this.selectedOptionLabel }</span>);
  }

  render() {
    const {
      ariaLabel,
      ariaLabelledby,
      disabled,
      inline,
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
        color: 'primary',
        size: 'md',
      }}
      >
        <div {...{
          class: `select-trigger${this.opened ? ' opened' : ''}${this.hasError() ? ' error' : ''}`,
        }}>
          <div class="select-trigger__label">
            { this.renderLabel() }
          </div>
          <osds-icon size={ODS_ICON_SIZE.sm} color={ODS_THEME_COLOR_INTENT.primary} name={ODS_ICON_NAME.CHEVRON_DOWN}></osds-icon>
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
