import type { OdsAutocompleteAttribute } from './interfaces/attributes';
import type { OdsAutocompleteEvent, OdsAutocompleteValueChangeEventDetail } from './interfaces/events';
import type { OdsAutocompleteMethod } from './interfaces/methods';
import type { ODS_ICON_NAME } from '../../../../icon/src';
import type { OdsInputValueChangeEventDetail } from '../../../../input/src';
import type { OdsSelectOptionClickEventDetail } from '../../../../select/src/components/osds-select-option/interfaces/events';
import type { OsdsSelectOption } from '../../../../select/src/components/osds-select-option/osds-select-option';
import type { OcdkSurface } from '@ovhcloud/ods-cdk';
import type { OdsValidityState } from '@ovhcloud/ods-common-core';
import type { EventEmitter, FunctionalComponent } from '@stencil/core';
import type { HTMLStencilElement } from '@stencil/core/internal';
import { ocdkAssertEventTargetIsNode, ocdkDefineCustomElements, ocdkIsSurface } from '@ovhcloud/ods-cdk';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { AttachInternals, Component, Element, Event, Host, Listen, Method, Prop, State, Watch, h } from '@stencil/core';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { DEFAULT_VALIDITY_STATE } from './constants/default-validity-state';
import { OdsAutocompleteController } from './core/controller';
import { ODS_INPUT_TYPE } from '../../../../input/src';

ocdkDefineCustomElements();

@Component({
  formAssociated: true,
  shadow: true,
  styleUrl: 'osds-autocomplete.scss',
  tag: 'osds-autocomplete',
})
export class OsdsAutocomplete implements OdsAutocompleteAttribute, OdsAutocompleteEvent, OdsAutocompleteMethod {
  anchor!: HTMLElement;
  controller: OdsAutocompleteController = new OdsAutocompleteController(this);
  dirty = false;
  observer?: MutationObserver;
  optionSelected: OsdsSelectOption | null = null;
  selectedLabelSlot: HTMLElement | null = null;
  surface: OcdkSurface | undefined = undefined;

  @Element() el!: HTMLStencilElement;

  @AttachInternals() internals!: ElementInternals;

  @State() inputValue = '';
  @State() selectedOptionLabel = '';
  @State() tabindex = 0;
  @State() validityState: OdsValidityState = DEFAULT_VALIDITY_STATE;

  /**
   * Attributes
   */

  /** @see OdsAutocompleteAttribute.ariaLabel */
  @Prop({ reflect: true }) ariaLabel: HTMLElement['ariaLabel'] = DEFAULT_ATTRIBUTE.ariaLabel;

  /** @see OdsAutocompleteAttribute.ariaLabelledby */
  @Prop() ariaLabelledby: string = DEFAULT_ATTRIBUTE.ariaLabelledby;

  /** @see OdsAutocompleteAttribute.clearable */
  @Prop({ reflect: true }) clearable: boolean = DEFAULT_ATTRIBUTE.disabled;

  /** @see OdsAutocompleteAttribute.defaultValue */
  @Prop({ reflect: true }) defaultValue: string = DEFAULT_ATTRIBUTE.defaultValue;

  /** @see OdsAutocompleteAttribute.disabled */
  @Prop({ mutable: true, reflect: true }) disabled: boolean = DEFAULT_ATTRIBUTE.disabled;

  /** @see OdsAutocompleteAttribute.error */
  @Prop({ reflect: true }) error: boolean = DEFAULT_ATTRIBUTE.error;

  /** @see OdsAutocompleteAttribute.icon */
  @Prop({ reflect: true }) icon?: ODS_ICON_NAME = DEFAULT_ATTRIBUTE.icon;

  /** @see OdsAutocompleteAttribute.inline */
  @Prop({ reflect: true }) inline: boolean = DEFAULT_ATTRIBUTE.inline;

