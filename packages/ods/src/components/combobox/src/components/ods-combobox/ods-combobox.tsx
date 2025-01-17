import { AttachInternals, Component, Element, Event, type EventEmitter, type FunctionalComponent, Host, Listen, Method, Prop, State, Watch, forceUpdate, h } from '@stencil/core';
import { debounce } from '../../../../../utils/debounce';
import { isElementInContainer, isTargetInElement, submitFormOnEnter } from '../../../../../utils/dom';
import { getElementPosition } from '../../../../../utils/overlay';
import { type OdsInput } from '../../../../input/src';
import { type OdsComboboxSelection, VALUE_DEFAULT_VALUE, getInitialValue, inlineSelection, inlineValue, isANewItem, splitValue, updateInternals, updateItemsFocus } from '../../controller/ods-combobox';
import { type OdsComboboxChangeEventDetail, type OdsComboboxItemSelectedEventDetail } from '../../interfaces/events';
import { type OdsComboboxItem } from '../ods-combobox-item/ods-combobox-item';

// TODO
//  - custom search function (async API, ...)
//  - test dynamic slot changes
//  - highlight results => can't when using slots => add specific event on input type AND/OR filter to allow inte to react to search
//  - ods-combobox-group
//  - "Users cannot select the same item twice; already selected items are removed from the dropdown." double check on single
//  - change anatomy picture to remove caret

// TBD
//  - how do we handle large dataset? separate infinite version (with data passed through JS and limited customization)?

// ISSUE
//  - when not enough space bottom, popper is displayed top, but we still listen to arrow down to open the result list

const CREATE_NEW_ID = 'ods-internal-create-new-id';
const FOCUSED_CLASS = 'ods-combobox__search--focused';

@Component({
  formAssociated: true,
  shadow: {
    delegatesFocus: true,
  },
  styleUrl: 'ods-combobox.scss',
  tag: 'ods-combobox',
})
export class OdsCombobox {
  private createNewElement?: HTMLElement & OdsComboboxItem;
  private currentFocusedItemIndex: number = -1;
  private currentSelections: OdsComboboxSelection[] = [];
  private debouncedOnInput = debounce(() => this.onInput(), 100);
  private inputElement?: HTMLInputElement & OdsInput;
  private observer?: MutationObserver;
  private resultElements: (HTMLElement & OdsComboboxItem)[] = [];
  private resultListElement?: HTMLElement;
  private searchElement?: HTMLElement;
  private shouldResetOnBlur: boolean = true;
  private shouldUpdateIsInvalidState: boolean = false;
  private shouldUpdateSelection: boolean = false;

  @Element() el!: HTMLElement;

  @AttachInternals() private internals!: ElementInternals;

  @State() private currentTagFocusedIndex: number = -1;
  @State() private hasNoResults: boolean = false;
  @State() private isInvalid: boolean | undefined;
  @State() private isOpen: boolean = false;

  @Prop({ reflect: true }) public addNewElementLabel: string = 'Add';
  @Prop({ reflect: true }) public allowMultiple: boolean = false;
  @Prop({ reflect: true }) public defaultValue?: string | string[];
  @Prop({ reflect: true }) public hasError: boolean = false;
  @Prop({ reflect: true }) public isClearable: boolean = false;
  @Prop({ reflect: true }) public isDisabled: boolean = false;
  @Prop({ reflect: true }) public isLoading: boolean = false;
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

  @Listen('click', { target: 'document' })
  onDocumentClick(event: MouseEvent): void {
    if (!isTargetInElement(event, this.el)) {
      if (this.isOpen) {
        this.closeDropdown();
      }
      this.searchElement?.classList.remove(FOCUSED_CLASS);
    }
  }

  @Listen('focusin', { target: 'document' })
  onDocumentFocusin(event: FocusEvent): void {
    if (this.isOpen && !isTargetInElement(event, this.el)) {
      this.closeDropdown();
    }
  }

  @Listen('invalid')
  onInvalidEvent(event: Event): void {
    // Remove the native validation message popup
    event.preventDefault();

    // Enforce the state here as we may still be in pristine state (if the form is submitted before any changes occurs)
    this.isInvalid = true;
  }

  @Listen('keydown', { target: 'document' })
  onDocumentKeydown(event: KeyboardEvent): void {
    if (this.isOpen && event.key === 'Escape') {
      this.closeDropdown();
    }
  }

