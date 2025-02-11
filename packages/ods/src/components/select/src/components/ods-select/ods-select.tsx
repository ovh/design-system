import { AttachInternals, Component, Element, Event, type EventEmitter, type FunctionalComponent, Host, Listen, Method, Prop, State, Watch, h } from '@stencil/core';
import TomSelect from 'tom-select';
import { type OdsFormElement } from '../../../../../types';
import { getElementPosition } from '../../../../../utils/overlay';
import { mergeSelectedItemPlugin, placeholderPlugin } from '../../../../../utils/select';
import { VALUE_DEFAULT_VALUE, getInitialValue, getSelectConfig, hasNoValueOption, inlineValue, moveSlottedElements, setSelectValue, updateInternals } from '../../controller/ods-select';
import { type OdsSelectChangeEventDetail } from '../../interfaces/events';
import { type OdsSelectCustomRenderer } from '../../interfaces/options';

TomSelect.define('merge_selected_items', mergeSelectedItemPlugin);
TomSelect.define('placeholder', placeholderPlugin);

@Component({
  formAssociated: true,
  shadow: {
    delegatesFocus: true,
  },
  styleUrl: 'ods-select.scss',
  tag: 'ods-select',
})
export class OdsSelect implements OdsFormElement {
  private hasMovedNodes: boolean = false;
  private isSelectSync: boolean = false;
  private isValueSync: boolean = false;
  private observer?: MutationObserver;
  private select?: TomSelect;
  private selectElement?: HTMLSelectElement;
  private selectObserver?: MutationObserver;

  @Element() el!: HTMLElement;

  @AttachInternals() private internals!: ElementInternals;

  @State() isInvalid: boolean | undefined;

  @Prop({ reflect: true }) public allowMultiple: boolean = false;
  @Prop({ reflect: true }) public ariaLabel: HTMLElement['ariaLabel'] = null;
  @Prop({ reflect: true }) public ariaLabelledby?: string;
  /** @internal */
  @Prop({ reflect: false }) public borderRounded: 'all' | 'bottom' | 'bottom-left' | 'bottom-right' | 'left' | 'right' | 'top' | 'top-left' | 'top-right' = 'all';
  @Prop({ reflect: false }) public customRenderer?: OdsSelectCustomRenderer;
  @Prop({ reflect: true }) public defaultValue?: string | string [];
  /** @internal */
  @Prop({ reflect: false }) public dropdownWidth: 'auto' | 'input-based' = 'input-based';
  @Prop({ reflect: true }) public hasError: boolean = false;
  @Prop({ reflect: true }) public isDisabled: boolean = false;
  @Prop({ reflect: true }) public isReadonly: boolean = false;
  @Prop({ reflect: true }) public isRequired: boolean = false;
  @Prop({ reflect: true }) public multipleSelectionLabel: string = 'Selected item';
  @Prop({ reflect: true }) public name!: string;
  @Prop({ reflect: true }) public placeholder?: string;
  /** @internal */
  @Prop({ reflect: false }) public sortBy?: string;
  @Prop({ mutable: true, reflect: true }) public value: string | string [] | null = VALUE_DEFAULT_VALUE;

  @Event() odsBlur!: EventEmitter<void>;
  @Event() odsChange!: EventEmitter<OdsSelectChangeEventDetail>;
  @Event() odsClear!: EventEmitter<void>;
  @Event() odsFocus!: EventEmitter<void>;
  @Event() odsInvalid!: EventEmitter<{ isInvalid: boolean }>;
  @Event() odsReset!: EventEmitter<void>;

  @Listen('invalid')
  onInvalidEvent(event: Event): void {
    // Remove the native validation message popup
    event.preventDefault();

    // Enforce the state here as we may still be in pristine state (if the form is submitted before any changes occurs)
    this.isInvalid = true;
  }

  @Method()
  public async checkValidity(): Promise<boolean> {
    this.isInvalid = !this.internals.validity.valid;
    return this.internals.checkValidity();
  }

  @Method()
  public async clear(): Promise<void> {
    this.odsClear.emit();
    if (this.value !== null) {
      this.isValueSync = true;
    }
    this.value = null;
    this.select?.focus();
  }

  @Method()
  public async close(): Promise<void> {
    this.select?.close();
  }

  @Method()
  public async getValidationMessage(): Promise<string> {
    return this.internals.validationMessage;
  }

  @Method()
  public async getValidity(): Promise<ValidityState> {
    return this.internals.validity;
  }

  @Method()
  public async open(): Promise<void> {
    this.select?.open();
  }

  @Method()
  async reportValidity(): Promise<boolean> {
    this.isInvalid = !this.internals.validity.valid;
    return this.internals.reportValidity();
  }

  @Method()
  public async reset(): Promise<void> {
    this.odsReset.emit();
    if (this.value !== (this.defaultValue ?? null)) {
      this.isValueSync = true;
    }
    this.updateValue(this.defaultValue ?? null);
  }

