import type { OdsSelectOptionClickEventDetail, OsdsSelectOption } from '../../../../../select/src/components/osds-select-option/public-api';
import type { OsdsAutocomplete } from '../osds-autocomplete';
import type { OdsValidityState } from '@ovhcloud/ods-common-core';

class OdsAutocompleteController {
  private component: OsdsAutocomplete;
  public selectOptions: (HTMLElement & OsdsSelectOption)[] = [];

  constructor(component: OsdsAutocomplete) {
    this.component = component;
  }

  beforeInit(): void {
    if (this.component.value === '' && this.component.defaultValue !== undefined) {
      this.component.value = this.component.defaultValue;
    }
    this.component.internals.setFormValue(this.component.value?.toString() ?? '');
    this.component.openedChanged(this.component.opened);
    this.component.selectedLabelSlot = this.component.el.querySelector('[slot="selectedLabel"]');
  }

  changeValue(value: string): void {
    this.component.value = value;
    this.component.internals.setFormValue(value?.toString() ?? '');
  }

  getValidity(): OdsValidityState {
    const requiredError = this.hasRequiredError();
    return {
      customError: false,
      forbiddenValue: false,
      invalid: requiredError,
      stepMismatch: false,
      valid: !requiredError,
      valueMissing: requiredError,
    };
  }

  syncReferences(): void {
    if (this.component.surface && this.component.anchor) {
      this.component.surface.setAnchorElement(this.component.anchor);
      this.component.surface.setAnchorMargin({ bottom: 0, left: 0, right: 0, top: 0 });
    }
  }

  closeSurface(): void {
    if (this.component.surface?.opened) {
      this.component.surface.close();
      this.component.opened = false;
    }
  }

  openSurface(): void {
    if (this.component.surface) {
      this.component.surface.open();
      this.component.opened = true;
    }
  }

  hasRequiredError(): boolean {
    if (this.component.required) {
      return !this.component.value;
    }
    return false;
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
        return focusSelectOption(this.selectOptions.length - 1);
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

  private handlerKeyEnter(selectOption?: OsdsSelectOption): void {
    if (!this.component.opened || !selectOption) {
      return this.component.handleAutocompleteClick();
    }
    this.component.handleValueChange(new CustomEvent<OdsSelectOptionClickEventDetail>('odsSelectOptionClick', {
      detail: {
        value: selectOption.value,
      },
    }));
    this.component.setFocus();
  }

  onValueChange(value: string, oldValue?: string): void {
    this.component.internals.setFormValue(value?.toString() ?? '');
    this.component.emitChange(value, oldValue);
  }
}

export {
  OdsAutocompleteController,
};