  @Listen('odsComboboxSelected')
  onOdsSwitchItemChange(event: CustomEvent<OdsComboboxItemSelectedEventDetail>): void {
    event.stopImmediatePropagation();
    this.shouldUpdateSelection = false;

    if (this.allowMultiple) {
      this.currentSelections.push(event.detail.id === CREATE_NEW_ID ? {
        text: event.detail.value,
        value: event.detail.value,
      } : event.detail);

      const selectedItem = this.resultElements.find((el) => el.value === event.detail.value);

      if (selectedItem) {
        selectedItem.isSelected = true;
      }
      this.value = inlineSelection(this.currentSelections);
    } else {
      this.currentSelections = event.detail.id === CREATE_NEW_ID ? [{
        text: event.detail.value,
        value: event.detail.value,
      }] : [event.detail];
      this.value = event.detail.value;
    }
    this.currentFocusedItemIndex = updateItemsFocus(this.resultElements, this.currentFocusedItemIndex, 'reset');
    this.closeDropdown();
    this.inputElement?.focus();
  }

  @Method()
  public async checkValidity(): Promise<boolean> {
    this.isInvalid = !this.internals.validity.valid;
    return this.internals.checkValidity();
  }

  @Method()
  public async clear(): Promise<void> {
    this.odsClear.emit();
    this.currentSelections = [];
    this.resultElements?.forEach((resultElement) => {
      resultElement.isSelected = false;
    });
    this.shouldUpdateSelection = false;
    this.value = null;
    this.inputElement?.focus();
  }

  @Method()
  public async close(): Promise<void> {
    return this.closeDropdown();
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
    if (this.isDisabled || this.isReadonly) {
      return;
    }

    // We need to delay it to prevent document click listener to close it right after
    // (when, for example, calling the method from a button click)
    return new Promise((resolve) => {
      setTimeout(async() => {
        await this.openDropdown();
        resolve();
      }, 0);
    });
  }

  @Method()
  public async reportValidity(): Promise<boolean> {
    this.isInvalid = !this.internals.validity.valid;
    return this.internals.reportValidity();
  }

  @Method()
  public async reset(): Promise<void> {
    this.odsReset.emit();

    if (this.defaultValue) {
      this.shouldUpdateSelection = true;
      this.value = this.defaultValue;
    } else {
      this.currentSelections = [];
      this.resultElements?.forEach((resultElement) => {
        resultElement.isSelected = false;
      });
      this.shouldUpdateSelection = false;
      this.value = VALUE_DEFAULT_VALUE;
    }
  }

  @Method()
  public async willValidate(): Promise<boolean> {
    return this.internals.willValidate;
  }

  @Watch('isDisabled')
  onIsDisabledChange(): void {
    if (this.isDisabled) {
      this.closeDropdown();
    }
  }

  @Watch('isInvalid')
  onIsInvalidChange(): void {
    this.odsInvalid.emit({ isInvalid: !!this.isInvalid });
  }

  componentWillLoad(): void {
    this.observer = new MutationObserver((mutations: MutationRecord[]) => {
      for (const mutation of mutations) {
        if (mutation.attributeName === 'value' && this.value !== mutation.oldValue) {
          this.onValueChange(mutation.oldValue);
        }

        // When watching current component is-required, ods-input validity is not yet up-to-date
        // so we observe the ods-input is-required attribute instead
        if (mutation.attributeName === 'is-required') {
          updateInternals(this.internals, inlineSelection(this.currentSelections), this.isRequired);
          this.isInvalid = !this.internals.validity.valid;
        }
      }
    });

    // We set the value before the observer starts to avoid calling the mutation callback twice
    // as it will be called on componentDidLoad (when native element validity is up-to-date)
    this.shouldUpdateSelection = true;
    this.value = getInitialValue(this.value, this.defaultValue);
  }

  async componentDidLoad(): Promise<void> {
    // Init the internals correctly as native element validity is now up-to-date
    await this.onValueChange();

    this.shouldUpdateIsInvalidState = true;

    this.observer?.observe(this.el, {
      attributeFilter: ['value'],
      attributeOldValue: true,
    });

    if (this.inputElement) {
      this.observer?.observe(this.inputElement, {
        attributeFilter: ['is-required'],
        attributeOldValue: false,
      });
    }
  }

  disconnectedCallback(): void {
    this.observer?.disconnect();
  }

  async formResetCallback(): Promise<void> {
    await this.reset();
  }

  private closeDropdown(): void {
    this.isOpen = false;
    this.currentFocusedItemIndex = -1;
    this.resultListElement?.classList.remove('ods-combobox__results--bottom', 'ods-combobox__results--top');
    this.searchElement?.classList.remove('ods-combobox__search--bottom', 'ods-combobox__search--top');
  }