  /** @see OdsAutocompleteAttribute.minimumNumberOfCharacters */
  @Prop({ reflect: true }) minimumNumberOfCharacters: number = DEFAULT_ATTRIBUTE.minimumNumberOfCharacters;

  /** @see OdsAutocompleteAttribute.name */
  @Prop({ reflect: true }) name?: string = DEFAULT_ATTRIBUTE.name;

  /** @see OdsAutocompleteAttribute.opened */
  @Prop({ mutable: true, reflect: true }) opened: boolean = DEFAULT_ATTRIBUTE.opened;

  /** @see OdsAutocompleteAttribute.placeholder */
  @Prop({ reflect: true }) placeholder?: string = DEFAULT_ATTRIBUTE.placeholder;

  /** @see OdsAutocompleteAttribute.required */
  @Prop({ mutable: true, reflect: true }) required: boolean = DEFAULT_ATTRIBUTE.required;

  /** @see OdsAutocompleteAttribute.value */
  @Prop({ mutable: true, reflect: true }) value: string = DEFAULT_ATTRIBUTE.value;

  /**
   * Events
   */

  @Event() odsValueChange!: EventEmitter<OdsAutocompleteValueChangeEventDetail>;
  @Event() odsFocus!: EventEmitter<void>;
  @Event() odsBlur!: EventEmitter<void>;

  private onFocus(): void {
    this.odsFocus.emit();
  }

  onBlur(): void {
    this.odsBlur.emit();
  }

  componentWillLoad(): void {
    this.controller.beforeInit();
    this.inputValue = this.value;
  }

  disconnectedCallback(): void {
    this.observer?.disconnect();
  }

