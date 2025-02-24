import { AttachInternals, Component, Element, Event, type EventEmitter, type FunctionalComponent, Host, Listen, Method, Prop, State, Watch, forceUpdate, h } from '@stencil/core';
import Mark from 'mark.js';
import { type OdsFormElement } from '../../../../../types';
import { debounce } from '../../../../../utils/debounce';
import { escapeHtml, isElementInContainer, isTargetInElement, submitFormOnEnter } from '../../../../../utils/dom';
import { getElementPosition } from '../../../../../utils/overlay';
import { escapeRegExp } from '../../../../../utils/regExp';
import { type OdsInput } from '../../../../input/src';
import { ODS_COMBOBOX_STRATEGY, type OdsComboboxStrategy } from '../../constants/combobox-strategy';
import { CREATE_NEW_ID, type OdsComboboxSelection, VALUE_DEFAULT_VALUE, getInitialValue, inlineSelection, inlineValue, isANewItem, splitValue, updateInternals, updateItemsFocus } from '../../controller/ods-combobox';
import { type OdsComboboxChangeEventDetail, type OdsComboboxFilterEventDetail, type OdsComboboxItemSelectedEventDetail } from '../../interfaces/events';
import { type OdsComboboxGroup } from '../ods-combobox-group/ods-combobox-group';
import { type OdsComboboxItem } from '../ods-combobox-item/ods-combobox-item';

type ResultElement = HTMLElement & OdsComboboxItem & { groupId?: string };
type ResultGroup = HTMLElement & OdsComboboxGroup;

const FOCUSED_CLASS = 'ods-combobox__search--focused';
const HIGHLIGHT_CLASS = 'ods-combobox-item--highlighted';

@Component({
  formAssociated: true,
  shadow: {
    delegatesFocus: true,
  },
  styleUrl: 'ods-combobox.scss',
  tag: 'ods-combobox',
})
export class OdsCombobox implements OdsFormElement {
  private createNewElement?: ResultElement;
  private currentFocusedItemIndex: number = -1;
  private currentSelections: OdsComboboxSelection[] = [];
  private debouncedOnInput = debounce(() => this.onInput(), 100);
  private inputElement?: HTMLInputElement & OdsInput;
  private markInstance?: Mark;
  private observer?: MutationObserver;
  private resizeObserver?: ResizeObserver;
  private resultElements: ResultElement[] = [];
  private resultGroups: ResultGroup[] = [];
  private resultListElement?: HTMLElement;
  private searchElement?: HTMLElement;
  private searchHeight: number = 0;
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
  @Prop({ reflect: true }) public highlightResults: boolean = false;
  @Prop({ reflect: true }) public isClearable: boolean = false;
  @Prop({ reflect: true }) public isDisabled: boolean = false;
  @Prop({ reflect: true }) public isLoading: boolean = false;
  @Prop({ reflect: true }) public isReadonly: boolean = false;
  @Prop({ reflect: true }) public isRequired: boolean = false;
  @Prop({ reflect: true }) public name!: string;
  @Prop({ reflect: true }) public noResultLabel: string = 'No results found';
  @Prop({ reflect: true }) public placeholder?: string;
  @Prop({ reflect: true }) public strategy: OdsComboboxStrategy = ODS_COMBOBOX_STRATEGY.absolute;
  @Prop({ mutable: true, reflect: true }) public value: string | string [] | null = VALUE_DEFAULT_VALUE;

  @Event() odsBlur!: EventEmitter<void>;
  @Event() odsChange!: EventEmitter<OdsComboboxChangeEventDetail>;
  @Event() odsClear!: EventEmitter<void>;
  @Event() odsFilter!: EventEmitter<OdsComboboxFilterEventDetail>;
  @Event() odsFocus!: EventEmitter<void>;
  @Event() odsInvalid!: EventEmitter<{ isInvalid: boolean }>;
  @Event() odsReset!: EventEmitter<void>;