  private filterResults(value: string): void {
    if (value) {
      const filterRegex = new RegExp(`.*${value}.*`, 'i');
      let noMatch = true;

      this.resultElements?.forEach((resultElement) => {
        if (resultElement.id === CREATE_NEW_ID) {
          return;
        }

        const value = resultElement.searchLabel || resultElement.textContent || '';
        const doesMatchValue = filterRegex.test(value);

        resultElement.isVisible = doesMatchValue;

        if (doesMatchValue && noMatch) {
          noMatch = false;
        }
      });

      this.hasNoResults = noMatch;
    } else {
      this.resultElements?.forEach((resultElement) => {
        resultElement.isVisible = true;
      });
      this.hasNoResults = false;
    }

    this.updateCreateNewElement();
    this.currentFocusedItemIndex = updateItemsFocus(this.resultElements, this.currentFocusedItemIndex, 'reset');
  }

  private focusCurrentTag(): void {
    this.searchElement?.querySelectorAll<HTMLElement>('ods-tag')[this.currentTagFocusedIndex].focus();
    this.updateInputValue();
    this.closeDropdown();
  }

  private onBlur(event: FocusEvent): void {
    if (this.el.contains(event.relatedTarget as Node)) {
      return;
    }

    this.searchElement?.classList.remove(FOCUSED_CLASS);

    if (this.value !== this.inputElement?.value) {
      if (!this.allowMultiple && this.shouldResetOnBlur &&
        (this.inputElement?.value === '' || this.inputElement?.value === null)) {
        this.shouldUpdateSelection = true;
        this.value = VALUE_DEFAULT_VALUE;
      } else {
        this.updateInputValue();
      }
    }

    this.shouldResetOnBlur = true;
    this.isInvalid = !this.internals.validity.valid;
    this.closeDropdown();
  }

  private onInput(): void {
    this.filterResults(this.inputElement?.value || '');

    if (!this.isOpen) {
      this.openDropdown();
    }
  }

  private onInputClear(e: Event): void {
    e.stopImmediatePropagation();
    this.clear();
  }

  private onInputClick(): void {
    this.searchElement?.classList.add(FOCUSED_CLASS);

    if (!this.isReadonly) {
      this.openResultList();
    }
  }

  private onInputFocus(): void {
    this.searchElement?.classList.add(FOCUSED_CLASS);
  }

