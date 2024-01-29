import type { OdsSelectOptionClickEventDetail, OsdsSelectOption } from '../../osds-select-option/public-api';
import type { OdsSelectValueChangeEventDetail } from '../interfaces/events';
import type { OsdsSelect } from '../osds-select';
import type { OdsCommonFieldValidityState, OdsInputValue } from '@ovhcloud/ods-common-core';
import { OdsCommonFieldMethodController } from '@ovhcloud/ods-common-core';

class OdsSelectController<T extends OsdsSelect> extends OdsCommonFieldMethodController<T, OdsSelectValueChangeEventDetail> {
  public selectOptions: (HTMLElement & OsdsSelectOption)[] = [];

  constructor(component: T) {
    super(component);
  }

  override beforeInit(): void {
    super.beforeInit();
    if (!this.component.value && this.component.defaultValue) {
      this.component.value = this.component.defaultValue;
    }
    this.component.internals.setFormValue(this.component.value?.toString() ?? '');
    this.component.openedChanged(this.component.opened);
    this.component.selectedLabelSlot = this.component.el.querySelector('[slot="selectedLabel"]');
  }

  closeSurface(): void {
    if (this.component.surface?.opened) {
      this.component.surface.close();
      this.component.opened = false;
    }
  }

  /**
   * get the validity object properties of the component.
   * it is based on the validity state of the vanilla select.
   * in case of no vanilla select passed, it returns the default value for each property
   */
  override async getValidity(): Promise<OdsCommonFieldValidityState> {
    const requiredError = this.hasRequiredError();
    return {
      badInput: false,
      customError: false,
      forbiddenValue: false,
      patternMismatch: false,
      rangeOverflow: false,
      rangeUnderflow: false,
      stepMismatch: false,
      tooLong: false,
      tooShort: false,
      typeMismatch: false,
      valid: !requiredError,
      valueMissing: requiredError,
    };
  }

  private handlerKeyArrow(event: KeyboardEvent, selectedSelectOptionIndex: number): void {
    if (!this.component.opened) {
      return;
    }
    const focusSelectOption = (index: number): void => {
      this.selectOptions[index].focus();
      this.selectOptions[index].setAttribute('selected', '');
      event.preventDefault();
    };
    const hasSelectedOption = selectedSelectOptionIndex !== -1;
    if (hasSelectedOption) {
      this.selectOptions[selectedSelectOptionIndex].removeAttribute('selected');
      this.selectOptions[selectedSelectOptionIndex].blur();
    }
    if (event.code === 'ArrowUp' || (event.code === 'Tab' && event.shiftKey)) {
      const index = hasSelectedOption ? selectedSelectOptionIndex - 1 : 0;
      if (!hasSelectedOption && (event.code === 'Tab' && event.shiftKey)) {
        return;
      }
      if (index < 0 && (event.code === 'Tab' && event.shiftKey)) {
        event.preventDefault();
        this.component.anchor.focus();
        return;
      }
      if (index < 0) {
        return focusSelectOption(this.selectOptions.length -1);
      }
      return focusSelectOption(index);
    }
    if (event.code === 'ArrowDown' || event.code === 'Tab') {
      const index = hasSelectedOption ? selectedSelectOptionIndex + 1 : 0;
      if (index >= this.selectOptions.length && event.code === 'Tab') {
        this.selectOptions.forEach((s) => s.removeAttribute('selected'));
        this.selectOptions.find((s) => s.value === this.component.value)?.setAttribute('selected', '');
        return this.closeSurface();
      } else if (index >= this.selectOptions.length) {
        return focusSelectOption(0);
      }
      return focusSelectOption(index);
    }
  }

  handlerKeyDown(event: KeyboardEvent): void {
    const selectedSelectOptionIndex = this.selectOptions.findIndex((select) => select.getAttribute('selected') !== null || document.activeElement === select);
    switch (event.code) {
      case 'Escape': {
        this.selectOptions.forEach((s) => s.removeAttribute('selected'));
        this.selectOptions.find((s) => s.value === this.component.value)?.setAttribute('selected', '');
        return this.closeSurface();
      }
      case 'ArrowUp':
      case 'ArrowDown':
      case 'Tab':
        return this.handlerKeyArrow(event, selectedSelectOptionIndex);
      case 'Enter':
      case 'NumpadEnter':
        return this.handlerKeyEnter(this.selectOptions[selectedSelectOptionIndex]);
      default:
        break;
    }
  }

  private handlerKeyEnter(selectOption?: OsdsSelectOption): void {
    if (!this.component.opened || !selectOption) {
      return this.component.handleSelectClick();
    }
    this.component.handleValueChange(new CustomEvent<OdsSelectOptionClickEventDetail>('odsSelectOptionClick', {
      detail: {
        value: selectOption.value,
      },
    }));
    this.component.setFocus();
  }

  async hasError(): Promise<boolean> {
    const validity = await this.getValidity();
    return this.component.error || !validity.valid;
  }

  hasRequiredError(): boolean {
    if (this.component.required) {
      return !this.component.value;
    }
    return false;
  }

  async onValueChange(value: OdsInputValue, oldValue?: OdsInputValue): Promise<void> {
    this.component.emitChange(value, oldValue);
    this.component.internals?.setFormValue?.(value?.toString() ?? '');
    await this.component.updateSelectOptionStates(value);
  }

  openSurface(): void {
    if (this.component.surface) {
      this.component.surface.open();
      this.component.opened = true;
    }
  }

  syncReferences(): void {
    if (this.component.surface && this.component.anchor) {
      this.component.surface.setAnchorElement(this.component.anchor);
      this.component.surface.setAnchorMargin({ bottom: 0 });
    }
  }
}

export {
  OdsSelectController,
};
