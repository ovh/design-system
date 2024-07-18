import { AttachInternals, Component, Element, Event, type EventEmitter, type FunctionalComponent, Host, Method, Prop, Watch, h } from '@stencil/core';
import TomSelect from 'tom-select';
import { getElementPosition } from '../../../../../utils/overlay';
import { mergeSelectedItemPlugin, placeholderPlugin } from '../../../../../utils/select';
import { getSelectConfig, inlineValue, moveSlottedElements, setFormValue, setSelectValue } from '../../controller/ods-select';
import { type OdsSelectEventChangeDetail } from '../../interfaces/events';
import { type OdsSelectCustomRenderer } from '../../interfaces/options';

TomSelect.define('merge_selected_items', mergeSelectedItemPlugin);
TomSelect.define('placeholder', placeholderPlugin);

@Component({
  formAssociated: true,
  shadow: true,
  styleUrl: 'ods-select.scss',
  tag: 'ods-select',
})
export class OdsSelect {
  private hasMovedNodes: boolean = false;
  private isSelectSync: boolean = false;
  private observer!: MutationObserver;
  private select?: TomSelect;
  private selectElement?: HTMLSelectElement;

  @Element() el!: HTMLElement;

  @AttachInternals() private internals!: ElementInternals;

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
  @Prop({ mutable: true, reflect: true }) public value: string | string [] | null = null;

  @Event() odsBlur!: EventEmitter<void>;
  @Event() odsChange!: EventEmitter<OdsSelectEventChangeDetail>;
  @Event() odsClear!: EventEmitter<void>;
  @Event() odsFocus!: EventEmitter<void>;
  @Event() odsReset!: EventEmitter<void>;

  @Method()
  async clear(): Promise<void> {
    this.value = null;
    this.odsClear.emit();
  }

  @Method()
  async close(): Promise<void> {
    this.select?.close();
  }

  @Method()
  async getValidity(): Promise<ValidityState | undefined> {
    return this.selectElement?.validity;
  }

  @Method()
  async open(): Promise<void> {
    this.select?.open();
  }

  @Method()
  async reset(): Promise<void> {
    this.updateValue(this.defaultValue ?? null);
    this.odsReset.emit();
  }

  @Watch('isDisabled')
  onIsDisabledChange(newValue: boolean): void {
    newValue ? this.select?.disable() : this.select?.enable();
  }

  @Watch('isReadonly')
  onIsReadonlyChange(newValue: boolean): void {
    // TODO this seems to prevent focusing on next element
    // TODO use same still as input readonly (focused)
    this.select?.setReadOnly(newValue);
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

  @Watch('value')
  onValueChange(value: string | string[], previousValue?: string | string[]): void {
    // Value change can be triggered from either value attribute change or select change
    // For the latter, we don't want to trigger a new change (as it may causes loop)
    if (!this.isSelectSync) {
      setSelectValue(this.select, value);
    }
    this.isSelectSync = false;

    setFormValue(this.internals, value);

    this.odsChange.emit({
      name: this.name,
      previousValue: inlineValue(previousValue),
      validity:  this.selectElement?.validity,
      value: inlineValue(value),
    });
  }

  componentWillLoad(): void {
    if (!this.value) {
      this.value = this.defaultValue ?? null;
    }
    setFormValue(this.internals, this.value);
  }

  componentDidLoad(): void {
    this.observer = new MutationObserver((mutations) => {
      // We only care about mutations on child element (attributes or content changes)
      // as mutations on root element is managed by the onSlotChange
      const childrenMutations = mutations.filter((mutation) =>
        mutation.target !== this.selectElement && mutation.type !== 'childList');

      if (childrenMutations.length) {
        const currentValue = this.select?.getValue() || '';
        this.select?.clear(); // reset the current selection
        this.select?.clearOptions(); // reset the tom-select options
        this.select?.sync(); // get updated options
        this.select?.setValue(currentValue); // set the value back
      }
    });

    this.observer.observe(this.selectElement!, {
      attributes: true,
      characterData: true,
      childList: true,
      subtree: true,
    });
  }

  async formResetCallback(): Promise<void> {
    await this.reset();
  }

  disconnectedCallback(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private bindSelectControl(): void {
    // By setting the lib "openOnFocus" to false, the dropdown doesn't open anymore on click
    // So we need to manually add our own open handler
    this.select?.control.addEventListener('click', () => {
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

    this.select?.control.addEventListener('keydown', (event: KeyboardEvent) => {
      // This prevents Space key to scroll the window down
      if (event.key === ' ') {
        event.preventDefault();
      }
    });

    this.select?.control.addEventListener('keyup', (event: KeyboardEvent) => {
      if (!this.isDisabled && event.key === ' ') {
        this.select?.open();
      }
    });
  }

  private onSlotChange(event: Event): void {
    // The initial slot nodes move will trigger this callback again
    // but we want to avoid a second select initialisation
    if (this.hasMovedNodes) {
      this.hasMovedNodes = false;
      return;
    }

    if (this.selectElement) {
      moveSlottedElements(this.selectElement, (event.currentTarget as HTMLSlotElement).assignedElements());
      this.hasMovedNodes = true;

      const { plugin, template } = getSelectConfig(this.allowMultiple, this.multipleSelectionLabel, this.customRenderer);

      this.select?.destroy();
      this.select = new TomSelect(this.selectElement, {
        allowEmptyOption: true,
        closeAfterSelect: !this.allowMultiple,
        controlInput: undefined,
        create: false,
        maxOptions: undefined,
        onBlur: (): void => {
          this.odsBlur.emit();
        },
        onChange: (value: string | string[]): void => {
          this.isSelectSync = true;
          this.updateValue(value);
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
      });

      this.bindSelectControl();
      this.onIsReadonlyChange(this.isReadonly);
      setSelectValue(this.select, this.value, this.defaultValue, true);
    }
  }

  private updateValue(newValue: string | string[] | null): void {
    if (Array.isArray(newValue)) {
      this.value = [...newValue]; // to enforce Stencil @Watch trigger
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
          'ods-select--error': this.hasError,
          [`ods-select--border-rounded-${this.borderRounded}`]: true,
        }}>
        <select
          aria-label={ this.ariaLabel }
          aria-labelledby={ this.ariaLabelledby }
          disabled={ this.isDisabled }
          multiple={ this.allowMultiple }
          ref={ (el) => this.selectElement = el }
          required={ this.isRequired }>
        </select>

        <slot onSlotchange={ (e) => this.onSlotChange(e) }></slot>
      </Host>
    );
  }
}