  private async onInputKeyDown(event: KeyboardEvent): Promise<void> {
    if (this.isReadonly) {
      return;
    }

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();

        if (!this.isOpen) {
          await this.openResultList();
        }

        this.currentFocusedItemIndex = updateItemsFocus(this.resultElements, this.currentFocusedItemIndex, 'down');

        if (this.currentFocusedItemIndex >= 0 && !isElementInContainer(this.resultElements[this.currentFocusedItemIndex], this.resultListElement)) {
          // Avoiding to recalculate bounding rect is better but does not work on Safari, offsetHeight is always 0
          if (this.resultElements[this.currentFocusedItemIndex].offsetHeight) {
            this.resultListElement?.scroll({
              behavior: 'smooth',
              top: this.resultElements[ this.currentFocusedItemIndex ].offsetTop - this.resultElements[ this.currentFocusedItemIndex ].offsetHeight,
            });
          } else {
            const { height } = this.resultElements[this.currentFocusedItemIndex].getBoundingClientRect();
            this.resultListElement?.scrollBy({
              behavior: 'smooth',
              top: height,
            });
          }
        }
        break;
      case 'ArrowLeft':
        if (this.allowMultiple && this.currentSelections.length) {
          event.preventDefault();

          // FIXME This is not ideal, but selection API seems not yet ready to work with shadow DOM (see https://github.com/w3c/selection-api)
          const actualInput = this.inputElement?.shadowRoot?.querySelector('input');

          if (actualInput) {
            const { selectionStart, selectionEnd } = actualInput;

            if (selectionStart === 0 && selectionEnd === 0) {
              this.currentTagFocusedIndex = this.currentSelections.length - 1;
              this.focusCurrentTag();
            }
          }
        }
        break;
      case 'ArrowUp':
        event.preventDefault();

        this.currentFocusedItemIndex = updateItemsFocus(this.resultElements, this.currentFocusedItemIndex, 'up');

        if (this.currentFocusedItemIndex >= 0 && !isElementInContainer(this.resultElements[this.currentFocusedItemIndex], this.resultListElement)) {
          this.resultElements[this.currentFocusedItemIndex].scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center',
          });
        }
        break;
      case 'Tab':
        if (this.isOpen && !event.shiftKey && this.currentFocusedItemIndex >= 0) {
          this.shouldResetOnBlur = false;
          await this.resultElements[this.currentFocusedItemIndex].select();
        }
        break;
      default:
        break;
    }
  }

  private async onInputKeyUp(event: KeyboardEvent): Promise<void> {
    if (event.key === 'Enter') {
      if (this.isOpen && this.currentFocusedItemIndex >= 0) {
        await this.resultElements[ this.currentFocusedItemIndex ].select();
      } else {
        submitFormOnEnter(event, this.internals.form);
      }
    }
  }

  private onSlotChange(event: Event): void {
    this.resultElements = (event.currentTarget as HTMLSlotElement).assignedElements()
      .filter((el) => el.tagName === 'ODS-COMBOBOX-ITEM') as (HTMLElement & OdsComboboxItem)[];
  }

  private onTagKeyDown(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault();

        if (this.currentTagFocusedIndex > 0) {
          this.currentTagFocusedIndex = this.currentTagFocusedIndex - 1;
          this.focusCurrentTag();
        }
        break;
      case 'ArrowRight':
        event.preventDefault();

        if (this.currentSelections.length && this.currentTagFocusedIndex < (this.currentSelections.length - 1)) {
          this.currentTagFocusedIndex = this.currentTagFocusedIndex + 1;
          this.focusCurrentTag();
        } else {
          this.inputElement?.focus();
        }
        break;
      default:
        break;
    }
  }

  private onTagRemove(value: string): void {
    const removedItem = this.resultElements.find((el) => el.value === value);
    if (removedItem) {
      removedItem.isSelected = false;
    }

    this.currentSelections = this.currentSelections.filter((el) => el.value !== value);
    this.shouldUpdateSelection = false;
    this.value = inlineSelection(this.currentSelections);

    if (this.currentSelections.length === 0
      || this.currentTagFocusedIndex === -1
      || this.currentTagFocusedIndex >= this.currentSelections.length) {
      this.currentTagFocusedIndex = -1;
      this.inputElement?.focus();
    }
  }

  private async onValueChange(previousValue?: string | null): Promise<void> {
    if (this.shouldUpdateSelection) {
      // If the value was changed programmatically we need to update the current selection accordingly
      if (this.allowMultiple && this.value) {
        this.updateCurrentSelection();
        // In multiple mode, input value change will not trigger a rerender so we need to enforce one
        forceUpdate(this.el);
      } else {
        if ((this.value && !this.currentSelections.length)
          || (this.currentSelections.length && this.value !== this.currentSelections[ 0 ].value)) {
          this.updateCurrentSelection();
        }
      }
    }

    // Put back to true by default as direct value change is the only case we can't actually manage
    this.shouldUpdateSelection = true;

    this.updateInputValue();

    const newValue = inlineSelection(this.currentSelections);
    updateInternals(this.internals, newValue, this.isRequired);

    if (this.shouldUpdateIsInvalidState) {
      this.isInvalid = !this.internals.validity.valid;
      this.shouldUpdateIsInvalidState = false;
    }

    this.odsChange.emit({
      name: this.name,
      previousValue,
      validity: this.internals.validity,
      value: newValue,
    });
  }

  private async openDropdown(): Promise<void> {
    if (this.resultListElement && this.searchElement) {
      const { placement, y } = await getElementPosition('bottom', {
        popper: this.resultListElement,
        trigger: this.el,
      }, {
        offset: -1, // offset the border-width size as we want it merged with the trigger.
      });

      Object.assign(this.resultListElement.style, {
        left: '0',
        top: `${y}px`,
      });

      this.isOpen = true;
      this.resultListElement?.scrollTo(0, 0);
      this.resultListElement.classList.add(`ods-combobox__results--${placement}`);
      this.searchElement.classList.add(`ods-combobox__search--${placement}`);
    }
  }

  private async openResultList(): Promise<void> {
    if (this.inputElement) {
      this.filterResults(this.inputElement.value);
      await this.openDropdown();
    }
  }

  private updateCreateNewElement(): void {
    if (this.createNewElement) {
      if (isANewItem(this.inputElement?.value, this.resultElements, this.currentSelections)) {
        this.createNewElement.value = this.inputElement?.value || '';
        this.createNewElement.innerText = `${this.addNewElementLabel} ${this.inputElement?.value}`;

        if (this.resultElements.length && this.resultElements[0].id !== CREATE_NEW_ID) {
          this.createNewElement.isVisible = true;
          this.resultElements.unshift(this.createNewElement);
        }
      } else {
        if (this.resultElements.length && this.resultElements[0].id === CREATE_NEW_ID) {
          this.createNewElement.isVisible = false;
          this.resultElements.shift();
        }
      }
    }
  }

  private updateCurrentSelection(): void {
    if (this.allowMultiple) {
      const values = splitValue(this.value);

      this.currentSelections = values.map((value) => {
        const item = this.resultElements.find((element) => element.value === value);

        if (item) {
          item.isSelected = true;

          return {
            text: item.textContent?.trim() || '',
            value: item.value,
          };
        } else {
          const inlinedValue = inlineValue(value);
          return {
            text: inlinedValue,
            value: inlinedValue,
          };
        }
      });
    } else {
      const item = this.resultElements.find((element) => element.value === this.value);

      if (item) {
        this.currentSelections = [{
          text: item.textContent?.trim() || '',
          value: item.value,
        }];
      } else {
        const inlinedValue = inlineValue(this.value);
        this.currentSelections = [{
          text: inlinedValue,
          value: inlinedValue,
        }];
      }
    }
  }

  private updateInputValue(): void {
    if (this.inputElement) {
      if (this.allowMultiple) {
        this.inputElement.value = '';
      } else {
        this.inputElement.value = this.currentSelections.length ? this.currentSelections[0].text : '';
      }
    }
  }

  render(): FunctionalComponent {
    return (
      <Host
        aria-expanded={ this.isOpen ? 'true' : 'false' }
        class="ods-combobox"
        disabled={ this.isDisabled }
        onBlur={ (e: FocusEvent) => this.onBlur(e) }
        readonly={ this.isReadonly }
        role="combobox">
        <div
          class={{
            'ods-combobox__search': true,
            'ods-combobox__search--disabled': this.isDisabled,
            'ods-combobox__search--error': this.hasError || !!this.isInvalid,
            'ods-combobox__search--read-only': this.isReadonly,
          }}
          ref={ (el?: HTMLElement) => el && (this.searchElement = el) }>
          {
            this.allowMultiple && this.currentSelections.length > 0 &&
            this.currentSelections.map((item) => (
              <ods-tag
                class="ods-combobox__search__tag"
                isDisabled={ this.isDisabled || this.isReadonly }
                label={ item.text }
                onKeyDown={ (e: KeyboardEvent) => this.onTagKeyDown(e) }
                onOdsRemove={ () => this.onTagRemove(item.value) }
                tabindex="-1">
              </ods-tag>
            ))
          }

          <ods-input
            class="ods-combobox__search__input"
            isClearable={ this.isClearable }
            isDisabled={ this.isDisabled }
            isReadonly={ this.isReadonly }
            isRequired={ this.isRequired }
            isLoading={ this.isLoading }
            name={ this.name }
            onClick={ () => this.onInputClick() }
            onInput={ () => this.debouncedOnInput() }
            onKeyDown={ (e: KeyboardEvent) => this.onInputKeyDown(e) }
            onKeyUp={ (e: KeyboardEvent) => this.onInputKeyUp(e) }
            onOdsChange={ (e: Event) => e.stopImmediatePropagation() }
            onOdsClear={ (e: Event) => this.onInputClear(e) }
            onOdsFocus={ () => this.onInputFocus() }
            onOdsInvalid={ (e: Event) => e.stopImmediatePropagation() }
            placeholder={ this.placeholder }
            ref={ (el: unknown) => this.inputElement = el as HTMLInputElement & OdsInput }>
          </ods-input>
        </div>

        <ul
          class={{
            'ods-combobox__results': true,
            'ods-combobox__results--open': this.isOpen,
          }}
          ref={ (el?: HTMLElement) => el && (this.resultListElement = el) }
          role="listbox"
          tabindex="-1">
          <ods-combobox-item
            id={ CREATE_NEW_ID }
            isVisible={ false }
            ref={ (el: unknown) => this.createNewElement = el as HTMLElement & OdsComboboxItem }
            value="">
          </ods-combobox-item>

          {
            this.hasNoResults &&
            <li class="ods-combobox__results__empty">
              { this.noResultLabel }
            </li>
          }

          <slot onSlotchange={ (e) => this.onSlotChange(e) }></slot>
        </ul>
      </Host>
    );
  }
}
