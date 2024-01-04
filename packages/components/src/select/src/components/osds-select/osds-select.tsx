import type { ODS_SELECT_SIZE } from './constants/select-size';
import type { OdsSelectAttribute } from './interfaces/attributes';
import type { OdsSelectEvent, OdsSelectValueChangeEventDetail } from './interfaces/events';
import type { OdsSelectMethod } from './interfaces/methods';
import type { OdsSelectOptionClickEventDetail } from '../osds-select-option/interfaces/events';
import type { OsdsSelectOption } from '../osds-select-option/osds-select-option';
import type { OcdkSurface } from '@ovhcloud/ods-cdk';
import type { HTMLStencilElement } from '@stencil/core/internal';
import { OdsCommonFieldMethodController, OdsInputValue, OdsValidityState } from '@ovhcloud/ods-common-core';
import { ocdkAssertEventTargetIsNode, ocdkDefineCustomElements, ocdkIsSurface } from '@ovhcloud/ods-cdk';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { ODS_ICON_NAME, ODS_ICON_SIZE } from '../../../../icon/src';
import { AttachInternals, Component, Element, Event, EventEmitter, Host, Listen, Method, Prop, State, Watch, h } from '@stencil/core';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { DEFAULT_VALIDITY_STATE } from './constants/default-validity-state';
import { OdsSelectController } from './core/controller';


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
  controller: OdsSelectController = new OdsSelectController(this);
  anchor!: HTMLElement;
  surface: OcdkSurface | undefined = undefined;
  /** is the select was touched by the user */
  dirty = false;
  selectedLabelSlot: HTMLElement | null = null;
  observer?: MutationObserver;
  commonFieldMethodController = new OdsCommonFieldMethodController(this);
  optionSelected: OsdsSelectOption | null = null;

  @State() selectedOptionLabel = '';

  @State() validityState: OdsValidityState = DEFAULT_VALIDITY_STATE;

  @Element() el!: HTMLStencilElement;

  @AttachInternals() internals!: ElementInternals;

  /**
   * The tabindex of the input.
   * @internal
   */
  @State() tabindex = 0;

  @Prop({ reflect: true }) ariaLabel = DEFAULT_ATTRIBUTE.ariaLabel;

  @Prop() ariaLabelledby = DEFAULT_ATTRIBUTE.ariaLabelledby;

  @Prop({ reflect: true }) color: ODS_THEME_COLOR_INTENT = DEFAULT_ATTRIBUTE.color;

  @Prop({ reflect: true }) defaultValue: OdsInputValue = DEFAULT_ATTRIBUTE.defaultValue;

  @Prop({ reflect: true, mutable: true }) disabled = DEFAULT_ATTRIBUTE.disabled;

  @Prop({ reflect: true }) error = DEFAULT_ATTRIBUTE.error;

  @Prop({ reflect: true }) inline = DEFAULT_ATTRIBUTE.inline;

  @Prop({ reflect: true }) name = DEFAULT_ATTRIBUTE.name;

  @Prop({ reflect: true, mutable: true }) opened = false;

  @Prop({ reflect: true, mutable: true }) required = DEFAULT_ATTRIBUTE.required;

  @Prop({ reflect: true }) size: ODS_SELECT_SIZE = DEFAULT_ATTRIBUTE.size;

  @Prop({ reflect: true, mutable: true }) value: OdsInputValue = DEFAULT_ATTRIBUTE.value;

  @Event() odsValueChange!: EventEmitter<OdsSelectValueChangeEventDetail>;

  @Event() odsFocus!: EventEmitter<void>;
  private onFocus() {
    this.odsFocus.emit();
  }

  @Event() odsClear!: EventEmitter<void>;

  @Event() odsReset!: EventEmitter<void>;

  @Event() odsBlur!: EventEmitter<void>;
  onBlur() {
    this.odsBlur.emit();
  }

  componentWillLoad() {
    if (this.value === '' && this.defaultValue !== undefined) {
      this.value = this.defaultValue;
    }
    this.openedChanged(this.opened);
    this.selectedLabelSlot = this.el.querySelector('[slot="selectedLabel"]');
  }

  disconnectedCallback(): void {
    this.observer?.disconnect();
  }

  /**
   * once the component did load, update the state depending the children,
   * in order to synchronize the already set value with the placeholder
   */
  async componentDidLoad() {
    this.observer = new MutationObserver(async() => this.selectedOptionLabel = await this.optionSelected?.getLabel() || '');
    this.setSelectOptions();
    await this.updateSelectOptionStates(this.value);
  }

  @Watch('opened')
  openedChanged(opened: boolean) {
    if (this.surface) {
      this.surface.opened = opened;
    }
  }

  @Watch('value')
  async onValueChange(value: OdsInputValue, oldValue?: OdsInputValue) {
    this.emitChange(value, oldValue);
    this.internals.setFormValue(value?.toString() ?? '');
    await this.updateSelectOptionStates(value);
  }

  private emitChange(value: OdsInputValue, oldValue?: OdsInputValue) {
    this.odsValueChange.emit({
      value: value,
      oldValue: oldValue,
      name: this.name,
      selection: this.optionSelected,
      validity: this.validityState,
    });
  }

  handleKeyDown(event: KeyboardEvent): void {
    event.stopPropagation();
    this.controller.handlerKeyDown(event);
  }

  @Method()
  async clear() {
    this.commonFieldMethodController.clear();
    this.optionSelected = null;
    this.validityState = DEFAULT_VALIDITY_STATE;
    this.odsClear.emit();
  }

  @Method()
  async getValidity() {
    return this.validityState;
  }

  @Method()
  async reset() {
    this.commonFieldMethodController.reset();
    await this.updateSelectOptionStates();
    this.validityState = DEFAULT_VALIDITY_STATE;
    this.odsReset.emit();
  }

  @Method()
  async setFocus() {
    this.el.focus();
  }

  @Method()
  async setTabindex(value: number) {
    this.commonFieldMethodController.setTabindex(value);
  }

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
    this.value = value;
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

  // Hide overlay when we click anywhere else in the window.
  @Listen('click', { target: 'window' })
  checkForClickOutside(ev: any) {
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
      this.validityState = this.controller.getValidity();
    }
  }

  @Listen('odsSelectOptionClick')
  handleValueChange(event: CustomEvent<OdsSelectOptionClickEventDetail>): void {
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
    this.controller.syncReferences();
  }

  async handleSlotChange(): Promise<void> {
    this.setSelectOptions();
    await this.updateSelectOptionStates();
  }

  setSelectOptions() {
    this.controller.selectOptions = this.getSelectOptionList();
    this.controller.selectOptions.forEach((option) => this.observer?.observe(option, { childList: true, attributes: true, subtree: true }));
  }

  getSelectOptionList(): (HTMLElement & OsdsSelectOption)[] {
    return Array.from(this.el.querySelectorAll<OsdsSelectOption & HTMLElement>('osds-select-option'));
  }

  private hasError(): boolean {
    return this.error || this.validityState.invalid;
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
      color,
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
          <div class="select-trigger__label">
            { this.renderLabel() }
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
