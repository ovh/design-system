import { OdsSwitch } from './ods-switch';
import { OdsComponentController } from '../ods-component-controller';
import { OdsSwitchItem } from '../public-api';

type HtmlSwitchItem = OdsSwitchItem & HTMLElement;
/**
 * common controller logic for cmpnt component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsSwitchController extends OdsComponentController<OdsSwitch> {

  private readonly SWITCH_ITEM_TAG = 'osds-switch-item';

  constructor(component: OdsSwitch) {
    super(component);
  }

  changeCheckedSwitchItem(value: string): { current: HtmlSwitchItem, old: HtmlSwitchItem } {
    const switchItems = this.getSwitchItems();
    const index = switchItems.findIndex(switchItem => switchItem.getAttribute('checked') !== null);
    const selectedSwitchItem = switchItems[index];
    switchItems[index]?.removeAttribute('checked');
    const newIndex = switchItems.findIndex(switchItem => switchItem.value === value);
    const newCheckedSwitchItem = switchItems[newIndex];
    newCheckedSwitchItem?.setAttribute('checked', '');

    if (index > newIndex) {
      selectedSwitchItem?.classList.add('fadeout-from-left');
      newCheckedSwitchItem?.classList.add('fadein-from-right');
    } else {
      selectedSwitchItem?.classList.add('fadeout-from-right');
      newCheckedSwitchItem?.classList.add('fadein-from-left');
    }
    return { current: newCheckedSwitchItem, old: selectedSwitchItem };
  }

  findSelectedSwitchItem(): HtmlSwitchItem | undefined {
    return this.getSwitchItems().find(switchItem => switchItem.checked);
  }

  getActiveSwitchItemIndex(switchItems: HtmlSwitchItem[]): number | undefined {
    const activeElement = document.activeElement;
    if (activeElement?.localName !== this.SWITCH_ITEM_TAG) {
      return undefined;
    }
    return switchItems.findIndex(switchItem => switchItem.id === activeElement?.id);
  }

  findPreviousSwitchItem(): HtmlSwitchItem | undefined {
    const switchItems = this.getSwitchItems();
    const currentIndex = this.getActiveSwitchItemIndex(switchItems);
    if (currentIndex === undefined || (currentIndex - 1) < 0) {
      return undefined;
    }
    return switchItems[currentIndex - 1];
  }

  findNextSwitchItem(): HtmlSwitchItem | undefined {
    const switchItems = this.getSwitchItems();
    const currentIndex = this.getActiveSwitchItemIndex(switchItems);
    if (currentIndex === undefined || (currentIndex + 1) >= switchItems.length) {
      return undefined;
    }
    return switchItems[currentIndex + 1];
  }

  getSwitchItems(): HtmlSwitchItem[] {
    return Array.from(this.component.el.querySelectorAll<HtmlSwitchItem>(this.SWITCH_ITEM_TAG));
  }
}
 