  formResetCallback(): void {
    this.value = this.defaultValue;
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

  @Watch('opened')
  openedChanged(opened: boolean): void {
    if (this.surface) {
      this.surface.opened = opened;
    }
  }

  @Watch('value')
  async onValueChange(value: string, oldValue?: string): Promise<void> {
    this.controller.onValueChange(value, oldValue);
    await this.updateSelectOptionStates(value);
    this.inputValue = this.selectedOptionLabel;
  }

  emitChange(value: string, oldValue?: string): void {
    this.odsValueChange.emit({
      name: this.name,
      oldValue: oldValue,
      selection: this.optionSelected,
      validity: this.validityState,
      value: value,
    });
  }

  handleKeyDown(event: KeyboardEvent): void {
    event.stopPropagation();
    this.controller.handlerKeyDown(event);
  }

  @Method()
  async clear(): Promise<void> {
    this.optionSelected = null;
    this.validityState = DEFAULT_VALIDITY_STATE;
    this.value = '';
    this.inputValue = '';
  }

  @Method()
  async getValidity(): Promise<OdsValidityState> {
    return this.validityState;
  }

  @Method()
  async reset(): Promise<void> {
    this.optionSelected = null;
    this.value = this.defaultValue || '';
    this.validityState = DEFAULT_VALIDITY_STATE;
  }

  @Method()
  async setFocus(): Promise<void> {
    this.el.focus();
  }

  @Method()
  async setInputTabindex(value: number): Promise<void> {
    this.tabindex = value;
  }

  @Method()
  async validate(): Promise<OdsValidityState> {
    this.validityState = this.controller.getValidity();
    return this.validityState;
  }

  private async updateSelectOptionStates(value?: string): Promise<void> {
    let nbSelected = 0;
    for (const selectOption of this.controller.selectOptions) {
      selectOption.selected = (value === selectOption.value) && !nbSelected ;
      if (selectOption.selected) {
        this.optionSelected = selectOption;
        nbSelected++;
        // eslint-disable-next-line no-await-in-loop
        this.selectedOptionLabel = await selectOption.getLabel();
      }
    }
  }

  // Toggle surface when we click on the Autocomplete.
  handleAutocompleteClick(): void {
    if (this.disabled || (this.value.length < this.minimumNumberOfCharacters && this.inputValue.length < this.minimumNumberOfCharacters)) {
      return;
    }
    this.dirty = true;
    if (this.opened) {
      this.controller.closeSurface();
    } else {
      this.controller.openSurface();
    }
  }

  handleInputValueChange(event: CustomEvent<OdsInputValueChangeEventDetail>): void {
    if (this.disabled) {
      return;
    }

    if (!event.detail.value) {
      this.clear();
      return;
    }

    this.dirty = true;
    this.inputValue = event.detail.value;
    if (this.inputValue !== this.value && this.inputValue !== this.selectedOptionLabel) {
      this.clear();
    }

    if (!this.opened && event.detail.value.length >= this.minimumNumberOfCharacters) {
      this.controller.openSurface();
    } else if (this.opened && event.detail.value.length < this.minimumNumberOfCharacters) {
      this.controller.closeSurface();
    }
  }

  // Hide surface when we click anywhere else in the window.
  @Listen('click', { target: 'window' })
  checkForClickOutside(ev: Event): void {
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
    event.detail.value
      ? this.controller.changeValue(event.detail.value.toString())
      : this.controller.changeValue('');
    this.controller.closeSurface();
  }

  @Watch('disabled')
  closeWhenDisabled(disabled?: boolean): void {
    if (disabled) {
      this.controller.closeSurface();
    }
  }

  syncReferences(): void {
    this.controller.syncReferences();
  }

  async handleSlotChange(): Promise<void> {
    this.setSelectOptions();
    await this.updateSelectOptionStates();
  }

  setSelectOptions(): void {
    this.controller.selectOptions = this.getSelectOptionList();
    this.controller.selectOptions.forEach((option) => this.observer?.observe(option, { attributes: true, childList: true, subtree: true }));
  }

  getSelectOptionList(): (HTMLElement & OsdsSelectOption)[] {
    return Array.from(this.el.querySelectorAll<OsdsSelectOption & HTMLElement>('osds-select-option'));
  }

  renderLabel(): string {
    if (!this.value) {
      return '';
    }
    return this.selectedOptionLabel;
  }

  render(): FunctionalComponent {
    const {
      ariaLabel,
      ariaLabelledby,
      clearable,
      disabled,
      error,
      icon,
      inline,
      opened,
      placeholder,
    } = this;

    return (
      <Host {...{
        'aria-labelledby': ariaLabelledby,
        ariaLabel,
        class: {
          'autocomplete': true,
          'autocomplete--disabled': disabled,
          'autocomplete--error': error,
          'autocomplete--inline': inline,
          'autocomplete--opened': opened,
        },
        inline,
        onBlur: this.onBlur.bind(this),
        onClick: this.handleAutocompleteClick.bind(this),
        onFocus: this.onFocus.bind(this),
        onKeyDown: this.handleKeyDown.bind(this),
        opened,
        ref: (el?: HTMLElement | null): void => {
          this.anchor = el as HTMLElement;
          this.syncReferences();
        },
        tabindex: disabled ? -1 : this.tabindex,
      }}>
        <div class='autocomplete__anchor'>
          <osds-input
            class={{
              'autocomplete__input': true,
              'autocomplete__input--opened': opened,
            }}
            clearable={clearable}
            color={ODS_THEME_COLOR_INTENT.primary}
            disabled={disabled}
            error={error}
            icon={icon}
            inline={inline}
            onOdsValueChange={this.handleInputValueChange.bind(this)}
            placeholder={placeholder}
            type={ODS_INPUT_TYPE.text}
            value={this.inputValue}
          />
          <ocdk-surface
            class={{
              'autocomplete__surface': true,
              'autocomplete__surface--opened': opened,
            }}
            ref={(el: HTMLElement): void => {
              if (ocdkIsSurface(el)) {
                this.surface = el as OcdkSurface;
                this.syncReferences();
              }
            }}>
            <slot onSlotchange={(): Promise<void> => this.handleSlotChange()}></slot>
          </ocdk-surface>
        </div>
      </Host>
    );
  }
}
