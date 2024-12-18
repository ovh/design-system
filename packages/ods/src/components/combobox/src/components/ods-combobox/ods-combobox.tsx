import { AttachInternals, Component, Element, Event, type EventEmitter, type FunctionalComponent, Host, Listen, Method, Prop, State, Watch, h } from '@stencil/core';
import TomSelect from 'tom-select';
import { ODS_BUTTON_COLOR, ODS_BUTTON_SIZE, ODS_BUTTON_VARIANT } from '../../../../button/src';
import { ODS_ICON_NAME } from '../../../../icon/src';
import { getElementPosition } from '../../../../../utils/overlay';
import { type SelectTemplateData, type SelectTemplateEscape, removeItemOnOdsRemovePlugin } from '../../../../../utils/select';
import { VALUE_DEFAULT_VALUE, getInitialValue, hasNoValueOption, inlineValue, moveSlottedElements, setSelectValue, updateInternals } from '../../controller/ods-combobox';
import { type OdsComboboxChangeEventDetail } from '../../interfaces/events';

// Maybe add to Props
//  - maxItems: to limit the number of selection user can make?
//  - loadThrottle / refreshThrottle: to change the timer before dropdown appear?

// TODO
//  - customize min num of char before opening dropdown
//  - add creation test | no result label test | tag removal test

TomSelect.define('remove_item_on_ods_remove_plugin', removeItemOnOdsRemovePlugin);

@Component({
  formAssociated: true,
  shadow: {
    delegatesFocus: true,
  },
  styleUrl: 'ods-combobox.scss',
  tag: 'ods-combobox',
})
export class OdsCombobox {
  private hasMovedNodes: boolean = false;
  private isComponentLoaded = false;
  private isSelectSync: boolean = false;
  private isValueSync: boolean = false;
  private select?: TomSelect;
  private selectElement?: HTMLSelectElement;
  private selectObserver?: MutationObserver;

  @Element() el!: HTMLElement;

  @AttachInternals() private internals!: ElementInternals;

  @State() isInvalid: boolean | undefined;

  @Prop({ reflect: true }) public allowMultiple: boolean = false;
  @Prop({ reflect: true }) public ariaLabel: HTMLElement['ariaLabel'] = null;
  @Prop({ reflect: true }) public ariaLabelledby?: string;
  @Prop({ reflect: true }) public canCreate: boolean = true;
  @Prop({ reflect: true }) public createLabel: string = 'Add';
  @Prop({ reflect: true }) public defaultValue?: string | string [];
  @Prop({ reflect: true }) public hasError: boolean = false;
  @Prop({ reflect: true }) public isClearable: boolean = false;
  @Prop({ reflect: true }) public isDisabled: boolean = false;
  @Prop({ reflect: true }) public isReadonly: boolean = false;
  @Prop({ reflect: true }) public isRequired: boolean = false;
  @Prop({ reflect: true }) public name!: string;
  @Prop({ reflect: true }) public noResultLabel: string = 'No results found';
  @Prop({ reflect: true }) public placeholder?: string;
  @Prop({ mutable: true, reflect: true }) public value: string | string [] | null = VALUE_DEFAULT_VALUE;

  @Event() odsBlur!: EventEmitter<void>;
  @Event() odsChange!: EventEmitter<OdsComboboxChangeEventDetail>;
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

  @Watch('placeholder')
  onPlaceholderChange(newValue: string): void {
    if (this.select) {
      this.select.settings.placeholder = newValue;
      this.select.inputState();
    }
  }

  @Watch('value')
  onValuePropChange(newValue: string | string[] | null, previousValue: string | string[] | null): void {
    // @Watch does trigger inconsistently on initial render, so we prevent it manually
    if (this.isComponentLoaded) {
      this.onValueChange(newValue, previousValue);
    }
  }

  componentWillLoad(): void {
    // Those components are used in some string templates, not JSX,
    // thus Stencil does not detect them correctly and they're not embedded in the build,
    // so we have to manually declare their usage here
    h('ods-button');
    h('ods-tag');

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

    this.value = getInitialValue(this.value, this.defaultValue);
  }

  componentDidLoad(): void {
    if (this.selectElement) {
      this.createTomSelect(this.selectElement);

      this.selectObserver?.observe(this.selectElement, {
        attributes: true,
        characterData: true,
        childList: true,
        subtree: true,
      });
    }

    this.isComponentLoaded = true;
  }