  @Method()
  public async updateCustomRenderer(): Promise<void> {
    // TomSelect lib does not provide an easy way to update template
    // So we need to recreate a new instance with the updated template
    if (this.selectElement) {
      // First we save the current select option nodes as recreating the instance will clean them
      const options = [...this.selectElement.children] as HTMLOptionElement[];

      // Then we recreate the instance
      this.createTomSelect(this.selectElement);

      // And we put back the options
      this.onSlotChange(options);
    }
  }

  @Method()
  public async willValidate(): Promise<boolean> {
    return this.internals.willValidate;
  }

  @Watch('isDisabled')
  onIsDisabledChange(newValue: boolean): void {
    if (newValue) {
      this.select?.disable();
    } else {
      this.select?.enable();
    }
  }

  @Watch('isInvalid')
  onIsInvalidChange(): void {
    this.odsInvalid.emit({ isInvalid: !!this.isInvalid });
  }

  @Watch('isReadonly')
  onIsReadonlyChange(newValue: boolean): void {
    if (newValue) {
      this.select?.lock();
    } else {
      this.select?.unlock();
    }
  }

  @Watch('multipleSelectionLabel')
  onMultipleSelectionLabelChange(newValue: string): void {
    this.select?.control.dispatchEvent(new CustomEvent('ods-select-multiple-selection-label-change', {
      detail: newValue,
    }));
  }

  @Watch('placeholder')
  onPlaceholderChange(newValue: string): void {
    this.select?.control.dispatchEvent(new CustomEvent('ods-select-placeholder-change', {
      detail: newValue,
    }));
  }

