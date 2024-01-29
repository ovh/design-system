import type { OdsSelectAttribute } from './interfaces/attributes';
import type { OdsSelectEvent, OdsSelectValueChangeEventDetail } from './interfaces/events';
import type { OdsSelectMethod } from './interfaces/methods';
import type { OdsSelectOptionClickEventDetail } from '../osds-select-option/interfaces/events';
import type { OsdsSelectOption } from '../osds-select-option/osds-select-option';
import type { OcdkSurface } from '@ovhcloud/ods-cdk';
import type { OdsCommonFieldValidityState, OdsInputValue } from '@ovhcloud/ods-common-core';
import type { EventEmitter, FunctionalComponent } from '@stencil/core';
import type { HTMLStencilElement } from '@stencil/core/internal';
import { ocdkAssertEventTargetIsNode, ocdkDefineCustomElements, ocdkIsSurface } from '@ovhcloud/ods-cdk';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { AttachInternals, Component, Element, Event, Host, Listen, Method, Prop, State, Watch, h } from '@stencil/core';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsSelectController } from './core/controller';
import { ODS_ICON_NAME, ODS_ICON_SIZE } from '../../../../icon/src';

// define custom elements from CDK
ocdkDefineCustomElements();

// TODO setFocus does not display focus style
//  - should be refactord so that the trigger is focused instead of the Host (move tabindex && update style)

@Component({
  formAssociated: true,
  shadow: true,
  styleUrl: 'osds-select.scss',
  tag: 'osds-select',
})
export class OsdsSelect implements OdsSelectAttribute, OdsSelectEvent, OdsSelectMethod {
  anchor!: HTMLElement;
  controller = new OdsSelectController<OsdsSelect>(this);
  dirty = false;
  observer?: MutationObserver;
  optionSelected: OsdsSelectOption | null = null;
  selectedLabelSlot: HTMLElement | null = null;
  surface: OcdkSurface | undefined = undefined;

  @Element() el!: HTMLStencilElement;

  @AttachInternals() internals!: ElementInternals;

  @Prop({ reflect: true }) ariaLabel = DEFAULT_ATTRIBUTE.ariaLabel;
  @Prop() ariaLabelledby = DEFAULT_ATTRIBUTE.ariaLabelledby;
  @Prop({ reflect: true }) defaultValue: OdsInputValue = DEFAULT_ATTRIBUTE.defaultValue;
  @Prop({ mutable: true, reflect: true }) disabled = DEFAULT_ATTRIBUTE.disabled;
  @Prop({ reflect: true }) error = DEFAULT_ATTRIBUTE.error;
  @Prop({ reflect: true }) inline = DEFAULT_ATTRIBUTE.inline;
  @Prop({ reflect: true }) name = DEFAULT_ATTRIBUTE.name;
  @Prop({ mutable: true, reflect: true }) opened = false;
  @Prop({ mutable: true, reflect: true }) required = DEFAULT_ATTRIBUTE.required;
  @Prop({ mutable: true, reflect: true }) value: OdsInputValue = DEFAULT_ATTRIBUTE.value;

  @State() internalError = false;
  @State() selectedOptionLabel = '';

  @Event() odsBlur!: EventEmitter<void>;
  @Event() odsClear!: EventEmitter<void>;
  @Event() odsFocus!: EventEmitter<void>;
  @Event() odsReset!: EventEmitter<void>;
  @Event() odsValueChange!: EventEmitter<OdsSelectValueChangeEventDetail>;

  @Method()
  async clear(): Promise<void> {
    this.controller.clear();
    this.optionSelected = null;
  }

  @Method()
  async getValidity(): Promise<OdsCommonFieldValidityState> {
    return this.controller.getValidity();
  }

  @Method()
  async reset(): Promise<void> {
    this.controller.reset();
    await this.updateSelectOptionStates();
  }

  @Method()
  async setFocus(): Promise<void> {
    return this.controller.setFocus(this.el);
  }

  @Listen('click', { target: 'window' })
  async checkForClickOutside(ev: MouseEvent): Promise<void> {
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
  }

