import { type OdsComboboxItem } from '../components/ods-combobox-item/ods-combobox-item';
import { type OdsComboboxItemSelectedEventDetail } from '../interfaces/events';

type OdsComboboxSelection = Omit<OdsComboboxItemSelectedEventDetail, 'id'>;

const CREATE_NEW_ID = 'ods-internal-create-new-id';
const VALUE_DEFAULT_VALUE = null;

function getInitialValue(value: string | string [] | null, defaultValue?: string | string []): string | string [] | null {
  if (defaultValue !== undefined && value === VALUE_DEFAULT_VALUE) {
    return defaultValue;
  }

  return value;
}

function getSystemRequiredValidationMessage(): string {
  const fakeInput = document.createElement('input');
  fakeInput.setAttribute('required', 'true');
  return fakeInput.validationMessage;
}

function inlineSelection(values: OdsComboboxSelection[]): string {
  return values.map((v) => v.value).join(',');
}

function inlineValue(value: string | string[] | null): string {
  if (Array.isArray(value)) {
    return value.join(',');
  }

  return value || '';
}

function isANewItem(value?: string, items: (HTMLElement & OdsComboboxItem)[] = [], selection: OdsComboboxSelection[] = []): boolean {
  if (!value) {
    return false;
  }

  return items.every((item) => {
    return (item.searchLabel || item.textContent || '').trim() !== value?.trim();
  }) && selection.every((item) => {
    return item.text.trim() !== value?.trim();
  });
}

function splitValue(value: string[] | string | null): string[] {
  if (Array.isArray(value)) {
    return value;
  }

  return value ? value.split(',') : [];
}

function updateInternals(internals: ElementInternals, value: string, isRequired: boolean): void {
  internals.setFormValue(value ?? '');

  if (!value && isRequired) {
    internals.setValidity({ valueMissing: true }, getSystemRequiredValidationMessage());
  } else {
    internals.setValidity({});
  }
}

function updateItemsFocus(items: (HTMLElement & OdsComboboxItem)[], currentIndex: number, direction: 'down' | 'reset' | 'up'): number {
  if (direction === 'reset') {
    items.forEach((item) => item.isFocused = false);
    return -1;
  }

  let newIndex = currentIndex;

  if (currentIndex >= 0) {
    items[currentIndex].isFocused = false;
  }

  if (direction === 'down') {
    const nextVisibleIndex = items.findIndex((item, idx) => {
      return item.isVisible && (!item.isSelected || item.id === CREATE_NEW_ID) && idx > currentIndex;
    });

    if (nextVisibleIndex > currentIndex) {
      newIndex = nextVisibleIndex;
    }
  } else {
    const previousVisibleIndex = items.findLastIndex((item, idx) => {
      return item.isVisible && (!item.isSelected || item.id === CREATE_NEW_ID) && idx < currentIndex;
    });

    if (previousVisibleIndex >= 0 && previousVisibleIndex < currentIndex) {
      newIndex = previousVisibleIndex;
    }
  }
  if (newIndex >= 0) {
    items[ newIndex ].isFocused = true;
  }

  return newIndex;
}

export {
  type OdsComboboxSelection,
  getInitialValue,
  inlineSelection,
  inlineValue,
  isANewItem,
  splitValue,
  updateInternals,
  updateItemsFocus,
  CREATE_NEW_ID,
  VALUE_DEFAULT_VALUE,
};