  componentWillLoad(): void {
    this.observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.attributeName === 'value' && this.value !== mutation.oldValue) {
          this.onValueChange(this.value, mutation.oldValue);
        }
      }
    });

    this.selectObserver = new MutationObserver((mutations) => {
      // We check mutations on child element (attributes or content changes) to update lib select
      // as mutations on root element is managed by the onSlotChange
      const hasChildrenMutations = mutations.some((mutation) => mutation.target !== this.selectElement && mutation.type !== 'childList');

      if (hasChildrenMutations) {
        const currentValue = this.select?.getValue() || '';
        this.select?.clear(); // reset the current selection
        this.select?.clearOptions(); // reset the tom-select options
        this.select?.sync(); // get updated options
        this.select?.setValue(currentValue); // set the value back
      }
      
      for (const mutation of mutations) {
        // When observing is-required, the inner element validity is not yet up-to-date
        // so we observe the element required attribute instead
        if (mutation.attributeName === 'required') {
          updateInternals(this.internals, this.value, this.selectElement);
          this.isInvalid = !this.internals.validity.valid;
        }
      }
    });

    // We set the value before the observer starts to avoid calling the mutation callback twice
    // as it will be called on componentDidLoad (when native element validity is up-to-date)
    this.value = getInitialValue(this.value, this.defaultValue);
  }

  componentDidLoad(): void {
    this.observer?.observe(this.el, {
      attributeFilter: ['value'],
      attributeOldValue: true,
    });

    if (this.selectElement) {
      this.createTomSelect(this.selectElement);

      this.selectObserver?.observe(this.selectElement, {
        attributes: true,
        characterData: true,
        childList: true,
        subtree: true,
      });
    }
  }

  disconnectedCallback(): void {
    this.observer?.disconnect();
    this.selectObserver?.disconnect();
  }

  async formResetCallback(): Promise<void> {
    await this.reset();
  }

  private bindSelectControl(): void {
    // By setting the lib "openOnFocus" to false, the dropdown doesn't open anymore on click
    // So we need to manually add our own open handler
    this.select?.control?.addEventListener('click', () => {
      if (this.isDisabled) {
        return;
      }

      // BUT the dropdown still get closed on click if open, and this close click is triggered before
      // this listener, which means we can't use the select "isOpen" state here as it is always false
      //
      // "ignoreFocus" is only set in the lib between the node focus() and the focus event trigger call
      // so we can use this moment to know that our click needs to open the dropdown
      // and it will be ignored on close clicks
      if (this.select?.ignoreFocus) {
        this.select?.open();
      }
    });

    this.select?.control?.addEventListener('keydown', (event: KeyboardEvent) => {
      // This prevents Space key to scroll the window down
      if (event.key === ' ') {
        event.preventDefault();
      }
    });

    this.select?.control?.addEventListener('keyup', (event: KeyboardEvent) => {
      if (!this.isDisabled && event.key === ' ') {
        this.select?.open();
      }
    });
  }

  private createTomSelect(selectElement: HTMLSelectElement): void {
    const { plugin, template } = getSelectConfig(this.allowMultiple, this.multipleSelectionLabel, this.customRenderer);

    this.select?.destroy();
    this.select = new TomSelect(selectElement, {
      allowEmptyOption: false,
      closeAfterSelect: !this.allowMultiple,
      controlInput: undefined,
      create: false,
      maxOptions: undefined,
      onBlur: (): void => {
        this.isInvalid = !this.internals.validity.valid;
        this.odsBlur.emit();
      },
      onChange: (value: string | string[]): void => {
        if (!this.isValueSync) {
          this.isSelectSync = true;
          this.updateValue(value);
        }
        this.isValueSync = false;
      },
      onDropdownClose: (dropdown: HTMLDivElement): void => {
        dropdown.classList.remove('ods-select__dropdown--bottom', 'ods-select__dropdown--top');

        this.select!.control.style.removeProperty('border-top-right-radius');
        this.select!.control.style.removeProperty('border-top-left-radius');
        this.select!.control.style.removeProperty('border-bottom-right-radius');
        this.select!.control.style.removeProperty('border-bottom-left-radius');
      },
      onDropdownOpen: async(dropdown: HTMLDivElement): Promise<void> => {
        // Delay the position computing at the end of the stack to ensure floating element has its final height
        setTimeout(async() => {
          const { placement, y } = await getElementPosition('bottom', {
            popper: dropdown,
            trigger: this.select?.control,
          }, {
            offset: -1, // offset the border-width size as we want it merged with the trigger.
          });

          Object.assign(dropdown.style, {
            left: '0',
            top: `${y}px`,
          });

          dropdown.classList.add(`ods-select__dropdown--${placement}`);

          if (placement === 'top') {
            this.select!.control.style.borderTopRightRadius = '0';
            this.select!.control.style.borderTopLeftRadius = '0';
          } else {
            this.select!.control.style.borderBottomRightRadius = '0';
            this.select!.control.style.borderBottomLeftRadius = '0';
          }
        }, 0);
      },
      onFocus: (): void => {
        this.odsFocus.emit();
      },
      openOnFocus: false,
      placeholder: this.placeholder,
      plugins: plugin,
      render: template,
      selectOnTab: true,
      sortField: this.sortBy && [{field: this.sortBy}],
    });

    this.bindSelectControl();
    this.onIsDisabledChange(this.isDisabled);
    this.onIsReadonlyChange(this.isReadonly);
  }

  private onSlotChange(optionNodes: HTMLOptionElement[]): void {
    // The initial slot nodes move will trigger this callback again
    // but we want to avoid a second select initialisation
    if (this.hasMovedNodes) {
      this.hasMovedNodes = false;
      return;
    }

    if (this.selectElement) {
      this.select?.clear(); // reset the current selection
      this.select?.clearOptions(); // reset the tom-select options

      moveSlottedElements(this.selectElement, optionNodes, hasNoValueOption(optionNodes));
      this.hasMovedNodes = true;

      this.select?.sync(); // get updated options

      setSelectValue(this.select, this.value, this.defaultValue, true);
      this.isSelectSync = true;
      this.onValueChange(this.value);
    }
  }

  private onValueChange(value: string | string[] | null, previousValue?: string | string[] | null): void {
    // Value change can be triggered from either value attribute change or select change
    // For the latter, we don't want to trigger a new change (as it may causes loop)
    if (!this.isSelectSync) {
      setSelectValue(this.select, value);
    }

    this.isSelectSync = false;

    updateInternals(this.internals, value, this.selectElement);

    this.odsChange.emit({
      name: this.name,
      previousValue: inlineValue(previousValue),
      validity:  this.internals.validity,
      value: inlineValue(value),
    });
  }

  private updateValue(newValue: string | string[] | null): void {
    // Non primitive value does not trigger mutation observer so we call it manually
    if (Array.isArray(newValue)) {
      const previousValue = Array.isArray(this.value) ? [...this.value] : this.value;
      this.value = [...newValue];
      this.onValueChange(newValue, previousValue);
    } else {
      this.value = newValue;
    }
  }

  render(): FunctionalComponent {
    return (
      <Host
        class={{
          'ods-select': true,
          'ods-select--disabled': this.isDisabled,
          'ods-select--dropdown-width-auto': this.dropdownWidth === 'auto',
          'ods-select--error': this.hasError || !!this.isInvalid,
          [`ods-select--border-rounded-${this.borderRounded}`]: true,
        }}
        disabled={ this.isDisabled }
        readonly={ this.isReadonly }>
        <select
          aria-label={ this.ariaLabel }
          aria-labelledby={ this.ariaLabelledby }
          disabled={ this.isDisabled }
          multiple={ this.allowMultiple }
          onFocus={ () => this.select?.focus() }
          ref={ (el) => this.selectElement = el }
          required={ this.isRequired }>
        </select>

        <slot onSlotchange={ (e) => this.onSlotChange((e.currentTarget as HTMLSlotElement).assignedElements() as HTMLOptionElement[]) }></slot>
      </Host>
    );
  }
}