  @Listen('odsSelectOptionClick')
  handleValueChange(event: CustomEvent<OdsSelectOptionClickEventDetail>): void {
    this.controller.changeValue(event.detail.value);
    this.controller.closeSurface();
  }

  @Watch('disabled')
  closeWhenDisabled(disabled?: boolean): void {
    if (disabled) {
      this.controller.closeSurface();
    }
  }

  @Watch('value')
  async onValueChange(value: OdsInputValue, oldValue?: OdsInputValue): Promise<void> {
    await this.controller.onValueChange(value, oldValue);
    this.internalError = await this.controller.hasError();
  }

  @Watch('opened')
  openedChanged(opened: boolean): void {
    if (this.surface) {
      this.surface.opened = opened;
    }
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

  formResetCallback(): Promise<void> {
    return this.reset();
  }

  changeValue(value: OdsInputValue): void {
    this.value = value;
  }

  async emitChange(value: OdsInputValue, oldValue?: OdsInputValue): Promise<CustomEvent<OdsSelectValueChangeEventDetail>> {
    return this.odsValueChange.emit({
      name: this.name,
      oldValue: oldValue,
      selection: this.optionSelected,
      validity: await this.controller.getValidity(),
      value: value,
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

  async onBlur(): Promise<void> {
    this.odsBlur.emit();
    this.internalError = await this.controller.hasError();
  }

  setSelectOptions(): void {
    this.controller.selectOptions = this.getSelectOptionList();
    this.controller.selectOptions.forEach((option) => this.observer?.observe(option, { attributes: true, childList: true, subtree: true }));
  }

  syncReferences(): void {
    this.controller.syncReferences();
  }

  async updateSelectOptionStates(value?: OdsInputValue): Promise<void> {
    let nbSelected = 0;
    for (const selectOption of this.controller.selectOptions) {
      selectOption.selected = (value === selectOption.value) && !nbSelected ;
      if (selectOption.selected) {
        this.optionSelected = selectOption;
        nbSelected++;
        this.selectedOptionLabel = await selectOption.getLabel(); // eslint-disable-line no-await-in-loop
      }
    }
  }

  private renderLabel(): FunctionalComponent {
    if (!this.value) {
      return (<slot name="placeholder" key="placeholder"></slot>);
    }
    if (this.selectedLabelSlot) {
      return (<slot name="selectedLabel" key="selectedLabel"></slot>);
    }
    return (<span key="default">{ this.selectedOptionLabel }</span>);
  }

  render(): FunctionalComponent {
    return (
      <Host
        aria-label={ this.ariaLabel }
        aria-labelledby={ this.ariaLabelledby }
        class={{
          disabled: this.disabled,
          'ods-error': this.internalError,
          opened: this.opened,
        }}
        color="primary"
        onBlur={ (): Promise<void> => this.onBlur() }
        onClick={ (): void => this.handleSelectClick() }
        onKeyDown={ (e: KeyboardEvent): void => this.handleKeyDown(e) }
        ref={ (el?: HTMLElement | null): void => {
          this.anchor = el as HTMLElement;
          this.syncReferences();
        }}
        size="md"
        tabindex={ this.disabled ? -1 : 0 }>
        <div class={{
          error: this.internalError,
          opened: this.opened,
          'select-trigger': true,
        }}>
          <div class="select-trigger__label">
            { this.renderLabel() }
          </div>

          <osds-icon
            color={ ODS_THEME_COLOR_INTENT.primary }
            name={ ODS_ICON_NAME.CHEVRON_DOWN }
            size={ ODS_ICON_SIZE.sm }>
          </osds-icon>
        </div>

        <ocdk-surface
          class="overlay"
          ref={ (el: HTMLElement): void => {
            if (ocdkIsSurface(el)) {
              this.surface = el as OcdkSurface;
              this.syncReferences();
            }
          }}>
          <slot onSlotchange={ (): Promise<void> => this.handleSlotChange() }></slot>
        </ocdk-surface>
      </Host>
    );
  }
}
