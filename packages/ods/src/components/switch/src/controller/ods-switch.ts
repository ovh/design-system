import { type OdsSwitchItem } from '../components/ods-switch-item/ods-switch-item';

function isSwitchItem(item: Element): item is OdsSwitchItem & Element {
  return item.tagName.toLowerCase() === 'ods-switch-item';
}

function getSwitchItem(items: Element[]): (OdsSwitchItem & Element)[] {
  return items.filter(isSwitchItem);
}

async function resetItems(items: Element[]): Promise<void> {
  await Promise.all(
    getSwitchItem(items).map((item) => item.reset()),
  );
}

async function clearItems(items: Element[]): Promise<void> {
  await Promise.all(
    getSwitchItem(items).map((item) => item.clear()),
  );
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

function propagateName(name: string, items: Element[]): void {
  getSwitchItem(items).forEach((item) => {
    item.setAttribute('name', name);
  });
}

function propagateInputId(name: string, items: Element[]): void {
  getSwitchItem(items).forEach((item, index) => {
    item.setAttribute('input-id', `${name}-${index}`);
  });
}

export {
  clearItems,
  propagateIsDisabled,
  propagateInputId,
  propagateName,
  resetItems,
};
