import { AttachInternals, Component, Element, Event, type EventEmitter, type FunctionalComponent, Host, Method, Prop, Watch, h } from '@stencil/core';
import TomSelect from 'tom-select';
import { getElementPosition } from '../../../../../utils/overlay';
import { mergeSelectedItemPlugin, placeholderPlugin } from '../../../../../utils/select';
import { type CustomRenderer, getSelectConfig, inlineValue, moveSlottedElements, setFormValue, setSelectValue } from '../../controller/ods-select';
import { type OdsSelectEventChangeDetail } from '../../interfaces/events';

// TODO to be answered
//  do we keep width 100% to ensure size control & dropdown stays the same =>ok
//  add open/close methods? =>ok
//  allow custom render of item when multiple => no

// TODO style
//  style on plugin checkbox
//  mixin icon in select caret style

// TODO still to be done
//  add part?
//  tests
//  wrappers
//  docs to finish

TomSelect.define('merge_selected_items', mergeSelectedItemPlugin);
TomSelect.define('placeholder', placeholderPlugin);

@Component({
  formAssociated: true,
  shadow: true,
  styleUrl: 'ods-select.scss',
  tag: 'ods-select',
})
export class OdsSelect {
  private isSelectSync: boolean = false;
  private select?: TomSelect;
  private selectElement?: HTMLSelectElement;

  @Element() el!: HTMLElement;

  @AttachInternals() private internals!: ElementInternals;

  @Prop({ reflect: true }) public allowMultiple: boolean = false;
  @Prop({ reflect: true }) public ariaLabel: HTMLElement['ariaLabel'] = null;
  @Prop({ reflect: true }) public ariaLabelledby?: string;
  @Prop({ reflect: false }) public customRenderer?: CustomRenderer;
  @Prop({ reflect: true }) public defaultValue?: string | string [];
  @Prop({ reflect: true }) public hasError: boolean = false;
  @Prop({ reflect: true }) public isDisabled: boolean = false;
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
  async getValidity(): Promise<ValidityState | undefined> {
    return this.selectElement?.validity;
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
  onValueChange(value: string | string[], oldValue?: string | string[]): void {
    // Value change can be triggered from either value attribute change or select change
    // For the latter, we don't want to trigger a new change (as it may causes loop)
    if (!this.isSelectSync) {
      setSelectValue(this.select, value);
    }
    this.isSelectSync = false;

    setFormValue(this.internals, value);

    this.odsChange.emit({
      name: this.name,
      oldValue: inlineValue(oldValue),
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

  async formResetCallback(): Promise<void> {
    await this.reset();
  }

  private onSlotChange(event: Event): void {
    if (this.selectElement) {
      moveSlottedElements(this.selectElement, (event.currentTarget as HTMLSlotElement).assignedElements());

      const { plugin, template } = getSelectConfig(this.allowMultiple, this.multipleSelectionLabel, this.customRenderer);

      this.select?.destroy();
      this.select = new TomSelect(this.selectElement, {
        allowEmptyOption: true,
        closeAfterSelect: !this.allowMultiple,
        controlInput: undefined,
        create: false,
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
          const { placement, y } = await getElementPosition('bottom', {
            popper: dropdown,
            trigger: this.selectElement,
          }, {
            // Computed coordinates give strange, but predictive, results based on option height.
            // So we need to manually update the offset regarding the computed placement and if the select
            // allow multiple selection.
            // In all case we need to offset at least the border-width size as we want it merged with the trigger.
            offset: ({ placement }) => {
              if (placement === 'top') {
                // border-width
                return -1;
              } else {
                if (this.allowMultiple) {
                  // (option height * 1.5) + border-width
                  return -49;
                }
                // (option height / 2) - border-width
                return 15;
              }
            },
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
        },
        onFocus: (): void => {
          this.odsFocus.emit();
        },
        placeholder: this.placeholder,
        plugins: plugin,
        render: template,
        selectOnTab: true,
      });

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
          'ods-select--error': this.hasError,
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
