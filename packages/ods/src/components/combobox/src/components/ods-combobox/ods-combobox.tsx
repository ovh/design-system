import { AttachInternals, Component, Event, type EventEmitter, type FunctionalComponent, Host, Prop, State, Watch, h } from '@stencil/core';
import TomSelect from 'tom-select';
import { ODS_BUTTON_COLOR, ODS_BUTTON_SIZE, ODS_BUTTON_VARIANT } from '../../../../button/src';
import { ODS_ICON_NAME } from '../../../../icon/src';
import { getElementPosition } from '../../../../../utils/overlay';
import { VALUE_DEFAULT_VALUE, type SelectTemplateData, type SelectTemplateEscape, getSelectPlugin, hasNoValueOption, moveSlottedElements } from '../../controller/ods-combobox';

// Maybe add to Props
//  - maxItems: to limit the number of selection user can make?
//  - loadThrottle: to change the timer before dropdown appear?

// TODO
//  - how to customize noResultLabel with current value typed?
//  - same as above for option_create label => need a function
//  - customize min num of char before opening dropdown
//  - lose focus on tag remove using keyboard

// TODO move to utils
function removeItemOnOdsRemovePlugin(): void {
  // @ts-ignore "this" is the TomSelect instance but is set as any by the lib
  const self = this; // eslint-disable-line @typescript-eslint/no-this-alias

  self.hook('after', 'setupTemplates', function() {
    const itemTemplateFunction = self.settings.render.item;

    self.settings.render.item = (data: SelectTemplateData, escape: SelectTemplateEscape): ChildNode | null => {
      const item = itemTemplateFunction.call(self, data, escape);

      const itemTemplate = document.createElement('template');
      itemTemplate.innerHTML = item.trim();
      const itemDom = itemTemplate.content.firstChild;

      itemDom?.addEventListener('odsRemove', () => {
        if (self.isLocked) {
          return;
        }

        self.removeItem(itemDom);
        self.refreshOptions(false);
        self.inputState();
      });

      return itemDom;
    };
  });
}

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
  private select?: TomSelect;
  private selectElement?: HTMLSelectElement;

  @AttachInternals() private internals!: ElementInternals;

  @State() isInvalid: boolean | undefined;

  @Prop({ reflect: true }) public allowMultiple: boolean = false;
  @Prop({ reflect: true }) public ariaLabel: HTMLElement['ariaLabel'] = null;
  @Prop({ reflect: true }) public ariaLabelledby?: string;
  @Prop({ reflect: true }) public canCreate: boolean = true;
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
  // @Event() odsChange!: EventEmitter<OdsSelectChangeEventDetail>;
  // @Event() odsClear!: EventEmitter<void>;
  @Event() odsFocus!: EventEmitter<void>;
  // @Event() odsInvalid!: EventEmitter<{ isInvalid: boolean }>;
  // @Event() odsReset!: EventEmitter<void>;

  @Watch('isDisabled')
  onIsDisabledChange(newValue: boolean): void {
    if (newValue) {
      this.select?.disable();
    } else {
      this.select?.enable();
    }
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

  componentWillLoad(): void {
    // Those components are used in some string templates, not JSX,
    // thus Stencil does not detect them correctly and they're not embedded in the build,
    // so we have to manually declare their usage here
    h('ods-button');
    h('ods-tag');
  }

  componentDidLoad(): void {
    if (this.selectElement) {
      this.createTomSelect(this.selectElement);
    }
  }

  private createTomSelect(selectElement: HTMLSelectElement): void {
    // const { plugin, template } = getSelectConfig(this.allowMultiple, this.multipleSelectionLabel, this.customRenderer);

    this.select?.destroy();
    this.select = new TomSelect(selectElement, {
      // allowEmptyOption: false,
      // closeAfterSelect: !this.allowMultiple,
      // controlInput: undefined,
      create: this.canCreate,
      // @ts-ignore ...
      maxItems: this.allowMultiple ? undefined : 1,
      // maxOptions: undefined,
      onBlur: (): void => {
        this.isInvalid = !this.internals.validity.valid;
        this.odsBlur.emit();
      },
      // onChange: (value: string | string[]): void => {
      //   if (!this.isValueSync) {
      //     this.isSelectSync = true;
      //     this.updateValue(value);
      //   }
      //   this.isValueSync = false;
      // },
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
      plugins: getSelectPlugin(this.allowMultiple, this.isClearable, (data) => {
        return `<ods-button
          class="${data.className}"
          color="${ODS_BUTTON_COLOR.neutral}"
          icon="${ODS_ICON_NAME.xmark}"
          isDisabled="${this.isDisabled || this.isReadonly}"
          label=""
          size="${ODS_BUTTON_SIZE.xs}"
          variant="${ODS_BUTTON_VARIANT.ghost}">
        </ods-button>`;
      }),
      render: {
        item: (data: SelectTemplateData, escape: SelectTemplateEscape): string => {
          return this.allowMultiple
            ? `<ods-tag label="${escape(data.text)}">
            </ods-tag>`
            : `<span>${escape(data.text)}</span>`;
        },
        no_results: (_data: SelectTemplateData, escape: SelectTemplateEscape): string => {
          return `<div class="no-results">${escape(this.noResultLabel)}</div>`;
        },
      },
      selectOnTab: true,
    });

    // this.bindSelectControl();
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