  disconnectedCallback(): void {
    this.selectObserver?.disconnect();
  }

  async formResetCallback(): Promise<void> {
    await this.reset();
  }

  private createTomSelect(selectElement: HTMLSelectElement): void {
    this.select?.destroy();
    this.select = new TomSelect(selectElement, {
      // ...(!this.allowMultiple && {
      //   controlInput: undefined,
      // }),
      create: this.canCreate,
      // createOnBlur: !this.allowMultiple, // TODO remove?
      hidePlaceholder: true,
      // labelField: 'label', //TODO?
      maxItems: this.allowMultiple ? undefined : 1,
      mode: this.allowMultiple ? 'multi' : 'single', // TODO needed?
      onBlur: (): void => {
        // @ts-ignore TODO
        // this.select?.setTextboxValue(this.select?.getValue());

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
      // @ts-ignore TODO
      onItemAdd: (value: string, item: HTMLElement): void =>{
        if (this.allowMultiple) {
          // see https://github.com/orchidjs/tom-select/issues/815
          this.select?.setTextboxValue('');
          this.select?.refreshOptions(false);
        } else {
          // console.log(value)
          // console.dir(item)
          // this.select?.setTextboxValue(item.dataset.label);
          // this.testSingleValue = value;
          // const label = item.dataset.label;
          // this.select?.setTextboxValue(label);
          // this.select?.refreshItems();
          // this.select?.refreshOptions(false);
          // this.select?.setValue(value); // set the value back
        }
      },
      openOnFocus: true,
      // options: [
      //   { value: "dog", toto: "1", text: 'Dog' },
      //   { value: "cat", toto: "2", text: 'Cat' },
      //   { value: "hamster", toto: "3", text: 'Hamster' },
      //   { value: "parrot", toto: "4", text: 'Parrot' },
      //   { value: "spider", toto: "5", text: 'Spider' },
      //   { value: "goldfish", toto: "6", text: 'Goldfish' },
      // ],
      placeholder: this.placeholder,
      plugins: {
        remove_item_on_ods_remove_plugin: {},
        ...(this.isClearable && {
          clear_button: {
            html: (data: SelectTemplateData): string => {
              return `<ods-button
                class="${data.className}"
                color="${ODS_BUTTON_COLOR.neutral}"
                icon="${ODS_ICON_NAME.xmark}"
                isDisabled="${this.isDisabled || this.isReadonly}"
                label=""
                size="${ODS_BUTTON_SIZE.xs}"
                variant="${ODS_BUTTON_VARIANT.ghost}">
              </ods-button>`;
            },
          },
        }),
      },
      render: {
        item: (data: SelectTemplateData, escape: SelectTemplateEscape): string => {
          return this.allowMultiple
            ? `<ods-tag label="${escape(data.text || '')}">
            </ods-tag>`
            // : `<span data-label="${escape(data.text || '')}"></span>`;
            : `<span>${escape(data.text || '')}</span>`;
        },
        no_results: (_data: SelectTemplateData, escape: SelectTemplateEscape): string => {
          return `<div class="no-results">${escape(this.noResultLabel)}</div>`;
        },
        option_create: (data: SelectTemplateData, escape: SelectTemplateEscape): string => {
          return `<div class="create">${this.createLabel} <span class="input">${escape(data.input || '')}</span></div>`;
        },
      },
      selectOnTab: true,
    });

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
      this.select?.clear();
      this.select?.clearOptions();

      moveSlottedElements(this.selectElement, optionNodes, hasNoValueOption(optionNodes));
      this.hasMovedNodes = true;

      this.select?.sync();

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
          'ods-combobox': true,
          'ods-combobox--clearable': this.isClearable,
          'ods-combobox--disabled': this.isDisabled,
          'ods-combobox--error': this.hasError || !!this.isInvalid,
          'ods-combobox--multiple': this.allowMultiple,
        }}
        disabled={ this.isDisabled }
        readonly={ this.isReadonly }>
        <select
          aria-label={ this.ariaLabel }
          aria-labelledby={ this.ariaLabelledby }
          disabled={ this.isDisabled }
          onFocus={ () => this.select?.focus() }
          ref={ (el) => this.selectElement = el }
          required={ this.isRequired }>
        </select>

        <slot onSlotchange={ (e) => this.onSlotChange((e.currentTarget as HTMLSlotElement).assignedElements() as HTMLOptionElement[]) }></slot>
      </Host>
    );
  }
}