  @Listen('click', { target: 'document' })
  onDocumentClick(event: MouseEvent): void {
    if (isTargetInElement(event, this.el)) {
      return;
    }

    if (this.isOpen) {
      this.closeDropdown();
    }
    this.searchElement?.classList.remove(FOCUSED_CLASS);
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
    this.clearCombobox();
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
    setTimeout(async() => {
      await this.openResultList();
    }, 0);
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
      this.clearCombobox();
    }
  }

  @Method()
  public async willValidate(): Promise<boolean> {
    return this.internals.willValidate;
  }

  @Watch('highlightResults')
  onHighlightResultsChange(): void {
    if (this.highlightResults) {
      this.markInstance = new Mark(this.resultElements);
    } else {
      this.markInstance?.unmark();
      this.markInstance = undefined;
    }
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

    this.resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (!this.searchHeight && entry.contentRect.height > 0) {
          this.searchHeight = entry.contentRect.height;
        }

        if (this.searchHeight !== entry.contentRect.height) {
          this.searchHeight = entry.contentRect.height;

          if (this.isOpen) {
            // If the search element height has changed, we need to reposition the floating dropdown
            this.openDropdown();
          }
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
    this.onHighlightResultsChange();

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

    if (this.searchElement) {
      this.resizeObserver?.observe(this.searchElement);
    }
  }

  disconnectedCallback(): void {
    this.observer?.disconnect();
    this.resizeObserver?.disconnect();
  }

  async formResetCallback(): Promise<void> {
    await this.reset();
  }

  private clearCombobox(): void {
    this.currentSelections = [];
    this.resultElements?.forEach((resultElement) => {
      resultElement.isSelected = false;
    });
    this.shouldUpdateSelection = false;
    this.value = VALUE_DEFAULT_VALUE;
  }

  private closeDropdown(): void {
    this.isOpen = false;
    this.currentFocusedItemIndex = -1;
    this.resultListElement?.classList.remove('ods-combobox__results--bottom', 'ods-combobox__results--top');
    this.searchElement?.classList.remove('ods-combobox__search--bottom', 'ods-combobox__search--top');
  }

  private filterResults(value: string): void {
    this.markInstance?.unmark();

    if (value) {
      const filterRegex = new RegExp(`.*${escapeRegExp(value)}.*`, 'i');
      let noMatch = true;

      this.resultElements?.forEach((resultElement) => {
        if (resultElement.id === CREATE_NEW_ID) {
          return;
        }

        const itemValue = (resultElement.searchLabel || resultElement.textContent || '').trim();
        const doesMatchValue = filterRegex.test(itemValue);

        resultElement.isVisible = doesMatchValue;

        if (doesMatchValue && noMatch) {
          noMatch = false;
        }
      });

      this.markInstance?.mark(value, {
        className: HIGHLIGHT_CLASS,
        element: 'span',
      });

      this.hasNoResults = noMatch;
    } else {
      this.resultElements?.forEach((resultElement) => {
        resultElement.isVisible = true;
      });
      this.hasNoResults = false;
    }

    this.updateCreateNewElement();
    this.updateGroupsVisibility();
    this.currentFocusedItemIndex = updateItemsFocus(this.resultElements, this.currentFocusedItemIndex, 'reset');

    this.odsFilter.emit({
      filterValue: value,
      hasNoResults: this.hasNoResults,
    });
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

    if (!this.allowMultiple) {
      this.odsClear.emit();
      this.shouldUpdateSelection = true;
      this.value = VALUE_DEFAULT_VALUE;
    }
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
      .reduce((res, element) => {
        if (element.tagName === 'ODS-COMBOBOX-ITEM') {
          res.push(element as ResultElement);
          return res;
        }

        if (element.tagName === 'ODS-COMBOBOX-GROUP') {
          this.resultGroups.push(element as ResultGroup);

          return res.concat((Array.from(element.children || []) as ResultElement[])
            .filter((el) => el.tagName === 'ODS-COMBOBOX-ITEM')
            .map((el: ResultElement) => {
              el.groupId = element.id;
              return el;
            }));
        }

        return res;
      }, [] as ResultElement[]) ;
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
    if (!this.inputElement) {
      return;
    }

    this.filterResults(this.inputElement.value);
    await this.openDropdown();
  }

  private updateCreateNewElement(): void {
    if (!this.createNewElement) {
      return;
    }

    if (isANewItem(this.inputElement?.value, this.resultElements, this.currentSelections)) {
      const templateValue = escapeHtml(this.inputElement?.value || '');
      this.createNewElement.value = this.inputElement?.value || '';

      this.createNewElement.innerHTML = this.highlightResults
        ? `${this.addNewElementLabel} <span class="${HIGHLIGHT_CLASS}">${templateValue}</span>`
        : `${this.addNewElementLabel} ${templateValue}`;

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

  private updateGroupsVisibility(): void {
    if (this.resultGroups.length) {
      this.resultGroups.forEach((group) => {
        group.isVisible = this.resultElements
          .filter((el) => el.groupId === group.id)
          .some((el) => el.isVisible && !el.isSelected);
      });
    }
  }

  private updateInputValue(): void {
    if (!this.inputElement) {
      return;
    }

    if (this.allowMultiple) {
      this.inputElement.value = '';
    } else {
      this.inputElement.value = this.currentSelections.length ? this.currentSelections[0].text : '';
    }
  }

  render(): FunctionalComponent {
    return (
      <Host
        aria-expanded={ this.isOpen ? 'true' : 'false' }
        class={ `ods-combobox ods-combobox--${this.strategy}` }
        disabled={ this.isDisabled }
        onBlur={ (e: FocusEvent) => this.onBlur(e) }
        readonly={ this.isReadonly }
        role="combobox">
        <div
          class={{
            'ods-combobox__search': true,
            'ods-combobox__search--disabled': this.isDisabled,
            'ods-combobox__search--error': this.hasError || !!this.isInvalid,
            'ods-combobox__search--multiple': this.allowMultiple,
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
            class="ods-combobox__results__new"
            id={ CREATE_NEW_ID }
            isVisible={ false }
            ref={ (el: unknown) => this.createNewElement = el as ResultElement }
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
