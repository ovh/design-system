import { type OdsSwitchItem } from '../components/ods-switch-item/ods-switch-item';
import { type ODS_SWITCH_SIZE } from '../constant/switch-size';

function isSwitchItem(item: Element): item is OdsSwitchItem & Element {
  return item.tagName.toLowerCase() === 'ods-switch-item';
}

async function resetOnItems(items: Element[]): Promise<void> {
  await Promise.all(
    items
      .filter(isSwitchItem)
      .map(async(item) => {
        const radio = await item.getRadio();
        return radio?.reset();
      }),
  );
}

async function clearOnItems(items: Element[]): Promise<void> {
  await Promise.all(
    items
      .filter(isSwitchItem)
      .map(async(item) => {
        const radio = await item.getRadio();
        return radio?.clear();
      }),
  );
}

function propagateIsDisabled(value: boolean, items: Element[]): void {
  items
    .filter(isSwitchItem)
    .forEach((item) => {
      if (value) {
        item.setAttribute('is-disabled', '');
      } else {
        item.removeAttribute('is-disabled');
      }
    });
}

function propagateSize(value: ODS_SWITCH_SIZE, items: Element[]): void {
  items
    .filter(isSwitchItem)
    .forEach((item) => {
      item.setAttribute('size', value);
    });
}

export {
  clearOnItems,
  propagateIsDisabled,
  propagateSize,
  resetOnItems,
};
