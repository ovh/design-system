import { type OdsSwitchItem } from '../components/ods-switch-item/ods-switch-item';

const defaultValidityState = {
  badInput: false,
  customError: false,
  patternMismatch: false,
  rangeOverflow: false,
  rangeUnderflow: false,
  stepMismatch: false,
  tooLong: false,
  tooShort: false,
  typeMismatch: false,
  valid: true,
  valueMissing: false,
};

async function clearItems(items: Element[]): Promise<void> {
  await Promise.all(
    getSwitchItem(items).map((item) => item.clear()),
  );
}

function focusFirstSwitchItem(items: Element[]): void {
  const switchItems = getSwitchItem(items);

  if (switchItems.length) {
    switchItems[0].focusItem();
  }
}

function getInitialValueState(items: Element[], isRequired: boolean): { validity: ValidityState, value: string | null } {
  const checkedItem = getSwitchItem(items).find((item) => item.hasAttribute('is-checked'));

  return {
    validity: (isRequired && !checkedItem) ? {
      ...defaultValidityState,
      valid: false,
      valueMissing: true,
    } : defaultValidityState,
    value: checkedItem ? checkedItem.value : null,
  };
}

function getSwitchItem(items: Element[]): (OdsSwitchItem & Element)[] {
  return items.filter(isSwitchItem);
}

async function getValidationMessageFromChildren(items: Element[]): Promise<string> {
  const messages = await Promise.all(getSwitchItem(items).map((item) => item.getValidationMessage()));

  return messages.find((message) => message) || '';
}

async function getValidityStateFromChildren(items: Element[]): Promise<ValidityState> {
  const states = await Promise.all(getSwitchItem(items).map((item) => item.getValidity()));
  const invalidState = states.find((state) => state && !state.valid);

  if (invalidState) {
    return invalidState;
  }

  return defaultValidityState;
}

async function getWillValidateFromChildren(items: Element[]): Promise<boolean> {
  const willValidates = await Promise.all(getSwitchItem(items).map((item) => item.willValidate()));

  return willValidates.some((willValidate) => willValidate);
}

function isSwitchItem(item: Element): item is OdsSwitchItem & Element {
  return item.tagName.toLowerCase() === 'ods-switch-item';
}

function propagateInputId(name: string, items: Element[]): void {
  getSwitchItem(items).forEach((item, index) => {
    item.setAttribute('input-id', `${name}-${index}`);
  });
}

function propagateIsDisabled(value: boolean, items: Element[]): void {
  getSwitchItem(items).forEach((item) => {
    if (value) {
      item.setAttribute('is-disabled', '');
    } else {
      item.removeAttribute('is-disabled');
    }
  });
}

function propagateIsRequired(value: boolean, items: Element[]): void {
  getSwitchItem(items).forEach((item) => {
    if (value) {
      item.setAttribute('is-required', '');
    } else {
      item.removeAttribute('is-required');
    }
  });
}

function propagateName(name: string, items: Element[]): void {
  getSwitchItem(items).forEach((item) => {
    item.setAttribute('name', name);
  });
}

async function reportValidityFromOneChild(items: Element[]): Promise<boolean | undefined> {
  // reportValidity method does natively trigger an event, but we don't want to send an event for each switch-item
  // so we check if one is invalid and call this one only, otherwise we call the first one
  const switchItems = getSwitchItem(items);

  if (switchItems.length) {
    for (const item of switchItems) {
      const validityState = await item.getValidity(); // eslint-disable-line no-await-in-loop
      if (validityState && !validityState.valid) {
        return item.reportValidity();
      }
    }

    return switchItems[0].reportValidity();
  }

  return undefined;
}

async function resetItems(items: Element[]): Promise<string | null> {
  const resetResults = await Promise.all(
    getSwitchItem(items).map((item) => item.reset()),
  );

  return resetResults.find((result) => result !== null) ?? null;
}

export {
  clearItems,
  focusFirstSwitchItem,
  getInitialValueState,
  getValidationMessageFromChildren,
  getValidityStateFromChildren,
  getWillValidateFromChildren,
  propagateInputId,
  propagateIsDisabled,
  propagateIsRequired,
  propagateName,
  reportValidityFromOneChild,
  resetItems,
};
